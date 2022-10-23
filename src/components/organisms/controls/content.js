import logo100d from '../../../assets/images/100d@2x.png'
import logoP100D from '../../../assets/images/p100d@2x.png'

export const content = `
<div >
<div class="controls-speed-meter-box">
  <range-meter speed="350" logo="${logo100d}"></range-meter>
  <range-meter speed="350" logo="${logoP100D}"></range-meter>
</div>
<div class="controls-cards-container">
  <unit-card value="70" type="speed"></unit-card>
  <unit-card value="-10" type="temperature"></unit-card>
<div>
  <ventilation-button visible="true" status="off" type="heat" ></ventilation-button>
  <ventilation-button visible="false" status="off" type="ac" ></ventilation-button>
</div>
  <wheel-card selected="true"   title="Wheels" wheelSize="19"></wheel-card>
  <wheel-card  selected="false" wheelSize="21"></wheel-card>
</div>
</div>
`
