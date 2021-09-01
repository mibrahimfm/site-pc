import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(metafora, objetivos, recursos) {
  return { metafora, objetivos, recursos };
}

const rows = [
  createData('Viajante doméstico', 'Desenvolver e praticar habilidades fundamentais: raciocínio lógico e pensamento criativo', 'Recursos didáticos familiares aos alunos que não abordam conceitos de comutação diretamente'),
  createData('Observador à distância', 'Aprender sobre algoritmos e praticar o conceito através de atividades familiares', 'Recursos didáticos familiares aos alunos, que não abordam conceitos da computação diretamente'),
  createData('Visitante em tour guiado', 'Construir algoritmos empregando um conjunto limitado de estruturas e comandos', 'Recursos didáticos para prática da computação, porém com limitações'),
  createData('Estrangeiro com tradutor', 'Criar projetos(e.g.: jogos, animações, estórias) utilizando os conceitos e estruturas aprendidos', 'Recursos didáticos para prática da computação sem limitações, mas com auxílios'),
  createData('Estrangeiro sem tradutor', 'Ter a experiência de utilizar linguagens de programaçãotradicionais e ambientes de desenvolvimento', 'Recursos didáticos para prática da computação sem limitações e sem auxílios')
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    maxWidth: 750,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 35,
    marginBottom: 35
  },
});

export default function TabelaMetaforas() {
  const classes = useStyles();

  return (
      <TableContainer component={Paper} style={{marginBottom: '75px'}}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Metáfora</StyledTableCell>
              <StyledTableCell align="left">Objetivos</StyledTableCell>
              <StyledTableCell align="left">Recursos didáticos</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.metafora}
                </StyledTableCell>
                <StyledTableCell align="left">{row.objetivos}</StyledTableCell>
                <StyledTableCell align="left">{row.recursos}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}