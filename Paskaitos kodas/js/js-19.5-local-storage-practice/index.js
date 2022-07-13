// Pasirenkami visi HTML elementai
let id = +(localStorage.getItem("id") ?? 1);
const form = document.getElementById("form");
const todoItemInput = document.getElementById("todo-item");
const todoItemList = document.getElementById("todo-items");

const todoItems = JSON.parse(localStorage.getItem("todoItems")) ?? [];

// Pavyzdinis
let todoItem = {
  id: 10,
  text: "išvalyti kambarį"
  // deadline: '',
  // pabaigtas: true
};

class TodoItem {
  constructor(text) {
    this.id = id++;
    localStorage.setItem("id", id);
    this.text = text;
  }
}

function createTodoItem(todoItem) {
  const { id, text } = todoItem;

  // Sukuriame <li> elementą
  const li = document.createElement("li");
  li.textContent = text;

  // Paspaudus <li> elementą, jis yra ištrinamas iš medžio
  li.addEventListener("click", () => {
    li.remove();
    removeTodoItem(id);
  });

  todoItemList.append(li);
}

function removeTodoItem(id) {
  // this = elementas, kuriam pridėtas event listener
  const index = todoItems.findIndex(todoItem => todoItem.id === id);
  if (index === -1) {
    return;
  }
  todoItems.splice(index, 1);
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

form.addEventListener("submit", e => {
  // Atšaukiame numatytą formos submit veikimą
  e.preventDefault();

  const todoItem = new TodoItem(todoItemInput.value);
  createTodoItem(todoItem);
  todoItems.push(todoItem);
  localStorage.setItem("todoItems", JSON.stringify(todoItems));

  // Išvalome įvesties lauką
  todoItemInput.value = "";
});

todoItems.forEach(todoItem => createTodoItem(todoItem));
