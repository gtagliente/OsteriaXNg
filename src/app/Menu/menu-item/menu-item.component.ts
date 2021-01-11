import { Component, OnInit, Input,ViewEncapsulation } from '@angular/core';

import { MenuItem } from '../menu-item.model';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';



@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;

  public safeUrl: SafeUrl;

  constructor(private sanitizer:DomSanitizer) {
  }

  ngOnInit() {
    // popupInitialize();
    this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(this.item.imgPath);
    console.log('Safe URL:'+this.safeUrl);

  }
  sanitize(url:string):SafeUrl{
    console.log('Sanitizer Url:'+url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
