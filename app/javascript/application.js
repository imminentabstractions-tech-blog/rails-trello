// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import Alpine from 'alpinejs'
import { FetchRequest } from '@rails/request.js'

window.Alpine = Alpine

import Tether from "tether"

Alpine.data('TrelloListManager', () => ({
    lookup: {},

    registerTrelloList(list) {
        this.lookup[list.id] = list
    },
    onDragStart(id, event) {
        console.log(`DRAGGING ${id}`)
        event.dataTransfer.dropEffect = "move";
        event.dataTransfer.setData('application/json', JSON.stringify({type: 'list', id: id}))
        this.lookup[id].isBeingDragged = true
    },
    onDragOver(event, id) {
        console.log(`DRAGGING ${event.dataTransfer.getData('application/json')} OVER ${id}`)
    },
    onDragSuccessful(dropListId, event) {
        const data = JSON.parse(event.dataTransfer.getData('application/json'))
        if (data?.type !== 'list') {
            return
        }
        const {type, id} = data
        const idOrder = this.lookup[id].order
        const dropListOrder = this.lookup[dropListId].order

        this.lookup[id].order = dropListOrder
        this.lookup[dropListId].order = idOrder
    },
    onDragCancelled() {
        Object.keys(this.lookup).forEach(id => {
            this.lookup[id].isBeingDragged = false
        })
    }
}))

Alpine.data('TrelloList', (id, order) => ({
    id,
    isBeingDragged: false,
    order,
}))

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


document.querySelector('#fun').addEventListener('click', () => {
    new FetchRequest('get', `/board/${1}/showhelper`).perform()
})
