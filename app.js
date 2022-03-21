window.onload = function () {
   displayTask();
};

// creating a variable

const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector("clear");

// adding event listner to the bin

function addTask() {
   if (input.value != "") {
      addTaskToLS();
      todoList.innerHTML = "";
      displayTask();
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

//display tasks

function displayTask() {
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

      newLi.appendChild(document.createTextNode(task));
      newLi.appendChild(checkBtn);
      newLi.appendChild(delBtn);
      todoList.appendChild(newLi);

      //task completed

      checkBtn.addEventListener("click", () => {
         newLi.appendChild(complete);
      });

      delBtn.addEventListener("click", deleteTask);
   });
}

//delete task

function deleteTask(index) {
   let tasks;
   const del = confirm("you are deleting a task");

   if (del == true) {
      if (localStorage.getItem("tasks") === null) {
         tasks = [];
      } else {
         tasks = JSON.parse(localStorage.getItem("tasks"));
      }
   }

   tasks.splice(index, 1);
   localStorage.setItem("tasks", JSON.stringify(tasks));
   todoList.innerHTML = "";
   displayTask();
}
