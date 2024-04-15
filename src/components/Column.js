import React from 'react';
import Card from "./Card";

const Column = (props) => {
    return (
        <div className="col">
            <h2>{props.status.title.toUpperCase()}</h2>
            {props.tasks
                .filter(task => (
                    task.status.toLowerCase() === props.status.title.toLowerCase()
                ))
                .sort((a, b) => +a.priority - +b.priority)
                .map(task => (
                    <Card
                        key={task._id}
                        task={task}
                        changePriority={props.changePriority}
                        priorities={props.priorities}
                        changeStatus={props.changeStatus}
                        statuses={props.statuses}
                        deleteTask={props.deleteTask}
                        updateTask={props.updateTask}
                    />
                ))}
        </div>
    );
};

export default Column;
