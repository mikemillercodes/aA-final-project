import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import UpdateReviewForm from './UpdateReviewForm';
import { useEffect } from 'react';
import { getReviews, putSingleReview } from '../../store/reviews';

const ReviewUpdateForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [review, setReview] = useState(null);
  const task = useSelector((state) => state.task)
  const taskId = Object.values(task)[0].id

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
        id: id,
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
        <UpdateReviewForm
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
