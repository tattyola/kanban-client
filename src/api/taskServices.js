import axios from "axios";
import { fetchTasks } from "../reduxStore/actions"
const BASE_URL = 'http://localhost:4000'


export const getTasks = () => {
    return (dispatch) => {
        axios.get(`${BASE_URL}/tasks`)
            .then(res => {
                dispatch(fetchTasks(res.data))
            })
            .catch(err => console.log(err))
    }
}

export const patchPriority = (id, newPriority) => {
    return (dispatch) => {
        axios.patch(`${BASE_URL}/tasks/${id}`, {priority: newPriority})
            .then(res => dispatch(getTasks()))
            .catch(err => console.log(err))
    }
}

export const patchTaskStatus = (id, newStatus) => {
    return (dispatch) => {
        axios.patch(`${BASE_URL}/tasks/${id}`, {status: newStatus})
            .then(res => dispatch(getTasks()))
            .catch(err => alert(err))
    }
}

export const postTask = (newTask) => {
    return (dispatch) => {
        axios.post(`${BASE_URL}/tasks`, newTask)
            .then(res => dispatch(getTasks()))
            .catch(error => console.log(error))
    }
}

export const deleteTaskById = (id) => {
    return (dispatch) => {
        axios.delete(`${BASE_URL}/tasks/${id}`)
            .then(res => dispatch(getTasks()))
            .catch(error => console.log(error))
    }
}

export const patchTask = (id, newTask) => {
    return (dispatch) => {
        axios.patch(`${BASE_URL}/tasks/${id}`, newTask)
            .then(res => dispatch(getTasks()))
            .catch(err => alert(err))
    }
}
