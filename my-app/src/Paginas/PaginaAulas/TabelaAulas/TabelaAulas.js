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
  createData('1', 'Raciocínio Lógico', '[VD] Resolver desafios de lógica e registrar suas soluções', 'Resolução dos desafios do nível iniciante do Estacionamento Algorítmico. Além da resolução, os alunos devem fazer o registro dos passos para resolver os desafios e testá-los.'),
  createData('2', 'Algoritmos e Decomposição', '[OD] Aprender o conceito de algoritmos e decompor tarefas do cotidiano. [VTD] Criar algoritmos para atividades simples', 'Apresentação do conceito de algoritmos aos alunos fazendo alusão às soluções registradas por eles na aula anterior. Condução da atividade Decomposição da Turma da Mônica e apresentação do vídeo ilustrando a importância da decomposição. Condução do Programando em Papel. Condução do LightBot'),
  createData('3', 'Laços de Repetição', '[OD] Aprender o conceito de Laços de Repetição [VTD] Praticar a utilização dos Laços de Repetição', 'Revisão do conteúdo e atividades conduzidas na Aula 2 utilizando a ferramenta Kahoot!. Apresentação dos laços de repetição e Code.org. Resolução dos desafios da lição Labirinto: Ciclos do Curso 2 do Code.org. A lição requer que os alunos identifiquem ações ou grupo de ações que devem ser repetidas utilizando um comando de repetição'),
  createData('4', 'Laços de Repetição', '[VTD] Praticar a utilização dos loops', 'Explicação teórica sobre a identificação de ações se repetindo e apresentação de algumas dicas que os alunos podem utilizar para resolver os desafios da lição. Finalização dos desafios da lição. Disponibilização das lições Artista: Ciclos e Abelha: Ciclos aos alunos que finalizarem os desafios do Labirinto: Ciclos'),
  createData('5', 'Ambiente de LPV', '[EcT] Aprender sobre o ambiente de programação visual [OD] Aprender sobre o Plano Cartesiano se necessário', 'Revisão dos conteúdos abordados até a quinta aula utilizando o Kahoot!. Introdução ao Plano Cartesiano. Apresentação da ferramenta Scratch aos alunos: a ferramenta, sua finalidade e os principais blocos de movimento, aparência e evento'),
  createData('6', 'Projeto Introdutório', '[EcT] Desenvolver projeto introdutório para praticar o que foi aprendido na aula anterior', 'Revisão do Plano Cartesiano e Scratch. Condução da atividade Anime seu Nome no Scratch, onde os alunos devem animar as letras dos seus nomes ou apelidos. Condução de uma votação para decidir os projetos mais interessantes no final da aula caso haja tempo disponível'),
  createData('7', 'Projeto Simples', '[EcT] Desenvolver projeto simples', 'Apresentação e votação dos melhores projetos do Anime seu Nome caso não tenha sido possível realizá-las no fim da aula anterior. Desenvolvimento de um jogo simples de clicar no Scratch. No jogo, um personagem fica aparecendo e desaparecendo regularmente no cenário e o jogador deve clicar no personagem'),
  createData('8', 'Estruturas Condicionais', '[OD] Aprender sobre condicionais [EcT] Desenvolver projeto utilizando condicionais', 'Apresentação do conceito de condicionais. Condução da Dinâmica das Palmas onde os alunos devem verificar se o número apresentado é maior que 5 e bater um determinado número de palmas conforme o resultado verificação. Implementação no Scratch do Jogo da Coleta, jogo simples onde o jogador deve controlar um personagem para coletar objetos no cenário'),
  createData('9', 'Estruturas Condicionais', '[EcT] Desenvolver projeto utilizando outros tipos de condicionais. Ele pode ser uma extensão dos projetos anteriores se possível', 'Continuação à prática das condicionais no Scratch através do desenvolvimento do jogo Pong, onde o jogador deve movimentar uma raquete para impedir que a bola caia no chão'),
  createData('10', 'Variáveis', '[OD] Aprender sobre variáveis [EcT] Desenvolver projeto utilizando variáveis. Ele pode ser uma extensão dos projetos anteriores caso variáveis possam ser incluídas', 'Apresentação do conceito de variáveis e o seu propósito. A utilização das variáveis é colocada em prática através da implementação de sistemas de pontuação para o Jogo de Clicar, Jogo da Coleta e Pong no Scratch'),
  createData('11', 'Especialização: Scratch', '[OD] Aprender sobre os sensores pergunte e resposta [EcT] Desenvolver projeto para praticar a utilização dos sensores pergunte e resposta', 'Introdução aos blocos pergunte e resposta. Desenvolvimento de um Jogo de Perguntas e Respostas simples no Scratch. As perguntas e respostas são específicas, sendo sempre as mesmas. Um sistema de pontuação pode ser adicionado caso os alunos consigam terminar o desenvolvimento antes da aula terminar'),
  createData('12', 'Especialização: Scratch', '[EcT] Desenvolver projeto para praticar a utilização dos sensores pergunte e resposta', 'Desenvolvimento de um Jogo de Perguntas de Matemática para prática de tabuada no Scratch. Neste jogo, as perguntas são a multiplicação de dois números aleatórios, requerendo a utilização de variáveis para armazenar os números a serem multiplicados e fazer o processo de verificação das respostas'),
  createData('13', 'Especialização: Scratch', '[OD] Aprender sobre clones [EcT] Desenvolver projeto para praticar a utilização dos clones', 'Introdução aos comandos para gerenciar clones no Scratch. Desenvolvimento de um jogo de desviar no Scratch. Neste jogo, o personagem deve evitar objetos caindo do céu'),
  createData('14', 'Árvores de Decisão', '[OD] Aprender sobre árvores de decisão e criar uma árvore de decisão simplificada [EcT] Desenvolver projeto baseado na árvore de decisão', 'Apresentação do conceito de árvores de decisão. Criação de árvores de decisão para guiar o fluxo de uma estória com múltiplos fins. Implementação da estória no Scratch'),
  createData('15', 'Árvores de Decisão', '[EcT] Desenvolver projeto baseado na árvore de decisão', 'Finalização da implementação da estória no Scratch iniciada na aula anterior. Modificação e extensão da estória implementada'),

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
            <StyledTableCell align="left">Aula</StyledTableCell>
            <StyledTableCell align="left">Conteúdo</StyledTableCell>
            <StyledTableCell align="left">Objetivo</StyledTableCell>
            <StyledTableCell align="left">Recursos e Atividades</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.aulas}
              </StyledTableCell>
              <StyledTableCell align="justify">{row.conteudo}</StyledTableCell>
              <StyledTableCell align="justify">{row.objetivo}</StyledTableCell>
              <StyledTableCell align="justify">{row.atividades}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}