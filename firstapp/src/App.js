import logo from './logo.svg';
import './App.css';
import Basics from './components/Basics';
import StateBasics from './components/StateBasics';
import Exp1 from './components/Exp1';
import Eg2 from './components/Eg2';
import TableArray from './components/TableArray';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import ViewData from './components/ViewData';

function App() {
  return (
    <div className="App">
    
      <NavBar/>
        <Routes>
          <Route path='/' element={<StateBasics/>}/>
          <Route path='/table' element={<TableArray/>}/>
          <Route path='/axios' element={<ViewData/>}/>
        </Routes>

    </div>
  );
}

export default App;
