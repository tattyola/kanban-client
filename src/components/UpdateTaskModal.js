import React, {useState} from 'react';
import {Button, Input, InputGroup, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const UpdateTaskModal = ({task, updateTask, statuses, priorities}) => {

    const [modal, setModal] = useState(false);
    const [newTask, setNewTask] = useState(task);

    const toggle = () => {
        setModal(!modal);
        setNewTask(task)
    }
    const update = () => {
        setModal(!modal);
        updateTask(task._id, newTask);
    }

    return (
        <div>
            <Button color="outline-danger btn-sm" onClick={toggle}>
                Update
            </Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update task '{task.name}'</ModalHeader>
                <ModalBody>

                    <div>
                        <InputGroup>
                            <InputGroupText>
                                Task name
                            </InputGroupText>
                            <Input
                                onChange={(event) => setNewTask({...newTask, name: event.target.value})}
                                value={newTask.name}
                            />
                        </InputGroup>
                        <br/>
                        <InputGroup>
                            <InputGroupText>
                                Task description
                            </InputGroupText>
                            <Input
                                onChange={(event) => setNewTask({...newTask, description: event.target.value })}
                                value={newTask.description}
                            />
                        </InputGroup>
                    </div>
                    <br/>
                    <div className="form-floating">
                        <select className='form-select' id='floating-select' aria-label='Select priority'
                                onChange={(event) => setNewTask({...newTask, priority: event.target.value })}
                                value={newTask.priority}
                        >
                            {priorities.map((priority, ind) => (
                                <option value={priority} key={ind}>{priority}</option>
                            ))}
                        </select>
                        <label htmlFor='floatingSelect'>Priority</label>
                    </div>
                    <br/>
                    <div className="form-floating">
                        <select className='form-select' id='floating-select' aria-label='Select status'
                                onChange={(event) => setNewTask({...newTask, status: event.target.value })}
                                value={newTask.status}
                        >
                            {statuses.map((status, ind) => (
                                <option value={status} key={ind}>{status}</option>
                            ))}
                        </select>
                        <label htmlFor='floatingSelect'>Status</label>
                    </div>

                </ModalBody>

                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                    {' '}
                    <Button color="primary" onClick={update}>
                        Update
                    </Button>
                </ModalFooter>

            </Modal>
        </div>
    );
};

export default UpdateTaskModal;
