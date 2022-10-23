import { LONG_TEXTS } from '../../../constants'
import dropDown from '../../../assets/icon/drop-down.svg'

export const content = `
<div>
    <app-text class="action-slogan">${LONG_TEXTS.SLOGAN}</app-text>
    <app-text class="action-landing-msg">${LONG_TEXTS.LANDING_MSG}</app-text>
    <img
        id="scroll-to-controls"
        src="${dropDown}"
        alt="drop-down"
        aria-label="Go to the Controls"
        role="button"
        class="action-down-arrow-btn"
    />
</div>
`
