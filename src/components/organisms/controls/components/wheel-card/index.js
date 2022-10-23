import ControlCard from '../control-card'
import { content } from './content'

export default class WheelCard extends ControlCard {
    constructor() {
        super({
            name: 'wheelCard',
            content,
        })

        this.card = this.getElement('control-card')
        this.wheelSize = this.getElement('wheel-size-text')
        this.cardTitle = this.getElement('control-card-title')

        this.setInitialTexts()
    }

    static get observedAttributes() {
        return ['selected']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.updateBorderColor(newValue === 'true')
    }

    updateBorderColor(isSelected) {
        this.card.classList[isSelected ? 'add' : 'remove']('wheel-selected')
    }

    setInitialTexts() {
        this.cardTitle.innerText = this.getAttribute('title') || ' '
        this.wheelSize.innerText = this.getAttribute('wheelSize') + '″'
    }

    getElement(className) {
        return this.wheelCard.getElementsByClassName(className)?.[0]
    }
}

window.customElements.define('wheel-card', WheelCard)
