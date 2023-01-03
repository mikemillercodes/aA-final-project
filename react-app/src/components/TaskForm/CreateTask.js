import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { postTask } from '../../store/all_tasks';
import TaskForm from './TaskForm';

const TaskCreateForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [task_img_url, set_task_img_url] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();

    const newTask = await dispatch(
      postTask({
        title,
        description,
        price,
        task_img_url
      })
    )

    if (newTask) {
      newTask.errors ? setErrors(newTask.errors) : history.push(`/tasks/${newTask.id}`);
    }
  };

  return (
    <>
      <TaskForm
        formType={'create'}
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        price={price}
        setPrice={setPrice}
        task_img_url={task_img_url}
        set_task_img_url={set_task_img_url}
        errors={errors}
        setErrors={setErrors}
      />
    </>
  );
};

export default TaskCreateForm;
