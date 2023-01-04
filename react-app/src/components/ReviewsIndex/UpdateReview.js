import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import { useEffect } from 'react';
import { getReviews, putSingleReview } from '../../store/reviews';

const ReviewUpdateForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { reviewId } = useParams();
  const [review, setReview] = useState(null);
  const taskId = useSelector((state) => state.task.id)
  console.log('task id ====>', taskId)

  useEffect(() => {
    (async function fetchReview() {
      const res = await dispatch(getReviews());
      setReview(res);
    })();
  }, [dispatch]);

  const [description, setDescription] = useState(review?.description);
  const [stars, setStars] = useState(review?.stars);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();

    const updatedReview = await dispatch(
      putSingleReview({
        reviewId: reviewId,
        description,
        stars
      })
    );

    if (updatedReview) {
      updatedReview.errors ? setErrors(updatedReview.errors) : history.push(`/tasks/${taskId}`);
    }
  };

  if (!review) return null;

  return (
    <>
      {review && (
        <ReviewForm
          review={review}
          formType={'update'}
          handleSubmit={handleSubmit}
          description={description}
          setDescription={setDescription}
          stars={stars}
          setStars={setStars}
          errors={errors}
          setErrors={setErrors}
        />
      )}
    </>
  );
};

export default ReviewUpdateForm;
