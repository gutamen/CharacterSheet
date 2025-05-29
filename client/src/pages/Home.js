import Sheet from "../classes/Sheet";
import Spinner from "../objects/Spinner"
import Races from "../classes/Races";
import Classes from "../classes/Classes";
import RaceText from "../objects/RaceText";
import ClassText from "../objects/ClassText";
import { useState } from 'react';

let selectedRace = new Races('human');
let selectedClass = new Classes('barbarian');

function Home({sheet, sheetStateChange, sheetState}){
    const [raceText, updateRaceText] = useState(selectedRace.raceTextGenerator());
    const [classText, updateClassText] = useState(selectedClass.classTextGenerator());

    return( 
        <h2>Início 
            <center>
                <MenuButton buttonText='Criar Personagem' onClick={() => HandleCreateSheet(sheet, sheetState, sheetStateChange)}/>
                <br />
                <MenuButton buttonText='Carregar Personagem' onClick={() => HandleLoadSheet(sheet, sheetStateChange)}/>
                {(sheetState !== 'loaded' && sheetState !== 'emptyBuffer') && (
                       <CreateSheetModalPopup sheet={sheet} state={sheetState} changeState={sheetStateChange} raceText={raceText} updateRaceText={updateRaceText} classText={classText} updateClassText={updateClassText}/> 
                )} 
            </center>
        </h2>
    );
}

function MenuButton({buttonText, onClick, yDistance = '10%'}){

    return(
        <button className='menuButton' style={{display: 'block', margin: yDistance + 'auto 0 auto'}} onClick= {onClick}>
            {buttonText}
        </button>
    );
}

function CreateSheetModalPopup({sheet, state, changeState, raceText, updateRaceText, classText, updateClassText}){
    
    function AtributeSpinner({atribute, atributeValueList}){
        return(
            <div style={{display: 'flex', gap: '10px', fontWeight: 'normal'}}>
                <textarea style={{
                    border: 'none',
                    resize: 'none',
                    textAlign: 'center'
                }}readOnly rows={1} value={atribute}/>
                <Spinner valueList={atributeValueList} />
            </div>
        );
    }
    
    let textCloseButton = (state === 'firstCreation') ? 'Fechar' : 'Voltar';

    return(
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
            justifyContent: 'center', alignItems: 'center'
        }}>
            <div style={{
                backgroundColor: 'white', padding: '20px', borderRadius: '8px', minWidth: '300px'
            }}>

                {  ((state === 'firstCreation') && (sheet instanceof Sheet)) && (
                    <div>
                        <h1 style={{fontWeight: 'normal', fontSize: '32px'}}>Atributos</h1>
                        <div style={{display: 'block', gap: '10px'}}>
                            <AtributeSpinner atribute={'Força'} atributeValueList={sheet.strength}/>
                            <br/>
                            <AtributeSpinner atribute={'Destreza'} atributeValueList={sheet.dexterity}/>
                            <br/>
                            <AtributeSpinner atribute={'Constituição'} atributeValueList={sheet.constituition}/>
                            <br/>
                            <AtributeSpinner atribute={'Inteligência'} atributeValueList={sheet.intelligence}/>
                            <br/>
                            <AtributeSpinner atribute={'Sabedoria'} atributeValueList={sheet.wisdom}/>
                            <br/>
                            <AtributeSpinner atribute={'Carisma'} atributeValueList={sheet.charisma}/>
                        </div>
                    </div>
                    )
                }

                { ((state === 'secondCreation') && (sheet instanceof Sheet) && (
                    <div>
                        <h1 style={{fontWeight: 'normal', fontSize: '32px'}}>Selecione a Raça</h1>
                        <div style={{display: 'block', gap: '10px'}}>
                            <select id='selectedRace' onChange={selectRaceOnChange} style={{width: '100px', textAlign: 'center'}}>
                                <option value='human'> Humano</option>
                                <option value='elf'> Elfo</option>
                                <option value='halforc'> Meio-Orc</option>
                                <option value='halfelf'> Meio-Elfo</option>
                                <option value='halfling'> Halfling</option>
                                <option value='dwarf'> Anão</option>
                                <option value='gnome'> Gnomo</option>
                            </select>
                            <br/>
                            <RaceText text={raceText} setText={updateRaceText} id={'raceText'}/>
                       </div>
                    </div>
                ))}

                { ((state === 'thirdCreation') && (sheet instanceof Sheet) && (
                    <div>
                        <h1 style={{fontWeight: 'normal', fontSize: '32px'}}>Selecione a Classe</h1>
                        <div style={{display: 'block', gap: '10px'}}>
                            <select id='selectedClass' onChange={selectClassOnChange} style={{width: '100px', textAlign: 'center'}}>
                                <option value='barbarian'> Bárbaro</option>
                                <option value='bard'> Bardo</option>
                                <option value='cleric'> Clérigo</option>
                                <option value='druid'> Druida</option>
                                <option value='sorcerer'> Feiticeiro</option>
                                <option value='fighter'> Guerreiro</option>
                                <option value='rogue'> Ladino</option>
                                <option value='mage'> Mago</option>
                                <option value='monk'> Monge</option>
                                <option value='paladin'> Paladino</option>
                                <option value='ranger'> Ranger</option>
                            </select>
                            <br/>
                            <ClassText text={classText} setText={updateClassText} />
                       </div>
                    </div>
                ))}

                { ((state === 'fourthCreation') && (sheet instanceof Sheet) && (
                    <div>
                        <h1 style={{fontWeight: 'normal', fontSize: '32px'}}>Características Básicas</h1>
                        <textarea/>
                        <textarea/>
                        <div style={{display: 'block', gap: '10px'}}>

                        </div>
                    </div>
                ))}

                <div style={{display: 'flex', gap:'20px', alignItems:'center', justifyContent:'center', paddingTop:'15px'}}>
                    <button onClick={() => closeOnClick(state, changeState)}>{textCloseButton}</button> 
                    <button onClick={() => continueOnClick(state, changeState)}>Continuar</button>
                </div>
            </div>
        </div>
    );
    
    function continueOnClick(state, changeState){
        switch(state){
            case 'firstCreation':
                changeState('secondCreation');
                break;

            case 'secondCreation':
                changeState('thirdCreation');
                break;

            case 'thirdCreation':
                changeState('fourthCreation');
                break;

            case 'fourthCreation':
                changeState('loaded');
                break;

        }
    }

    function closeOnClick(state, changeState){
        switch(state){
            case 'firstCreation':
                changeState('emptyBuffer');
                break;

            case 'secondCreation':
                changeState('firstCreation');
                break;

            case 'thirdCreation':
                changeState('secondCreation');
                break;

            case 'fourthCreation':
                changeState('thirdCreation');
                break;

        }
    }

    function selectRaceOnChange(event){
        selectedRace = new Races(event.target.value);
        updateRaceText(selectedRace.raceTextGenerator());
    }

    function selectClassOnChange(event){
        selectedClass = new Classes(event.target.value);
        updateClassText(selectedClass.classTextGenerator());
    }    

}


function HandleLoadSheet(sheet, changeState){
    if(!(sheet instanceof Sheet)){
        console.error('Tipo não esperado');
        return;
    }
    console.log(sheet);
}

function HandleCreateSheet(sheet, state, changeState){
    if(!(sheet instanceof Sheet)){
        console.error('Tipo não esperado');
        return;
    }
    changeState('firstCreation');
}

export default Home;
