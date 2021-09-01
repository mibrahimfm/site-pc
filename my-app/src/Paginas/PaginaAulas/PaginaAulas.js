import './PaginaAulas.css';
import card1 from '../../images/aula_1.png'
import card2 from '../../images/aula_2.png'
import card3 from '../../images/aula_3.png'
import card4 from '../../images/aula_4.png'
import card5 from '../../images/aula_5.png'
import card6 from '../../images/aula_6.png'
import card7 from '../../images/aula_7.png'
import card8 from '../../images/aula_8.png'
import card9 from '../../images/aula_9.png'
import card10 from '../../images/aula_10.png'
import card11 from '../../images/aula_11.png'
import card12 from '../../images/aula_12.png'
import card13 from '../../images/aula_13.png'
import card14 from '../../images/aula_14.png'
import card15 from '../../images/aula_15.png'
import AulaCard from './AulaCard/AulaCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid';

import pdf1Aula2 from '../../Arquivos/aula2/Criando Algoritmos.pdf'
import pdf2Aula2 from '../../Arquivos/aula2/Aula 2 - Apresentação.pdf'
import pdf3Aula2 from '../../Arquivos/aula2/Criando Figuras.pdf'
import pdf2Aula3 from '../../Arquivos/aula3/Aula 3 - Apresentação.pptx'
import pdf2Aula4 from '../../Arquivos/aula4/Aula 4 - Apresentação.pptx'
import pdf2Aula5 from '../../Arquivos/aula5/Aula 5 - Apresentação.pptx'
import pdf1Aula6 from '../../Arquivos/aula6/Cartões de Votação.docx'
import pdf2Aula6 from '../../Arquivos/aula6/Aula  6 - Apresentação.pptx'
import pdf4Aula6 from '../../Arquivos/aula6/Aula 6 - Roteiro.docx'
import pdf2Aula7 from '../../Arquivos/aula7/Aula 7 - Apresentação.pptx'
import pdf4Aula7 from '../../Arquivos/aula7/Aula 7 - Roteiro.docx'
import pdf2Aula8 from '../../Arquivos/aula8/Aula 8 - Apresentação.pptx'
import pdf4Aula8 from '../../Arquivos/aula8/Aula 8 - Roteiro.pdf'
import pdf2Aula9 from '../../Arquivos/aula9/Aula 9 - Apresentação.pptx'
import pdf4Aula9 from '../../Arquivos/aula9/Aula 9 - Roteiro.docx'
import pdf2Aula10 from '../../Arquivos/aula10/Aula 10 - Apresentação.pdf'
import pdf4Aula10 from '../../Arquivos/aula10/Aula 10 - Roteiro.pdf'
import pdf2Aula11 from '../../Arquivos/aula11/Aula 11 - Apresentação.pptx'
import pdf4Aula11 from '../../Arquivos/aula11/Aula 11 - Roteiro.docx'
import pdf2Aula12 from '../../Arquivos/aula12/Aula 12 - Apresentação.pdf'
import pdf4Aula12 from '../../Arquivos/aula12/Aula 12 - Roteiro.docx'
import pdf2Aula13 from '../../Arquivos/aula13/Aula 13 - Apresentação.pptx'
import pdf4Aula13 from '../../Arquivos/aula13/Aula 13 - Roteiro.docx'
import pdf1Aula14 from '../../Arquivos/aula14/Aula 14 - Árvore de Decisão.pdf'
import pdf2Aula14 from '../../Arquivos/aula14/Aula 14 - Apresentação.pdf'
import pdf2Aula15 from '../../Arquivos/aula15/Aula 15 - Apresentação.pdf'
import TabelaAulas from './TabelaAulas/TabelaAulas';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '40px 80px',
  },
}));


function PaginaAulas() {
  const classes = useStyles();
  const tabela_objetivos_aula1 = [{
    objetivos: [
      "Introduzir indiretamente o sequenciamento de ações.",
      "Introduzir indiretamente o registro de soluções.",
      "Introduzir indiretamente o teste de soluções."
    ],
    atividades: ["Estacionamento Algorítmico"],
    recursos:[
      "Um conjunto do Estacionamento Algorítmico (tabuleiro e veículos) para cada aluno",
      "Uma Folha de Desafios para cada aluno",
      "Uma Folha de Registro de Soluções para cada aluno",
      "Folhas de rascunho para cada aluno",
      "Materiais de escrever básicos (lápis e borracha)",
      "Computador para o professor",
      "Projetor de vídeo",
      "Aula 1 - Apresentação"
    ]
  }]


  return (
    <div >
      <header>
        <div className="title-aulas"> Sequência Didática de Pensamento Computacional <br></br> para anos finais do Ensino Fundamental II </div>
      </header>
      <body>
      <div className={classes.root}>
      <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
        >
          <h3>Visão Geral das Aulas</h3>
        </AccordionSummary>
        <AccordionDetails>
        <div className="table">
           <TabelaAulas></TabelaAulas>
        </div>   
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel3a-content"
         id="panel3a-header" 
        >
          <h3>Conteúdo das Aulas</h3>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <AulaCard
                  image={card1}
                  title="1"
                  subtitle="Raciocínio Lógico"
                  content="Resolver desafios de lógica e registrar suas soluções."
                  
                  link='https://drive.google.com/drive/folders/1FmeW0elAy9IHoO7TbGhynKOQeGQ5IJ0N'
                  tabela_objetivos={tabela_objetivos_aula1}
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card2}
                  title="2"
                  subtitle="Introdução ao Sequenciamento de Ações"
                  content="Conceito de algoritmos. Não requer computadores. Material pode ser impresso."
                  exercicios={pdf1Aula2}
                  apresentacao={pdf2Aula2}
                  desafio={pdf3Aula2}
                  link="https://drive.google.com/drive/folders/1D_BfjZAmsjnwlQbl0DOnoGBDGl--d5jJs"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card3}
                  title="3"
                  subtitle="Introdução aos Laços de Repetição"
                  content="Exercícios em site interativo."
                  apresentacao={pdf2Aula3}
                  link="https://drive.google.com/drive/folders/17-V1mCREFhAi_u89h74vRpGdiKY_aUY2"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card4}
                  title="4"
                  subtitle="Introdução aos Laços de Repetição"
                  content="Exercícios em site interativo."
                  apresentacao={pdf2Aula4}
                  link="https://drive.google.com/drive/folders/1tehgg3CzMwyUPrVmJaK4LyrOpAg04iO_"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card5}
                  title="5"
                  subtitle="Introdução ao Plano Cartesiano"
                  content="Exercícios em site interativo."
                  apresentacao={pdf2Aula5}
                  link="https://drive.google.com/drive/folders/1ptT4DZGqbU6EtUoAwRWT5SycCY4TeA30"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card6}
                  title="6"
                  subtitle=" o seu nome"
                  content="Exercícios em site interativo."
                  exercicios={pdf1Aula6}
                  apresentacao={pdf2Aula6}
                  roteiro={pdf4Aula6}
                  link="https://drive.google.com/drive/folders/14ecl_xTY0SC5HJXjFIS_YlOYBm3d859C"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card7}
                  title="7"
                  subtitle="Blocos de eventos"
                  content="Exercícios em site interativo."
                  apresentacao={pdf2Aula7}
                  roteiro={pdf4Aula7}
                  link="https://drive.google.com/drive/folders/1g20T0F1KPGPtlWiMs6mEhcD9alCoYOp-"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card8}
                  title="8"
                  subtitle="Condicionais - Parte 1"
                  content="Exercícios em site interativo."
                  apresentacao={pdf2Aula8}
                  roteiro={pdf4Aula8}
                  link="https://drive.google.com/drive/folders/1kqqL-PkA3GsB85Nrmnk1bwlFsHitiLsz"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card9}
                  title="9"
                  subtitle="Condicionais - Parte 2"
                  content="Exercícios em site interativo."
                  apresentacao={pdf2Aula9}
                  roteiro={pdf4Aula9}
                  link="https://drive.google.com/drive/folders/1TY5M_G37Yd95IDxuIcccAMuFs3qsXOWU"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card10}
                  title="10"
                  subtitle="Introdução às Variáveis"
                  content="Exercícios em site interativo."
                  apresentacao={pdf2Aula10}
                  roteiro={pdf4Aula10}
                  link="https://drive.google.com/drive/folders/14YAB41hJb9I7DHXBWnQs8Ra2co34_t3N"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card11}
                  title="11"
                  subtitle="Jogo de Perguntas e Respostas - Parte 1"
                  content="Exercícios em site interativo."
                  apresentacao={pdf2Aula11}
                  roteiro={pdf4Aula11}
                  link="https://drive.google.com/drive/folders/1fhFHzjoo3euIzRUsAG1Ouzy_Kh7nlL1k"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card12}
                  title="12"
                  subtitle="Jogo de Perguntas e Respostas - Parte 2"
                  content="Exercícios em site interativo."
                  apresentacao={pdf2Aula12}
                  roteiro={pdf4Aula12}
                  link="https://drive.google.com/drive/folders/1yI4BUQwVpe4hVGOMkHIHe7b_sijsRsiA"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card13}
                  title="13"
                  subtitle="Jogo de Desviar"
                  content="Exercícios em site interativo."
                  apresentacao={pdf2Aula13}
                  roteiro={pdf4Aula13}
                  link="https://drive.google.com/drive/folders/18bVsTSiOU18CkxqHsuM9-Nad5ls5RkE6"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card14}
                  title="14"
                  subtitle="Árvores de Decisão - Parte 1"
                  content="Não requer computadores. Material pode ser impresso."                 
                  exercicios={pdf1Aula14}
                  apresentacao={pdf2Aula14}
                  link="https://drive.google.com/drive/folders/1R2l9sz35e5W2tgnfsrfhSAt9gjh_zpGM"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card15}
                  title="15"
                  subtitle="Árvores de Decisão - Parte 2"
                  content="Não requer computadores. Material pode ser impresso."
                  apresentacao={pdf2Aula15}
                  link="https://drive.google.com/drive/folders/14gMCa7DZ-X_ek6HuN5v_3AsUasdf41QL"
                />
              </Grid>
          </Grid>
        </Grid>
      </Grid>
        </AccordionDetails>
      </Accordion>
      
    </div>
      <p>Todo o material pode ser encontrado no link: <a target="_blank" href="https://drive.google.com/drive/folders/1uAqN4TJovNb9IOHYhSuIALxh-yFWuavQ">aqui</a></p>
      </body>
    </div>
  );
}

export default PaginaAulas;
