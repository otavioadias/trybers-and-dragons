import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// Character
const player1 = new Character('Kirito');
const player2 = new Character('Asuna');
const player3 = new Character('Klein');
player1.levelUp();

// Monster
const monster1 = new Monster();
const monster2 = new Dragon();

// PVP
const pvp = new PVP(player2, player3);

// PVE
const pve = new PVE(player1, [monster1, monster2]);

// Run Battles
const runBattles = (battles: Array<Battle>) => 
  battles.map((battle) => console.log(battle.fight()));

export { 
  player1, 
  player2,
  player3,
  monster1, 
  monster2,
  pvp,
  pve,
  runBattles };