import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import pdf1Aula13 from '../../../../Arquivos/aula13/Aula 13 - Apresentação.pptx'
import pdf2Aula13 from '../../../../Arquivos/aula13/Aula 13 - Roteiro.docx'

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

export default function TabelaAula13(props) {
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
                    <li className={classes.paragraph}>Aprender sobre os blocos de gerenciamento de clones</li>
                    <li className={classes.paragraph}>Continuar a prática dos blocos de comandos previamente utilizados</li>
                    <li className={classes.paragraph}>Criar um jogo de desviar para praticar a utilização dos blocos de clones</li>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    <li className={classes.paragraph}>
                    Scratch - Jogo de Perguntas e Respostas II
                    </li> 
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    <li className={classes.paragraph}>Computador para o professor</li>        
                    <li className={classes.paragraph}>Projetor de vídeo</li>   
                    <li className={classes.paragraph}>Computadores para os alunos utilizarem</li>        
                    <li className={classes.paragraph}>Conexão à Internet</li>        
                    <li className={classes.paragraph}>Turma criada no Scratch caso a versão web do Scratch seja utilizada</li>
                    <li className={classes.paragraph}>Conta dos alunos criadas e adicionadas a turma do Scratch</li>
                    <li className={classes.paragraph}>
                        <a id="simple-modal-description" href={pdf2Aula13} download>Uma cópia da Aula 13 - Roteiro para cada aluno</a>
                        (Recomenda-se que seja impresso colorido)                        
                    </li>  
                    <li className={classes.paragraph}>
                        <a id="simple-modal-description" href={pdf1Aula13} download>Aula 13 - Apresentação</a>                        
                    </li>  
                </StyledTableCell>
                </StyledTableRow>

            </TableBody>
        </Table>
        </TableContainer>
    )


}