import './App.css';
import card1 from './images/aula_1.png'
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
                  subtitle="Exercitando o Pensamento Lógico"
                  content="Quatro exercícios para exercitar o pensamento computacional para iniciantes. Não requer computadores. Material pode ser impresso."
                  button="Acessar"
                  link='https://drive.google.com/drive/folders/1FmeW0elAy9IHoO7TbGhynKOQeGQ5IJ0N'
                />
              </Grid>
              <Grid item>
                <AulaCard
                  title="Aula 2"
                  content="Content"
                  button="Acessar"
                  link="https://drive.google.com/drive/folders/1D_BfjZAmsjnwlQbl0DOnoGBDGl--d5jJs"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  title="Aula 3"
                  content="Content"
                  button="Acessar"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  title="Aula 4"
                  content="Content"
                  button="Acessar"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  title="Aula 5"
                  content="Content"
                  button="Acessar"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  title="Aula 6"
                  content="Content"
                  button="Acessar"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  title="Aula 7"
                  content="Content"
                  button="Acessar"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  title="Aula 8"
                  content="Content"
                  button="Acessar"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  title="Aula 9"
                  content="Content"
                  button="Acessar"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  title="Aula 10"
                  content="Content"
                  button="Acessar"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  title="Aula 11"
                  content="Content"
                  button="Acessar"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  title="Aula 12"
                  content="Content"
                  button="Acessar"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  title="Aula 13"
                  content="Content"
                  button="Acessar"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  title="Aula 14"
                  content="Content"
                  button="Acessar"
                />
              </Grid>
              <Grid item>
                <AulaCard
                  title="Aula 15"
                  content="Content"
                  button="Acessar"
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
