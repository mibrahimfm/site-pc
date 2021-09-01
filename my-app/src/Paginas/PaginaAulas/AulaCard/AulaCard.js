import Card from 'react-bootstrap/Card';

import React, { Component } from 'react';
import SimpleModal from '../Modal/Modal.js';

export default class AulaCard extends Component {
   render() {

      const style = {
        container:{
          margin: '10px',
          width: '18rem',
          height: '445px'
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
          <Card.Title>Aula {this.props.title}</Card.Title>          
          <Card.Subtitle>{this.props.subtitle}</Card.Subtitle>
        </Card.Header>
          <br></br>
          <Card.Img variant="top" style={style.image} src={this.props.image} />        
          <br></br><br></br>
        </Card.Body>
        <Card.Footer style={style.button}>
            <SimpleModal 
              link={this.props.link}
              title={this.props.title}
              subtitle={this.props.subtitle}
              objetivo={this.props.content}
              exercicios={this.props.exercicios}
              apresentacao={this.props.apresentacao}
              desafio={this.props.desafio}
              roteiro={this.props.roteiro}
              tabela_objetivos={this.props.tabela_objetivos}
            >
            </SimpleModal>
        </Card.Footer>        
      </Card>
      )
    }
  }