import Sheet from "../classes/Sheet";
import Spinner from "../objects/Spinner";
import SpinnerFloat from "../objects/SpinnerFloat";
import Races from "../classes/Races";
import Classes from "../classes/Classes";
import RaceText from "../objects/RaceText";
import ClassText from "../objects/ClassText";
import Translator from "../objects/Translator";
import { useState } from 'react';
import Gods from "../classes/Gods";

let selectedRace = new Races('human');
let selectedClass = new Classes('barbarian');

function Home({sheet, sheetStateChange, sheetState}){
    const [raceText, updateRaceText] = useState(selectedRace.raceTextGenerator());
    const [classText, updateClassText] = useState(selectedClass.classTextGenerator());

    const [godList, updateGodList] = useState([]);

    return( 
        <h2>Início 
            <center>
                <MenuButton buttonText='Criar Personagem' onClick={() => HandleCreateSheet(sheet, sheetState, sheetStateChange)}/>
                <br />
                <MenuButton buttonText='Carregar Personagem' onClick={() => HandleLoadSheet(sheet, sheetStateChange)}/>
                {(sheetState !== 'loaded' && sheetState !== 'emptyBuffer') && (
                       <CreateSheetModalPopup sheet={sheet} state={sheetState} changeState={sheetStateChange} raceText={raceText} updateRaceText={updateRaceText} classText={classText} updateClassText={updateClassText} godList={godList} updateGodList={updateGodList}/> 
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

function CreateSheetModalPopup({sheet, state, changeState, raceText, updateRaceText, classText, updateClassText, godList, updateGodList}){
    
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
    let ageList = [selectedRace.adultAge];
    let weightList = [parseInt((selectedRace.minWeight + selectedRace.maxWeight) / 2)];

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
                            <div style={{textAlign: 'left', paddingBottom: '8px'}}>
                                <AtributesDefineText id={'nameText'} width={'250px'}/>
                                <div style={{
                                    fontSize: '11px',
                                    marginTop: '0px'
                                }}>
                                    Nome do personagem
                                </div>
                            </div>

                            <div style={{textAlign: 'left', paddingBottom: '8px'}}>
                                <select id="GoodEvilSelector" style={{marginRight: '10px'}} 
                                    onChange={() => HandleChangeForGodSelector(document.getElementById('GoodEvilSelector').value, document.getElementById('ChaosLawSelector').value, godList, updateGodList, selectedRace.race)}
                                >
                                    {selectedClass.alignments[0].map((alignment, index) => (
                                        <option key={index} value={alignment}>
                                            {Translator.alignments(alignment)}
                                        </option>
                                    ))}
                                </select>
                                <select id="ChaosLawSelector"
                                    onChange={() => HandleChangeForGodSelector(document.getElementById('GoodEvilSelector').value, document.getElementById('ChaosLawSelector').value, godList, updateGodList, selectedRace.race)}
                                >
                                    {selectedClass.alignments[1].map((alignment, index) => (
                                        <option key={index} value={alignment}>
                                            {Translator.alignments(alignment)}
                                        </option>
                                    ))}
                                </select>
                                <div style={{
                                    fontSize: '11px',
                                    marginTop: '0px'
                                }}>
                                    Tendência
                                </div>
                            </div>

                            <div style={{textAlign: 'left', paddingBottom: '8px'}}>
                                <select id={'godSelector'}defaultValue={'none'} >
                                    <option value={'none'}> Nenhum </option>
                                    {godList.map((god, index) =>(
                                        <option key={index} value={god}>
                                            {god}
                                        </option>
                                    ))}    
                                </select>
                                <div style={{
                                    fontSize: '11px',
                                    marginTop: '0px'
                                }}>
                                    Divindade
                                </div>
                            </div>

                            <div style={{textAlign: 'left', paddingBottom: '8px'}}>
                                {selectedRace.size}
                                <div style={{
                                    fontSize: '11px',
                                    marginTop: '0px'
                                }}>
                                    Tamanho
                                </div>
                            </div>

                            <div style={{textAlign: 'left', paddingBottom: '8px'}}>
                                <Spinner valueList={ageList} max={selectedRace.maxAge}/>
                                <div style={{
                                    fontSize: '11px',
                                    marginTop: '0px'
                                }}>
                                    Idade
                                </div>
                            </div>               

                            <div style={{textAlign: 'left', paddingBottom: '8px'}}>
                                <select>
                                    <option value={'male'}> Masculino </option>
                                    <option value={'female'}> Feminino </option>
                                </select>
                                <div style={{
                                    fontSize: '11px',
                                    marginTop: '0px'
                                }}>
                                    Sexo
                                </div>
                            </div>               

                            <div style={{textAlign: 'left', paddingBottom: '8px'}}>
                                <SpinnerFloat minLimit={selectedRace.minHeight} maxLimit={selectedRace.maxHeight} precision={2}/> 
                                <div style={{
                                    fontSize: '11px',
                                    marginTop: '0px'
                                }}>
                                    Altura
                                </div>
                            </div>

                            <div style={{textAlign: 'left', paddingBottom: '8px'}}>
                                <Spinner valueList={weightList} min={selectedRace.minWeight} max={selectedRace.maxWeight}/>
                                <div style={{
                                    fontSize: '11px',
                                    marginTop: '0px'
                                }}>
                                    Peso
                                </div>
                            </div>

                            <div style={{textAlign: 'left', paddingBottom: '8px'}}>
                                <AtributesDefineText id={'eyeColorText'} width={'180px'}/>
                                <div style={{
                                    fontSize: '11px',
                                    marginTop: '0px'
                                }}>
                                    Cor dos Olhos
                                </div>
                            </div>
                    
                            <div style={{textAlign: 'left', paddingBottom: '8px'}}>
                                <AtributesDefineText id={'hairText'} width={'180px'}/>
                                <div style={{
                                    fontSize: '11px',
                                    marginTop: '0px'
                                }}>
                                    Cabelos
                                </div>
                            </div>

                            <div style={{textAlign: 'left', paddingBottom: '8px'}}>
                                <AtributesDefineText id={'skinText'} width={'180px'}/>
                                <div style={{
                                    fontSize: '11px',
                                    marginTop: '0px'
                                }}>
                                    Pele
                                </div>
                            </div>
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
                HandleChangeForGodSelector(selectedClass.alignments[0][0], selectedClass.alignments[1][0], godList, updateGodList, selectedRace.race);
                break;

            case 'fourthCreation':
                if(selectedClass.class === 'cleric'){
                    if(document.getElementById('godSelector').value === 'none'){
                        alert('Clérigo deve escolher divindade.');
                        break;
                    } 
                }

                if(document.getElementById('nameText').value.toString() === ''){
                    alert('Nome não preenchido.');
                    break;
                }

                if(document.getElementById('eyeColorText').value.toString() === ''){
                    alert('Cor dos Olhos não preenchido.');
                    break;
                }               

                if(document.getElementById('hairText').value.toString() === ''){
                    alert('Cabelos não preenchido.');
                    break;
                }

                if(document.getElementById('skinText').value.toString() === ''){
                    alert('Pele não preenchido.');
                    break;
                }

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
                selectedRace = new Races('human');
                updateRaceText(selectedRace.raceTextGenerator());
                break;

            case 'fourthCreation':
                changeState('thirdCreation');
                selectedClass = new Classes('barbarian');
                updateClassText(selectedClass.classTextGenerator());
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

function HandleChangeForGodSelector(goodEvil, chaosLaw, godList, updateGodList, raceName = null){
    updateGodList(Gods.godListByAlignment([goodEvil, chaosLaw], raceName));
}

function HandleGoodEvilSelector(){

}

function HandleChosLawSelector(){

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

function AtributesDefineText({width, id}){
    return(
        <textarea className='atributesDefineText' style={{width: width}} id={id} rows={'1'}>
        </textarea>
    );
}
export default Home;
