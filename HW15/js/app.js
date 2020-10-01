'use strict';

const wrapper = document.getElementById('wrapper');
const TASK_DATA_KEY = 'taskData';
let initialStatuses;
let initialPriorities;
let initialTasks;
let tasks;

fetch('http://127.0.0.1:8080/data.json') 
    .then(function(res) {
        return res.json();
    })
    .then(function (res) {
        initialStatuses = res.statuses;
        initialPriorities = res.priorities;
        initialTasks = res.tasks;
    })
    .then(function() {
        tasks = getTasksFromLocalStorage();
    })
    .then(function() {
        for (let i = 0; i < tasks.length; i++) {
            const elem = tasks[i];
            const {id, name, status, priority} = elem;
            const item = new Task(id, name, status, priority);
            item.render();
        }
    });

    const form = document.forms.addTaskForm;
    const addNewTaskButton = form.querySelector('.submit-button');
    addNewTaskButton.addEventListener('click', () => {
        const name = form.elements.taskName.value;
        let status;
        let priority;

        for (let i = 0; i < form.elements.taskStatus.length; i++) {
            if (form.elements.taskStatus[i].selected) {
                status = form.elements.taskStatus.value;
                break;
            }
        }

        for (let i = 0; i < form.elements.taskPriority.length; i++) {
            if (form.elements.taskPriority[i].selected) {
                priority = form.elements.taskPriority.value;
                break;
            }
        }

        const id = tasks[tasks.length - 1].id + 1;
        const newTask = new Task(id, name, status, priority);
        
        tasks.push(newTask);
        newTask.render();
        updateLocalStorage();
    })
   