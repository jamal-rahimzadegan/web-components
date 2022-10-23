import ComponentFactory from '../../../../../utils/element-factory'
import { getColor } from '../../../../../utils/get-color'
import { content } from './content'
import { styles } from './styles'
import acOff from '../../../../../assets/icon/icon-fan-gray.svg'
import acOn from '../../../../../assets/icon/icon-fan-white.svg'
import heatOff from '../../../../../assets/icon/icon-wave-gray.svg'
import heatOn from '../../../../../assets/icon/icon-wave-white.svg'
import { SYS } from '../../../../../constants'

export default class VentilationButton extends ComponentFactory {
    constructor() {
        super({
            name: 'btn',
            tag: 'div',
            content,
        })

        this.injectStyle()

        this.btnTitle = this.shadowRoot.querySelector('app-text')
        this.icon = this.shadowRoot.querySelector('img')
    }

    static get observedAttributes() {
        return ['status', 'visible']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const type = this.getAttribute('type')
        const status = this.getAttribute('status')
        const visible = this.getAttribute('visible') === 'true'

        this.updateUI(type, status, visible)
    }

    updateUI(type, status, visible) {
        // We may, could separate them?
        this.btn.style.display = visible ? '' : 'none'
        this.btnTitle.innerText = type + ' ' + status
        this.setIconAndColors(type, status.toString() === 'on')
    }

    setIconAndColors(type, isOn) {
        const bgColor = type === 'heat' ? 'red' : 'med-blue'
        this.btn.style.color = getColor(isOn ? 'white' : 'grey-stroke')
        this.btn.style.background = isOn ? getColor(bgColor) : 'transparent'

        let icon = ''
        if (type === 'ac') icon = isOn ? acOn : acOff
        if (type === 'heat') icon = isOn ? heatOn : heatOff
        this.icon.src = icon
    }

    injectStyle() {
        const style = document.createElement('style')
        style.textContent = styles
        this.btn.append(style)
    }
}

window.customElements.define('ventilation-button', VentilationButton)
