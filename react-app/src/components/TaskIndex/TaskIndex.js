import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getTasks } from "../../store/all_tasks";
import './TaskIndex.css'

const TaskIndex = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user)
    const tasks = useSelector((state) => Object.values(state.tasks))

    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])

    if (!tasks || tasks.length === 0) return null;

    return (
        <>
        <div className="all-tasks-header">Popular Projects in Your City</div>
        <div className="all-tasks-index">
                {tasks.map((task)=> (
                   
            <div className="single-task-cards">
                <NavLink className="task-link" to={`/tasks/${task.id}`}>
                <img
                alt="task-card-img"
                className="task-img"
                src={task.task_img_url}
                >
                </img>
                </NavLink>
                <div className="task-title">
                    {task.title}
                </div>
                <div className="task-price">
                    <img 
                    alt="task-price-icon"
                    className="task-price-ticket-icon"
                    src="https://www.svgrepo.com/show/124426/price-ticket.svg"
                    ></img>
                    Avg. Project: ${task.price - 5} - ${task.price + 5}
                    </div>
            </div>
                ))}
        </div>
        </>
    )

}

export default TaskIndex