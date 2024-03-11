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
  });

  return div;
};

const form = document.querySelector("form");

const render = () => {
  const todoDiv = document.getElementById("todo-list");

  todoDiv.textContent = "";
  if (todoDiv === null) {
    throw new Error("No está en el DOM");
  }
  todoDiv.append(...todos.map(renderTodoItem));
};

const input = document.querySelector<HTMLInputElement>('input[type="text"]');
if (input === null) {
  throw new Error("El input no está en el DOM!");
}
form?.addEventListener("submit", (e) => {
  // Prevenimos la recarga de la página
  e.preventDefault();

  // Vaciamos la caja de texto
  const what = input?.value;
  if (input) {
    input.value = "";
  }

  // Controlamos el caso todo vacío
  if (what.length == 0) {
    console.log("No se puede añadir un 'todo' vacío");
  } else {
    const todo = new TodoItem(what);
    // Alteramos el modelo
    todos.push(todo);
    // Alteramos el DOM
    const todoDOM = renderTodoItem(todo);
    document.getElementById("todo-list")?.append(todoDOM);
  }
});

const buttonClear = document.getElementById("clear-button");
if (buttonClear === null) {
  throw new Error("No está en el DOM");
}

buttonClear.addEventListener("click", () => {
  console.log("click");
  const pending = todos.filter((todo) => !todo.done);

  console.log(todos.length);
  console.log(pending);
  todos.splice(0, todos.length, ...pending);
  console.log(todos);
  render();
});
render();
