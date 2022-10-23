export default class ComponentFactory extends HTMLElement {
    constructor(props) {
        super()

        const { name, tag, content, styles = '' } = props

        this.template = document.createElement('template')
        this.template.innerHTML = styles + content // We need to sanitize for preventing XXS attacks
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))

        this[name] = this.shadowRoot.querySelector(tag)
    }
}
