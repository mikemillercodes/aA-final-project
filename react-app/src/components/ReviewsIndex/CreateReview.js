import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { postReview } from '../../store/reviews';
import ReviewForm from './ReviewForm';

const ReviewCreateForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const task = useSelector((state) => state.task[id]);
  const [description, setDescription] = useState('');
  const [stars, setStars] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    let errors = [];
    if (description.trim() === '') errors.push("You can't submit an empty description!")

    let newReview;
    if (errors.length > 0) {
      setErrors(errors)
    }
    else {
      newReview = await dispatch(
        postReview({
          description,
          stars,
          taskId: id
        })
      )
    }


    if (newReview) {
      newReview.errors ? setErrors(newReview.errors) : history.push(`/tasks/${id}`);
    }
  };

  return (
    <>
      <ReviewForm
        formType={'create'}
        handleSubmit={handleSubmit}
        description={description}
        setDescription={setDescription}
        stars={stars}
        setStars={setStars}
        errors={errors}
        setErrors={setErrors}
      />
    </>
  );
};

export default ReviewCreateForm;
