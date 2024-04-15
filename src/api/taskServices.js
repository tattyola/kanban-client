import axios from "axios";
import { fetchTasks } from "../reduxStore/actions"

export const getTasks = () => {
    return (dispatch) => {
        axios.get('https://expressjs-server.vercel.app/tasks')
            .then(res => {
                dispatch(fetchTasks(res.data))
            })
            .catch(err => console.log(err))
    }
}

export const patchPriority = (id, newPriority) => {
    return (dispatch) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {priority: newPriority})
            .then(res => dispatch(getTasks()))
            .catch(err => console.log(err))
    }
}

export const patchTaskStatus = (id, newStatus) => {
    return (dispatch) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {status: newStatus})
            .then(res => dispatch(getTasks()))
            .catch(err => alert(err))
    }
}

export const postTask = (newTask) => {
    return (dispatch) => {
        axios.post('https://expressjs-server.vercel.app/tasks', newTask)
            .then(res => dispatch(getTasks()))
            .catch(error => console.log(error))
    }
}
export const deleteTaskById = (id) => {
    return (dispatch) => {
        axios.delete(`https://expressjs-server.vercel.app/tasks/${id}`)
            .then(res => dispatch(getTasks()))
            .catch(error => console.log(error))
    }
}

export const patchTask = (id, newTask) => {
    return (dispatch) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, newTask)
            .then(res => dispatch(getTasks()))
            .catch(err => alert(err))
    }
}
