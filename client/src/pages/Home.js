import Sheet from "../classes/Sheet";

function Home({sheet, sheetState}){
    return( 
        <h2>Início 
            <center>
                <MenuButton buttonText='Criar Personagem' />
                <br />
                <MenuButton buttonText='Carregar Personagem' onClick={() => HandleLoadSheet(sheet, sheetState)}/>
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

function HandleLoadSheet(sheet, sheetState){
    if(!(sheet instanceof Sheet)){
        console.error('Tipo não esperado');
        return;
    }
    sheetState('loaded');
    console.log(sheet);
    sheet.isLoaded = !sheet.isLoaded;
}

export default Home;
