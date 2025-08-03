
class Gods{

    constructor(godhood){
        this.godhood = godhood;

        this.alignment = [null, null];

        this.favoriteWeapon = null;

        this.domain = [];

        switch(godhood){
            case 'Boccob':
                this.alignment = ['neutral', 'neutral'];
                this.favoriteWeapon = 'staff';
                break;

            case 'Corellon Larethian':
                this.alignment = ['good', 'chaotic'];
                this.favoriteWeapon = 'long sword';
                break;

            case 'Ehlonna':
                this.alignment = ['good', 'neutral'];
                this.favoriteWeapon = 'long bow';
                break;

            case 'Erythnul':
                this.alignment = ['evil', 'chaotic'];
                this.favoriteWeapon = 'morningstar';
                break;

            case 'Fharlanghn':
                this.alignment = ['neutral', 'neutral'];
                this.favoriteWeapon = 'staff';
                break;

            case 'Garl Glittergold':
                this.alignment = ['good', 'neutral'];
                this.favoriteWeapon = 'battle axe';
                break;

            case 'Gruumsh':
                this.alignment = ['evil', 'chaotic'];
                this.favoriteWeapon = 'spear';
                break;

            case 'Heironeous':
                this.alignment = ['good', 'law'];
                this.favoriteWeapon = 'long sword';
                break;

            case 'Hextor':
                this.alignment = ['evil', 'law'];
                this.favoriteWeapon = 'flail';
                break;

            case 'Kord':
                this.alignment = ['good', 'chaotic'];
                this.favoriteWeapon = 'great sword';
                break;

            case 'Moradin':
                this.alignment = ['good', 'law'];
                this.favoriteWeapon = 'war hammer';
                break;

            case 'Nerull':
                this.alignment = ['evil', 'neutral'];
                this.favoriteWeapon = 'sickle';
                break;

            case 'Obad-Hai':
                this.alignment = ['neutral', 'neutral'];
                this.favoriteWeapon = 'staff';
                break;

            case 'Olidammara':
                this.alignment = ['neutral', 'chaotic'];
                this.favoriteWeapon = 'broad sword';
                break;

            case 'Pelor':
                this.alignment = ['good', 'neutral'];
                this.favoriteWeapon = 'mace';
                break;

            case 'St. Cuthbert':
                this.alignment = ['neutral', 'law'];
                this.favoriteWeapon = 'mace';
                break;

            case 'Vecna':
                this.alignment = ['evil', 'neutral'];
                this.favoriteWeapon = 'dagger';
                break;

            case 'Wee Jas':
                this.alignment = ['neutral', 'law'];
                this.favoriteWeapon = 'dagger';

            case 'Yondalla':
                this.alignment = ['good', 'law'];
                this.favoriteWeapon = 'short sword';
                break;

            default:
                console.error('Any godhood with name: ' + godhood);
                return;
        }

    }
    
    static godListByAlignment(alignment, race = null){
        let result;
        if(alignment[0] === 'good' && alignment[1] === 'law') result = new Set(['Heironeous', 'Moradin', 'Yondalla']);
        if(alignment[0] === 'good' && alignment[1] === 'neutral') result = new Set(['Ehlonna', 'Garl Glittergold','Pelor']);
        if(alignment[0] === 'good' && alignment[1] === 'chaotic') result = new Set(['Corellon Larethian', 'Kord']);

        if(alignment[0] === 'neutral' && alignment[1] === 'law') result = new Set(['St. Cuthbert', 'Wee Jas']);
        if(alignment[0] === 'neutral' && alignment[1] === 'neutral') result = new Set(['Boccob', 'Fharlanghn', 'Obad-Hai']);
        if(alignment[0] === 'neutral' && alignment[1] === 'chaotic') result = new Set(['Olidammara']);

        if(alignment[0] === 'evil' && alignment[1] === 'law') result = new Set(['Hextor']);
        if(alignment[0] === 'evil' && alignment[1] === 'neutral') result = new Set(['Nerull', 'Vecna']);
        if(alignment[0] === 'evil' && alignment[1] === 'chaotic') result = new Set(['Erythnul', 'Gruumsh']);


        if(race !== null){
            
            switch(race){
                case 'human':
                    break;
                case 'elf':
                    result.add('Corellon Larethian');
                    result.add('Ehlonna');
                    break;
                case 'halforc':
                    result.add('Gruumsh');
                    break;
                 case 'halfelf':
                    result.add('Corellon Larethian');
                    result.add('Ehlonna');
                    break;
                 case 'halfing':
                    result.add('Yondalla');
                    result.add('Ehlonna');
                    break;
                 case 'dwarf':
                    result.add('Moradin');
                    break;
                 case 'gnome':
                    result.add('Garl Glittergold');
                    result.add('Ehlonna');
                    break;
 
            }            
        }
        return [...result].sort();
    }
}

export default Gods;
