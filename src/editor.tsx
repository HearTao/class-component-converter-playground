import * as tsx from "vue-tsx-support";
import { Component, Prop } from "vue-property-decorator";
import MonacoEditor from "vue-monaco";

@Component
export default class Editor extends tsx.Component<{}> {
  render() {
    return <MonacoEditor {...this.$attrs} {...this.$listeners} />;
  }
}
