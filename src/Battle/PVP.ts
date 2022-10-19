import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player2: Fighter;
  constructor(player: Fighter, player2: Fighter) {
    super(player);
    super.fight();
    this._player2 = player2;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.player.defense;
    if (damage > 0) this.player.lifePoints -= damage;
    if (this.player.lifePoints <= 0) this.player.lifePoints = -1;
    return this.player.lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._player2.strength);
  }

  fight(): number {
    this.attack(this.player);
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;