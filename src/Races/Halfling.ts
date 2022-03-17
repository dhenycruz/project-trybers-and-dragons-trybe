import Race from './Race';

class Halfling extends Race {
  private life: number;
  static _cont = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.life = 60;
  }

  get maxLifePoints(): number {
    return this.life;
  }

  static createdRacesInstances(): number {
    return this.lastId();
  }

  static lastId() {
    this._cont += 1;
    return this._cont;
  }
}

export default Halfling;