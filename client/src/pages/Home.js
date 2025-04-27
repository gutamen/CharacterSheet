import Sheet from "../classes/Sheet";
import Spinner from "../objects/Spinner"

function Home({sheet, sheetStateChange, sheetState}){
    return( 
        <h2>Início 
            <center>
                <MenuButton buttonText='Criar Personagem' onClick={() => HandleCreateSheet(sheet, sheetStateChange)}/>
                <br />
                <MenuButton buttonText='Carregar Personagem' onClick={() => HandleLoadSheet(sheet, sheetStateChange)}/>
                {(sheetState === 'firstCreation') && (
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
    function AtributeSpinner({atribute, atributeValue}){
        return(
            <div style={{display: 'flex', gap: '10px', fontWeight: 'normal'}}>
                <textarea style={{
                    border: 'none',
                    resize: 'none',
                    textAlign: 'center'
                }}readOnly rows={1} value={atribute}/>
                <Spinner />
            </div>
        );
    }
    return(
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
            justifyContent: 'center', alignItems: 'center'
        }}>
            <div style={{
                backgroundColor: 'white', padding: '20px', borderRadius: '8px', minWidth: '300px'
            }}>
                <h1 style={{fontWeight: 'normal', fontSize: '32px'}}>Atributos</h1>
                <div style={{display: 'block', gap: '10px'}}>
                    <AtributeSpinner atribute={'Força'} />
                    <br/>
                    <AtributeSpinner atribute={'Destreza'} />
                    <br/>
                    <AtributeSpinner atribute={'Constituição'} />
                    <br/>
                    <AtributeSpinner atribute={'Inteligência'} />
                    <br/>
                    <AtributeSpinner atribute={'Sabedoria'} />
                    <br/>
                    <AtributeSpinner atribute={'Carisma'} />
                </div>
                <button>Fechar</button> 
                <button onClick={() => continueOnClick(state, changeState)}>Continuar</button>
            </div>
        </div>
    );
    
    function continueOnClick(state, changeState){
        if(state === 'firstCreation'){
            changeState('loaded');
        }
    }
}


function HandleLoadSheet(sheet, sheetStateChange){
    if(!(sheet instanceof Sheet)){
        console.error('Tipo não esperado');
        return;
    }
    sheetStateChange('firstCreation');
    console.log(sheet);
    sheet.isLoaded = !sheet.isLoaded;
}

function HandleCreateSheet(sheet, sheetState){
    if(!(sheet instanceof Sheet)){
        console.error('Tipo não esperado');
        return;
    }

}

export default Home;
