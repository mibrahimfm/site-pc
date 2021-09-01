import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from 'react-bootstrap/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import history from '../../../History';
import TabelaAula1 from '../PaginaRoteiroAulas/RoteiroAula1/TabelaAula1';
import TabelaAula2 from '../PaginaRoteiroAulas/RoteiroAula2/TabelaAula2';
import TabelaAula3 from '../PaginaRoteiroAulas/RoteiroAula3/TabelaAula3';

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    width: `800px`
  };
}

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  table: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 35,
    marginBottom: 35
  },
  paragraph:{
    padding: 0,
    margin: 0,
  }
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let exercicios, apresentacao, desafio, roteiro;
  exercicios = "";
  apresentacao = "";
  desafio = "";
  roteiro = "";
  if(props.exercicios){
    exercicios =  
    <ul>  
      <a id="simple-modal-description" href={props.exercicios} download>
          Material {props.title}
        </a>
    </ul>
  }
  if(props.apresentacao){
    apresentacao =  
    <ul>  
      <a id="simple-modal-description" href={props.apresentacao} download>
      Apresentação {props.title}
        </a>
    </ul>
  }  
  if(props.desafio){
    desafio =  
    <ul>  
      <a id="simple-modal-description" href={props.desafio} download>
        Desafio {props.title}
      </a>
    </ul>
  }
  if(props.roteiro){
    roteiro =  
    <ul>  
      <a id="simple-modal-description" href={props.roteiro} download>
        Roteiro {props.title}
      </a>
    </ul>
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h5 id="simple-modal-title">Aula {props.title} - {props.subtitle} </h5>
      {props.title == '1' ? <TabelaAula1></TabelaAula1> : <div></div>}
      {props.title == '2' ? <TabelaAula2></TabelaAula2> : <div></div>}
      {props.title == '3' ? <TabelaAula3></TabelaAula3> : <div></div>}


      <Button
        variant="dark" onClick={() => history.push(`/aula-${props.title}`)}>
        Ver Mais
      </Button>
{/*       
      {exercicios}
      {apresentacao}
      {desafio}
      {roteiro}
      <ul>
        <a id="simple-modal-description" href={props.link} target="_blank">
          Drive com todos os materiais dessa aula
        </a>
      </ul> */}

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