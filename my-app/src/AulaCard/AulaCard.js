import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import ConteudoModal from '../Modal/Modal';

export default class AulaCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
    }
  }  

  handleShow = () => {this.setState(!this.state)};      

   render() {

      const style = {
        container:{
          margin: '10px',
          width: '18rem',
        }
      }

      return (
        <Card style={style.container}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>          
          <Card.Subtitle>{this.props.subtitle}</Card.Subtitle>
          <br></br>
          <Card.Img variant="top" src={this.props.image} />        
          <br></br><br></br>
          <Card.Text>
          {this.props.content}
          </Card.Text>
          <Button  
            href={this.props.link}
            variant="primary"
            onClick={handleModal()}
            >
              {this.props.button}
          </Button>

          {this.state.showModal && <ConteudoModal/> }
        </Card.Body>
      </Card>
      )
    }
  }