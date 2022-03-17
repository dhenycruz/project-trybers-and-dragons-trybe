import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private hability: EnergyType;
  static _cont = 0;

  constructor(name: string) {
    super(name);
    this.hability = 'stamina';
  }

  static createdArchetypeInstances(): number {
    this._cont += 1;
    return this._cont;
  }

  get energyType(): EnergyType {
    return this.hability;
  }
}

export default Warrior;