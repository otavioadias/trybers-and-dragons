import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Warrior extends Archetype {
  public energyType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Warrior._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdArchetypeInstances;
  }
}
  
export default Warrior;