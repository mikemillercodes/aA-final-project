import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const TaskForm = ({
    task,
    formType,
    handleSubmit,
    title,
    setTitle,
    description,
    setDescription,
    price,
    setPrice,
    errors,
    setErrors
}) => {
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        formType === 'update' ? task && setIsLoaded(true) : setIsLoaded(true);
        formType === 'update' && setTitle(task?.title);
        formType === 'update' && setDescription(task?.description);
        formType === 'update' && setPrice(task?.price)
    }, [
      task?.title,
      task?.description,
      task?.price,
      setTitle,
      setDescription,
      setPrice,
      task,
      formType
    ]);

    if (!isLoaded) return null;

    return (
        <>
          {isLoaded && (
            <div className='task-form-container'>
              <form
                className='task-form'
                onSubmit={handleSubmit}
              >
                {errors.length > 0 && (
                  <ul className='task-form-header-errors'>
                    {errors.map((error, idx) => (
                      <li key={idx}>{error}</li>
                    ))}
                  </ul>
                )}
                <div className='inputs-container'>
                  <div className='title-container'>
                    <label htmlFor='title-input'>Title</label>
                    <input
                      className='title-input'
                      onChange={e => setTitle(e.target.value)}
                      name='title-input'
                      placeholder='Give your task a title here.'
                      required
                      type='text'
                      value={title}
                    />
                  </div>
                  <div className='description-container'>
                    <label htmlFor='desctiption-input'>Description</label>
                    <input
                      className='description-input'
                      onChange={e => setDescription(e.target.value)}
                      name='description-input'
                      placeholder='Describe the task.'
                      required
                      type='text'
                      value={description}
                    />
                  </div>
                  <div className='price-container'>
                    <label htmlFor='price-input'>Price</label>
                    <input
                      className='price-input'
                      min={0}
                      onChange={e => setPrice(e.target.value)}
                      placeholder="Make sure to set a fair rate!"
                      required
                      type='number'
                      value={price}
                    />
                  </div>
                  <button
                    className='task-form-submit'
                    type='submit'
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          )}
        </>
      );
    };
    export default TaskForm;
