import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Mage extends Archetype {
  public energyType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Mage._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdArchetypeInstances;
  }
}
  
export default Mage;