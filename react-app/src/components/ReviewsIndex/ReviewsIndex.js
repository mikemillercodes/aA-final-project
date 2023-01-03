import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { getReviews, deleteReview } from "../../store/reviews";

const ReviewIndex = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector((state) => state.session.user);
    const reviews = useSelector((state) => Object.values(state.reviews));
    const task = useSelector((state) => state.task[id]);
    console.log('task ==>', task)
    let taskReviews;
    if (task && reviews.length) taskReviews = reviews.filter(review => review.task_id === task.id);

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch]);

    if (!reviews || reviews.length === 0 || !task) return null;

    return (
        <>
            <div className="all-reviews-header">What People Are Saying</div>
            <div className="all-reviews-index">
                {taskReviews.map((review) => (
                    <div className="single-review-cards">
                        <div className="review-description">
                            {review.description}
                        </div>
                        <div className="review-stars">
                            {review.stars}
                        </div>

                        {user && user.id === review.user_id && (
                            <>
                                <button
                                    className="edit-your-review"
                                    onClick={() => {
                                        history.push(`/reviews/${review.id}/update`)
                                    }}
                                >Edit Your Review
                                </button>

                                <button
                                    className="delete-your-review"
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        await dispatch(deleteReview(review.id));
                                        dispatch(getReviews())
                                    }}
                                >Delete Your Review</button>
                            </>
                                )
                        }
                    </div>
                ))}
            </div>
        </>
    )

}

export default ReviewIndex