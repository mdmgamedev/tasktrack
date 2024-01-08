let taskList = [];

// Load tasks from localStorage
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        taskList = JSON.parse(storedTasks);

        // Render tasks on page load
        renderTasks();
    }
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(taskList));
}

function clearLs() {
    alert('Are you sure you want to reset the app? This would delete all saved data');
    localStorage.removeItem('tasks');
    taskList = [];
    renderTasks(); // Clear tasks on the page
}

function emptyList() {
    taskList = [];
    renderTasks();
}

function makeTask() {
    var taskTitle = document.getElementById('newtaskinsettext').value;

    if (taskTitle.trim() !== '') {
        var content = document.getElementById('content');

        var taskElement = document.createElement('div');
        taskElement.className = 'task';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        var taskText = document.createElement('span');
        taskText.textContent = taskTitle;

        taskElement.appendChild(checkbox);
        taskElement.appendChild(taskText);

        checkbox.addEventListener('change', function () {
            var isChecked = checkbox.checked;
            taskList.forEach(task => {
                if (task.title === taskTitle) {
                    task.completed = isChecked;
                }
            });
            renderTasks(); // Update tasks on checkbox change
            saveTasks(); // Save tasks on checkbox change
        });

        content.appendChild(taskElement);

        // Clear input field
        document.getElementById('newtaskinsettext').value = '';

        // Add items to js list
        taskList.push({ title: taskTitle, completed: false });
        saveTasks(); // Save tasks after adding a new task
    }
}

addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        makeTask();
    }
});

function renderTasks() {
    var content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing tasks

    taskList.forEach(task => {
        var taskElement = document.createElement('div');
        taskElement.className = 'task';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;

        var taskText = document.createElement('span');
        taskText.textContent = task.title;
        if (task.completed) {
            taskText.classList.add('completed');
        }

        taskElement.appendChild(checkbox);
        taskElement.appendChild(taskText);

        checkbox.addEventListener('change', function () {
            var isChecked = checkbox.checked;
            task.completed = isChecked;
            renderTasks(); // Update tasks on checkbox change
            saveTasks(); // Save tasks on checkbox change
        });

        content.appendChild(taskElement);
    });
}

function sendNotification(content) {
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(content);
            }
        });
    } else {
        new Notification(content);
    }
}

let notificationText = 'You still have ' + taskList.filter(task => !task.completed).length + ' tasks to do';

function keepUpToDate() {
    setInterval(() => {
        sendNotification(notificationText);
    }, 1 * 60 * 1000);
}

// Load tasks on page load
loadTasks();

