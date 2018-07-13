import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {Routes,RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // for form 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FilterPipe } from './Pipe/filter.pipe';
import { HttpClientModule} from '@angular/common/http';
import { CustomDirective } from './directive/custom.directive';
import { SecondDirective } from './directive/second.directive';
import { ThirdDirective } from './directive/third.directive';
import { FourthDirDirective } from './directive/fourth-dir.directive';
import { FifthDirDirective } from './directive/fifth-dir.directive';
import { SixthLoopDirDirective } from './directive/sixth-loop-dir.directive';
import { Final7Directive } from './directive/final-7.directive';
import { FlashMessagesModule } from 'ngx-flash-messages';
const rott:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
]

@NgModule({
  declarations: [// component
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    FilterPipe,
    CustomDirective,
    SecondDirective,
    ThirdDirective,
    FourthDirDirective,
    FifthDirDirective,
    SixthLoopDirDirective,
    Final7Directive,
  ],
  imports: [
    BrowserModule,
	FormsModule,// module
	ReactiveFormsModule,
  HttpClientModule,
  FlashMessagesModule,
	RouterModule.forRoot(rott)
  ],
  providers: [],// services
  bootstrap: [AppComponent] //booting
})
export class AppModule { }
