import { configure } from "@testing-library/dom";
import { type } from "@testing-library/user-event/dist/type";

function weapons(weapon){
    switch(weapon){
        case 'simple':
            return 'Simples';
        case 'common':
            return 'Comuns';

        default:
            return 'Sem Tradução';
    } 
}

function armors(armor){
    switch(armor){
        case 'heavy':
            return 'Pesadas';
        case 'medium':
            return 'Médias';
        case 'light':
            return 'Leves';
        case 'shield':
            return 'Escudos';
        case 'body shield':
            return 'Escudos de Corpo';

        default:
            return 'Sem Tradução';
    }

}

function alignments(alignment){
    
//    console.log(typeof alignment);
    if(typeof alignment === 'string'){
        switch(alignment){
            case 'good':
                return 'Bom';
            case 'neutral':
                return 'Neutro';
            case 'evil':
                return 'Mal';
            case 'law':
                return 'Leal';
            case 'chaotic':
                return 'Caótico';

            default:
                return 'Sem Tradução';
        }
    }
}

function skills(skill){
//    console.log(skill);
    if(skill.length === 2){
        switch(skill[0]){
            case 'appraise':
                return 'Avaliação';
            case 'balance':
                return 'Equilíbrio';
            case 'bluff':
                return 'Blefar';
            case 'climb':
                return 'Escalar';
            case 'concentration':
                return 'Concentração';
            case 'decipher script':
                return 'Decifrar Escrita';
            case 'diplomacy':
                return 'Diplimacia';
            case 'disable device':
                return 'Operar Mecanismo';
            case 'disguise':
                return 'Disfarçe';
            case 'escape artist':
                return 'Arte da Fuga';
            case 'forgery':
                return 'Falsificação';
            case 'gather information':
                return 'Obter Informação';
            case 'handle animal':
                return 'Adestrar Animal';
            case 'heal':
                return 'Cura';
            case 'hide':
                return 'Esconder-se';
            case 'intimidate':
                return 'Intimidação';
            case 'jump':
                return 'Pular';
            case 'listen':
                return 'Ouvir';
            case 'move silently':
                return 'Furtividade';
            case 'open lock':
                return 'Abrir Fechaduras';  
            case 'ride':
                return 'Cavalgar';
            case 'search':
                return 'Procurar';
            case 'sense motive':
                return 'Sentir Motivação';
            case 'sleight of hand':
                return 'Prestidigitação';
            case 'spellcraft':
                return 'Identificar Magia';
            case 'spot':
                return 'Observar';
            case 'survival':
                return 'Sobrevivência';
            case 'swim':
                return 'Nadar';
            case 'tumble':
                return 'Acrobacia';
            case 'use magic device':
                return 'Usar Instrumento Mágico';   
            case 'use rope':
                return 'Usar Corda';
            case 'perform':
                return 'Atuação';

            default:
                return 'Sem Tradução';
        }
    }
    if(skill.length === 3 && skill[0] === 'knowledge'){
        switch(skill[2]){
            case 'arcana':
                return 'Conhecimento Arcano';
            case 'architecture':
                return 'Conhecimento Arquitetônico';
            case 'dungeoneering':
                return 'Conhecimento em Masmorras';
            case 'geography':
                return 'Conhecimento Geográfico';
            case 'history': 
                return 'Conhecimento Histórico';
            case 'local': 
                return 'Conhecimento Local';
            case 'nature':
                return 'Conhecimento da Natureza';
            case 'nobility': 
                return 'Conhecimento da Nobreza';
            case 'religion':
                return 'Conhecimento Religioso';
            case 'planes':
                return 'Conhecimento em Planos';

            default:
                return 'Sem Tradução';
        }
    }
}

export default {skills, armors, weapons, alignments};
