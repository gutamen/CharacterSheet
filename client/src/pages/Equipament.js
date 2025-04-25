function Equipment(){
    return(
        <h2>&nbsp; &nbsp;Equipamento
            <div style={{
                display: 'block',
                textAlign: 'left'
            }}>
                &nbsp; Equipados
                <div style={{display:'flex'}}>
                    <WeaponFrame />
                </div>
            </div>
        </h2>
    );
}



function WeaponFrame(){
    let caixaStyle = {
        border: '1px solid #888',
        padding: '2px',
        flex: 'auto',
        fontWeight: 'lighter',
        textAlign: 'left',
        borderRadius: '2px',
        fontSize: '12px'
    };

    return(
        <div style={{
            border: '1px solid #000',
            padding: '2px',
            width: 'auto',
            fontFamily: 'sans-serif',
            display: 'flex',
            flexWrap: 'wrap'
        }}>

            {/* Linha do título + caixas 1–3 */}
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '2px', 
                gap: '2px' 
            }}>

                <div style={{ display: 'block' }}>
                    <h2 style={{ 
                        marginLeft: 2,
                        fontSize: '16px',
                        fontWeight: 'bolder'
                    }}>
                        Título
                    </h2>
                </div>

                <div style={{ 
                    display: 'flex', 
                    gap: '2px' 
                }}>
                    <div style={caixaStyle}>Bônus de Ataque</div>
                    <div style={caixaStyle}>Dano</div>
                    <div style={caixaStyle}>Sucesso Decisivo</div>
                </div>
            </div>

            {/* Linha das caixas 4–6 */}
            <div style={{ 
                display: 'flex', 
                gap: '2px' 
            }}>
                <div style={caixaStyle}>Alcance</div>
                <div style={caixaStyle}>Tipo</div>
                <div style={caixaStyle}>Observações</div>
            </div>
        </div>
    );
}

export default Equipment;
