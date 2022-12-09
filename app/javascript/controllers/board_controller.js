import { Controller } from "@hotwired/stimulus"
import Tether from "tether"


export default class extends Controller {
    static targets = ['menu', 'button', 'image']

    initialize() {
        this.element.querySelector('.close-modal').addEventListener('click', () => {
            this.hideModal()
        })

        this.menu = this.menuTarget

        this.tether = new Tether({
            element: this.menuTarget,
            target: this.buttonTarget,
            targetAttachment: 'middle right',
            attachment: 'middle left',
            targetOffset: '0px 10px'
        })
    }

    showModal() {
        this.menu.classList.remove('hidden')
    }

    hideModal() {
        this.menu.classList.add('hidden')
    }

    formValueChange(event) {
        console.log("CHANGED", event.target.name, event.target.value, this.imageTarget)
    }

}
