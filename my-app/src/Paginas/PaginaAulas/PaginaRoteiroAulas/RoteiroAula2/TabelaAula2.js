import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import pdf1Aula2 from '../../Arquivos/aula2/Criando Algoritmos.pdf'
import pdf2Aula2 from '../../Arquivos/aula2/Aula 2 - Apresentação.pdf'
import pdf3Aula2 from '../../Arquivos/aula2/Criando Figuras.pdf'

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
                    <li className={classes.paragraph}>Compreender o conceito de algoritmos.</li>
                    <li className={classes.paragraph}>Entender a importância da definição precisa de instruções.</li>
                    <li className={classes.paragraph}>Praticar a criação de algoritmos simples.</li>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    <li className={classes.paragraph}>Programação em Papel, LightBot*, KidloCoding</li>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    <li className={classes.paragraph}>
                        <a id="simple-modal-description" href={pdf1Aula2} download>
                        Uma folha do Criando Algoritmos para cada aluno  </a>
                    </li>                   
                    <li className={classes.paragraph}>
                        <a id="simple-modal-description" href={pdf3Aula2} download>
                        Uma folha do Criando Figuras para cada aluno  </a>
                    </li>
                    <li className={classes.paragraph}>Materiais de escrever básicos (lápis e borracha)</li>
                    <li className={classes.paragraph}>Computador para o professor</li>        
                    <li className={classes.paragraph}>Projetor de vídeo</li>        
                    <li className={classes.paragraph}>
                        <a id="simple-modal-description" href={pdf2Aula2} download>Aula 2 - Apresentação</a>                        
                    </li>  
                </StyledTableCell>
                </StyledTableRow>

            </TableBody>
        </Table>
        </TableContainer>
    )


}