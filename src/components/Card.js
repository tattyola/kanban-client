import React from 'react';
import DeleteTaskModal from "./DeleteTaskModal";
import UpdateTaskModal from "./UpdateTaskModal";
import {connect} from "react-redux";

const Card = (props) => {

    const priorityToWord = (number) => {
        switch (number) {
            case 1:
                return 'High';
                break;
            case 2:
                return 'Medium';
                break;
            case 3:
                return 'Low';
                break;
            default:
                return 'Low';
        }
    }

    return (
        <div className="card" style={{marginBottom: "20px"}}>
            <div className="card-body">
                <h5 className="card-title">{props.task.name}</h5>
                <p className="card-text">{props.task.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <button
                        type="button"
                        className="btn btn-outline-info btn-sm"
                        onClick={() => props.changeStatus(props.task._id, props.task.status, -1)}
                        disabled={props.statuses[0] === props.task.status}

                    >←
                    </button>
                    {' '}{props.task.status}{' '}
                    <button
                        type="button"
                        className="btn btn-outline-info btn-sm"
                        onClick={() => props.changeStatus(props.task._id, props.task.status, 1)}
                        disabled={props.statuses[props.statuses.length - 1] === props.task.status}
                    >→
                    </button>
                </li>
                <li className="list-group-item">Priority: {props.task.priority}{' '}{priorityToWord(+props.task.priority)}{' '}
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => props.changePriority(props.task._id, +props.task.priority + 1)}
                        disabled={props.priorities[props.priorities.length - 1] === +props.task.priority}>
                    ↓
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => props.changePriority(props.task._id, +props.task.priority - 1)}
                        disabled={props.priorities[0] === +props.task.priority}>
                        ↑
                    </button>
                </li>
            </ul>

            <div className="card-body">

                <DeleteTaskModal
                    task={props.task}
                    deleteTask={props.deleteTask}
                />
                <UpdateTaskModal
                    task={props.task}
                    updateTask={props.updateTask}
                    statuses={props.statuses}
                    priorities={props.priorities}
                />

            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        priorities: state.priorities,
    }
}

export default connect(mapStateToProps)(Card);
