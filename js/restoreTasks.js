import { getLocal } from './local.js';
import createTaskElement from './createTaskElement.js';
import toComplete from './toComplete.js';
import addTask from './addTask.js';

export default function restoreTasks() {
    let tasks = getLocal();

    tasks.forEach((task) => {
        createTaskElement(task);
    });

    addTask();
    toComplete();
}
