import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import { useEffect } from 'react';
import { getReviews, putSingleReview } from '../../store/reviews';

const ReviewUpdateForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [review, setReview] = useState(null);
  const singleReview = useSelector((state) => state.review[id]);

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
        id: review.id,
        description,
        stars
      })
    );

    if (updatedReview) {
      updatedReview.errors ? setErrors(updatedReview.errors) : history.push(`/tasks/${task.id}`);
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
