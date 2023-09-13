import { h, hFragment } from "./h";

hFragment([
  h("h1", { class: "title" }, ["My Counter"]),
  h("div", { class: "container" }, [
    h("button", { on: { click: decrement } }, ["decrement"]),
    h("span", {}, ["0"]),
    h("button", { on: { click: increment } }, ["increment"]),
  ]),
]);

