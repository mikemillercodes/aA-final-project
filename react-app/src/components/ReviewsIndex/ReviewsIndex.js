import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getReviews } from "../../store/reviews";

const ReviewIndex = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user)
    const reviews = useSelector((state) => Object.values(state.reviews))
    const task = useSelector((state) => Object.values(state.task)[0])
    console.log('task ==>', task)
    const taskReviews = reviews.filter(review => review.task_id === task.id)
    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    if (!reviews || reviews.length === 0) return null;

    return (
        <>
        <div className="all-reviews-header">What People Are Saying</div>
        <div className="all-reviews-index">
                {taskReviews.map((review)=> (
                   
            <div className="single-review-cards">
                <div className="review-description">
                    {review.description}
                </div>
                <div className="review-stars">
                    {review.stars}
                </div>
            </div>
                ))}
        </div>
        </>
    )

}

export default ReviewIndex