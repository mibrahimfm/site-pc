import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';

export default class AulaCard extends Component {
    render() {
      const style = {
        container:{
          margin: '10px',
          width: '18rem',
        }
      }

      return (
        <Card style={style.container}>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Subtitle></Card.Subtitle>
          <br></br>
          <Card.Text>
          {this.props.content}
          </Card.Text>
          <Button  
            href={this.props.link}
            variant="primary">
              {this.props.button}
          </Button>
        </Card.Body>
      </Card>
      )
    }
  }