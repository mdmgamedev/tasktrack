### TaskTrack Readme File

# How to use 
TaskTrack is a simple to-do list app. You can add tasks to the list by typing the name of the task you want to add and clicking Create/pressing Enter

You can also save and load to-do lists by clicking Save. Later on, you can click Load to load the saved list. By clicking Clear, you can clear the displayed list, but not the saved data. 

The Reset button resets the saved data and clears the currently displayed list

# How the code works
The app is built entirely with vanilla HTML CSS and client-side JavaScript. 

To save and load the data, the app uses the browser's localStorage. 

The root of the app is made to always be centered. It is fixed width and is always in the center.
The app root takes up 100% of the viewport in height
```css
    width: 40%;
    max-width: 600px;
    height: 100vh;
```

Tasks are rendered using the renderTask function which adds a div element. Inside the div element it adds a checkbox and a text element for the task name
```javascript
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
```

The notification system uses the default Notification API. This API doesn't work on a local HTML file opened through the file:// protocol. This means you need to run the file from a HTTP server. Here is a simple example using python's built in HTTP server module:
```
python -m http.server
```
Run this command in the directory that contains the index.html and the other required files. Go to http://localhost:8000. This is the address to the locally hosted website. 

Note: if you use Python 2 instead of Python 3, use 
```
python -m SimpleHTTPServer
```

# How to download the code
Go to the github repository and click on Code. Click on Download ZIP and unzip the downloaded file. Now you can start editing the code

# How to contribute
Contribution is not possible yet. 
