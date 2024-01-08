let taskList = [];

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
            if (checkbox.checked) {
                taskText.classList.add('completed');
            } else {
                taskText.classList.remove('completed');
            }
        });

        content.appendChild(taskElement);

        // Clear input field
        document.getElementById('newtaskinsettext').value = '';

        // Add items to js list
        taskList.push(taskTitle);
    }
}

addEventListener("keypress", function(event) {
    if(event.key == "Enter") {
        makeTask();
    }
});

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

let notificationText = 'You still have ' + taskList.length + ' tasks to do';

function keepUpToDate() {
    setInterval(() => {
        sendNotification(notificationText);
      }, 1 * 60 * 1000);
}
  