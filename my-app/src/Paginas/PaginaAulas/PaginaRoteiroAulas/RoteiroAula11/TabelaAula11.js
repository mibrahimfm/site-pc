import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import pdf1Aula11 from '../../../../Arquivos/aula11/Aula 11 - Apresentação.pptx';
import pdf2Aula11 from '../../../../Arquivos/aula11/Aula 11 - Roteiro.docx';

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

export default function TabelaAula11(props) {
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
                    <li className={classes.paragraph}>Aprender sobre os sensores pergunte e resposta</li>
                    <li className={classes.paragraph}>Praticar a utilização do <b>se</b> e <b>senão</b></li>
                    <li className={classes.paragraph}>Continuar a prática dos blocos de comandos previamente utilizados</li>
                    <li className={classes.paragraph}>Criar um jogo de perguntas e respostas simples</li>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    <li className={classes.paragraph}>
                    <a href="https://scratch.mit.edu/projects/476325237">Scratch - Jogo de Perguntas e Respostas I</a>
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
                        <a id="simple-modal-description" href={pdf2Aula11} download>Uma cópia da Aula 11 - Roteiro para cada aluno</a>
                        (Recomenda-se que seja impresso colorido)                        
                    </li>  
                    <li className={classes.paragraph}>
                        <a id="simple-modal-description" href={pdf1Aula11} download>Aula 11 - Apresentação</a>                        
                    </li>  
                </StyledTableCell>
                </StyledTableRow>

            </TableBody>
        </Table>
        </TableContainer>
    )


}