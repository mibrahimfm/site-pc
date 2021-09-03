import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from 'react-bootstrap/Button';
import {makeStyles } from '@material-ui/core/styles';
import history from '../../../History';
import TabelaAula1 from '../PaginaRoteiroAulas/RoteiroAula1/TabelaAula1';
import TabelaAula2 from '../PaginaRoteiroAulas/RoteiroAula2/TabelaAula2';
import TabelaAula3 from '../PaginaRoteiroAulas/RoteiroAula3/TabelaAula3';
import TabelaAula4 from '../PaginaRoteiroAulas/RoteiroAula4/TabelaAula4';
import TabelaAula5 from '../PaginaRoteiroAulas/RoteiroAula5/TabelaAula5';
import TabelaAula6 from '../PaginaRoteiroAulas/RoteiroAula6/TabelaAula6';
import TabelaAula7 from '../PaginaRoteiroAulas/RoteiroAula7/TabelaAula7';
import TabelaAula8 from '../PaginaRoteiroAulas/RoteiroAula8/TabelaAula8';

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

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
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
  
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h5 id="simple-modal-title">Aula {props.title} - {props.subtitle} </h5>
      {props.title === '1' ? <TabelaAula1></TabelaAula1> : <div></div>}
      {props.title === '2' ? <TabelaAula2></TabelaAula2> : <div></div>}
      {props.title === '3' ? <TabelaAula3></TabelaAula3> : <div></div>}
      {props.title === '4' ? <TabelaAula4></TabelaAula4> : <div></div>}
      {props.title === '5' ? <TabelaAula5></TabelaAula5> : <div></div>}
      {props.title === '6' ? <TabelaAula6></TabelaAula6> : <div></div>}
      {props.title === '7' ? <TabelaAula7></TabelaAula7> : <div></div>}
      {props.title == '8' ? <TabelaAula8></TabelaAula8> : <div></div>}
      {/*props.title == '9' ? <TabelaAula9></TabelaAula9> : <div></div>}
      {props.title == '10' ? <TabelaAula10></TabelaAula10> : <div></div>}
      {props.title == '11' ? <TabelaAula11></TabelaAula11> : <div></div>}
      {props.title == '12' ? <TabelaAula12></TabelaAula12> : <div></div>}
      {props.title == '13' ? <TabelaAula13></TabelaAula13> : <div></div>}
      {props.title == '14' ? <TabelaAula14></TabelaAula14> : <div></div>}
      {props.title == '15' ? <TabelaAula15></TabelaAula15> : <div></div>} */}

      <Button
        variant="dark" onClick={() => history.push(`/aula-${props.title}`)}>
        Ver Mais
      </Button>

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