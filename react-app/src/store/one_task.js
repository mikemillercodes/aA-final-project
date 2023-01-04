/* ------------------------- ACTIONS ------------------------- */

const LOAD_SINGLE_TASK = 'tasks/LOAD_SINGLE';
const UPDATE_SINGLE_TASK = 'tasks/UPDATE_SINGLE';

export const loadSingleTask = task => {
  return {
    type: LOAD_SINGLE_TASK,
    task
  };
};

export const updateSingleTask = updatedTask => {
  return {
    type: UPDATE_SINGLE_TASK,
    updatedTask
  };
};

/* ------------------------- THUNKS -------------------------- */

export const getSingleTask = taskId => async dispatch => {
  const response = await fetch(`/api/tasks/${taskId}`);

  if (response.ok) {
    const task = await response.json();
    dispatch(loadSingleTask(task));
    return task;
  }
};

export const putSingleTask = task => async dispatch => {
  const { title, description, price } = task;
  const response = await fetch(`/api/tasks/${task.id}/update`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description, price })
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(updateSingleTask(data));
    return data;
  }
  const data = await response.json();
  return data;
};

export const getTaskById = id => state => state.tasks[id];

/* ------------------------- REDUCER ------------------------- */

const initialState = {};

const singleTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SINGLE_TASK: 
      return {
        [action.task.id]: { ...action.task }
      };
    
    case UPDATE_SINGLE_TASK: 
      return {
        ...state,
        [action.updatedTask.id]: { ...action.updatedTask }
      };
    default:
      return state;
  }
};

export default singleTaskReducer;
