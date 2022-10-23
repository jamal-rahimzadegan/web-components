import ComponentFactory from '../../../../../utils/element-factory'
import { content } from './content'
import { styles } from './styles'

export default class BatteryMeter extends ComponentFactory {
    constructor() {
        super({
            name: 'rangeMeter',
            tag: 'div',
            styles,
            content,
        })

        this.logo = this.getElement('range-meter-logo')
        this.batteryText = this.getElement('range-meter-km-txt')
        this.logo.src = this.getAttribute('logo')
        this.batteryText.innerText = this.getAttribute('range')
    }

    static get observedAttributes() {
        return ['range']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.updateRangeValue(newValue)
    }

    updateRangeValue(newValue) {
        this.batteryText.innerText = newValue
    }

    getElement(className) {
        return this.rangeMeter.getElementsByClassName(className)[0]
    }
}

window.customElements.define('range-meter', BatteryMeter)
