import ControlCard from '../control-card'
import { content } from './content'

export default class UnitCard extends ControlCard {
    constructor() {
        super({
            name: 'unitCard',
            content,
        })

        this.limit = {
            temperature: [-10, 40],
            speed: [70, 140],
        }

        this.type = this.getAttribute('type')
        this.cardTitle = this.getElement('control-card-title')
        this.unitNumber = this.getElement('unit-card-value')
        this.unitType = this.getElement('unit-card-type')
        this.arrows = this.getElement('unit-card-button', -1)

        this.setInitialInfo()
    }

    static get observedAttributes() {
        return ['value']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.handleArrow(+newValue)
        this.updateText(newValue)
    }

    setInitialInfo() {
        this.cardTitle.innerText = this.getAttribute('type')
        this.unitNumber.innerText = this.getAttribute('value')
        this.unitType.innerText = this.type === 'speed' ? 'KMH' : '°'
    }

    updateText(newValue) {
        this.unitNumber.innerText = newValue
    }

    handleArrow(newValue) {
        const [upArrow, downArrow] = this.arrows
        const isReachedLowLimit = newValue === this.limit[this.type][0]
        const isReachedHighLimit = newValue === this.limit[this.type][1]

        upArrow.style.opacity = isReachedHighLimit ? '.2' : '1'
        downArrow.style.opacity = isReachedLowLimit ? '.2' : '1'
    }

    getElement(className, index = 0) {
        const el = this.unitCard.getElementsByClassName(className)
        return index === -1 ? el : el?.[index]
    }
}

window.customElements.define('unit-card', UnitCard)
