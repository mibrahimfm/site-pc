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
          {this.state.showModal && <ConteudoModal/> }
        </Card.Body>
        <Card.Footer style={style.button}>
            <Button
            href={this.props.link}
            variant="primary"
            onClick={handleModal()}
            >
              {this.props.button}
          </Button>
        </Card.Footer>

      </Card>
      )
    }
  }