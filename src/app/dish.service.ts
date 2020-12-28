import {MenuItem} from './Menu/menu-item.model';
import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

export interface MenuItemInterface {
  id: number;
  descrizione: string;
  nome: string;
  prezzo: string;
  tipo: string;
  imgPath: string;
}

@Injectable()
export class DishService{
   /*dishList: MenuItem[] = [
    new MenuItem ('Breakfast','English Breakfast Test', '15.85', 'Description-Test', 'assets/img/menu/item-2.jpg'),
    new MenuItem ('Breakfast','Chinese Breakfast Test', '9.85', 'Description-Test2', 'assets/img/menu/item-2.jpg'),
    new MenuItem ('Breakfast','Indian Breakfast Test', '9.85', 'Description-Test3', 'assets/img/menu/item-2.jpg'),

    new MenuItem ('Meals','English Meals Test', '9.85', 'Description-Test3', 'assets/img/menu/item-2.jpg'),
    new MenuItem ('Meals','Chinese Meals Test', '9.85', 'Description-Test3', 'assets/img/menu/item-2.jpg'),
    new MenuItem ('Meals','Indian Meals Test', '9.85', 'Description-Test3', 'assets/img/menu/item-2.jpg'),
    new MenuItem ('Meals','Italian Meals Test', '9.85', 'Description-Test3', 'assets/img/menu/item-2.jpg'),

    new MenuItem ('Snacks','English Snacks Test', '9.85', 'Description-Test3', 'assets/img/menu/item-2.jpg'),
    new MenuItem ('Snacks','Chinese Snacks Test', '9.85', 'Description-Test3', 'assets/img/menu/item-2.jpg'),
    new MenuItem ('Snacks','Indian Snacks Test', '9.85', 'Description-Test3', 'assets/img/menu/item-2.jpg'),

    new MenuItem ('Desserts','English Desserts Test', '9.85', 'Description-Test3', 'assets/img/menu/item-2.jpg'),
    new MenuItem ('Desserts','Chinese Desserts Test', '9.85', 'Description-Test3', 'assets/img/menu/item-2.jpg'),
    new MenuItem ('Desserts','Indian Desserts Test', '9.85', 'Description-Test3', 'assets/img/menu/item-2.jpg'),

    new MenuItem ('Drinks','English Drinks Test', '9.85', 'Description-Test3', 'assets/img/menu/item-2.jpg'),
    new MenuItem ('Drinks','Chinese Drinks Test', '9.85', 'Description-Test3', 'assets/img/menu/item-2.jpg'),
    new MenuItem ('Drinks','Indian Drinks Test', '9.85', 'Description-Test3', 'assets/img/menu/item-2.jpg')
  ];*/

  constructor(private loggingService: LoggingService, private http: HttpClient){}

  getDishesByType(type){
    var result = new Array();
   // var jsonResponse = new Array<MenuItemInterface>();
    var jsonResponse = new Array();
    this.loggingService.logMonitor('Searching dishes for type: ' + type);

    this.http.get('http://localhost:81/OsteriaXWS/api/DishesByType/'+type)
      .subscribe(dishes =>{
        console.log ('Get results: ');
        console.log(dishes);

        console.log('Handling Json');
        let items: MenuItemInterface[] = <MenuItemInterface[]>dishes;
        items.forEach(item => {
          jsonResponse.push(new MenuItem (item.tipo,item.nome,item.prezzo,item.descrizione,item.imgPath));
        });

        return jsonResponse;
      });

    /*this.dishList.forEach(function (item) {
      //this.loggingService.logMonitor(item.dishType);

      if(item.tipo == type) {
        //this.loggingService.logMonitor('Found a dish: ' + item.description);
        result.push(item);
      }
    });*/

    return jsonResponse;
  }
}
