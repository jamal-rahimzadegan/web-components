import { styles } from "./styles";
import ComponentFactory from "../../../utils/element-factory";
import { SYS } from "../../../constants";

export default class Text extends ComponentFactory {
  constructor() {
    super({
      name: "text",
      tag: "p",
      styles,
      content: SYS.IS_IE ? "<p></p>" : "<slot name=''><p></p></slot>",
    });
  }

  connectedCallback() {
    this.text.innerText = this.textContent;
  }
}

window.customElements.define("app-text", Text);
