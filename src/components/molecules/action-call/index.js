import { content } from "./content";
import { styles } from "./styles";
import ComponentFactory from "../../../utils/element-factory";

// It's a call to action section
export default class ActionCall extends ComponentFactory {
  constructor() {
    super({
      name: "callToAction",
      tag: "div",
      styles,
      content,
    });

    this.scrollBtn = this.shadowRoot.getElementById("scroll-to-controls");
    this.scrollBtn.onclick = this.scrollToElement;
  }

  scrollToElement() {
    document
      .getElementById("controls-box")
      .scrollIntoView({ behavior: "smooth" });
  }
}

window.customElements.define("action-call", ActionCall);
