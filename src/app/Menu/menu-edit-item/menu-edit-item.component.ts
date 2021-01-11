import { Component, ElementRef, OnInit, ViewEncapsulation , ViewChild} from '@angular/core';
import { AbstractControlDirective, NgForm } from '@angular/forms';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { DishService } from 'src/app/dish.service';
//import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-edit-item',
  templateUrl: './menu-edit-item.component.html',
  styleUrls: ['./menu-edit-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuEditItemComponent implements OnInit {
  public progress: number;
  public message: string;
  public imgPath: string;
  @ViewChild('FileSelectInputDialog', {static:false}) FileSelectInputDialog: ElementRef;

  constructor(private http: HttpClient, private dishService: DishService) {
     this.dishService.percentageEmitter.subscribe(
     (percentage: number ) => this.progress = percentage
     );
  }


  ngOnInit() {
  }


  onSubmit(form: NgForm){
    this.dishService.UploadNewDish(form,this.imgPath);
  }

  public OpenAddFilesDialog() {
    const e: HTMLElement = this.FileSelectInputDialog.nativeElement;
    e.click();
  }

  public uploadFile(files) {
    this.imgPath = this.dishService.UploadFile(files);
  }

}
