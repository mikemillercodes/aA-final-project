from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField, IntegerField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange, URL

# ------------------------------ REVIEW FORM ------------------------------ #

# Create a new review by specifying description and stars fields.
class ReviewForm(FlaskForm):
    description = StringField(
        "Description",
        validators=[
            DataRequired(),
            Length(
                min=10,
                max=1500,
                message="Please make your description between 10 and 1,500 characters.",
            ),
        ]
    )
    stars = IntegerField("Stars", validators=[DataRequired(), NumberRange(1,5)])
    submit = SubmitField("Submit")

class ReviewUpdateForm(FlaskForm):
    description = StringField(
        "Description",
        validators=[
            DataRequired(),
            Length(
                min=10,
                max=1500,
                message="Please make your description between 10 and 1,500 characters.",
            ),
        ]
    )
    stars = IntegerField("Stars", validators=[DataRequired(), NumberRange(1,5)])
    submit = SubmitField("Submit")