export const getElements = (self) => {
    self.car = document.querySelector('app-car')

    const [speedUnit, tempUnit] =
        self.controls.getElementsByTagName('unit-card')

    const increaseSpeedBtn = speedUnit.shadowRoot.getElementById('up-arrow')
    const decreaseSpeedBtn = speedUnit.shadowRoot.getElementById('down-arrow')
    increaseSpeedBtn.onclick = () => self.changeSpeed(speedUnit, 'increase')
    decreaseSpeedBtn.onclick = () => self.changeSpeed(speedUnit, 'decrease')

    const increaseTempBtn = tempUnit.shadowRoot.getElementById('up-arrow')
    const decreaseTempBtn = tempUnit.shadowRoot.getElementById('down-arrow')
    increaseTempBtn.onclick = () => self.changeTemperature(tempUnit, 'increase')
    decreaseTempBtn.onclick = () => self.changeTemperature(tempUnit, 'decrease')

    self.heatBtn = self.getByTag('ventilation-button')
    self.acBtn = self.getByTag('ventilation-button', 1)
    self.heatBtn.onclick = () => self.toggleVentilation('heatBtn')
    self.acBtn.onclick = () => self.toggleVentilation('acBtn')

    self.wheel19 = self.getByTag('wheel-card')
    self.wheel21 = self.getByTag('wheel-card', 1)
    self.wheel19.onclick = () => self.toggleWheelSize(19)
    self.wheel21.onclick = () => self.toggleWheelSize(21)

    self.normal100D = self.getByTag('range-meter')
    self.p100D = self.getByTag('range-meter', 1)
}
