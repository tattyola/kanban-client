import React, {useState} from 'react';
import {Button, Input, InputGroup, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const DeleteTaskModal = ({ task, deleteTask }) => {

    const [modal, setModal] = useState(false);
    const [checking, setChecking] = useState('')
    const toggle = () => {
        setModal(!modal);
        setChecking('');
    }
    const onDelete = () => {
        toggle();
        deleteTask(task._id)
    }
    const onCancel = () => {
        toggle();
        setChecking('');
    }

    return (
        <>
            <Button color="outline-warning btn-sm" onClick={toggle}>
                Delete
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete task</ModalHeader>

                <ModalBody>
                    <p>To confirm type <b>'{task.name}'</b> in the box below</p>
                    <InputGroup style={{marginBottom: '15px'}}>
                        <Input
                            onChange={
                                (event) => {
                                    setChecking(event.target.value)
                                }
                            }
                            value={checking}
                            placeholder="Task name"
                        />
                    </InputGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="secondary" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button disabled={checking !== task.name} color="primary" onClick={onDelete}>
                        Delete
                    </Button>{' '}
                </ModalFooter>

            </Modal>
        </>
    );
};

export default DeleteTaskModal;
