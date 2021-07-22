import './App.css';
import PaginaAulas from './AulaCard/PaginaAulas/PaginaAulas';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <>        
    <Navigation/>    
    <Switch>                
       <Route path='/aulas' component={PaginaAulas}/>  
       {/* <Route path='/' component={Home}/>             */}
    </Switch>   
    </>
    );
}

export default App;
