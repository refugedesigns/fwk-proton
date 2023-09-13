
export function addEventListener(eventName, handler, el) {
    el.addEventListener(eventName, handler);
    return handler;
}

export function addEventListeners(listeners = {}, el) {
    const addedListerners = {};

    Object.entries(listeners).forEach(([eventName, handler]) => {
        const listener = addEventListener(eventName, handler, el);

        addedListerners[eventName] = listener;
    })

    return addedListerners;
}

export function removeEventListeners(listeners = {}, el) {
    Object.entries(listeners).forEach(([eventName, handler]) => {
        el.removeEventListener(eventName, handler);
    })
}