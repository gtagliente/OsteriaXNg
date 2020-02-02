export class MenuItem {

  public name: string;
  public amount: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, amount: string, description: string, imagePath: string) {
    this.name = name;
    this.amount = amount;
    this.description = description;
    this.imagePath = imagePath;
  }
}
