interface SimpleFighter {
  lifePoints: number;
  strength: number;
  attack(enemy: SimpleFighter): void;
  receiveDemage(attackPoints: number): void;
}

export default SimpleFighter;