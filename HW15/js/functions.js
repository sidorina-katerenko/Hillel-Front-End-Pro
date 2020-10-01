function getTasksFromLocalStorage() {
    const item = localStorage.getItem(TASK_DATA_KEY);

    if (item === null) {
        localStorage.setItem(TASK_DATA_KEY, JSON.stringify(initialTasks));
        return initialTasks;
    }

    return JSON.parse(item);
}

function updateLocalStorage() {
    localStorage.setItem(TASK_DATA_KEY, JSON.stringify(tasks));
}

function createElement(tagName = 'div', className, content) {
    const element = document.createElement(tagName);

    if (className) {
        element.className = className;
    }

    if (content) {
        element.innerText = content;
    }
    
    return element;
}