import * as tsx from "vue-tsx-support";
import { Component } from "vue-property-decorator";
import { style } from "typestyle";

import Editor from "./editor";

const container = style({
  display: "flex",
  flexDirection: "column",
  height: "100vh"
});

const header = style({
  height: 60,
  backgroundColor: "#3eaf7c",
  color: "#fff",
  display: "flex"
});

const footer = style({
  height: 30,
  backgroundColor: "#ccc"
});

const title = style({
  fontWeight: 200,
  lineHeight: "30px",
  fontSize: 24,
  margin: 0
});

const bold = style({
  fontWeight: 600
});

const takingSpace = style({
  flex: 1
});

const item = style({
  lineHeight: "60px",
  height: 60,
  display: "inline-block",
  padding: "0 1em",
  cursor: "pointer",
  transition: "0.3s",
  $nest: {
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.1)"
    }
  }
});

@Component
export default class App extends tsx.Component<{}> {
  render() {
    return (
      <div class={container}>
        <div class={header}>
          <h1 class={title}>
            <span class={bold}>C</span>lass <span class={bold}>C</span>omponent{" "}
            <span class={bold}>C</span>onverter <br />
            Playground
          </h1>
          <div class={takingSpace}></div>
          <div>
            <a class={item}>Options</a>
            <a class={item}>Fork me on Github</a>
          </div>
        </div>

        <div class={takingSpace}>
          <Editor />
        </div>
        <div class={footer}></div>
      </div>
    );
  }
}
