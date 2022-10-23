// Note: We can define an index file to have cleaner imports.
// We also Can use path alias for cleaner imports @components/module instead of ../../../etc
import '../../layout/header'
import('../../layout/footer')
import('../../components/atoms/text')
import('../../components/atoms/button')
import('../../components/molecules/hero')
import('../../components/organisms/car')
import('../../components/organisms/controls')
import('../../components/molecules/action-call')
import '../../components/organisms/controls/components/unit-card'
import '../../components/organisms/controls/components/wheel-card'
import('../../components/organisms/controls/components/ventilation-button')
import('../../components/organisms/controls/components/range-meter')
import { LONG_TEXTS } from '../../constants'
import { styles } from './styles'

export const content = `
${styles}
<div class="home-container">
  <app-header></app-header>
  <app-hero></app-hero>
  <action-call></action-call>
  <app-text class="home-car-title">Range per Charge</app-text>
  <app-car></app-car>
  <app-controls id="controls-box"></app-controls>
  <app-text class="home-range-txt">${LONG_TEXTS.REAL_RANGE_INFO}</app-text>
  <app-footer></app-footer>
</div>
  `
