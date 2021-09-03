import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import pdf2Aula9 from '../../../../Arquivos/aula9/Aula 9 - Apresentação.pptx'
import pdf4Aula9 from '../../../../Arquivos/aula9/Aula 9 - Roteiro.docx'

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

export default function TabelaAula9(props) {
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
                    <li className={classes.paragraph}>Aprender o que é uma condição no contexto da Computação</li>
                    <li className={classes.paragraph}>Entender o que acontece quando uma condição é satisfeita ou não</li>
                    <li className={classes.paragraph}>Aprender o que são as estruturas condicionais</li>
                    <li className={classes.paragraph}>Aprender sobre as estruturas condicionais no contexto do Scratch</li>
                    <li className={classes.paragraph}>Praticar a utilização da estrutura condicional <b>SE</b></li>
                    <li className={classes.paragraph}>Continuar a prática dos blocos de comandos previamente utilizados</li>
                    <li className={classes.paragraph}>Criar um jogo do Pong</li>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    <li className={classes.paragraph}>
                        <a id="simple-modal-description" href="https://scratch.mit.edu/projects/475285085">Scratch - Jogo de Clicar</a>                        
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
                        Estúdio da turma para os alunos compartilharem seus projetos (recomendado)                        
                    </li>  
                    <li className={classes.paragraph}>
                        <a id="simple-modal-description" href={pdf4Aula9} download>Uma cópia da Aula 9 - Roteiro para cada aluno</a>                        
                    </li>  
                    <li className={classes.paragraph}>
                        <a id="simple-modal-description" href={pdf2Aula9} download>Aula 9 - Apresentação</a>                        
                    </li>  
                </StyledTableCell>
                </StyledTableRow>

            </TableBody>
        </Table>
        </TableContainer>
    )


}