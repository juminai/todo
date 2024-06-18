import { getLocal } from './local.js';

export default function toComplete() {
    const undoneTasksSpan = document.querySelector('.total-tasks');
    const allTasks = getLocal();

    const undone = allTasks.filter((task) => !task.done);
    undoneTasksSpan.textContent = undone.length;
}
