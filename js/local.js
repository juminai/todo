import toComplete from './toComplete.js';
import { findIndex } from './taskManager.js';

export function getLocal() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

export function saveLocal(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    toComplete();
}

export function saveTask(newTaskName) {
    let tasks = getLocal();

    const newTask = {
        id: tasks.length,
        name: newTaskName,
        done: false,
    };

    tasks = [...tasks, newTask];
    saveLocal(tasks);
    return newTask;
}

export function removeLocal(taskToRemove) {
    let tasks = getLocal();
    let taskIndex = findIndex(taskToRemove)

    tasks.splice(taskIndex, 1);
    saveLocal(tasks);
}
