import { SYS } from '../../../../../constants'

export const styles = `
.ventilation-button {
  box-sizing: border-box;
  height: 115px;
  width: 115px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: all 200ms;
  user-select: none;
  padding: 14px;
${
    SYS.IS_IE
        ? `border:3px solid #e3e8f0`
        : `border:3px solid var(--light-grey-stroke);
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;`
}
}

.ventilation-button:active {
  transform: translateY(5px);
  user-select: none;
}

.ventilation-button-title {
box-shadow:none;
  pointer-events: none;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  border:none;
}

.ventilation-button-icon {
${
    SYS.IS_IE &&
    `
  pointer-events: none;
  width: 90%;
  position: relative;
  top: 30%;
  transform: translateY(-40%);
  border: none;
`
}
}
`
