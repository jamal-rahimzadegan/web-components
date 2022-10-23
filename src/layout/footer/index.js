import { content } from "./content";
import { styles } from "./styles";
import ComponentFactory from "../../utils/element-factory";

class AppFooter extends ComponentFactory {
  constructor() {
    super({
      name: "footer",
      tag: "footer",
      styles,
      content,
    });
  }
}

window.customElements.define("app-footer", AppFooter);
