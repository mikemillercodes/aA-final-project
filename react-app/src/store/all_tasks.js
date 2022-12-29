/* ------------------------- ACTIONS ------------------------- */

const LOAD_TASKS = 'tasks/LOAD';
const CREATE_TASK = '/tasks/NEW';
const DELETE_TASK = '/tasks/DELETE';

export const loadTasks = tasks => {
    return {
        type: LOAD_TASKS,
        tasks
    };
};

export const createTask = task => {
    return {
        type: CREATE_TASK,
        task
    };
};

export const removeTask = taskId => {
    return {
        type: DELETE_TASK,
        taskId
    };
};

/* ------------------------- THUNKS -------------------------- */

export const getTasks = () => async dispatch => {
    const response = await fetch('/api/tasks');

    if (response.ok) {
        const tasks = await response.json();
        dispatch(loadTasks(tasks));
        return tasks
    };
};

/* ------------------------- GETTERS ------------------------- */

export const getAllTasks = state => Object.values(state.tasks);

/* ------------------------- REDUCER ------------------------- */

const initialState = {};

const allTasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TASKS:
            return action.tasks.Tasks.reduce((tasks, task) => {
                tasks[task.id] = task;
                return tasks
            }, {});
        default:
            return state;
    }
};

export default allTasksReducer;