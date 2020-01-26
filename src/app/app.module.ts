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
    TestimonialsComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
