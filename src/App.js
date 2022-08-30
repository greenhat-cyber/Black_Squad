import {useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import Signup from './Pages/signup/Signup';
import Login from './Pages/login/Login'
import Home from './Pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route exact path='/' element={<Home/>} />
      </Routes>



    </div>
  );
}

export default App;
