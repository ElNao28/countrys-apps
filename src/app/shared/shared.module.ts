import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoaderSpiningComponent } from './components/loader-spining/loader-spining.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SiderbarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoaderSpiningComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent,
    SiderbarComponent,
    HomePageComponent,
    SearchBoxComponent,
    LoaderSpiningComponent
  ]
})
export class SharedModule { }
