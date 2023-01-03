from flask import Blueprint, jsonify, render_template, request, redirect
from flask_login import login_required, current_user
from app.models import db, Task
from .auth_routes import validation_errors_to_error_messages
from app.forms import TaskUpdateForm, TaskForm

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
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        data = form.data

        new_task = Task(
            title=data["title"],
            description=data["description"],
            price=data["price"],
            task_img_url=data["task_img_url"],
            user_id=current_user.get_id()
        )

        db.session.add(new_task)
        db.session.commit()

        return new_task.to_dict()
    print(validation_errors_to_error_messages(form.errors))
    return { "errors": validation_errors_to_error_messages(form.errors)}, 403

# UPDATE A SINGLE TASK:
@tasks_routes.route("/<int:id>/update", methods=["PUT"])
@login_required
def update_task(id):
    """
    Query for a single task by id and update the task if authorized.
    """
    task = Task.query.get(id)
    task_dict = task.to_dict()

    form = TaskUpdateForm(
        title=task_dict["title"],
        description=task_dict["description"],
        price=task_dict["price"],
    )

    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        data = form.data
        print('data---->', data)

        setattr(task, "title", data["title"])
        setattr(task, "description", data["description"])
        setattr(task, "price", data["price"])

        db.session.commit()
        return task.to_dict()
    print(validation_errors_to_error_messages(form.errors))
    return {"errors": validation_errors_to_error_messages(form.errors)}, 403

## DELETE A SINGLE TASK
@tasks_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_task(id):
    """
    Query for a single task by id and delete the task if authorized.
    """

    task = Task.query.get(id)
    db.session.delete(task)
    db.session.commit()
    return { "message": "Successfully deleted", "status_code": 200}


