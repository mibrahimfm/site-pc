import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import ConteudoModal from '../Modal/Modal';

export default class AulaCard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

   render() {

      const style = {
        container:{
          margin: '10px',
          width: '18rem',
          height: '560px'
        },
        
        header: {
          height: '100px'
        },

        image: {
          height: '210px'
        },

        button:{
          alignSelf: 'center'
        }
      }

      return (
        <Card style={style.container}>
        <Card.Body>
        <Card.Header style={style.header}>
          <Card.Title>{this.props.title}</Card.Title>          
          <Card.Subtitle>{this.props.subtitle}</Card.Subtitle>
        </Card.Header>
          <br></br>
          <Card.Img variant="top" style={style.image} src={this.props.image} />        
          <br></br><br></br>
          <Card.Text>
          {this.props.content}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={style.button}>
            <Button
            //href={this.props.link}
            variant="primary"
            onClick={this.showModal}
            >
              {this.props.button}
          </Button>
        </Card.Footer>
        {this.state.show && <ConteudoModal /> }
      </Card>
      )
    }
  }