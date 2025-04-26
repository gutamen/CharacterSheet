import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Equipment from './pages/Equipament';
import General from './pages/General'
import Sheet from './classes/Sheet';
import Talents from './pages/Talents';
import Skills from './pages/Skills';
import MagicBook from './pages/MagicBook';
import Home from './pages/Home';

//data will be the string we send from our server
const apiCall = () => {
    axios.get('http://localhost:3001').then((data) => {
        //this console.log will be in our frontend console
        console.log(data)
    });
}


var sheetGlobal = new Sheet();


function App() {
    const [sheetState, loadSheet] = useState('emptyBuffer');

    return (
        <BrowserRouter>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <Link to="/">Início</Link> 
                {(sheetState === 'loaded') && <ModfiedLink to="/general" title={"Geral"}/>}
                {(sheetState === 'loaded') && <ModfiedLink to="/equipment" title={"Equipamento"}/>}
                {(sheetState === 'loaded') && <ModfiedLink to="/skills" title={"Habilidades"}/>}
                {(sheetState === 'loaded') && <ModfiedLink to="/magicbook" title={"Magias"}/>}
                {(sheetState === 'loaded') && <ModfiedLink to="/talents" title={"Talentos"}/>}
                
            </div>
            <Routes>
                <Route path="/" element={<Home sheet={sheetGlobal} sheetState={loadSheet}/>} />
                <Route path="/general" element={<General sheet={sheetGlobal}/>} />
                <Route path="/equipment" element={<Equipment />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/magicbook" element={<MagicBook />} />
                <Route path="/talents" element={<Talents />} />
            </Routes>
        </BrowserRouter>
    );



}

function ModfiedLink({title, to}){
    return(
        <Link to={to}>{title}</Link> 
    );
}


export default App;
