// For cleaner class I've moved this code that are related (accessing elements) to here.

export function getElements(self) {
    // We may want to use clojure for better performance?
    const getByTag = (tag, index = 0) => {
        return self.controls.getElementsByTagName(tag)?.[index]
    }

    self.car = document.querySelector('app-car')

    const [speedUnit, tempUnit] =
        self.controls.getElementsByTagName('unit-card')
    const increaseSpeedBtn = speedUnit.shadowRoot.getElementById('up-arrow')
    const decreaseSpeedBtn = speedUnit.shadowRoot.getElementById('down-arrow')
    const increaseTempBtn = tempUnit.shadowRoot.getElementById('up-arrow')
    const decreaseTempBtn = tempUnit.shadowRoot.getElementById('down-arrow')
    increaseSpeedBtn.onclick = () => self.changeSpeed(speedUnit, 'increase')
    decreaseSpeedBtn.onclick = () => self.changeSpeed(speedUnit, 'decrease')
    increaseTempBtn.onclick = () => self.changeTemperature(tempUnit, 'increase')
    decreaseTempBtn.onclick = () => self.changeTemperature(tempUnit, 'decrease')

    self.heatBtn = getByTag('ventilation-button')
    self.acBtn = getByTag('ventilation-button', 1)
    self.heatBtn.onclick = () => self.toggleVentilation('heatBtn')
    self.acBtn.onclick = () => self.toggleVentilation('acBtn')

    self.wheel19 = getByTag('wheel-card')
    self.wheel21 = getByTag('wheel-card', 1)
    self.wheel19.onclick = () => self.toggleWheelSize(19)
    self.wheel21.onclick = () => self.toggleWheelSize(21)

    self.normal100D = getByTag('range-meter')
    self.p100D = getByTag('range-meter', 1)
}
