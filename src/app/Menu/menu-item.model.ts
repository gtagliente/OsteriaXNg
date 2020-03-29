declare var uuidv4: Function;

export class MenuItem {

  public dishType: string;
  public name: string;
  public amount: string;
  public description: string;
  public imagePath: string;
  private guid: string;

  constructor(dishType: string, name: string, amount: string, description: string, imagePath: string) {
    this.dishType = dishType;
    this.name = name;
    this.amount = amount;
    this.description = description;
    this.imagePath = imagePath;
    this.guid = uuidv4();
  }
}
