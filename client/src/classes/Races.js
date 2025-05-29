class Races{




    constructor(race){
        this.race = race;

        this.size = null;
        this.displacement = null;
        this.adultAge = null;

        this.minHeight = null;
        this.maxHeight = null;

        this.minWeight = null;
        this.maxWeight = null;

        this.maxAge = null;

        this.languages = null;
        
        this.plusTalent = 0;
        this.initialSkillBonus = 0;
        this.skillLevelUpBonus = 0;
        this.favoriteClass = null;

        this.strength = 0;
        this.dexterity = 0;
        this.constituition = 0;
        this.intelligence = 0;
        this.wisdom = 0;
        this.charisma = 0;
        this.skills = null;
        this.traits = null;


        switch(race){
            case 'human':
                this.minHeight = 1.6;
                this.maxHeight = 1.9;

                this.size = 'M';
                this.displacement = 9;

                this.minWeight = 50;
                this.maxWeight = 100;

                this.maxAge = 100;
                this.adultAge = 15;

                this.languages = ['common'];

                this.plusTalent = 1;
                this.initialSkillBonus = 4;
                this.skillLevelUpBonus = 1;

                this.favoriteClass = 'multiclass';

            break;

            case 'elf':
                this.minHeight = 1.4;
                this.maxHeight = 1.72;
    
                this.constituition = -2;
                this.dexterity = 2;
                this.size = 'M';
                this.displacement = 9;

                this.minWeight = 40;
                this.maxWeight = 70;

                this.maxAge = 700;
                this.adultAge = 110;

                this.languages = ['common', 'elf'];

                this.favoriteClass = 'mage';

                this.traits = [
                    'Imunidade à magias e efeitos de sono e +2 de bônus racial nos testes de resistência contra magias ou efeitos similares de Encantamento.',
                    'Visão na Penumbra: Os elfos enxergam duas vezes mais longe que os seres humanos sob a luz das estrelas, da lua, de tochas ou outras condições de iluminação precária.',
                    'Usar Armas: Os elfos recebem o talento Usar Arma Comum para espada longa, sabre, arco longo e arco curto como um talento adicional.',
                    '+2 de Bônus racial nos testes de Ouvir, Procurar e Observar. Um elfo que passar a 1,5 metro de uma porta secreta ou escondida pode realizar um teste deProcurar como se estivesse procurando ativamente.'
                ];

                this.skills = [['listen', 2], ['search', 2], ['appraise', 2]]

            break;

            case 'dwarf':
                this.minHeight = 1.3;
                this.maxHeight = 1.5;
    
                this.constituition = 2;
                this.charisma = -2;
                this.size = 'M';
                this.displacement = 6;

                this.minWeight = 50;
                this.maxWeight = 100;

                this.maxAge = 400;
                this.adultAge = 40;

                this.languages = ['common', 'dwarf'];

                this.favoriteClass = 'fighter';
    
                this.traits = [
                    'Familiaridade com Armas: Os anões consideram o machado de guerra anão e o urgrosh anão como armas comuns, em vez de armas exóticas.',
                    'Estabilidade: O corpo dos anões é excepcionalmente estável. Um anão recebe +4 de bônus em testes de habilidade realizados para resistir a um encontrão ou imobilização quando estiver em pé sobre chão firme.',
                    '+2 de bônus racial nos testes de resistência a veneno: os anões são fortes e resistentes a toxinas.',
                    '+2 de bônus racial nos testes de resistência contra magias e efeitos similares a magia: os anões possuem uma resistência inata contra magia.',
                    '+1 de bônus racial nas jogadas de ataque contra orcs e goblinóides. Os anões são treinados em técnicas especiais de combate que lhes permite confrontar seus inimigos comuns com mais eficiência.',
                    '+4 de bônus de esquiva na CA contra monstros do tipo gigante; esse bônus representa o treinamento militar especial dos anões, quando aprendem os truques desenvolvidos pelas suas gerações anteriores nas batalhas contra os gigantes. Sempre que o personagem perder seu bônus de Destreza na CA – durante uma rodada surpresa, por exemplo – também perderá esse bônus de esquiva. O Livro dos Monstros contém mais informações sobre as criaturas do tipo gigante.',
                    '+2 de bônus racial nos testes de Avaliação relacionados a objetos de metal ou pedra: os anões estão familiarizados com objetos valiosos de diversos tipos, especialmente de pedra e metal.',
                    '+2 de bônus racial nos testes de Ofícios relacionados a objetos de metal ou pedra: os anões são naturalmente eficientes para trabalhos com esses materiais.'
                ]; 
                
            break;

            case 'gnome':
                this.minHeight = 1;
                this.maxHeight = 1.2;
    
                this.constituition = 2;
                this.strength = -2;
                this.size = 'P';
                this.displacement = 6;

                this.minWeight = 20;
                this.maxWeight = 25;

                this.maxAge = 450;
                this.adultAge = 40;

                this.languages = ['common', 'gnome'];

                this.favoriteClass = 'bard';

                this.traits = [
                    '+1 de bônus de tamanho na Classe de Armadura, +1 de bônus de tamanho nas jogadas de ataque e +4 de bônus de tamanho nos testes de Esconder-se, mas precisam usar armas menores que os humanos e sua capacidade de levantar e carregar peso equivale a três quartos da carga máxima das criaturas Médias.',
                    'Visão na Penumbra: Os gnomos enxergam duas vezes mais longe que os seres humanos sob a luz das estrelas, da lua, de tochas ou outras condições de iluminação precária.',
                    '+2 de bônus racial nos testes de resistência contra ilusões: os gnomos estão familiarizados com ilusões de todos os tipos.',
                    '+1 de bônus na Classe de Dificuldade dos testes de resistência contra as ilusões conjuradas por um gnomo.',
                    '+1 de bônus racial nas jogadas de ataque contra kobolds e goblinóides',
                    '+4 de bônus de esquiva na CA contra monstros do tipo gigante. Sempre que o personagem perder seu bônus de Destreza na CA também perderá esse bônus de esquiva.',
                    '+2 de bônus racial nos testes de Ouvir.',
                    '+2 de bônus racial nos testes de Ofícios (alquimia).',
                    'Habilidades Similares à Magia: l/dia – falar com animais (somente mamíferos terrestres, 1 minuto de duração). Um gnomo com Carisma 10, no mínimo, também possui as seguintes habilidades similares à magia: l/dia – globos de luz, som fantasma, prestidigitação. Nível de conjurador: 1° nível; teste de resistência CD 10 + modificador de Carisma + nível da magia.'
                ];
                this.skills = [['listen', 2]]
            break;

            case 'halfling':
                this.minHeight = 0.7;
                this.maxHeight = 0.95;
                
                this.strength = -2;
                this.dexterity = 2;
                this.size = 'P';
                this.displacement = 6;

                this.minWeight = 15;
                this.maxWeight = 19;

                this.maxAge = 160;
                this.adultAge = 20;

                this.languages = ['common', 'halfling'];

                this.favoriteClass = 'rogue';

                this.traits = [
                    '+1 de bônus de tamanho na Classe de Armadura, +1 de bônus de tamanho nas jogadas de ataque e +4 de bônus de tamanho nos testes de Esconder-se, mas precisam usar armas menores que os humanos e sua capacidade de levantar e carregar peso equivale a três quartos da carga máxima das criaturas Médias.',
                    '+2 de bônus racial nos testes de Escalar, Saltar e Furtividade.',
                    '+1 de bônus racial em todos os testes de resistência.',
                    '+2 de bônus de moral nos testes de resistência contra medo.',
                    '+1 de bônus racial nas jogadas de ataque com armas de arremesso e fundas.',
                    '+2 de bônus racial nos testes de Ouvir.'
                ];
                this.skills = [['listen', 2], ['climb', 2], ['jump', 2], ['stealth', 2]]
            break;

            case 'halforc':
                this.minHeight = 1.8;
                this.maxHeight = 2.1;
                
                this.strength = 2;
                this.intelligence = -2;
                this.charisma = -2;
                this.size = 'M';
                this.displacement = 9;

                this.minWeight = 90;
                this.maxWeight = 140;

                this.maxAge = 75;
                this.adultAge = 14;

                this.languages = ['common', 'orc'];

                this.favoriteClass = 'barbarian';

                this.traits = [
                    'Visão no Escuro: Os meio-orcs (e os orcs) conseguem enxergar até 18 metros no escuro.',
                    'Sangue orc: Para todas as habilidades especiais e efeitos, um meio-orc é considerado um orc.'
                ];
            break;
            
            case 'halfelf':
                this.minHeight = 1.5;
                this.maxHeight = 1.8;
    
                this.size = 'M';
                this.displacement = 9;

                this.minWeight = 45;
                this.maxWeight = 90;

                this.maxAge = 450;
                this.adultAge = 20;

                this.languages = ['common', 'elf'];

                this.favoriteClass = 'multiclass';

                this.traits = [
                    'Imunidade à magias e efeitos de sono e +2 de bônus racial nos testes de resistência contra magias ou efeitos similares de Encantamento.',
                    'Visão na Penumbra: Os meio-elfos enxergam duas vezes mais longe que os seres humanos sob a luz das estrelas, da lua, de tochas ou outras condições de iluminação precária.',
                    '+1 de bônus racial nos testes de Ouvir, Procurar e Observar.',
                    '+2 de bônus racial nos testes de Diplomacia e Obter Informação.',
                    'Sangue Élfico: Para todas as habilidades especiais e efeitos, um meio-elfo é considerado um elfo.'
                ];

                this.skills = [['listen', 1], ['search', 1], ['appraise', 1], ['diplomacy', 2], ['gather information', 2]]
            break;

            default:
                console.error('raça "' + race + '" não existe');
        }

    }
    
    //Função sensível a linguagem
    raceTextGenerator(){
        let race = this;
        let ret = 'Tamanho da raça: ' + race.size + '\n';
    
        ret += 'Dislocamento: ' + race.displacement + ' Metros\n';

        ret += 'Alutura: entre ' + race.minHeight.toFixed(2) + ' e ' + race.maxHeight.toFixed(2) + '\n';

        ret += 'Peso: entre ' + race.minWeight.toString() + ' KG e ' + race.maxWeight.toString() + ' KG\n';

        ret += 'Idade máxima: ' + race.maxAge.toString() + '\n';

        ret += 'Maioridade: ' + race.adultAge.toString() + '\n';

        let languages = [];

        for(let i = 0; i < race.languages.length; i++){
            if(race.languages[i] === 'common') languages.push(' Linguagem Comum');
            if(race.languages[i] === 'elf') languages.push(' Linguagem Élfica');
            if(race.languages[i] === 'dwarf') languages.push(' Linguagem Anã');
            if(race.languages[i] === 'gnome') languages.push(' Linguagem dos Gnomos');
            if(race.languages[i] === 'halfling') languages.push(' Linguagem dos Halflings');
            if(race.languages[i] === 'orc') languages.push(' Linguagem Orc');
        }
    
        ret += 'Línguas conhecidas:' + languages + '.\n';
    
        if(race.plusTalent > 0){
            ret += 'Talento adicional inicial\n';
        }

        if(race.initialSkillBonus > 0){
            ret += 'Perícias adicionais inciais: ' + race.initialSkillBonus.toString() + '\n';
        }

        if(race.skillLevelUpBonus > 0){
            ret += 'Bônus de perícia por evolução de nível: +' + race.skillLevelUpBonus + '\n';
        }
        
        ret += race.strength > 0 ? 'Força adicional: +' + race.strength.toString() + '\n' : race.strength < 0 ? 'Decrescimo de força: ' + race.strength.toString() + '\n' : '';

        ret += race.dexterity > 0 ? 'Destreza adicional: +' + race.dexterity.toString() + '\n' : race.dexterity < 0 ? 'Decrescimo de destreza: ' + race.dexterity.toString() + '\n' : '';

        ret += race.constituition > 0 ? 'Constituição adicional: +' + race.constituition.toString() + '\n' : race.constituition < 0 ? 'Decrescimo de constituição: ' + race.constituition.toString() + '\n' : '';

        ret += race.intelligence > 0 ? 'Inteligência adicional: +' + race.intelligence.toString() + '\n' : race.intelligence < 0 ? 'Decrescimo de inteligência: ' + race.intelligence.toString() + '\n' : '';

        ret += race.wisdom > 0 ? 'Sabedoria adicional: +' + race.wisdom.toString() + '\n' : race.wisdom < 0 ? 'Decrescimo de sabedoria: ' + race.wisdom.toString() + '\n' : '';

        ret += race.charisma > 0 ? 'Carisma adicional: +' + race.charisma.toString() + '\n' : race.charisma < 0 ? 'Decrescimo de carisma: ' + race.charisma.toString() + '\n' : '';

        ret += 'Classe favorecida: ' + (race.favoriteClass === 'multiclass' ? 'Multiclasse ' : race.favoriteClass === 'mage' ? 'Mago ' : race.favoriteClass === 'bard' ? 'Bardo' : race.favoriteClass === 'fighter' ? 'Guerreiro ' : race.favoriteClass === 'rogue' ? 'Ladino ' : race.favoriteClass === 'barbarian' ? 'Bárbaro ' : 'erro') + '\n';

        if(race.traits !== null){
            ret += 'Bônus de raça:\n';
            for(let i = 0; i < race.traits.length; i++){
                ret += race.traits[i] + '\n'; 
            } 
        }
        
        return ret;
    }

}

export default Races;
