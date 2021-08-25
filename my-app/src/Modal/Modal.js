import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from 'react-bootstrap/Button';

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    width: `700px`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let link1, link2, link3, link4;
  link1 = "";
  link2 = "";
  link3 = "";
  link4 = "";
  if(props.link1){
    link1 =  
    <ul>  
      <a id="simple-modal-description" href={props.link1} download>
          Material {props.title}
        </a>
      <br></br>
    </ul>
  }
  if(props.link2){
    link2 =  
    <ul>  
      <a id="simple-modal-description" href={props.link2} download>
      Apresentação {props.title}
        </a>
      <br></br>
    </ul>
  }  
  if(props.link3){
    link3 =  
    <ul>  
      <a id="simple-modal-description" href={props.link3} download>
        Desafio {props.title}
      </a>
      <br></br>
    </ul>
  }
  if(props.link4){
    link4 =  
    <ul>  
      <a id="simple-modal-description" href={props.link4} download>
        Roteiro {props.title}
      </a>
      <br></br>
    </ul>
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{props.title}</h2>
      <h4 id="simple-modal-subtitle">{props.subtitle}</h4>
      <div>
        Recursos e Atividades:
        {props.recursos}
      </div>
      <br></br>
      {link1}
      {link2}
      {link3}
      {link4}
      <ul>
        <a id="simple-modal-description" href={props.link} target="_blank">
          Drive com todos os materiais dessa aula
        </a>
      </ul>
    </div>
  );

  return (
    <div >
      <Button
        variant="dark" onClick={handleOpen}>
        Acessar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}