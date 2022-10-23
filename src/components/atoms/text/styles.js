import { SYS } from '../../../constants'

export const styles = `
<style>
:host {
    display: block;
    ${
        SYS.IS_IE &&
        `color: inherit;
      width: inherit;
      text-align: inherit;
      background: inherit;
      margin: inherit;`
    }
}
</style>
`
