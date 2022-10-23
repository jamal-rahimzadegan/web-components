import ComponentFactory from '../../../../../utils/element-factory'
import { styles } from './styles'
import { generateContent } from './helpers/generate-content'

export default class ControlCard extends ComponentFactory {
    constructor(props) {
        super({
            name: props.name,
            tag: 'div',
            styles,
            content: generateContent(props.content),
        })
    }
}

window.customElements.define('control-card', ControlCard)
