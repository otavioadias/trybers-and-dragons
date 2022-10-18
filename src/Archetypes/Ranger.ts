import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Ranger extends Archetype {
  public energyType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Ranger._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdArchetypeInstances;
  }
}
  
export default Ranger;