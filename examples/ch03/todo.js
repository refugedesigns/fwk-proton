import { h, hFragment } from "../../packages/runtime/src/h";

// State of the app
const todos = ["Walk the dog", "Buy milk", "Go to the gym"];

function App(state) {
  return hFragment([
    h("h1", {}, ["My TODOs"]),
    CreateTodo(state),
    TodoList(state),
  ]);
}

function TodoList(state) {
  return h("ul", { id: "todos-list" }, [
    ...state.todos.map((todo, i) => TodoItem(todo, i, state.editingIdxs)),
  ]);
}

function TodoItem(todo, indexInList, editingIdxs) {
  const isEditing = editingIdxs.has(indexInList);
  return h("li", {}, [
    isEditing ? TodoInEditMode(todo, indexInList) : TodoInReadMode(todo, indexInList),
  ]);
}
