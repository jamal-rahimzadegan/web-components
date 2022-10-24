import { styles } from './styles'
import { content } from './content'
import ComponentFactory from '../../../utils/element-factory'
import tesla100D from '../../../data/mocks/metric-100D.json'
import teslaP100D from '../../../data/mocks/metric-P100D.json'
import { findMetricRange } from './helpers/find-metrics'
import { getElements } from './helpers/get-elements'

export default class Controls extends ComponentFactory {
    constructor() {
        super({
            name: 'controls',
            tag: 'div',
            styles,
            content,
        })

        this.metrics = {
            speed: 70,
            wheelSize: 19,
            temp: -10,
            heat: 'on',
            ac: 'off',
        }

        getElements(this)

        // To show the initial ranges
        this.filterRanges()
    }

    toggleVentilation(name) {
        const el = this[name]

        const type = el.getAttribute('type')
        const newValue = el.getAttribute('status') === 'on' ? 'off' : 'on'
        this.metrics[type] = newValue
        el.setAttribute('status', newValue)

        type === 'ac' && this.filterRanges()
    }

    changeSpeed(el, action) {
        const oldValue = +el.getAttribute('value')

        if (oldValue === 70 && action === 'decrease') return
        if (oldValue === 140 && action === 'increase') return

        const newValue = action === 'increase' ? oldValue + 10 : oldValue - 10
        el.setAttribute('value', newValue)

        this.metrics.speed = newValue

        this.filterRanges()
    }

    changeTemperature = (el, action) => {
        const oldValue = +el.getAttribute('value')

        if (oldValue === -10 && action === 'decrease') return
        if (oldValue === 40 && action === 'increase') return

        const newValue = action === 'increase' ? oldValue + 10 : oldValue - 10
        el.setAttribute('value', newValue)

        this.metrics.ac = newValue > 10 ? 'on' : 'off'
        this.metrics.heat = newValue > 10 ? 'off' : 'on'
        this.metrics.temp = newValue

        const isAcOn = this.metrics.ac === 'on'
        const isHeatOn = this.metrics.heat === 'on'

        this.handleVentilationBtnVisibility(this.acBtn, isAcOn)
        this.handleVentilationBtnVisibility(this.heatBtn, isHeatOn)

        this.filterRanges()
    }

    toggleWheelSize(size) {
        this.metrics.wheelSize = size
        const activeWheel = this?.['wheel' + size]
        const nonActiveWheel = size === 19 ? this.wheel21 : this.wheel19

        activeWheel.setAttribute('selected', true)
        nonActiveWheel.setAttribute('selected', false)
        this.car.setAttribute('wheel-size', size)

        this.filterRanges()
    }

    filterRanges() {
        const tesla100DValue = findMetricRange(tesla100D, this.metrics)
        const teslaP100DValue = findMetricRange(teslaP100D, this.metrics)
        this.updateRangeMeterValue(tesla100DValue, teslaP100DValue)
    }

    updateRangeMeterValue(normal100DValue, p100DValue) {
        this.normal100D.setAttribute('range', normal100DValue)
        this.p100D.setAttribute('range', p100DValue)
    }

    handleVentilationBtnVisibility(el, visible) {
        el.setAttribute('visible', visible)
    }
}

window.customElements.define('app-controls', Controls)
