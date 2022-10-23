import { styles } from './styles'
import ComponentFactory from '../../../utils/element-factory'

class Btn extends ComponentFactory {
    constructor() {
        super({
            name: 'btn',
            tag: 'button',
            styles,
            content: "<slot name=''><button></button></slot>",
        })
    }
}

window.customElements.define('app-btn', Btn)
