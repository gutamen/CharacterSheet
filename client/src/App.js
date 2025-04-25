import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Equipment from './pages/Equipament';

//data will be the string we send from our server
const apiCall = () => {
    axios.get('http://localhost:3001').then((data) => {
        //this console.log will be in our frontend console
        console.log(data)
    });
}


class Sheet{
    constructor(){
        this.isLoaded = false;

        this.strength = 10;
        this.dexterity = 10;
        this.constituition = 10;
        this.intelligence = 10;
        this.wisdom = 10;
        this.charisma = 10;

    }
}

class Race{
    constructor(){

    }
}

class Classes{
    constructor(){

    }
}

var sheetGlobal = new Sheet();

function Home(){
    return( 
        <h2>Início 
            <center>
                <MenuButton buttonText='Criar Personagem' />
                <br />
                <MenuButton buttonText='Carregar Personagem' onClick={() => HandleLoadSheet(sheetGlobal)}/>
            </center>
        </h2>
    );
}


function General(){
    return(
        <h2> &nbsp; &nbsp; Geral
            <div style={{
                display: 'flex',
                fontWeight: 'normal',
                fontSize: '11px',
                margin: '3% 3% 0 3%',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'space-around'
            }}> 
                <div style={{textAlign: 'left'}}>
                    <GeralAtributesText width={'150px'}/>
                    <div style={{
                        fontSize: '11px',
                        marginTop: '0px'
                    }}>
                        Nome do personagem
                    </div>
                </div>

                <div style={{textAlign: 'left'}}>
                    <GeralAtributesText width={'250px'}/>
                    <div style={{
                        fontSize: '11px',
                        marginTop: '0px'
                    }}>
                        Classe e Nível
                    </div>
                </div>

                <div style={{textAlign: 'left'}}>
                    <GeralAtributesText width={'70px'}/>
                    <div style={{
                        fontSize: '11px',
                        marginTop: '0px'
                    }}>
                        Raça
                    </div>
                </div>               

                <div style={{textAlign: 'left'}}>
                    <GeralAtributesText width={'100px'}/>
                    <div style={{
                        fontSize: '11px',
                        marginTop: '0px'
                    }}>
                        Tendência
                    </div>
                </div>

                <div style={{textAlign: 'left'}}>
                    <GeralAtributesText width={'120px'}/>
                    <div style={{
                        fontSize: '11px',
                        marginTop: '0px'
                    }}>
                        Divindade
                    </div>
                </div>

                <div style={{textAlign: 'left'}}>
                    <GeralAtributesText width={'40px'}/>
                    <div style={{
                        fontSize: '11px',
                        marginTop: '0px'
                    }}>
                        Tamanho
                    </div>
                </div>

                <div style={{textAlign: 'left'}}>
                    <GeralAtributesText width={'40px'}/>
                    <div style={{
                        fontSize: '11px',
                        marginTop: '0px'
                    }}>
                        Idade
                    </div>
                </div>               

                <div style={{textAlign: 'left'}}>
                    <GeralAtributesText width={'25px'}/>
                    <div style={{
                        fontSize: '11px',
                        marginTop: '0px'
                    }}>
                        Sexo
                    </div>
                </div>               

                <div style={{textAlign: 'left'}}>
                    <GeralAtributesText width={'40px'}/>
                    <div style={{
                        fontSize: '11px',
                        marginTop: '0px'
                    }}>
                        Altura
                    </div>
                </div>

                <div style={{textAlign: 'left'}}>
                    <GeralAtributesText width={'32px'}/>
                    <div style={{
                        fontSize: '11px',
                        marginTop: '0px'
                    }}>
                        Peso
                    </div>
                </div>

                <div style={{textAlign: 'left'}}>
                    <GeralAtributesText width={'60px'}/>
                    <div style={{
                        fontSize: '11px',
                        marginTop: '0px'
                    }}>
                        Olhos
                    </div>
                </div>
                
                <div style={{textAlign: 'left'}}>
                    <GeralAtributesText width={'60px'}/>
                    <div style={{
                        fontSize: '11px',
                        marginTop: '0px'
                    }}>
                        Cabelos
                    </div>
                </div>

                <div style={{textAlign: 'left'}}>
                    <GeralAtributesText width={'40px'}/>
                    <div style={{
                        fontSize: '11px',
                        marginTop: '0px'
                    }}>
                        Pele
                    </div>
                </div>

            </div> 
            <Stats sheet={sheetGlobal} />
        </h2>
    );
}


function Skills(){
    return(
        <h2>Perícias
        </h2>
    );
}

function MagicBook(){
    return(
        <h2>Livro de Magias
        </h2>
    );
}

function Talents(){
    return(
        <h2>Talentos
        </h2>
    );
}

function App() {
    const [sheetState, loadSheet] = useState('emptyBuffer');

    return (
        <BrowserRouter>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <Link to="/">Início</Link>  
                <Link to="/general">Geral</Link> 
                <Link to="/equipment">Equipamento</Link> 
                <Link to="/skills">Habilidades</Link> 
                <Link to="/magicbook">Magias</Link> 
                <Link to="/talents">Talentos</Link> 
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/general" element={<General />} />
                <Route path="/equipment" element={<Equipment />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/magicbook" element={<MagicBook />} />
                <Route path="/talents" element={<Talents />} />
            </Routes>
        </BrowserRouter>
    );



}

function Stats({sheet}){
    if(!(sheet instanceof Sheet)){
        console.error('Eperado classe "Sheet"');
        return;
    }

    return(
        
        <div style={{display: 'flex', 
            gap: '50px', 
            fontWeight: 'normal', 
            flexWrap: 'wrap', 
            justifyContent: 'space-around',
            margin: '3% 10% 0 10%'    
        }}>

                <div style={{textAlign: 'center'}}>Força
                    <br/>
                    <button  style={{
                        padding: '34px 34px',
                        marginTop: '10px',
                        borderRadius: '60%',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        fontFamily: '"Comic Sans MS", cursive',
                        color: 'white',
                        backgroundColor: 'grey',
                        
                    }}> {sheet.strength} </button>
                    <br/>
                    <textarea className='statModifierText' readOnly value={'+0'} rows={'1'}> </textarea>
                    
                </div>

                <div style={{textAlign: 'center'}}>Destreza
                    <br/>
                    <button style={{
                        padding: '34px 34px',
                        marginTop: '10px',
                        borderRadius: '60%',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        fontFamily: '"Comic Sans MS", cursive',
                        color: 'white',
                        backgroundColor: 'grey',
                        
                    }}> {sheet.dexterity} </button>
                    <br/>
                    <textarea className='statModifierText' readOnly value={'+0'} rows={'1'}> </textarea>

                </div>

                <div style={{textAlign: 'center'}}>Consituição
                    <br/>
                    <button style={{
                        padding: '34px 34px',
                        marginTop: '10px',
                        borderRadius: '60%',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        fontFamily: '"Comic Sans MS", cursive',
                        color: 'white',
                        backgroundColor: 'grey',
                        
                    }}> {sheet.constituition} </button>
                    <br/>
                    <textarea className='statModifierText' readOnly value={'+0'} rows={'1'}> </textarea>

                </div>

                <div style={{textAlign: 'center'}}>Inteligência
                    <br/>
                    <button style={{
                    padding: '34px 34px',
                    marginTop: '10px',
                    borderRadius: '60%',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    fontFamily: '"Comic Sans MS", cursive',
                    color: 'white',
                    backgroundColor: 'grey',
                    
                    }}> {sheet.intelligence} </button>
                    <br/>
                    <textarea className='statModifierText' readOnly value={'+0'} rows={'1'}> </textarea>

                </div>

                <div style={{textAlign: 'center'}}>Sabedoria
                    <br/>
                    <button style={{
                        padding: '34px 34px',
                        marginTop: '10px',
                        borderRadius: '60%',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        fontFamily: '"Comic Sans MS", cursive',
                        color: 'white',
                        backgroundColor: 'grey',
                        
                    }}> {sheet.wisdom} </button>
                    <br/>
                    <textarea className='statModifierText' readOnly value={'+0'} rows={'1'}> </textarea>

                </div>

                <div style={{textAlign: 'center'}}>Carisma
                    <br/>
                    <button style={{
                        padding: '34px 34px',
                        marginTop: '10px',
                        borderRadius: '60%',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        fontFamily: '"Comic Sans MS", cursive',
                        color: 'white',
                        backgroundColor: 'grey',
                        
                    }}> {sheet.charisma} </button>
                    <br/>
                    <textarea className='statModifierText' readOnly value={'+0'} rows={'1'}> </textarea>

                </div>

        </div>
        
    );
}

function GeralAtributesText({width}){
    return(
        <textarea className='geralAtributesText' style={{width: width}} rows={'1'}>
        </textarea>
    );
}

function MenuButton({buttonText, onClick, yDistance = '10%'}){

    return(
        <button className='menuButton' style={{display: 'block', margin: yDistance + 'auto 0 auto'}} onClick= {onClick}>
            {buttonText}
        </button>
    );
}

function HandleLoadSheet(sheet){
    if(!(sheet instanceof Sheet)){
        console.error('Tipo não esperado');
        return;
    }
    console.log(sheet);
}

export default App;
