import { Router, Switch, Route } from "react-router-dom";
import Navigation from './Navigation/Navigation';
import PaginaAulas from './Paginas/PaginaAulas/PaginaAulas';
import Home from './Paginas/PaginaInicial/Home';
import PaginaTese from './Paginas/PaginaTese/PaginaTese';
import history from './History';
import RoteiroAula1 from './Paginas/PaginaAulas/PaginaRoteiroAulas/RoteiroAula1';

function App() {
  return (
    <>        
    <Navigation/>   
    <Router history={history}>
      <Switch>
        <Route path='/sobre-o-projeto' component={PaginaTese}/>                
        <Route path='/aulas' component={PaginaAulas}/>
        <Route path='/aula-1' component={RoteiroAula1}/>              
        <Route path='/' component={Home}/>          
      </Switch>   

    </Router> 
    </>
    );
}

export default App;
