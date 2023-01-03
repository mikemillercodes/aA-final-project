import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const ReviewForm = ({
    review,
    formType,
    handleSubmit,
    description,
    setDescription,
    stars,
    setStars,
    errors,
    setErrors
}) => {
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        formType === 'update' ? review && setIsLoaded(true) : setIsLoaded(true);
        formType === 'update' && setDescription(review?.description);
        formType === 'update' && setSrice(review?.stars)
    }, [
      review?.description,
      review?.stars,
      setDescription,
      setStars,
      review,
      formType
    ]);

    if (!isLoaded) return null;

    return (
        <>
          {isLoaded && (
            <div className='review-form-container'>
              <form
                className='review-form'
                onSubmit={handleSubmit}
              >
                {errors.length > 0 && (
                  <ul className='review-form-header-errors'>
                    {errors.map((error, idx) => (
                      <li key={idx}>{error}</li>
                    ))}
                  </ul>
                )}
                <div className='inputs-container'>
                  <div className='description-container'>
                    <label htmlFor='desctiption-input'>Description</label>
                    <input
                      className='description-input'
                      onChange={e => setDescription(e.target.value)}
                      name='description-input'
                      placeholder='Describe the review.'
                      required
                      type='text'
                      value={description}
                    />
                  </div>
                  <div className='stars-container'>
                    <label htmlFor='stars-input'>stars</label>
                    <input
                      className='stars-input'
                      min={0}
                      onChange={e => setStars(e.target.value)}
                      placeholder="Make sure to accurately represent your Tasker!"
                      required
                      type='number'
                      value={stars}
                    />
                  </div>
                  <button
                    className='review-form-submit'
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
    export default ReviewForm;
