import { content } from './content'
import { styles } from './styles'
import ComponentFactory from '../../utils/element-factory'

export default class AppHeader extends ComponentFactory {
    constructor() {
        super({
            name: 'header',
            tag: 'header',
            styles,
            content,
        })
    }
}

window.customElements.define('app-header', AppHeader)
