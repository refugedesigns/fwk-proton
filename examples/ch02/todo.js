// State of the app
const todos = ["Walk the dog", "Buy milk", "Go to the gym"];

// HTML element references
const addTodoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todos-list");

for (const todo of todos) {
  todoList.append(renderTodoInReadMode(todo));
}

addTodoInput.addEventListener("input", (e) => {
  e.preventDefault();
  addTodoButton.disabled = addTodoInput.value.length < 3;
});

addTodoInput.addEventListener("keydown", ({ key }) => {
  if (key === "Enter" && addTodoInput.value.length > 3) {
    addTodo();
  }
});

addTodoButton.addEventListener("click", addTodo);

function addTodo() {
  const newTodo = addTodoInput.value;

  todos.push(newTodo);
  const todo = renderTodoInReadMode(newTodo);
  todoList.append(todo);

  addTodoInput.value = "";
  addTodoButton.disabled = true;
}

function renderTodoInReadMode(todo) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = todo;

  span.addEventListener("dblclick", () => {
    const indexOfTodo = todos.indexOf(todo);

    todoList.replaceChild(
      renderTodoInEditMode(todo),
      todoList.childNodes[indexOfTodo]
    );
  });
  li.append(span);

  const button = document.createElement("button");
  button.textContent = "Done";
  button.setAttribute("id", "done-btn");
  button.addEventListener("click", () => {
    const indexOfTodo = todos.indexOf(todo);
    removeTodo(indexOfTodo);
  });
  li.append(button);

  return li;
}

function removeTodo(indexOfTodo) {
  todos.splice(indexOfTodo, 1);
  todoList.removeChild(todoList.childNodes[indexOfTodo]);
}

function renderTodoInEditMode(todo) {
  const li = document.createElement("li");

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("value", todo);
  li.appendChild(input);

  const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.setAttribute("id", "save-btn");
  saveBtn.addEventListener("click", () => {
    const indexOfTodo = todos.indexOf(todo);
    updateTodo(indexOfTodo, input.value);
  });
  li.appendChild(saveBtn);

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.setAttribute("id", "cancel-btn");
  cancelBtn.addEventListener("click", () => {
    const indexOfTodo = todos.indexOf(todo);
    todoList.replaceChild(
      renderTodoInReadMode(todo),
      todoList.childNodes[indexOfTodo]
    );
  });
  li.appendChild(cancelBtn);

  return li;
}

function updateTodo(index, description) {
  todos[index] = description;
  todoList.replaceChild(
    renderTodoInReadMode(description),
    todoList.childNodes[index]
  );
}
