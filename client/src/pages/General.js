import Sheet from "../classes/Sheet";

function General({sheet}){
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
            <Stats sheet={sheet} />
        </h2>
    );
}




function GeralAtributesText({width}){
    return(
        <textarea className='geralAtributesText' style={{width: width}} rows={'1'}>
        </textarea>
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
                    <StatValueButton stat={sheet.strength} /> 
                    <br/>
                    <textarea className='statModifierText' readOnly value={'+0'} rows={'1'}> </textarea>
                    
                </div>

                <div style={{textAlign: 'center'}}>Destreza
                    <br/>
                    <StatValueButton stat={sheet.dexterity} /> 
                    <br/>
                    <textarea className='statModifierText' readOnly value={'+0'} rows={'1'}> </textarea>

                </div>

                <div style={{textAlign: 'center'}}>Consituição
                    <br/>
                    <StatValueButton stat={sheet.constituition} /> 
                    <br/>
                    <textarea className='statModifierText' readOnly value={'+0'} rows={'1'}> </textarea>

                </div>

                <div style={{textAlign: 'center'}}>Inteligência
                    <br/>
                    <StatValueButton stat={sheet.intelligence} /> 
                    <br/>
                    <textarea className='statModifierText' readOnly value={'+0'} rows={'1'}> </textarea>

                </div>

                <div style={{textAlign: 'center'}}>Sabedoria
                    <br/>
                    <StatValueButton stat={sheet.wisdom} /> 
                    <br/>
                    <textarea className='statModifierText' readOnly value={'+0'} rows={'1'}> </textarea>

                </div>

                <div style={{textAlign: 'center'}}>Carisma
                    <br/>
                    <StatValueButton stat={sheet.charisma} /> 
                    <br/>
                    <textarea className='statModifierText' readOnly value={'+0'} rows={'1'}> </textarea>

                </div>

        </div>
        
    );
}

function StatValueButton({stat}){
    return(
        <button className="statValueButton"> {stat[0]} </button>
    );
}

export default General;
