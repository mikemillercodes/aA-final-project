from flask import Blueprint, jsonify, request, redirect, render_template
from app.models import db, Task
from sqlalchemy import or_

search_routes = Blueprint("search", __name__)

@search_routes.route("/<query>")
def search(query):
    """
    Query for searching all tasks
    """

    formatted_query = " ".join(query.split('+'))

    queried_tasks = Task.query.filter(or_(Task.title.ilike(f"%{formatted_query}%"), Task.description.ilike(f"%{formatted_query}%"))).all()

    return {"query": [task.to_dict() for task in queried_tasks]}
