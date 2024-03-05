import "./style.css";

import { TodoItem } from "./TodoItem";

// Modelo
const todos: Array<TodoItem> = [
  new TodoItem("fregar los platos"),
  new TodoItem("tirar las cajas de pizza", true),
  new TodoItem("cambiar la arena del gato"),
];

const renderTodoItem = (todo: TodoItem) => {
  const div = document.createElement("div");
  div.classList.add("todo-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.done;

  const text = document.createTextNode(todo.what);

  div.append(checkbox, text);

  return div;
};

const render = () => {
  const todoDiv = document.getElementById("todo-list");
  if (todoDiv === null) {
    throw new Error("No está en el DOM");
  }
  todoDiv.append(...todos.map(renderTodoItem));
};

render();
