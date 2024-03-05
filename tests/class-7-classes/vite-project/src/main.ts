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
  if (todo.done) {
    div.classList.add("done");
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.done;

  const text = document.createTextNode(todo.what);

  div.append(checkbox, text);

  div.addEventListener("click", () => {
    todo.toggleDone();
    checkbox.checked = todo.done;
    div.classList.toggle("done");

    // Estamos cambiando realmente el modelo o sólo el DOM?
    console.log(todos);
  });

  return div;
};

const render = () => {
  const todoDiv = document.getElementById("todo-list");
  if (todoDiv === null) {
    throw new Error("No está en el DOM");
  }
  todoDiv.append(...todos.map(renderTodoItem));
};

const form = document.querySelector("form");
const input = document.querySelector<HTMLInputElement>('input[type="text]"');
form?.addEventListener("submit", (e) => {
  // Prevenimos la recarga de la página
  e.preventDefault();
  const what = input?.value;
  if (input) {
    input.value = "";
  }
  const todo = new TodoItem(what || "error");
  // Alteramos el modelo
  todos.push(todo);
  // Alteramos el DOM
  const todoDOM = renderTodoItem(todo);
  document.getElementById("todo-list")?.append(todoDOM);
});

render();
