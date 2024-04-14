import './App.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Column from "./Column";
import CreateTaskModal from "./CreateTaskModal";

function App() {

    const [statuses, setStatuses] = useState([]);
    const [tasks, setTasks] = useState([])
    const priorities = [1, 2, 3];

    const getStatuses = () => {
        axios.get('https://expressjs-server.vercel.app/statuses')
            .then(res => {
                setStatuses(res.data)
            })
            .catch(err => console.log(err))
    }
    const getTasks = () => {
        axios.get('https://expressjs-server.vercel.app/tasks')
            .then(res => {
                setTasks(res.data);
            })
            .catch(err => console.log(err))
    }
    const changePriority = (id, newPriority) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {priority: newPriority})
            .then(res => {
                getTasks();
            })
            .catch(err => console.log(err))
    }
    const changeStatus = (id, currentStatus, direction) => {
        const myStatuses = statuses.map(status => status.title);
        const currentIndex = myStatuses.indexOf(currentStatus);
        const newIndex = currentIndex + direction;
        const newStatus = myStatuses[newIndex];
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {status: newStatus})
            .then(res => {
                getTasks();
            })
            .catch(err => alert(err))
    }
    const createTask = (newTask) => {
        axios.post('https://expressjs-server.vercel.app/tasks', newTask)
            .then(res => {
                getTasks();
            })
            .catch(error => console.log(error)
            )
    }
    const deleteTask = (id) => {
        axios.delete(`https://expressjs-server.vercel.app/tasks/${id}`)
            .then(res => {
                getTasks();
            })
            .catch(error => console.log(error)
            )
    }
    const updateTask = (id, newTask) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, newTask)
            .then(res => {
                getTasks();
            })
            .catch(err => alert(err))
    }

    useEffect(() => {
        getStatuses();
        getTasks();
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
