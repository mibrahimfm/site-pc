import { Router, Switch, Route } from "react-router-dom";
import Navigation from './Navigation/Navigation';
import PaginaAulas from './Paginas/PaginaAulas/PaginaAulas';
import Home from './Paginas/PaginaInicial/Home';
import PaginaSobre from './Paginas/PaginaSobre/PaginaSobre';
import history from './History';
import RoteiroAula1 from './Paginas/PaginaAulas/PaginaRoteiroAulas/RoteiroAula1/RoteiroAula1';
import RoteiroAula2 from "./Paginas/PaginaAulas/PaginaRoteiroAulas/RoteiroAula2/RoteiroAula2";
import RoteiroAula3 from "./Paginas/PaginaAulas/PaginaRoteiroAulas/RoteiroAula3/RoteiroAula3";
import RoteiroAula4 from "./Paginas/PaginaAulas/PaginaRoteiroAulas/RoteiroAula4/RoteiroAula4";
import RoteiroAula5 from "./Paginas/PaginaAulas/PaginaRoteiroAulas/RoteiroAula5/RoteiroAula5";
import RoteiroAula6 from "./Paginas/PaginaAulas/PaginaRoteiroAulas/RoteiroAula6/RoteiroAula6";
import RoteiroAula9 from "./Paginas/PaginaAulas/PaginaRoteiroAulas/RoteiroAula9/RoteiroAula9";
import RoteiroAula8 from "./Paginas/PaginaAulas/PaginaRoteiroAulas/RoteiroAula8/RoteiroAula8";
import RoteiroAula7 from "./Paginas/PaginaAulas/PaginaRoteiroAulas/RoteiroAula7/RoteiroAula7";
import RoteiroAula10 from "./Paginas/PaginaAulas/PaginaRoteiroAulas/RoteiroAula10/RoteiroAula10";
function App() {
  return (
    <>        
    <Navigation/>   
    <Router history={history}>
      <Switch>
        <Route path='/sobre-o-projeto' component={PaginaSobre}/>                
        <Route path='/aulas' component={PaginaAulas}/>
        <Route path='/aula-1' component={RoteiroAula1}/>          
        <Route path='/aula-2' component={RoteiroAula2}/>              
        <Route path='/aula-3' component={RoteiroAula3}/>              
        <Route path='/aula-4' component={RoteiroAula4}/>              
        <Route path='/aula-5' component={RoteiroAula5}/>              
        <Route path='/aula-6' component={RoteiroAula6}/>              
        <Route path='/aula-7' component={RoteiroAula7}/>              
        <Route path='/aula-8' component={RoteiroAula8}/>              
        <Route path='/aula-9' component={RoteiroAula9}/>              
        <Route path='/aula-10' component={RoteiroAula10}/>              
        {/*<Route path='/aula-11' component={RoteiroAula11}/>              
        <Route path='/aula-12' component={RoteiroAula12}/>              
        <Route path='/aula-13' component={RoteiroAula13}/>              
        <Route path='/aula-14' component={RoteiroAula14}/>              
        <Route path='/aula-15' component={RoteiroAula15}/>               */}

        <Route path='/' component={Home}/>          
      </Switch>   

    </Router> 
    </>
    );
}

export default App;
