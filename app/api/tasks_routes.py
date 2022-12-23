from flask import Blueprint, jsonify, render_template, request, redirect
from flask_login import login_required, current_user
from app.models import db, Task
from .auth_routes import validation_errors_to_error_messages

tasks_routes = Blueprint("tasks", __name__)
# ------------------------------ TASK ROUTES ------------------------------#

# GET ALL TASKS:
@tasks_routes.route("")
def get_tasks():
    """
    Queries for all tasks and return them in a list of task dictionaries.
    """

    tasks = Task.query.all()
    return {"Tasks": [task.to_dict() for task in tasks]}

# GET A SINGLE TASK:
@tasks_routes.route("/<int:id>")
def get_one_task(id):
    """
    Query for a single task by id and return it as a dictionary.
    """

    task = Task.query.get(id)
    return task.to_dict()

# CREATE A NEW TASK:
@tasks_routes.route("", methods=["POST"])
@login_required
def post_task():
    """
    A logged-in user can send a post request to create a new task.
    """
    form = TaskForm()