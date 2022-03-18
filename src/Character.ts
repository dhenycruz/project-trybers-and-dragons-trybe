import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _dexterity: number;
  
  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { amount: getRandomInt(1, 10), 
      type_: this._archetype.energyType };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy():Energy {
    return { amount: this._energy.amount, type_: this._energy.type_ };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    const level = getRandomInt(1, 10);
    this._maxLifePoints += level;
    this._lifePoints = this._maxLifePoints;
  
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
      this._lifePoints = this._maxLifePoints;
    }
    
    this._strength += level;
    this._dexterity += level;
    this._defense += level;
    this._energy.amount = 10;
  }

  special(enemy: Fighter): void {
    this._strength *= 2;
    enemy.receiveDamage(this._strength);
    this._strength /= 2;
  }
}

export default Character;