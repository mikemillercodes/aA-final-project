from flask import Blueprint, jsonify, render_template, request, redirect
from flask_login import login_required, current_user
from app.models import db, Review
from .auth_routes import validation_errors_to_error_messages
from app.forms import ReviewUpdateForm, ReviewForm

reviews_routes = Blueprint("reviews", __name__)

# ------------------------------ REVIEW ROUTES ------------------------------#

# GET ALL REVIEWS:
@reviews_routes.route("")
def get_reviews():
    """
    Queries for all reviews and return them in a list of review dictionaries.
    """

    reviews = Review.query.all()
    return {"Reviews": [review.to_dict() for review in reviews]}

# GET A SINGLE REVIEW:
@reviews_routes.route("/<int:id>")
def get_one_review(id):
    """
    Query for a single review by id and return it as a dictionary.
    """

    review = Review.query.get(id)
    return review.to_dict()

# CREATE A NEW REVIEW:
@reviews_routes.route("", methods=["POST"])
@login_required
def post_review():
    """
    A logged-in user can send a post request to create a new review.
    """
    form = ReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        data = form.data

        new_review = Review(
          
            description=data["description"],
            stars=data["stars"],
            user_id=current_user.get_id()
        )

        db.session.add(new_review)
        db.session.commit()

        return new_review.to_dict()
    print(validation_errors_to_error_messages(form.errors))
    return { "errors": validation_errors_to_error_messages(form.errors)}, 403

# UPDATE A SINGLE REVIEW:
@reviews_routes.route("/<int:id>/update", methods=["PUT"])
@login_required
def update_review(id):
    """
    Query for a single review by id and update the review if authorized.
    """
    review = Review.query.get(id)
    review_dict = review.to_dict()

    form = ReviewUpdateForm(
        description=review_dict["description"],
        stars=review_dict["stars"],
    )

    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        data = form.data
        print('data---->', data)

        setattr(review, "description", data["description"])
        setattr(review, "stars", data["stars"])

        db.session.commit()
        return review.to_dict()
    print(validation_errors_to_error_messages(form.errors))
    return {"errors": validation_errors_to_error_messages(form.errors)}, 403

## DELETE A SINGLE REVIEW
@reviews_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_review(id):
    """
    Query for a single review by id and delete the review if authorized.
    """

    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return { "message": "Successfully deleted", "status_code": 200}


