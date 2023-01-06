import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSingleTask } from "../../store/one_task";
import { deleteTask, getTasks } from "../../store/all_tasks";
import { useEffect } from "react";
import './SingleTask.css'

const SingleTask = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const singleTask = useSelector((state) => state.task[id]);
    console.log('single task ===>', singleTask)
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
                    className="single-task-image"
                    src={singleTask.task_img_url}
                    onError={e => { e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Frog_on_palm_frond.jpg/1200px-Frog_on_palm_frond.jpg"}}
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
                Avg. Project: ${singleTask.price - 5}&mdash;${singleTask.price + 5}        </div>
            <div className="single-task-description">
                {singleTask.description}
            </div>
            {user && user.id === singleTask.user_id &&
                <button
                    className="single-task-update"
                    onClick={() => {
                        history.push(`/tasks/${singleTask.id}/update`)
                    }}
                >Edit Your Task</button>
            }
            {user && user.id === singleTask.user_id &&
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