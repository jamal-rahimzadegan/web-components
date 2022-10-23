import { content } from "./content";
import { styles } from "./styles";
import ComponentFactory from "../../../utils/element-factory";

export default class Hero extends ComponentFactory {
  constructor() {
    super({
      name: "hero",
      tag: "div",
      styles,
      content,
    });
  }
}

window.customElements.define("app-hero", Hero);
