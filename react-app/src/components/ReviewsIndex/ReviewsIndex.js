import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { getReviews, deleteReview } from "../../store/reviews";
import './ReviewsIndex.css';

const ReviewIndex = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector((state) => state.session.user);
    const reviews = useSelector((state) => Object.values(state.reviews));
    const task = useSelector((state) => state.task[id]);
    let taskReviews;
    if (task && reviews.length) taskReviews = reviews.filter(review => review.task_id === task.id);
    console.log('task ==>', task)

    const noUserReview = () => {
        for (let i = 0; i < taskReviews.length; i++) {
            let review = taskReviews[i];
            if (review.user_id === user.id) return false;
        }
        if (user.id === task.user_id) return false;
        else return true
    }
    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch]);

    if (!reviews || reviews.length === 0 || !task) return null;

    return (
        <div className="review-index-outer">
            <div className="all-reviews-header">
                <img
                className="review-dialogue-icon"
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScPB87q70lix1qjP2vxfEyjElZzJIpKOSqjg&usqp=CAU'
                >
                </img>
                What People Are Saying</div>
                {user && noUserReview() && (
                    <>
                    <button
                    className="review-this-task"
                    onClick={() => {
                        history.push(`/tasks/${task.id}/reviews/new`)
                    }}
                    >Leave a Review</button>
                    </>
                )}
            <div className="all-reviews-index">
                {taskReviews.map((review) => (
                    <div className="single-review-cards">
                        <div className="review-description">
                            {review.description}
                        </div>
                        <div className="review-stars">
                            <img 
                            className="star-icon"
                            src='/images/star.png'    
                            >
                            </img>
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
        </div>
    )

}

export default ReviewIndex