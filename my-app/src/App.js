import './App.css';
import card1 from './images/aula_1.png'
import card2 from './images/aula_2.png'
import card3 from './images/aula_3.png'
import card4 from './images/aula_4.png'
import card5 from './images/aula_5.png'
import card6 from './images/aula_6.png'
import card7 from './images/aula_7.png'
import card8 from './images/aula_8.png'
import card9 from './images/aula_9.png'
import card10 from './images/aula_10.png'
import card11 from './images/aula_11.png'
import card12 from './images/aula_12.png'
import card13 from './images/aula_13.png'
import card14 from './images/aula_14.png'
import card15 from './images/aula_15.png'
import AulaCard from './AulaCard/AulaCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div >
      <header>
        <div className="title"> Sequência Didática de Pensamento Computacional <br></br> para Ensino Fundamental II </div>
      </header>
      <body>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <AulaCard
                  image={card1}
                  title="Aula 1"
                  subtitle="Raciocínio Lógico"
                  content="Resolver desafios de lógica e registrar suas soluções."
                  button="Acessar"
                  link='https://drive.google.com/drive/folders/1FmeW0elAy9IHoO7TbGhynKOQeGQ5IJ0N'
                  exercicios='./conteudo-aulas/aula1/Exercícios - Iniciante.pdf'
                  descricao_recursos="Resolução dos desafios do nível iniciante do Estacionamennto Algorítmico. Além da resolução, os alunos devem fazer o registro dos passos para resolver os desafios e testá-los."
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card2}
                  title="Aula 2"
                  subtitle="Introdução ao Sequenciamento de Ações"
                  content="Conceito de algoritmos. Não requer computadores. Material pode ser impresso."
                  button="Acessar"
                  link="https://drive.google.com/drive/folders/1D_BfjZAmsjnwlQbl0DOnoGBDGl--d5jJs"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card3}
                  title="Aula 3"
                  subtitle="Introdução aos Laços de Repetição"
                  content="Exercícios em site interativo."
                  button="Acessar"
                  link="https://drive.google.com/drive/folders/17-V1mCREFhAi_u89h74vRpGdiKY_aUY2"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card4}
                  title="Aula 4"
                  subtitle="Introdução aos Laços de Repetição"
                  content="Exercícios em site interativo."
                  button="Acessar"
                  link="https://drive.google.com/drive/folders/1tehgg3CzMwyUPrVmJaK4LyrOpAg04iO_"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card5}
                  title="Aula 5"
                  subtitle="Introdução ao Plano Cartesiano"
                  content="Exercícios em site interativo."
                  button="Acessar"
                  link="https://drive.google.com/drive/folders/1ptT4DZGqbU6EtUoAwRWT5SycCY4TeA30"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card6}
                  title="Aula 6"
                  subtitle="Anime o seu nome"
                  content="Exercícios em site interativo."
                  button="Acessar"
                  link="https://drive.google.com/drive/folders/14ecl_xTY0SC5HJXjFIS_YlOYBm3d859C"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card7}
                  title="Aula 7"
                  subtitle="Blocos de eventos"
                  content="Exercícios em site interativo."
                  button="Acessar"
                  link="https://drive.google.com/drive/folders/1g20T0F1KPGPtlWiMs6mEhcD9alCoYOp-"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card8}
                  title="Aula 8"
                  subtitle="Condicionais - Parte 1"
                  content="Exercícios em site interativo."
                  button="Acessar"
                  link="https://drive.google.com/drive/folders/1kqqL-PkA3GsB85Nrmnk1bwlFsHitiLsz"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card9}
                  title="Aula 9"
                  subtitle="Condicionais - Parte 2"
                  content="Exercícios em site interativo."
                  button="Acessar"
                  link="https://drive.google.com/drive/folders/1TY5M_G37Yd95IDxuIcccAMuFs3qsXOWU"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card10}
                  title="Aula 10"
                  subtitle="Introdução às Variáveis"
                  content="Exercícios em site interativo."
                  button="Acessar"
                  link="https://drive.google.com/drive/folders/14YAB41hJb9I7DHXBWnQs8Ra2co34_t3N"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card11}
                  title="Aula 11"
                  subtitle="Jogo de Perguntas e Respostas - Parte 1"
                  content="Exercícios em site interativo."
                  button="Acessar"
                  link="https://drive.google.com/drive/folders/1fhFHzjoo3euIzRUsAG1Ouzy_Kh7nlL1k"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card12}
                  title="Aula 12"
                  subtitle="Jogo de Perguntas e Respostas - Parte 2"
                  content="Exercícios em site interativo."
                  button="Acessar"
                  link="https://drive.google.com/drive/folders/1yI4BUQwVpe4hVGOMkHIHe7b_sijsRsiA"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card13}
                  title="Aula 13"
                  subtitle="Jogo de Desviar"
                  content="Exercícios em site interativo."
                  button="Acessar"
                  link="https://drive.google.com/drive/folders/18bVsTSiOU18CkxqHsuM9-Nad5ls5RkE6"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card14}
                  title="Aula 14"
                  subtitle="Árvores de Decisão - Parte 1"
                  content="Não requer computadores. Material pode ser impresso."
                  button="Acessar"
                  link="https://drive.google.com/drive/folders/1R2l9sz35e5W2tgnfsrfhSAt9gjh_zpGM"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  image={card15}
                  title="Aula 15"
                  subtitle="Árvores de Decisão - Parte 2"
                  content="Não requer computadores. Material pode ser impresso."
                  button="Acessar"
                  link="https://drive.google.com/drive/folders/14gMCa7DZ-X_ek6HuN5v_3AsUasdf41QL"
                />
              </Grid>
          </Grid>
        </Grid>
      </Grid>
      </body>
    </div>
  );
}

export default App;
