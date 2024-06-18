import { saveTask } from './local.js';
import createTaskElement from './createTaskElement.js';

export default function addTask() {
    const addBtn = document.querySelector('.new-task button');
    const taskInput = document.querySelector('.new-task input');
    const mensagemErro = document.querySelector('.mensagem-erro');

    addBtn.addEventListener('click', () => {
        let validarInput = taskInput.checkValidity();
        let newTask = taskInput.value;

        if (validarInput) {
            mensagemErro.textContent = ''
            createTaskElement(saveTask(newTask, false));
            taskInput.value = ''
        } else {
            if (taskInput.validity.valueMissing) {
                mensagemErro.textContent = 'Insira um titulo para a tarefa';
            }

            if (taskInput.validity.patternMismatch) {
                mensagemErro.textContent = 'Titulo invalido'
            }
        }
    });
}
