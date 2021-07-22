import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import PaginaAulas from './PaginaAulas/PaginaAulas';

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
