import { content } from './content'
import { styles } from './styles'
import ComponentFactory from '../../../utils/element-factory'
import { SYS } from '../../../constants'

export default class Car extends ComponentFactory {
    constructor() {
        super({
            name: 'car',
            tag: 'div',
            styles,
            content,
        })

        this.rearWheel = this.car.getElementsByTagName('img')[0]
        this.frontWheel = this.car.getElementsByTagName('img')[1]
    }

    static get observedAttributes() {
        return ['wheel-size']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.changeWheelSize(newValue)
    }

    changeWheelSize(newValue) {
        // Better to make this sizes more dynamic, for now it's fine
        const size = newValue === '19' ? '1' : '1.04'
        this.rearWheel.style[SYS.IS_IE ? 'zoom' : 'scale'] = size
        this.frontWheel.style[SYS.IS_IE ? 'zoom' : 'scale'] = size
    }
}

window.customElements.define('app-car', Car)
