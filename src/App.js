import { Container } from '@material-ui/core';
import './App.css';
import Acercade from './components/Acerca de/acercade';
import Header from './components/header/header.js';
import Presentacion from './components/presentacion/presentacion';

function App() {
  return (
    <div>
      <div className='Principal'>
      <Header/>
        <Container>
          <Presentacion/>
          <Acercade/>
        </Container>
      </div>
      
    </div>
      
    
  );
}

export default App;
