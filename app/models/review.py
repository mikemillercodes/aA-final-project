from .db import db, environment

###############
# REVIEW MODEL:
###############

class Review(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(db.Integer, db.ForeignKey("tasks.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    description = db.Column(db.String(3000), nullable=False)
    stars = db.Column(db.Integer, nullable=False)

    # RELATIONSHIPS:
    # tasks.id <--> reviews.task_id "one task can have many reviews"
    review_task = db.relationship("Task", back_populates="task_review")

    # users.id <--> reviews.user_id "one task can have many reviews"
    review_owner = db.relationship("User", back_populates="user_review")

    def to_dict(self):
        return {
            "id": self.id,
            "task_id": self.task_id,
            "user_id": self.user_id,
            "description": self.description,
            "stars": self.stars
        }

        def __repr__(self):
            return f"<Review {self.id}: {self.title}>"





