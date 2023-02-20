/* ------------------------- ACTIONS ------------------------- */

const LOAD_TASKS = 'tasks/LOAD';
const CREATE_TASK = '/tasks/NEW';
const DELETE_TASK = '/tasks/DELETE';
const SEARCH_TASK = '/products/SEARCH';

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

export const searchTask = results => {
    return {
        type: SEARCH_TASK,
        results
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

export const postTask = payload => async dispatch => {
    const { title, description, price, task_img_url } = payload;
  
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        price,
        task_img_url
      })
    });
  
    if (response.ok) {
      const data = await response.json();
      dispatch(createTask(data));
      return data;
    }
  
    const data = await response.json();
    return data;
  };

  export const deleteTask = taskId => async dispatch => {
    console.log('task id ====> ', taskId)
    taskId = +taskId
    const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const deleteMessage = await response.json();
        dispatch(removeTask(taskId));
        return deleteMessage;
    }
  }

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
        case CREATE_TASK:
            return { ...state, [action.task.id]: action.task};
        default:
            return state;
        case DELETE_TASK:
            const newState = { ...state };
            delete newState[action.taskId];
            return newState;
    }
};

export default allTasksReducer;