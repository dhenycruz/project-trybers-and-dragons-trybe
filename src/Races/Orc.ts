import Race from './Race';

class Orc extends Race {
  private life: number;
  static _cont = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.life = 74;
  }

  get maxLifePoints(): number {
    return this.life;
  }

  static createdRacesInstances(): number {
    this._cont += 1;
    return this._cont;
  }
}

export default Orc;