import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { SliderComponent } from './Slider/slider.component';
import { AboutComponent} from './About/about.component';
import { CounterComponent} from './Counter/counter.component';
import { MenuComponent} from './Menu/menu.component';
import { ReservationComponent} from './Reservation/reservation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ChefComponent } from './chef/chef.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { MenuItemComponent } from './Menu/menu-item/menu-item.component';
import { MenuPanelComponent } from './Menu/menu-panel/menu-panel.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuEditItemComponent } from './Menu/menu-edit-item/menu-edit-item.component';

const appRoutes: Routes = [
//   { path: 'menu', component: MenuComponent, children:[
//     {path:':type', component: MenuPanelComponent }
//   ]
// },
  //{path: 'menu/:type', component: MenuPanelComponent},

  { path: '', component: MenuPanelComponent},
  { path: ':type', component: MenuPanelComponent},
  { path: 'Slider', component: SliderComponent},
  { path: 'map', component: MapComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    AboutComponent,
    CounterComponent,
    MenuComponent,
    ReservationComponent,
    GalleryComponent,
    TestimonialsComponent,
    ChefComponent,
    ContactComponent,
    MapComponent,
    FooterComponent,
    MenuItemComponent,
    MenuPanelComponent,
    MenuEditItemComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
