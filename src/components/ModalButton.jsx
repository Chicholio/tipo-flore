import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { ActionTipoFlor } from '../actions/ActionTipoFlor';
import { useForm } from '../hooks/useForm';
import uuid from 'react-uuid'
import styled from 'styled-components'

const DivModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
`

const ModalButton = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formValue, handleInputChange, reset] = useForm ({
        nombre: '',
        url: '',
        descripcion: ''
    })

    const { nombre, url, precio, descripcion } = formValue

    const dispatch = useDispatch()

    const AgregarTipoFlor = flor => {
        dispatch(ActionTipoFlor(flor))
    }

    const handleSubmit = e => {
        e.preventDefault()

        AgregarTipoFlor ({
            id: uuid(),
            nombre,
            url,
            descripcion
        })

        reset()
    }

    return (
        <DivModal>
            <Button variant="primary" onClick={handleShow}>
                Añade tu Tipo Flor
            </Button>

            <hr style={{width: '100%'}} />

            <p>Aqui se mostraran tus flores</p>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingresa Tipo Flor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Tipo Flor</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Nombre TipoFlor" 
                                name="nombre"
                                autoComplete="off"
                                value={nombre}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Imagen Tipo Flor (URL)</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Imagen TipoFlor"
                                name="url"
                                autoComplete="off"
                                value={url}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Descripcion Tipo Flor</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="descripcion"
                                autoComplete="off"
                                value={descripcion}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Button type="submit" variant="primary">
                            Añadir TipoFlor
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </DivModal>
    )
}

export default ModalButton
