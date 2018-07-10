import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FrontComponent } from './front/front.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {MyserService} from './myser.service';
import { MydirDirective } from './mydir.directive';
import { StrDirective } from './str.directive';
import { CploopDirective } from './cploop.directive';
import { DelayDirective } from './delay.directive';
//define routes
const rott:Routes=[
  {path:'',component:FrontComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    FrontComponent,
    AboutComponent,
    ContactComponent,
    MydirDirective,
    StrDirective,
    CploopDirective,
    DelayDirective
  ],
  imports: [
    FormsModule,BrowserModule,RouterModule.forRoot(rott),HttpClientModule
  ],
  providers: [MyserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
