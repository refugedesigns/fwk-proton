import { h, hFragment } from "./h";

hFragment([
  h("h1", { class: "title" }, ["My Counter"]),
  h("div", { class: "container" }, [
    h("button", { on: { click: decrement } }, ["decrement"]),
    h("span", {}, ["0"]),
    h("button", { on: { click: increment } }, ["increment"]),
  ]),
]);

function lipsum(num) {
  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat`;
  const allTexts = [];
  for (let i = 0; i < num; i++) {
    allTexts(h("p", {}, lorem));
  }
  return hFragment(allTexts);
}
