import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import TaskForm from './TaskForm';
import { useEffect } from 'react';
import { getSingleTask, putSingleTask } from '../../store/one_task';

const TaskUpdateForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const singleTask = useSelector((state) => state.task[id]);

  useEffect(() => {
    (async function fetchTask() {
      const res = await dispatch(getSingleTask(id));
      setTask(res);
    })();
  }, [dispatch, id]);

  const [title, setTitle] = useState(task?.title);
  const [description, setDescription] = useState(task?.description);
  const [price, setPrice] = useState(task?.price);
  const [errors, setErrors] = useState([]);  

  const handleSubmit = async e => {
    e.preventDefault();
    let errors = [];
    if (title.trim() === '') errors.push("You can't submit an empty title!");
    if (description.trim() === '') errors.push("You can't submit an empty description!");

    let updatedTask;
    if (errors.length > 0) {
      setErrors(errors)
    }
    else {
      updatedTask = await dispatch(
        putSingleTask({
          id: task.id,
          title,
          description,
          price
        })
      );
    }


    if (updatedTask) {
      updatedTask.errors ? setErrors(updatedTask.errors) : history.push(`/tasks/${task.id}`);
    }
  };

  if (!task) return null;

  return (
    <>
      {task && (
        <TaskForm
          task={task}
          formType={'update'}
          handleSubmit={handleSubmit}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          price={price}
          setPrice={setPrice}
          errors={errors}
          setErrors={setErrors}
        />
      )}
    </>
  );
};

export default TaskUpdateForm;
