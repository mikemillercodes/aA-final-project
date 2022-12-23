from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField, IntegerField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange, url

# ------------------------------ TASK FORM ------------------------------ #

class TaskForm(FlaskForm):
    