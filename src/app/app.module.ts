import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AboutComponent } from './componentes/about/about.component';
import { HomeComponent } from './componentes/home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockService } from './servicios/mock.service';
import { HttpClientModule } from '@angular/common/http';
import { BuscarService } from './servicios/buscar.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MockService, {
      delay: 0,
      passThruUnknownUrl: true
    }),
  ],
  providers: [
    BuscarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
