import Sheet from "../classes/Sheet";
import Spinner from "../objects/Spinner"

function Home({sheet, sheetStateChange, sheetState}){

    return( 
        <h2>Início 
            <center>
                <MenuButton buttonText='Criar Personagem' onClick={() => HandleCreateSheet(sheet, sheetState, sheetStateChange)}/>
                <br />
                <MenuButton buttonText='Carregar Personagem' onClick={() => HandleLoadSheet(sheet, sheetStateChange)}/>
                {(sheetState !== 'loaded' && sheetState !== 'emptyBuffer') && (
                       <CreateSheetModalPopup sheet={sheet} state={sheetState} changeState={sheetStateChange}/> 
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

function CreateSheetModalPopup({sheet, state, changeState}){
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
                            
                        </div>
                    </div>
                ))}

                <button onClick={() => closeOnClick(state, changeState)}>{textCloseButton}</button> 
                <button onClick={() => continueOnClick(state, changeState)}>Continuar</button>
            </div>
        </div>
    );
    
    function continueOnClick(state, changeState){
        switch(state){
            case 'firstCreation':
                changeState('secondCreation');
                break;

            case 'secondCreation':
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

        }
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
