import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import pdf2Aula3 from '../../../../Arquivos/aula3/Aula 3 - Apresentação.pptx'

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

export default function TabelaAula3(props) {
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
                    <li className={classes.paragraph}>Compreender o conceito de laços de repetição</li>
                    <li className={classes.paragraph}>Entender como os laços de repetição podem ser utilizados para simplificar um algoritmo</li>
                    <li className={classes.paragraph}>Identificar ações ou conjunto de ações que se repetem</li>
                    <li className={classes.paragraph}>Utilizar os laços de repetições para agrupar ações e repeti-las</li>
                    <li className={classes.paragraph}>Aprender a utilizar uma linguagem de programação em blocos</li>


                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    <li className={classes.paragraph}>
                      <a href="https://create.kahoot.it/share/kahoot-1-algoritmos-e-programando-em-papel/b77eb400-e955-4ef0-80b6-b5787270369e">
                        Kahoot 1 - Algoritmos e Programando em Papel
                      </a>
                    </li>
                    <li className={classes.paragraph}>Code.org - Curso 2 - Labirinto: Ciclos</li>                    
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    <li className={classes.paragraph}>Computador para o professor</li>        
                    <li className={classes.paragraph}>Projetor de vídeo</li>   
                    <li className={classes.paragraph}>Computadores para os alunos utilizarem</li>        
                    <li className={classes.paragraph}>Conexão à Internet</li>        
                    <li className={classes.paragraph}>Seção da turma criada no Code.org</li>        
                    <li className={classes.paragraph}>Conta dos alunos adicionadas à seção</li>
                    <li className={classes.paragraph}>
                        <a id="simple-modal-description" href={pdf2Aula3} download>Aula 3 - Apresentação</a>                        
                    </li>  
                </StyledTableCell>
                </StyledTableRow>

            </TableBody>
        </Table>
        </TableContainer>
    )


}