import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private environment: Array<Fighter | SimpleFighter>;
  constructor(player: Fighter, environment: Array<Fighter | SimpleFighter>) {
    super(player);
    super.fight();
    this.player = player;
    this.environment = environment;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.player.defense;
    if (damage > 0) this.player.lifePoints -= damage;
    if (this.player.lifePoints <= 0) this.player.lifePoints = -1;
    return this.player.lifePoints;
  }

  attack(enemy: Fighter): void {
    this.environment.forEach((e) => {
      while (this.player.lifePoints !== -1 && e.lifePoints !== -1) {
        enemy.receiveDamage(e.strength);
      }
    });
  }

  fight(): number {
    this.attack(this.player);
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;