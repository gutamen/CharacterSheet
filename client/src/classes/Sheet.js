import Race from './Race';
import Classes from './Classes.js';

class Sheet{
    constructor(){
        this.isLoaded = false;

        this.strength = [10];
        this.dexterity = [10];
        this.constituition = [10];
        this.intelligence = [10];
        this.wisdom = [10];
        this.charisma = [10];

    }
}

export default Sheet;
