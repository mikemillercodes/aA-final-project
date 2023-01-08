from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField, IntegerField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange, URL, ValidationError

# ------------------------------ TASK FORM ------------------------------ #

# Create a new task by specifying title, description, price, and image URL fields.
class TaskForm(FlaskForm):
    def validate_title(form, field):
        if len(field.data) < 4:
            raise ValidationError("Title must be 4 characters or longer")
        if len(field.data) > 49:
            raise ValidationError("Title must be less than 50 characters")
    title = StringField(
        "Title", [DataRequired()])
    
    description = StringField(
        "Description",
        validators=[
            DataRequired("Make sure to provide a brief description!"),
            Length(
                min=10,
                max=1500,
                message="A description of at least 10 characters would be better!"
            ),
        ]
    )
    price = IntegerField("Price", validators=[DataRequired(), NumberRange(min=6, max=999, message="Your hourly task rate must be between $6 and $999")])
    task_img_url = StringField(
        "Image URL",
        validators=[
            DataRequired(),
            Length(
                min=0,
                max=1500,
                message="The image URL must be less than 1500 characters"
            ),
            URL(message="Please enter a valid URL for your image")
        ]
    )
    submit = SubmitField("Submit")

class TaskUpdateForm(FlaskForm):
    title = StringField(
        "Title",
        validators=[
            DataRequired(),
            Length(min=4, max=50, message="Please make your title between 4 and 50 characters."),
        ],
    )
    description = StringField(
        "Description",
        validators=[
            DataRequired("Make sure to provide a brief description!"),
            Length(
                min=10,
                max=1500,
                message="Please make your description between 10 and 1,500 characters.",
            ),
        ],
    )
    price = IntegerField("Price", validators=[DataRequired(), NumberRange(min=6, max=999, message="Your hourly task rate must be between $6 and $999")])
    submit = SubmitField("Submit")
