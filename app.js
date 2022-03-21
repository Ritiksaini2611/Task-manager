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

// adding task to local storage

function addTaskToLS() {
   let tasks;
   if (localStorage.getItem("tasks") === null) {
      tasks = [];
   } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
   }

   tasks.push(input.value);
   localStorage.setItem("tasks", JSON.stringify(tasks));

   console.log(input.value);
   input.value = "";
}

function DisplayTask() {
   let tasks;
   if (localStorage.getItem("tasks") === null) {
      tasks = [];
   } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
   }

   tasks.forEach(function (task, index) {
      const newLi = document.createElement("li");
      const complete = document.createElement("p");
      const checkBtn = document.createElement("button");
      const delBtn = document.createElement("button");

      // adding icons to the button

      checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
      delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
      complete.textContent = "completed";
   });
}
