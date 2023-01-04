/* ------------------------- ACTIONS ------------------------- */

const LOAD_REVIEWS = 'reviews/LOAD';
const CREATE_REVIEW = '/reviews/NEW';
const UPDATE_REVIEW = '/reviews/UPDATE';
const DELETE_REVIEW = '/reviews/DELETE';

export const loadReviews = reviews => {
    return {
        type: LOAD_REVIEWS,
        reviews
    };
};

export const createReview = review => {
    return {
        type: CREATE_REVIEW,
        review
    };
};

export const updateReview = updatedReview => {
    return {
        type: UPDATE_REVIEW,
        updatedReview
    }
}

export const removeReview = reviewId => {
    return {
        type: DELETE_REVIEW,
        reviewId
    };
};

/* ------------------------- THUNKS -------------------------- */

export const getReviews = () => async dispatch => {
    const response = await fetch('/api/reviews');

    if (response.ok) {
        const reviews = await response.json();
        dispatch(loadReviews(reviews));
        return reviews
    };
};

export const putSingleReview = review => async dispatch => {
    const { description, stars } = review;
    const response = await fetch(`/api/reviews/${review.id}/update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, stars })
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(updateReview(data));
        return data
    }
    const data = await response.json();
    return data;
}

export const postReview = payload => async dispatch => {
    const { description, stars, taskId } = payload;
    console.log('task id =====>', taskId)
    const response = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description,
        stars,
        taskId
      })
    });
  
    if (response.ok) {
      const data = await response.json();
      dispatch(createReview(data));
      return data;
    }
  
    const data = await response.json();
    return data;
  };

  export const deleteReview = reviewId => async dispatch => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const deleteMessage = await response.json();
        dispatch(removeReview(reviewId));
        return deleteMessage;
    }
  }

/* ------------------------- GETTERS ------------------------- */

export const getAllReviews = state => Object.values(state.reviews);

/* ------------------------- REDUCER ------------------------- */

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_REVIEWS:
            return action.reviews.Reviews.reduce((reviews, review) => {
                reviews[review.id] = review;
                return reviews
            }, {});
        case CREATE_REVIEW:
            return { ...state, [action.review.id]: action.review};
        default:
            return state;
        case UPDATE_REVIEW:
            return {
                ...state,
                [action.updatedReview.id]: { ...action.updatedReview}
            };
        case DELETE_REVIEW:
            const newState = { ...state };
            delete newState[action.reviewId];
            return newState;
    }
};

export default reviewsReducer;