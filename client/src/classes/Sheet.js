import Races from './Races';
import Classes from './Classes.js';

class Sheet{
    constructor(){
        this.isLoaded = false;

        this.race = null;
        this.class = null;
        this.strength = [10];
        this.dexterity = [10];
        this.constituition = [10];
        this.intelligence = [10];
        this.wisdom = [10];
        this.charisma = [10];

        this.class = new Classes('barbarian', this);
    }
}

export default Sheet;
