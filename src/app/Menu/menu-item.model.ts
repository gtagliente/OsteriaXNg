declare var uuidv4: Function;

import {MenuItemInterface} from  '../dish.service';


export class MenuItem implements MenuItemInterface{

  public id: number;
  public tipo: string;
  public nome: string;
  public prezzo: string;
  public descrizione: string;
  public imagePath: string;
  public guid: string;

  constructor(dishType: string, name: string, amount: string, description: string, imagePath: string) {
    this.tipo = dishType;
    this.nome = name;
    this.prezzo = amount;
    this.descrizione = description;
    this.imagePath = imagePath;
    this.guid = uuidv4();
  }

}
