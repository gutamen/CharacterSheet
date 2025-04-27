import Sheet from "./Sheet";

class Classes{

    constructor(className, sheet) {
        if(!(sheet instanceof Sheet)){
            console.error('Deve receber instância da classe <Sheet>');
            return;
        }
        this.class = className;
        this.lifeDice = 0;
        this.alignments = [['good', 'neutral', 'evil'], ['law', 'neutral', 'chaotic']];
        this.skills = [];
        this.initialSkillPoints = 0;
        this.skillPointsPerLevel = 0;
        this.classSkills = [];
        this.baseAttack = [];
        this.fortitude = [];
        this.reflex = [];
        this.will = [];
        this.level = 1;
        this.weapons = [];
        this.armor = [];
        this.godhood = null;

        switch(className){
            case 'barbarian':
                this.lifeDice = 12;
                this.alignments[1] = ['neutral', 'chaotic'];
                this.skills = [['handle animal', 0], ['ride', 0], ['climb', 0], ['intimidate', 0], ['swim', 0], ['listen', 0], ['jump', 0], ['survival', 0]];
                this.initialSkillPoints = sheet.intelligence[1] * 4;
                this.skillPointsPerLevel = 4 + sheet.intelligence[1];
                this.weapons = ['simple', 'common'];
                this.armor = ['light', 'medium', 'shield'];
                 
                this.classSkills = [
                    [1,[
                        'Movimento Rápido (Ext): O deslocamento básico do bárbaro é 3 m superior ao deslocamento dos outros integrantes da sua raça. Esse benefício somente é aplicado quando o bárbaro não estiver usando armadura, estiver usando uma armadura leve ou média e não estiver portando uma carga pesada.',
                        'Analfabetismo: Os bárbaros são os únicos personagens que não sabem ler e escrever automaticamente. Para adquirir a capacidade de ler e escrever nos idiomas que conheça, o bárbaro deve gastar 2 pontos de perícia',
                        'Fúria (Ext): O personagem recebe, temporariamente, +4 de bônus de Força e Constituição e +2 de bônus de moral nos testes de resistência de Vontade, mas sofre -2 de penalidade na Classe de Armadura. A fúria permanece ativa durante uma quantidade de rodadas equivalente a 3 + o modificador de Constituição do personagem. Quando voltar ao normal, o bárbaro perderá os modificadores e restrições relacionadas com a fúria e ficará exausto (-2 de Força, -2 de Destreza, incapaz de correr) durante o resto do combate. O bárbaro somente poderá entrar em fúria uma vez por combate. No 1° nível, ele consegue ativar essa habilidade uma vez a cada dia. No 4° nível, e a cada 4 níveis subseqüentes, ele poderá ativá-la uma vez adicional por dia.'
                    ]],
                    [2,[
                        'Esquiva Sobrenatural (Ext): Adquire a habilidade intuitiva de reagir ao perigo antes que seus sentidos consigam identificar a ameaça. Ele conserva seu bônus de Destreza na CA (se houver), mesmo em situações de surpresa ou contra ataques de um oponente invisível. No entanto, ele ainda perde seu bônus de Destreza na CA quando estiver imobilizado'
                    ]],
                    [3,[
                        'Sentir Armadilhas (Ext): Adquire um senso intuitivo que o adverte do perigo das armadilhas, concedendo +1 de bônus nos testes de resistência de Reflexos realizados para evitar armadilhas e +1 de bônus de esquiva na CA contra ataques desferidos por armadilhas.'
                    ]],
                    [4,],
                    [5,[
                        'Esquiva Sobrenatural Aprimorada (Ext): O bárbaro não poderá mais ser flanqueado, pois reagirá aos adversários das suas laterais com a mesma facilidade que reagiria a somente um atacante.'
                    ]],
                    [6,],
                    [7,[
                        'Redução de Dano (Ext): Adquire a habilidade extraordinária de ignorar parte do dano de cada golpe ou ataque que sofre. Reduza o dano causado em 1 ponto sempre que o bárbaro sofrer um ataque de uma arma ou ataque natural. No 10° nível, e a cada três níveis subseqüentes (13°, 16° e 19° nível), a redução de dano aumenta em 1 ponto.'
                    ]],
                    [8,],
                    [9,],
                    [10,],
                    [11,[
                        'Fúria Maior (Ext): O bônus de Força e Constituição do bárbaro durante a fúria aumenta para +6 e o bônus de moral dos testes de resistência de Vontade para +3. A penalidade na CA continua -2.'
                    ]],
                    [12,],
                    [13,],
                    [14,[
                        'Vontade Inabalável (Ext): Enquanto estiver em fúria recebe +4 de bônus nos testes de resistência de Vontade para resistir a magias de encantamento.'
                    ]],
                    [15,],
                    [16,],
                    [17,[
                        'Fúria Incansável (Ext): Não ficará mais exausto quando sua fúria terminar.'
                    ]],
                    [18,],
                    [19,],
                    [20,[
                        'Fúria Poderosa (Ext): O bônus de Força e Constituição do bárbaro durante a fúria aumenta para +8 e o bônus de moral no teste de resistência de Vontade para +4. A penalidade na CA continua -2.'
                    ]]
                ];

                this.fortitude = [
                    [1, 2],
                    [2, 3],
                    [3, 3],
                    [4, 4],
                    [5, 4],
                    [6, 5],
                    [7, 5],
                    [8, 6],
                    [9, 6],
                    [10, 7],
                    [11, 7],
                    [12, 8],
                    [13, 8],
                    [14, 9],
                    [15, 9],
                    [16, 10],
                    [17, 10],
                    [18, 11],
                    [19, 11],
                    [20, 12]                    
                ];

                this.reflex = [
                    [1, 0],
                    [2, 0],
                    [3, 1],
                    [4, 1],
                    [5, 1],
                    [6, 2],
                    [7, 2],
                    [8, 2],
                    [9, 3],
                    [10, 3],
                    [11, 3],
                    [12, 4],
                    [13, 4],
                    [14, 4],
                    [15, 5],
                    [16, 5],
                    [17, 5],
                    [18, 6],
                    [19, 6],
                    [20, 6]                    
                ];

                this.will = [
                    [1, 0],
                    [2, 0],
                    [3, 1],
                    [4, 1],
                    [5, 1],
                    [6, 2],
                    [7, 2],
                    [8, 2],
                    [9, 3],
                    [10, 3],
                    [11, 3],
                    [12, 4],
                    [13, 4],
                    [14, 4],
                    [15, 5],
                    [16, 5],
                    [17, 5],
                    [18, 6],
                    [19, 6],
                    [20, 6]                    
                ];

                this.baseAttack = [
                    [1, [1]],
                    [2, [2]],
                    [3, [3]],
                    [4, [4]],
                    [5, [5]],
                    [6, [6,1]],
                    [7, [7,2]],
                    [8, [8,3]],
                    [9, [9,4]],
                    [10, [10,5]],
                    [11, [11,6,1]],
                    [12, [12,7,2]],
                    [13, [13,8,3]],
                    [14, [14,9,4]],
                    [15, [15,10,5]],
                    [16, [16,11,6,1]],
                    [17, [17,12,7,2]],
                    [18, [18,13,8,3]],
                    [19, [19,14,9,4]],
                    [20, [20,15,10,5]]                    
                ];

            break;

            case 'bard':
                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];


            break;

            case 'cleric':
                this.lifeDice = 8;
                
                this.skills = [['concentration', 0], ['knowledge', 0, 'arcane'], ['knowledge', 0, 'history'], ['knowledge', 0, 'plains'], ['knowledge', 0, 'religion'], ['heal', 0], ['diplomacy', 0], ['read magic', 0]];
                // falta oficios e profissões
                // arrumar talento em caso de domínio de guerra
                // se clérigo adicionar linguagem celestial

                this.initialSkillPoints = sheet.intelligence[1] + 2;
                this.skillPointsPerLevel = 2 + sheet.intelligence[1];
                this.weapons = ['simple'];
                this.armor = ['light', 'medium', 'heavy', 'shield'];

                this.classSkills = [
                    [1, [
                        'Aura (Ext): Um clérigo de uma divindade Caótica, Maligna, Boa ou Leal tem uma aura particularmente poderosa correspondente à tendência de sua divindade.',
                        'Um clérigo consegue expulsar ou fascinar mortos-vivos uma quantidade de vezes por dia equivalente a 3 + seu modificador de Carisma. Um clérigo com 5 graduações em Conhecimento (religião) recebe +2 de bônus nos testes de expulsar ou fascinar mortos-vivos.'
                    ]],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.fortitude = [
                    [1, 2],
                    [2, 3],
                    [3, 3],
                    [4, 4],
                    [5, 4],
                    [6, 5],
                    [7, 5],
                    [8, 6],
                    [9, 6],
                    [10, 7],
                    [11, 7],
                    [12, 8],
                    [13, 8],
                    [14, 9],
                    [15, 9],
                    [16, 10],
                    [17, 10],
                    [18, 11],
                    [19, 11],
                    [20, 12]                    
                ];

                this.reflex = [
                    [1, 0],
                    [2, 0],
                    [3, 1],
                    [4, 1],
                    [5, 1],
                    [6, 2],
                    [7, 2],
                    [8, 2],
                    [9, 3],
                    [10, 3],
                    [11, 3],
                    [12, 4],
                    [13, 4],
                    [14, 4],
                    [15, 5],
                    [16, 5],
                    [17, 5],
                    [18, 6],
                    [19, 6],
                    [20, 6]                    
                ];

                this.will = [
                    [1, 2],
                    [2, 3],
                    [3, 3],
                    [4, 4],
                    [5, 4],
                    [6, 5],
                    [7, 5],
                    [8, 6],
                    [9, 6],
                    [10, 7],
                    [11, 7],
                    [12, 8],
                    [13, 8],
                    [14, 9],
                    [15, 9],
                    [16, 10],
                    [17, 10],
                    [18, 11],
                    [19, 11],
                    [20, 12]                    
                ];

                this.baseAttack = [
                    [1, [0]],
                    [2, [1]],
                    [3, [2]],
                    [4, [3]],
                    [5, [3]],
                    [6, [4]],
                    [7, [5]],
                    [8, [6,1]],
                    [9, [6,1]],
                    [10, [7,2]],
                    [11, [8,3]],
                    [12, [9,4]],
                    [13, [9,4]],
                    [14, [10,5]],
                    [15, [11,6,1]],
                    [16, [12,7,2]],
                    [17, [12,7,2]],
                    [18, [13,8,3]],
                    [19, [14,9,4]],
                    [20, [15,10,5]]                    
                ];


            break;

            case 'druid':
                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];
                
                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];


            break;

            case 'sorcerer':
                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];


            break;

            case 'fighter':
                this.lifeDice = 10;

                this.skills = [['handle animal', 0], ['ride', 0], ['climb', 0], ['intimidate', 0], ['swim', 0], ['jump', 0]];
                // falta oficios
                
                this.initialSkillPoints = (sheet.intelligence[1] + 2) * 4;
                this.skillPointsPerLevel = 2 + sheet.intelligence[1];
                this.weapons = ['simple', 'common'];
                this.armor = ['light', 'medium', 'heavy', 'shield', 'body shield'];

                this.classSkills = [
                    [1, [
                        'Talento Adicional'
                    ]],
                    [2, [
                        'Talento Adicional'
                    ]],
                    [3,],
                    [4,[
                        'Talento Adicional'
                    ]],
                    [5,],
                    [6, [
                        'Talento Adicional'
                    ]],
                    [7,],
                    [8,[
                        'Talento Adicional'
                    ]],
                    [9,],
                    [10,[
                        'Talento Adicional'
                    ]],
                    [11,],
                    [12, [
                        'Talento Adicional'
                    ]],
                    [13,],
                    [14, [
                        'Talento Adicional'
                    ]],
                    [15,],
                    [16,[
                        'Talento Adicional'
                    ]],
                    [17,],
                    [18, [
                        'Talento Adicional'
                    ]],
                    [19,],
                    [20, [ 
                        'Talento Adicional'
                    ]]                    
                ];

                this.fortitude = [
                    [1, 2],
                    [2, 3],
                    [3, 3],
                    [4, 4],
                    [5, 4],
                    [6, 5],
                    [7, 5],
                    [8, 6],
                    [9, 6],
                    [10, 7],
                    [11, 7],
                    [12, 8],
                    [13, 8],
                    [14, 9],
                    [15, 9],
                    [16, 10],
                    [17, 10],
                    [18, 11],
                    [19, 11],
                    [20, 12]                    
                ];

                this.reflex = [
                    [1, 0],
                    [2, 0],
                    [3, 1],
                    [4, 1],
                    [5, 1],
                    [6, 2],
                    [7, 2],
                    [8, 2],
                    [9, 3],
                    [10, 3],
                    [11, 3],
                    [12, 4],
                    [13, 4],
                    [14, 4],
                    [15, 5],
                    [16, 5],
                    [17, 5],
                    [18, 6],
                    [19, 6],
                    [20, 6]                    
                ];

                 this.will = [
                    [1, 0],
                    [2, 0],
                    [3, 1],
                    [4, 1],
                    [5, 1],
                    [6, 2],
                    [7, 2],
                    [8, 2],
                    [9, 3],
                    [10, 3],
                    [11, 3],
                    [12, 4],
                    [13, 4],
                    [14, 4],
                    [15, 5],
                    [16, 5],
                    [17, 5],
                    [18, 6],
                    [19, 6],
                    [20, 6]                    
                ];

                this.baseAttack = [
                    [1, [1]],
                    [2, [2]],
                    [3, [3]],
                    [4, [4]],
                    [5, [5]],
                    [6, [6,1]],
                    [7, [7,2]],
                    [8, [8,3]],
                    [9, [9,4]],
                    [10, [10,5]],
                    [11, [11,6,1]],
                    [12, [12,7,2]],
                    [13, [13,8,3]],
                    [14, [14,9,4]],
                    [15, [15,10,5]],
                    [16, [16,11,6,1]],
                    [17, [17,12,7,2]],
                    [18, [18,13,8,3]],
                    [19, [19,14,9,4]],
                    [20, [20,15,10,5]]                    
                ];

            break;

            case 'rogue':
                this.lifeDice = 6;

                this.skills = [['open lock', 0], ['acrobacy', 0], ['escape artist', 0], ['perform', 0], ['apraise', 0], ['bluff', 0], ['knowledge', 0, 'location'], ['decipher script', 0], ['diplomacy', 0], ['disguise', 0], ['balance', 0], ['climb', 0], ['hide', 0], ['forgery', 0], ['intimidate', 0], ['swim', 0], ['gather information', 0], ['spot', 0], ['stealth', 0], ['listen', 0], ['search', 0], ['jump', 0], ['sense motive', 0], ['use rope', 0], ['use magic device', 0], ['operate mekanism', 0], ['sleight of hand', 0]];
                // falta oficios e profissões
                
                this.initialSkillPoints = (sheet.intelligence[1] + 8) * 4;
                this.skillPointsPerLevel = 8 + sheet.intelligence[1];
                this.weapons = ['simple'];
                this.armor = ['light'];
                this.classSkills = [
                    [1, [
                        'Ataque Furtivo: Se um ladino puder atingir um oponente incapaz de se defender adequadamente de seu ataque, ele será capaz de golpear um ponto vital e causar mais dano.',
                        'O dano adicional será 1d6 no 1° nível e 1d6 adicional a cada dois níveis subsequentes.',
                        'Encontrar Armadilhas: Os ladinos (e apenas eles) podem usar a perícia Procurar para encontrar armadilhas quando a Classe de Dificuldade é superior a 20.'
                    ]],
                    [2,[
                        'Evasão (Ext): Sempre que o ladino se tornar alvo de um ataque que permita um teste de resistência de Reflexos para reduzir o dano à metade, ele não sofrerá qualquer dano se obtiver sucesso no teste de resistência.'
                    ]],
                    [3, [
                        'Sentir Armadilhas (Ext): Concede +1 de bônus nos testes de resistência de Reflexos realizados para evitar armadilhas e +1 de bônus de esquiva na CA contra ataques desferidos por armadilhas. Esse bônus aumenta em +1 a cada três níveis subsequentes.'
                    ]],
                    [4, [
                        'Esquiva Sobrenatural (Ext): Ele conserva seu bônus de Destreza na CA (se houver), mesmo em situações de surpresa ou contra os ataques de um oponente invisível. No entanto, ele ainda perde seu bônus de Destreza na CA quando estiver imobilizado.'
                    ]],
                    [5,],
                    [6,],
                    [7,],
                    [8,[
                        'Esquiva Sobrenatural Aprimorada (Ext): o ladino não poderá mais ser flanqueado, pois reagirá aos adversários das suas laterais com a mesma facilidade que reagiria a somente um atacante. Essa defesa impede que um ladino realize um ataque furtivo quando estiver flanqueando o personagem, a menos que o atacante tenha (no mínimo) 4 níveis de ladino acima do nível de classe atual do personagem.'
                    ]],
                    [9,],
                    [10,[
                        'Habilidade Especial'
                    ]],
                    [11,],
                    [12,],
                    [13, [
                        'Habilidade Especial'
                    ]],
                    [14,],
                    [15,],
                    [16, [
                        'Habilidade Especial'
                    ]],
                    [17,],
                    [18,],
                    [19, [
                        'Habilidade Especial'
                    ]],
                    [20,]                    
                ];

                this.will = [
                    [1, 2],
                    [2, 3],
                    [3, 3],
                    [4, 4],
                    [5, 4],
                    [6, 5],
                    [7, 5],
                    [8, 6],
                    [9, 6],
                    [10, 7],
                    [11, 7],
                    [12, 8],
                    [13, 8],
                    [14, 9],
                    [15, 9],
                    [16, 10],
                    [17, 10],
                    [18, 11],
                    [19, 11],
                    [20, 12]                    
                ];

                this.reflex = [
                    [1, 0],
                    [2, 0],
                    [3, 1],
                    [4, 1],
                    [5, 1],
                    [6, 2],
                    [7, 2],
                    [8, 2],
                    [9, 3],
                    [10, 3],
                    [11, 3],
                    [12, 4],
                    [13, 4],
                    [14, 4],
                    [15, 5],
                    [16, 5],
                    [17, 5],
                    [18, 6],
                    [19, 6],
                    [20, 6]                    
                ];

                 this.fortitude = [
                    [1, 0],
                    [2, 0],
                    [3, 1],
                    [4, 1],
                    [5, 1],
                    [6, 2],
                    [7, 2],
                    [8, 2],
                    [9, 3],
                    [10, 3],
                    [11, 3],
                    [12, 4],
                    [13, 4],
                    [14, 4],
                    [15, 5],
                    [16, 5],
                    [17, 5],
                    [18, 6],
                    [19, 6],
                    [20, 6]                    
                ];

                this.baseAttack = [
                    [1, [0]],
                    [2, [1]],
                    [3, [1]],
                    [4, [2]],
                    [5, [2]],
                    [6, [3]],
                    [7, [3]],
                    [8, [4]],
                    [9, [4]],
                    [10, [5]],
                    [11, [5]],
                    [12, [6,1]],
                    [13, [6,1]],
                    [14, [7,2]],
                    [15, [7,2]],
                    [16, [8,3]],
                    [17, [8,3]],
                    [18, [9,4]],
                    [19, [9,4]],
                    [20, [10,5]]                     
                ];


            break;

            case 'mage':
                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];


            break;

            case 'monk':
                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];


            break;

            case 'paladin':
                this.lifeDice = 10;
                this.alignments = [['law'], ['good']];

                this.skills = [['handle animal', 0], ['concentration', 0], ['ride', 0], ['knowledge', 0, 'noble'], ['knowledge', 0, 'religion'], ['heal', 0], ['diplomacy', 0], ['sense motive', 0]];
                // oficios e profissões não colocado
                
                this.initialSkillPoints = (2 * sheet.intelligence[1]) * 4;
                this.skillPointsPerLevel = 2 + sheet.intelligence[1];
                this.weapons = ['simple', 'common'];
                this.armor = ['light', 'medium', 'heavy', 'shield'];
                this.classSkills = [
                    [1,[
                        'Aura do Bem (Ext): O poder da aura do Bem de um paladino (consulte a magia detectar o mal) equivale ao seu nível de paladino, semelhante à aura de um clérigo de um deus Bom',
                        'Detectar o Mal (SM): O paladino pode usar detectar maldade sem limite diário',
                        'Destruir o Mal (Sob): Uma vez por dia, um paladino pode tentar destruir o mal usando um ataque corporal regular. Ele adiciona seu modificador de Carisma (se houver) na jogada de ataque, causando 1 ponto de dano adicional por nível de paladino. A cada cinco níveis subseqüentes, o paladino é capaz de destruir o mal uma vez adicional a cada dia'                        
                    ]],
                    [2, [
                        'Graça Divina (Sob): Adquire um bônus equivalente ao seu modificador de Carisma (se houver) em todos seus testes de resistência.',
                        'Cura pelas Mãos (Sob): Um paladino com Carisma 12 ou mais será capaz de curar ferimentos (dele ou de outras pessoas) por meio do toque. A cada dia, ele consegue recuperar uma quantidade de pontos de vida equivalente ao seu nível de paladino multiplicado pelo seu modificador de Carisma (se houver).'
                    ]],
                    [3,[
                        'Aura de Coragem (Sob): Imune ao medo (mágico ou não). Qualquer aliado que se encontre num raio de 3 m do paladino recebe +4 de bônus de moral em todos os testes de resistência contra efeitos de medo.',
                        'Saúde Divina (Ext): Adquire imunidade contra todas as doenças, inclusive as doenças sobrenaturais e mágicas.'
                    ]],
                    [4, [
                        'Expulsar Mortos-Vivos (Sob): Adquire a habilidade sobrenatural de expulsar mortos-vivos. Ele pode usar essa habilidade uma quantidade de vezes por dia equivalente a 3 + seu modificador de Carisma.',
                        'Magias: Adquire a habilidade de conjurar uma pequena quantidade de magias divinas. Para preparar e conjurar uma magia, um paladino deve ter uma pontuação em Sabedoria igual ou superior a 10 + o nível da magia. Até o 3° nível, o paladino não terá nível de conjurador. A partir do 4° nível, seu nível de conjurador equivale à metade de seu nível de paladino.'
                    ]],
                    [5,[
                        'Montaria Especial (SM): Uma vez por dia, usando uma ação de rodada completa, um paladino é capaz de invocar a montaria do reino celestial onde ela reside. A montaria aparece imediatamente ao lado dele e permanece no Plano Material durante 2 horas por nível do paladino; ela pode ser dispensada a qualquer hora como uma ação livre.' 
                    ]],
                    [6,[
                        'Remover Doenças (SM): É capaz de remover doenças, com efeitos similares à magia remover doenças uma vez por semana. Ele pode usar essa habilidade uma vez adicional por semana a cada três níveis.'
                    ]],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.fortitude = [
                    [1, 2],
                    [2, 3],
                    [3, 3],
                    [4, 4],
                    [5, 4],
                    [6, 5],
                    [7, 5],
                    [8, 6],
                    [9, 6],
                    [10, 7],
                    [11, 7],
                    [12, 8],
                    [13, 8],
                    [14, 9],
                    [15, 9],
                    [16, 10],
                    [17, 10],
                    [18, 11],
                    [19, 11],
                    [20, 12]                    
                ];

                this.reflex = [
                    [1, 0],
                    [2, 0],
                    [3, 1],
                    [4, 1],
                    [5, 1],
                    [6, 2],
                    [7, 2],
                    [8, 2],
                    [9, 3],
                    [10, 3],
                    [11, 3],
                    [12, 4],
                    [13, 4],
                    [14, 4],
                    [15, 5],
                    [16, 5],
                    [17, 5],
                    [18, 6],
                    [19, 6],
                    [20, 6]                    
                ];

                 this.will = [
                    [1, 0],
                    [2, 0],
                    [3, 1],
                    [4, 1],
                    [5, 1],
                    [6, 2],
                    [7, 2],
                    [8, 2],
                    [9, 3],
                    [10, 3],
                    [11, 3],
                    [12, 4],
                    [13, 4],
                    [14, 4],
                    [15, 5],
                    [16, 5],
                    [17, 5],
                    [18, 6],
                    [19, 6],
                    [20, 6]                    
                ];

                this.baseAttack = [
                    [1, [1]],
                    [2, [2]],
                    [3, [3]],
                    [4, [4]],
                    [5, [5]],
                    [6, [6,1]],
                    [7, [7,2]],
                    [8, [8,3]],
                    [9, [9,4]],
                    [10, [10,5]],
                    [11, [11,6,1]],
                    [12, [12,7,2]],
                    [13, [13,8,3]],
                    [14, [14,9,4]],
                    [15, [15,10,5]],
                    [16, [16,11,6,1]],
                    [17, [17,12,7,2]],
                    [18, [18,13,8,3]],
                    [19, [19,14,9,4]],
                    [20, [20,15,10,5]]                    
                ];

            break;

            case 'ranger':
                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

                this.classSkills = [
                    [1,],
                    [2,],
                    [3,],
                    [4,],
                    [5,],
                    [6,],
                    [7,],
                    [8,],
                    [9,],
                    [10,],
                    [11,],
                    [12,],
                    [13,],
                    [14,],
                    [15,],
                    [16,],
                    [17,],
                    [18,],
                    [19,],
                    [20,]                    
                ];

            break;

            default:
                console.error('Classe "' + className + '" não existe.');
        }

    }
}

export default Classes;
