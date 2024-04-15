export function fetchStatuses (statuses) {
    return {
        type: 'GET_STATUSES',
        payload: statuses,
    }
}

export function fetchTasks (tasks) {
    return {
        type: 'GET_TASKS',
        payload: tasks,
    }
}
