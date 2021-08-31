import './PaginaAulas.css';
import card1 from './../images/aula_1.png'
import card2 from './../images/aula_2.png'
import card3 from './../images/aula_3.png'
import card4 from './../images/aula_4.png'
import card5 from './../images/aula_5.png'
import card6 from './../images/aula_6.png'
import card7 from './../images/aula_7.png'
import card8 from './../images/aula_8.png'
import card9 from './../images/aula_9.png'
import card10 from './../images/aula_10.png'
import card11 from './../images/aula_11.png'
import card12 from './../images/aula_12.png'
import card13 from './../images/aula_13.png'
import card14 from './../images/aula_14.png'
import card15 from './../images/aula_15.png'
import AulaCard from './../AulaCard/AulaCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid';
import pdf1Aula1 from '../conteudo-aulas/aula1/Exercícios - Iniciante.pdf'
import pdf2Aula1 from '../conteudo-aulas/aula1/Aula 1 - Apresentação.pptx'
import pdf3Aula1 from '../conteudo-aulas/aula1/Desafios.docx'
import pdf1Aula2 from '../conteudo-aulas/aula2/Criando Algoritmos.pdf'
import pdf2Aula2 from '../conteudo-aulas/aula2/Aula 2 - Apresentação.pdf'
import pdf3Aula2 from '../conteudo-aulas/aula2/Criando Figuras.pdf'
import pdf2Aula3 from '../conteudo-aulas/aula3/Aula 3 - Apresentação.pptx'
import pdf2Aula4 from '../conteudo-aulas/aula4/Aula 4 - Apresentação.pptx'
import pdf2Aula5 from '../conteudo-aulas/aula5/Aula 5 - Apresentação.pptx'
import pdf1Aula6 from '../conteudo-aulas/aula6/Cartões de Votação.docx'
import pdf2Aula6 from '../conteudo-aulas/aula6/Aula  6 - Apresentação.pptx'
import pdf4Aula6 from '../conteudo-aulas/aula6/Aula 6 - Roteiro.docx'
import pdf2Aula7 from '../conteudo-aulas/aula7/Aula 7 - Apresentação.pptx'
import pdf4Aula7 from '../conteudo-aulas/aula7/Aula 7 - Roteiro.docx'
import pdf2Aula8 from '../conteudo-aulas/aula8/Aula 8 - Apresentação.pptx'
import pdf4Aula8 from '../conteudo-aulas/aula8/Aula 8 - Roteiro.pdf'
import pdf2Aula9 from '../conteudo-aulas/aula9/Aula 9 - Apresentação.pptx'
import pdf4Aula9 from '../conteudo-aulas/aula9/Aula 9 - Roteiro.docx'
import pdf2Aula10 from '../conteudo-aulas/aula10/Aula 10 - Apresentação.pdf'
import pdf4Aula10 from '../conteudo-aulas/aula10/Aula 10 - Roteiro.pdf'
import pdf2Aula11 from '../conteudo-aulas/aula11/Aula 11 - Apresentação.pptx'
import pdf4Aula11 from '../conteudo-aulas/aula11/Aula 11 - Roteiro.docx'
import pdf2Aula12 from '../conteudo-aulas/aula12/Aula 12 - Apresentação.pdf'
import pdf4Aula12 from '../conteudo-aulas/aula12/Aula 12 - Roteiro.docx'
import pdf2Aula13 from '../conteudo-aulas/aula13/Aula 13 - Apresentação.pptx'
import pdf4Aula13 from '../conteudo-aulas/aula13/Aula 13 - Roteiro.docx'
import pdf1Aula14 from '../conteudo-aulas/aula14/Aula 14 - Árvore de Decisão.pdf'
import pdf2Aula14 from '../conteudo-aulas/aula14/Aula 14 - Apresentação.pdf'
import pdf2Aula15 from '../conteudo-aulas/aula15/Aula 15 - Apresentação.pdf'
import TabelaAulas from './../TabelaAulas/TabelaAulas';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '40px 80px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
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
        >
          <Typography className={classes.heading}>Visão Geral das Aulas</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="table">
           <TabelaAulas></TabelaAulas>
        </div>   
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          
        >
          <Typography className={classes.heading}>Conteúdo das Aulas </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <AulaCard
                  image={card1}
                  title="Aula 1"
                  subtitle="Raciocínio Lógico"
                  content="Resolver desafios de lógica e registrar suas soluções."
                  link1={pdf1Aula1}
                  link2={pdf2Aula1}
                  link3={pdf3Aula1}
                  link='https://drive.google.com/drive/folders/1FmeW0elAy9IHoO7TbGhynKOQeGQ5IJ0N'
                  descricao_recursos="Resolução dos desafios do nível iniciante do Estacionamennto Algorítmico. Além da resolução, os alunos devem fazer o registro dos passos para resolver os desafios e testá-los."
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card2}
                  title="Aula 2"
                  subtitle="Introdução ao Sequenciamento de Ações"
                  content="Conceito de algoritmos. Não requer computadores. Material pode ser impresso."
                  link1={pdf1Aula2}
                  link2={pdf2Aula2}
                  link3={pdf3Aula2}
                  link="https://drive.google.com/drive/folders/1D_BfjZAmsjnwlQbl0DOnoGBDGl--d5jJs"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card3}
                  title="Aula 3"
                  subtitle="Introdução aos Laços de Repetição"
                  content="Exercícios em site interativo."
                  link2={pdf2Aula3}
                  link="https://drive.google.com/drive/folders/17-V1mCREFhAi_u89h74vRpGdiKY_aUY2"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card4}
                  title="Aula 4"
                  subtitle="Introdução aos Laços de Repetição"
                  content="Exercícios em site interativo."
                  link2={pdf2Aula4}
                  link="https://drive.google.com/drive/folders/1tehgg3CzMwyUPrVmJaK4LyrOpAg04iO_"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card5}
                  title="Aula 5"
                  subtitle="Introdução ao Plano Cartesiano"
                  content="Exercícios em site interativo."
                  link2={pdf2Aula5}
                  link="https://drive.google.com/drive/folders/1ptT4DZGqbU6EtUoAwRWT5SycCY4TeA30"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card6}
                  title="Aula 6"
                  subtitle="Anime o seu nome"
                  content="Exercícios em site interativo."
                  link1={pdf1Aula6}
                  link2={pdf2Aula6}
                  link4={pdf4Aula6}
                  link="https://drive.google.com/drive/folders/14ecl_xTY0SC5HJXjFIS_YlOYBm3d859C"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card7}
                  title="Aula 7"
                  subtitle="Blocos de eventos"
                  content="Exercícios em site interativo."
                  link2={pdf2Aula7}
                  link4={pdf4Aula7}
                  link="https://drive.google.com/drive/folders/1g20T0F1KPGPtlWiMs6mEhcD9alCoYOp-"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card8}
                  title="Aula 8"
                  subtitle="Condicionais - Parte 1"
                  content="Exercícios em site interativo."
                  link2={pdf2Aula8}
                  link4={pdf4Aula8}
                  link="https://drive.google.com/drive/folders/1kqqL-PkA3GsB85Nrmnk1bwlFsHitiLsz"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card9}
                  title="Aula 9"
                  subtitle="Condicionais - Parte 2"
                  content="Exercícios em site interativo."
                  link2={pdf2Aula9}
                  link4={pdf4Aula9}
                  link="https://drive.google.com/drive/folders/1TY5M_G37Yd95IDxuIcccAMuFs3qsXOWU"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card10}
                  title="Aula 10"
                  subtitle="Introdução às Variáveis"
                  content="Exercícios em site interativo."
                  link2={pdf2Aula10}
                  link4={pdf4Aula10}
                  link="https://drive.google.com/drive/folders/14YAB41hJb9I7DHXBWnQs8Ra2co34_t3N"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card11}
                  title="Aula 11"
                  subtitle="Jogo de Perguntas e Respostas - Parte 1"
                  content="Exercícios em site interativo."
                  link2={pdf2Aula11}
                  link4={pdf4Aula11}
                  link="https://drive.google.com/drive/folders/1fhFHzjoo3euIzRUsAG1Ouzy_Kh7nlL1k"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card12}
                  title="Aula 12"
                  subtitle="Jogo de Perguntas e Respostas - Parte 2"
                  content="Exercícios em site interativo."
                  link2={pdf2Aula12}
                  link4={pdf4Aula12}
                  link="https://drive.google.com/drive/folders/1yI4BUQwVpe4hVGOMkHIHe7b_sijsRsiA"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card13}
                  title="Aula 13"
                  subtitle="Jogo de Desviar"
                  content="Exercícios em site interativo."
                  link2={pdf2Aula13}
                  link4={pdf4Aula13}
                  link="https://drive.google.com/drive/folders/18bVsTSiOU18CkxqHsuM9-Nad5ls5RkE6"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card14}
                  title="Aula 14"
                  subtitle="Árvores de Decisão - Parte 1"
                  content="Não requer computadores. Material pode ser impresso."                 
                  link1={pdf1Aula14}
                  link2={pdf2Aula14}
                  link="https://drive.google.com/drive/folders/1R2l9sz35e5W2tgnfsrfhSAt9gjh_zpGM"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card15}
                  title="Aula 15"
                  subtitle="Árvores de Decisão - Parte 2"
                  content="Não requer computadores. Material pode ser impresso."
                  link2={pdf2Aula15}
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
