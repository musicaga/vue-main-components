import { Component, Mixins, Watch } from "vue-property-decorator";
import BaseFieldComponent from "../BaseField.mixin";
import Template from "./Checkbox.template.vue";

@Component({
  mixins: [Template],
})
export default class CheckboxComponent extends Mixins(BaseFieldComponent) {
  @Watch("model")
  public changeValue() {
    this.value = this.getValue();
  }

  public preChangeModel() {
    if (!this.value) {
      this.value = null;
    }
    this.changeModel(this.value);
  }
}
