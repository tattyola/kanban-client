import React, {useState} from 'react';
import {Button, Input, InputGroup, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";

const CreateTaskModal = ({statuses, priorities, createTask}) => {

    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(priorities[0]);
    const [status, setStatus] = useState(statuses[0]);

    const toggle = () => {
        setModal(!modal);
        setName('');
        setDescription('');
        setPriority(priorities[0]);
        setStatus(statuses[0]);
    }
    const saveButtonHandler = () => {
        const newTask = {
            name,
            description,
            priority,
            status,
        }
        createTask(newTask);
        toggle();
    }

    return (
        <div>
            <Button color="danger" onClick={toggle}>
                Create New Task
            </Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>

                <ModalBody>

                    <div>
                        <InputGroup>
                            <InputGroupText>
                                Task name
                            </InputGroupText>
                            <Input
                                value={name}
                                onChange={(event) => setName(event.target.value)}/>
                        </InputGroup>
                        <br/>
                        <InputGroup>
                            <InputGroupText>
                                Task description
                            </InputGroupText>
                            <Input
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                        </InputGroup>
                    </div>
                    <br/>
                    <div className="form-floating">
                        <select className='form-select' id='floating-select' aria-label='Select priority'
                                value={priority}
                                onChange={(event) => setPriority(event.target.value)}
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
                                value={status}
                                onChange={(event) => setStatus(event.target.value)}
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
                    <Button color="primary" onClick={saveButtonHandler}>
                        Save
                    </Button>

                </ModalFooter>
            </Modal>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        priorities: state.priorities,
    }
}

export default connect(mapStateToProps)(CreateTaskModal);
