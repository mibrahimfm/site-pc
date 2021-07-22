import Card from 'react-bootstrap/Card';

import React, { Component } from 'react';
import SimpleModal from '../Modal/Modal.js';

export default class AulaCard extends Component {
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
        </Card.Body>
        <Card.Footer style={style.button}>
            <SimpleModal link={this.props.link}
            title={this.props.title}
            subtitle={this.props.subtitle}
            exercicios={this.props.exercicios}
            recursos={this.props.descricao_recursos}
            objetivo={this.props.content}
            >
            </SimpleModal>
        </Card.Footer>        
      </Card>
      )
    }
  }