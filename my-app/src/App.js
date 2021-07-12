import './App.css';
import AulaCard from './AulaCard/AulaCard';

function App() {
  return (
    <div >
      <header>
        <div className="title"> Sequência Didática de Pensamento Computacional </div>
        <div className="subtitle"> para Ensino Fundamental II </div>
      </header>
      <body>
        <AulaCard
          title="Aula 1"
          content="Content"
          button="Acessar"
        />
      </body>
    </div>
  );
}

export default App;
