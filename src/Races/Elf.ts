import Race from './Race';

class Elf extends Race {
  public maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }
}
  
export default Elf;