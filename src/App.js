import './App.css';
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Column from "./components/Column";
import CreateTaskModal from "./components/CreateTaskModal";
import { useDispatch, useSelector } from "react-redux";
import { getStatuses } from './api/statusServices'
import {deleteTaskById, getTasks, patchPriority, patchTaskStatus, patchTask, postTask} from './api/taskServices';

function App() {

    const dispatch = useDispatch();
    const statuses = useSelector(state => state.statuses);
    const tasks = useSelector(state => state.tasks);
    const priorities = [1, 2, 3];

    const changePriority = (id, newPriority) => {
        dispatch(patchPriority(id, newPriority))
    }
    const changeStatus = (id, currentStatus, direction) => {
        const myStatuses = statuses.map(status => status.title);
        const currentIndex = myStatuses.indexOf(currentStatus);
        const newIndex = currentIndex + direction;
        const newStatus = myStatuses[newIndex];
        dispatch(patchTaskStatus(id, newStatus))
    }
    const createTask = (newTask) => {
        dispatch(postTask(newTask));
    }
    const deleteTask = (id) => {
        dispatch(deleteTaskById(id));
    }
    const updateTask = (id, newTask) => {
        dispatch(patchTask(id, newTask));
    }

    useEffect(() => {
        dispatch(getStatuses());
        dispatch(getTasks());
    }, []);

    console.log(statuses)
    console.log(tasks)

    return (
        <div className="App">
            <h1>Kanban Board</h1>
            <CreateTaskModal
                priorities={priorities}
                statuses={statuses.map(status => status.title)}
                createTask={createTask}
            />
            <div className="container text-center">
                <div className="row align-items-start">
                    {statuses.map(status => (

                        <Column
                            key={status._id}
                            status={status}
                            tasks={tasks}
                            changePriority={changePriority}
                            priorities={priorities}
                            changeStatus={changeStatus}
                            statuses={statuses.map(status => status.title)}
                            deleteTask={deleteTask}
                            updateTask={updateTask}
                        />
                    ))}

                </div>
            </div>
        </div>
    );
}
export default App;
