import './App.css';
import AulaCard from './AulaCard/AulaCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div >
      <header>
        <div className="title"> Sequência Didática de Pensamento Computacional </div>
        <div className="subtitle"> para Ensino Fundamental II </div>
      </header>
      <body>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <AulaCard
                  image='./public/images/aula 1.png'
                  title="Aula 1 - Exercitando o Pensamento Lógico"
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
                />
              </Grid>
              <Grid item>
                <AulaCard
                  title="Aula 3"
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
