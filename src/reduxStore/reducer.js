const initialState = {
    statuses: [],
    tasks: [],
    appName: 'Kanban Board',
    priorities: [1, 2, 3],
};

const kanbanReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'GET_STATUSES':
            return {...state, statuses: action.payload};
        case 'GET_TASKS':
            return {...state, tasks: action.payload};
        case 'CHANGE_PRIORITY_UP':
            const newTasks = state.tasks.map(task =>
                task.id === action.payload ? {...task,priority: task.priority + 1} : task);
            return {...state, tasks: newTasks};
        case 'CHANGE_PRIORITY_DOWN':
            const updatedTasks = state.tasks.map(task =>
                task.id === action.payload ? {...task,priority: task.priority - 1} : task);
            return {...state, tasks: updatedTasks};
        case 'UPDATE_TASKS':
            return {...state, tasks: action.payload};
        default:
            return state;
    }
}

export default kanbanReducer;
