import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getTasks } from "../../store/all_tasks";

const TaskIndex = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user)
    const tasks = useSelector((state) => Object.values(state.tasks))
    console.log('tasks --->', tasks)

    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])

    if (!tasks || tasks.length === 0) return null;

    return (
        <>
        <div className="all-tasks-index">
            <div className="single-task-cards">
                {tasks.map((task)=> (
                <img
                alt="task-card-img"
                className="task-img"
                src={task.task_img_url}
                >
                </img>
                <div></div>
                ))}
            </div>
        </div>
        </>
    )

}

export default TaskIndex