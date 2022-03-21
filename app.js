// creating a variable

const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector("clear");

// adding event listner to the bin

function addTask() {
   if (input.value != "") {
      addTaskToLS();
   } else {
      alert("Please enter a task");
   }
}
