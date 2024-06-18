import { removeLocal, getLocal, saveLocal } from './local.js';
import restoreTasks from './restoreTasks.js';

export function removeTask(taskId) {
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    const removeBtn = taskElement.querySelector('.remove-task');

    removeBtn.addEventListener('click', () => {
        removeLocal(taskId);
        taskElement.remove();
    });
}

export function markAsDone(taskId) {
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    const checkbox = taskElement.querySelector('input');

    checkbox.addEventListener('change', () => {
        let tasks = getLocal();
        let taskIndex = tasks.findIndex((obj) => obj.id === taskId);

        if (checkbox.checked) {
            taskElement.classList.add('checked');
            tasks[taskIndex].done = true;
        } else {
            taskElement.classList.remove('checked');
            tasks[taskIndex].done = false;
        }

        saveLocal(tasks);
    });
}

export function renameTask(taskId) {
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    const taskP = taskElement.querySelector('p')
    const renameBtn = taskElement.querySelector('.edit-task')
    const modal = document.querySelector('.modal-background')
    const editInput = document.querySelector('.modal-editar-task input')
    const saveBtn = document.querySelector('.save-modal')
    const closeBtn = document.querySelector('.close-modal')

    renameBtn.addEventListener('click', () => {
        modal.style.display = 'flex'

        let tasks = getLocal();
        let taskIndex = tasks.findIndex((obj) => obj.id === taskId);

        editInput.value = tasks[taskIndex].name

        function rename() {
            tasks[taskIndex].name = editInput.value

            saveLocal(tasks)
            taskP.textContent = editInput.value
            close()
        }

        function close() {
            modal.style.display = 'none'
            saveBtn.removeEventListener('click', rename)
        }

        saveBtn.addEventListener('click', rename)
        closeBtn.addEventListener('click', close)

    })
}
