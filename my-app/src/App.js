import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import PaginaAulas from './PaginaAulas/PaginaAulas';
import Home from './PaginaInicial/Home';
import PaginaTese from './PaginaTese/PaginaTese';

function App() {
  return (
    <>        
    <Navigation/>    
    <Switch>
       <Route path='/sobre-o-projeto' component={PaginaTese}/>                
       <Route path='/aulas' component={PaginaAulas}/>
       <Route path='/' component={Home}/>            
    </Switch>   
    </>
    );
}

export default App;
