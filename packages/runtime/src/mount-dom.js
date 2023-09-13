import { DOM_TYPES } from "./h";
import { setAttributes } from "./attributes";
import { addEventListeners } from "./events";

export function mountDOM(vdom, parentEl) {
  switch (vdom.type) {
    case DOM_TYPES.TEXT: {
      createTextNode(vdom, parentEl);
      break;
    }

    case DOM_TYPES.ELEMENT: {
      createElementNode(vdom, parentEl);
      break;
    }

    case DOM_TYPES.FRAGMENT: {
      createFragmentNodes(vdom, parentEl);
      break;
    }

    default: {
      throw new Error(`Unsupported type: ${vdom.type}`);
    }
  }
}

// TODO:

function createTextNode(vdom, parentEl) {
  const { value } = vdom;

  const textNode = document.createTextNode(value);
  vdom.el = textNode;

  parentEl.append(textNode);
}

function createElementNode(vdom, parentEl) {
  const { tag, props, children } = vdom;

  const el = document.createElement(tag);
  addProps(el, props, vdom);
  vdom.el = el;

  children.forEach((child) => mountDOM(child, el));
  parentEl.append(el);
}

function addProps(el, props, vdom) {
  const { on: events, ...attrs } = props;

  if (events) {
    vdom.listeners = addEventListeners(events, el);
  }

  setAttributes(el, attrs);
}

function createFragmentNodes(vdom, parentEl) {
  const { children } = vdom;
  vdom.el = parentEl;

  children.forEach((child) => mountDOM(child, parentEl));
}
