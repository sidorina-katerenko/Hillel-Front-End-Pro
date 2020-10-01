function Task(id, name = 'New Task', status = 'open', priority = 'low') {
    this.id = id;
    this.name = name;
    this.status = status;
    this.priority = priority;
}

Task.prototype.render = function() {
    const container = createElement('div', 'task-container');
    container.setAttribute('data-id', this.id);

    const name = createElement('span', 'name-indicator', this.name);
    const status = createElement('span', 'status-indicator', this.status);
    const priority = createElement('span', 'priority-indicator', this.priority);

    const indicatorsContainer = createElement('div');

    indicatorsContainer.appendChild(status);
    indicatorsContainer.appendChild(priority);

    const editButton = createElement('button', 'edit-button', 'Edit');
    editButton.addEventListener('click', () => {
        const newForm = form.cloneNode(true);
        newForm.setAttribute('name', 'editForm');

        const taskName = newForm.elements.taskName;
        taskName.value = this.name;

        const submitButton = newForm.querySelector('.submit-button');
        submitButton.addEventListener('click', () => {
            const taskIndex = tasks.findIndex((tsk) => tsk.id === this.id);

            this.name = newForm.elements.taskName.value;
            name.innerText = this.name;
            tasks[taskIndex] = this.name;
            
            for (let i = 0; i < newForm.elements.taskStatus.length; i++) {
                if (newForm.elements.taskStatus[i].selected) {
                    this.status = newForm.elements.taskStatus.value;
                    status.innerText = this.status;
                    tasks[taskIndex] = this.status;
                    break;
                }
            }

            for (let i = 0; i < newForm.elements.taskPriority.length; i++) {
                if (newForm.elements.taskPriority[i].selected) {
                    this.priority = newForm.elements.taskPriority.value;
                    priority.innerText = this.priority;
                    tasks[taskIndex] = this.priority;
                    break;
                }
            }

            newForm.remove();
            updateLocalStorage();
        })

        container.appendChild(newForm);
    })

    const deleteButton = createElement('button', 'delete-button', 'Delete');
    deleteButton.addEventListener('click', () => {
        const confirmContainer = createElement('div', 'confirm-container', 'Are you sure you want to remove the task?');

        const yes = createElement('button', 'yes-button', 'Yes');
        yes.setAttribute('type', 'button');
        yes.addEventListener('click', () => {
            const taskIndex = tasks.findIndex((tsk) => tsk.id === this.id);
            container.remove();
            tasks.splice(taskIndex, 1);
            updateLocalStorage();
        })

        const nope = createElement('button', 'no-button', 'No');
        nope.setAttribute('type', 'button');
        nope.addEventListener('click', () => {
            confirmContainer.remove();
        })

        confirmContainer.appendChild(yes);
        confirmContainer.appendChild(nope);

        container.appendChild(confirmContainer);
    })

    const buttonContainer = createElement('div');

    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    container.appendChild(name);
    container.appendChild(indicatorsContainer);
    container.appendChild(buttonContainer);
    
    wrapper.appendChild(container);
}