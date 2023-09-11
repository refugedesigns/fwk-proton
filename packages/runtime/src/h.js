import { withoutNulls } from "./utils/arrays";

export const DOM_TYPES = {
  TEXT: "text",
  ELEMENT: "element",
  FRAGMENT: "fragment",
};

export function h(tag, props = {}, children = []) {
  return {
    type: DOM_TYPES.ELEMENT,
    tag,
    props,
    children,
  };
}

function mapTextNodes(children) {
  return children.map((child) => {
    if (typeof child === "string") {
      return hString(child);
    }
    return child;
  });
}

export function hString(string) {
  return {
    type: DOM_TYPES.TEXT,
    value: string,
  };
}

export function hFragment(vNodes) {
  return {
    type: DOM_TYPES.FRAGMENT,
    children: mapTextNodes(withoutNulls(vNodes)),
  };
}

export function lipsum(num) {
  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat`;

  return hFragment(Array(num).fill(h("p", {}, [lorem])));
}

export function MessageComponent(props) {
  return h("div", { class: `message message--${props.level}` }, [
    h("p", {},[ props.message]),
  ]);
}