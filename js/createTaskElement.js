import { removeTask, markAsDone, renameTask } from './taskManager.js';

export default function createTaskElement(task) {
    const tasksList = document.querySelector('.tasks');

    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    if (task.done) taskElement.classList.add('checked');
    taskElement.setAttribute('data-task-id', task.id);

    taskElement.innerHTML = `
        <div>
            <input type="checkbox" ${task.done ? 'checked' : ''}/>
            <p>${task.name}</p>
        </div>  

        <div>
            <button class="edit-task">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="remove-task">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;

    tasksList.prepend(taskElement);
    removeTask(task.id);
    markAsDone(task.id);
    renameTask(task.id)
}
