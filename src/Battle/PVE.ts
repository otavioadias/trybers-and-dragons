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

  fight(): number {
    this.environment.forEach((e) => {
      while (this.player.lifePoints !== -1 && e.lifePoints !== -1) {
        e.attack(this.player);
        this.player.attack(e);
      }
    });

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;