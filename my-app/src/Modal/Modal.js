

import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

export default class ConteudoModal extends Component {
    render() {
        const [show, setShow] = useState(false);
  
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);      

      return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

          </Modal>
        </>
      );
    }
}
