// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import Alpine from 'alpinejs'

window.Alpine = Alpine

import Tether from "tether"

Alpine.data('boards', () => ({

    initTether() {
        this.tether = new Tether({
            element: this.$refs.modal,
            target: this.$refs.createBoardButton,
            targetAttachment: 'top right',
            attachment: 'top left',
            targetOffset: '0px 10px',
        })
        this.$refs.closeModal.addEventListener('click', () => {
            this.closeModal()
        })
    },

    showModal() {
        if (!this.tether) {
            this.initTether()
        }
        this.$refs.modal.removeAttribute("hidden")

    },

    closeModal() {
        this.$refs.modal.setAttribute('hidden', '')
    }
}))

Alpine.start()
