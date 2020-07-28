import * as React from "react";
import { render } from "react-dom";
import { AppHandler } from "./AppHandler";

const rootElement = document.getElementById("root");

// This links up the render of the action
window.dispatchToReact = async function(action) {
  return new Promise((resolve, reject) => {
    render(
      <AppHandler action={action} resolve={resolve} reject={reject} />,
      rootElement
    );
  });
};

async function main() {
  const response = await window.dispatchToReact({
    type: "OPEN_DIALOG",
    payload: { anything: true }
  });
  console.log({ response });
  window.dispatchToReact({
    type: "ANOTHER_THING",
    payload: { anything: false }
  });
}

main();

// Some other external event handler can dispatch
document.getElementById("testbutton")?.addEventListener("click", async () => {
  const resp = await dispatchToReact({
    type: "HELLO_FROM_THE_BUTTON",
    payload: { fromTheButton: true }
  });
  console.log(resp);
});
