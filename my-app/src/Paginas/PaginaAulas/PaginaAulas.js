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
                  subtitle="Exercitando o Raciocínio Lógico"
                  content="Resolver desafios de lógica e registrar suas soluções."
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card2}
                  title="2"
                  subtitle="Introdução ao Sequenciamento de Ações"
                  content="Conceito de algoritmos. Não requer computadores. Material pode ser impresso."
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card3}
                  title="3"
                  subtitle="Introdução aos Laços de Repetição"
                  content="Exercícios em site interativo."
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card4}
                  title="4"
                  subtitle="Introdução aos Laços de Repetição (Continuação)"
                  content="Exercícios em site interativo."
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card5}
                  title="5"
                  subtitle="Introdução ao Plano Cartesiano e o Scratch"
                  content="Exercícios em site interativo."
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card6}
                  title="6"
                  subtitle="Anime o seu nome"
                  content="Exercícios em site interativo."
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card7}
                  title="7"
                  subtitle="Jogo de Clicar"
                  content="Exercícios em site interativo."                  
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card8}
                  title="8"
                  subtitle="Condicionais - Parte 1"
                  content="Exercícios em site interativo."                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card9}
                  title="9"
                  subtitle="Condicionais - Parte 2"
                  content="Exercícios em site interativo."
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card10}
                  title="10"
                  subtitle="Introdução às Variáveis"
                  content="Exercícios em site interativo."
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
      <p>Todo o material pode ser encontrado no link: <a target="_blank" rel="noreferrer" href="https://drive.google.com/drive/folders/1uAqN4TJovNb9IOHYhSuIALxh-yFWuavQ">aqui</a></p>
      </body>
    </div>
  );
}

export default PaginaAulas;
