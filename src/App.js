import {Routes, Route} from 'react-router-dom';import './App.css';
import Add from './components/Add';
import Navbar from './components/Navbar';
import Dash from './components/Dash';

function App() {
  
  return (
    <div className="App">
    <Navbar/>
   
    <Routes>
      <Route path='/' element={<Add/>}/>

      <Route path='/view' element={<Dash/>}/>
    </Routes>
    </div>
  );
}

export default App;
