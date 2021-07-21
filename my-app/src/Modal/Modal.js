import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

export default class ConteudoModal extends Component {
    render() { 

      let handleClose = true;

      return (
        <>
    
          <Modal show={this.props.show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

          </Modal>
        </>
      );
    }
}
