import downArrow from '../../../../../assets/icon/icon-thin-chevron-down.svg'
import upArrow from '../../../../../assets/icon/icon-thin-chevron-up.svg'
import { styles } from './styles'

export const content = `
${styles}
<div class="unit-card-text-container">
    <app-text class="unit-card-value"></app-text>
    <app-text class="unit-card-type"></app-text>
</div>
<div class="unit-card-button-container">
    <img
        role="button"
        aria-label="increase value"
        src="${upArrow}"
        alt="up"
        id="up-arrow"
        class="unit-card-button"
    />
    <hr class="unit-card-button-divider" />
    <img
        role="button"
        aria-label="decrease value"
        src="${downArrow}"
        alt="down"
        id="down-arrow"
        class="unit-card-button"
    />
</div>
`
