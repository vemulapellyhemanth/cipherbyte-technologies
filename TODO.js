let tasks = [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <div id="taskItem-${index}" class="task">
        <div>${task}</div>
        <div class="task-actions">
          <button onclick="editTask(${index})">Edit</button>
          <button onclick="deleteTask(${index})">Delete</button>
        </div>
      </div>
    `;
    taskList.appendChild(listItem);
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task !== "") {
    tasks.push(task);
    taskInput.value = "";
    
    renderTasks();
  }else{
    alert(" plz add a task");
  }

}
function editTask(index) {
  const taskItem = document.getElementById(`taskItem-${index}`);
  const taskText = taskItem.querySelector('div');
  const task = taskText.textContent;

  
  const inputField = document.createElement('input');
  inputField.value = task;

 
  taskText.parentNode.replaceChild(inputField, taskText);

  
  inputField.focus();

 
  const editButton = taskItem.querySelector('button');
  editButton.textContent = 'Save';


  editButton.setAttribute('onclick', `saveTask(${index})`);
}

function saveTask(index) {
  const taskItem = document.getElementById(`taskItem-${index}`);
  const inputField = taskItem.querySelector('input');
  const newTask = inputField.value.trim();

 
  if (newTask !== "") {
    tasks[index] = newTask;
    renderTasks();
  } else {
    alert("Task cannot be empty. Editing canceled.");
  }
}

function deleteTask(index) {
if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    renderTasks();
   

    }
}

renderTasks();