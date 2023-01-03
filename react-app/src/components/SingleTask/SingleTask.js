import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSingleTask } from "../../store/one_task";
import { deleteTask, getTasks } from "../../store/all_tasks";
import { useEffect } from "react";

const SingleTask = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const singleTask = useSelector((state) => state.task[id]);
    const user = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(getSingleTask(id))
    }, [dispatch, id])

    if (!singleTask) return null;

    return (
        <>
            <div className="single-task-detail">
                <img
                    alt="task-card-img"
                    className="task-img"
                    src={singleTask.task_img_url}
                >
                </img>
            </div>
            <div className="single-task-title">
                {singleTask.title}
            </div>
            <div className="single-task-price">
                <img
                    alt="task-price-icon"
                    className="task-price-ticket-icon"
                    src="https://www.svgrepo.com/show/124426/price-ticket.svg"
                ></img>
                Avg. Project: ${singleTask.price - 5} - ${singleTask.price + 5}        </div>
            <div className="single-task-description">
                {singleTask.description}
            </div>
            { user.id === singleTask.user_id && 
            <button
            className="single-task-update"
            onClick={() => {
                history.push(`/tasks/${singleTask.id}/update`)
            }}
            >Edit Your Task</button>
        }
        { user.id === singleTask.user_id && 
        <button 
        className="delete-task"
        onClick={async (e) => {
            e.preventDefault();
            await dispatch(deleteTask(singleTask.id));
            dispatch(getTasks());
            history.push(`/`)
        }}
        >Delete Your Task</button>
        }

        </>
    )

}

export default SingleTask;