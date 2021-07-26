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

function createData(aulas, conteudo, objetivo, atividades) {
  return { aulas, conteudo, objetivo, atividades };
}

const rows = [
  createData('Aula 1', 'osidjoiajsdlad', 'sadaksjdoais', 'asidjasdiasdkpoa'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TabelaAulas() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Aulas</StyledTableCell>
            <StyledTableCell align="right">Conteúdo</StyledTableCell>
            <StyledTableCell align="right">Objetivo</StyledTableCell>
            <StyledTableCell align="right">Recursos e Atividades</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.aulas}
              </StyledTableCell>
              <StyledTableCell align="right">{row.conteudo}</StyledTableCell>
              <StyledTableCell align="right">{row.objetivo}</StyledTableCell>
              <StyledTableCell align="right">{row.atividades}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}