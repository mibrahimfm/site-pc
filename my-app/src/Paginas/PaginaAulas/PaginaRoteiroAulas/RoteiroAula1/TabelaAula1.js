import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import pdf1Aula1 from '../../../../Arquivos/aula1/Exercícios - Iniciante.pdf'
import pdf2Aula1 from '../../../../Arquivos/aula1/Aula 1 - Apresentação.pptx'
import pdf3Aula1 from '../../../../Arquivos/aula1/Desafios.docx'

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

export default function TabelaAula1(props) {
    const classes = useStyles();

    return(
    <TableContainer>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell align="left">Objetivos</StyledTableCell>
                <StyledTableCell align="left">Atividades</StyledTableCell>
                <StyledTableCell align="left">Recursos e Materiais</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                    <li className={classes.paragraph}>Introduzir indiretamente o sequenciamento de ações.</li>
                    <li className={classes.paragraph}>Introduzir indiretamente o registro de soluções.</li>
                    <li className={classes.paragraph}>Introduzir indiretamente o teste de soluções.</li>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                     <li className={classes.paragraph}>Estacionamento Algorítmico</li>        
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    <li className={classes.paragraph}>Um conjunto do Estacionamento Algorítmico (tabuleiro e veículos) para cada aluno</li>
                    <li className={classes.paragraph}>
                        <a id="simple-modal-description" href={pdf1Aula1} download>Uma Folha de Desafios para cada aluno</a>
                    </li>
                    <li className={classes.paragraph}>
                        <a id="simple-modal-description" href={pdf3Aula1} download>Uma Folha de Registro de Soluções para cada aluno</a>
                    </li>
                    <li className={classes.paragraph}>Folhas de rascunho para cada aluno</li>
                    <li className={classes.paragraph}>Materiais de escrever básicos (lápis e borracha)</li>
                    <li className={classes.paragraph}>Computador para o professor</li>        
                    <li className={classes.paragraph}>Projetor de vídeo</li>        
                    <li className={classes.paragraph}>
                        <a id="simple-modal-description" href={pdf2Aula1} download>Aula 1 - Apresentação</a>                        
                    </li>  
                </StyledTableCell>
                </StyledTableRow>

            </TableBody>
        </Table>
        </TableContainer>
    )


}