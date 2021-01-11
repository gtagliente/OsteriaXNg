import {MenuItem} from './Menu/menu-item.model';
import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

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

  percentageEmitter = new EventEmitter<number>();

  progress : number;

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
          console.log('Get image for id: '+item.id);

          this.http.get('http://localhost:81/OsteriaXWS/api/File/Download',
          {
            observe: 'response',
            responseType: 'blob',
            params: new HttpParams().set('id',item.id.toString())
          }
          )
            .subscribe(img =>{
                console.log('Downloaded image from server');
                console.log(img);
                let blob = new Blob([img['body']], {type: 'image/png'});
                item.imgPath = URL.createObjectURL(blob);
                jsonResponse.push(new MenuItem (item.tipo,item.nome,item.prezzo,item.descrizione,item.imgPath));
            });
         // jsonResponse.push(new MenuItem (item.tipo,item.nome,item.prezzo,item.descrizione,item.imgPath));
        });

        return jsonResponse;
      });
    return jsonResponse;
  }

  UploadNewDish (form: NgForm, filepath: string){
    var x =
    {
      nome: 	      form.value.dishName,
      descrizione:  form.value.description,
      prezzo: 		  form.value.price,
      tipo: 		    form.value.type,
      imgPath: 		  filepath
    }
    console.log(x);
    this.http
        .post(
          'http://localhost:81/OsteriaXWS/api/Dish',
          x
        ).subscribe(responseData=>{
            console.log(responseData);
        });
  }

  UploadFile(files: any):string{
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('http://localhost:81/OsteriaXWS/api/File/upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress){
          this.progress = Math.round(100 * event.loaded / event.total);
          this.percentageEmitter.emit(this.progress);
        }
        else if (event.type === HttpEventType.Response){
         return event.body['fullPath'];
          //this.onUploadFinished.emit(event.body);
        }
      });
  }
}
