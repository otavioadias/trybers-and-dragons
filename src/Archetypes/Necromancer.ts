import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Necromancer extends Archetype {
  public energyType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Necromancer._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdArchetypeInstances;
  }
}
  
export default Necromancer;