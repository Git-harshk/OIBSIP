document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;

    const task = {
        text: taskText,
        completed: false,
        addedAt: new Date().toLocaleString(),
        completedAt: null,
    };

    displayTask(task);
    taskInput.value = '';
}

function displayTask(task) {
    const pendingTasksList = document.getElementById('pendingTasks');
    const li = document.createElement('li');
    

    li.setAttribute('data-added-at', task.addedAt); 

    li.innerHTML = `
        <span>${task.text} (Added: ${task.addedAt})</span>
        <span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </span>
    `;

    pendingTasksList.appendChild(li);
}

function completeTask(button) {
    const li = button.parentElement.parentElement;
    const taskText = li.firstChild.textContent.split(' (')[0];
    const completedAt = new Date().toLocaleString();
    const addedAt = li.getAttribute('data-added-at'); 

    li.classList.add('completed');
    li.firstChild.innerHTML = `${taskText} (Added: ${addedAt}, Completed: ${completedAt})`;
    
    const completedTasksList = document.getElementById('completedTasks');
    completedTasksList.appendChild(li);
    
    button.remove(); 
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const currentText = li.firstChild.textContent.split(' (')[0];
    const newText = prompt("Edit your task:", currentText);
    
    if (newText !== null && newText.trim() !== '') {
        li.firstChild.textContent = newText;
    }
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}
