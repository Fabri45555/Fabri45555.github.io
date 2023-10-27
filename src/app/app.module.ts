import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UpperPageComponent} from './upper-page/upper-page.component';
import {ServiziComponent} from './servizi/servizi.component';

import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import { OAuthModule } from 'angular-oauth2-oidc';



@NgModule({
  declarations: [
    AppComponent,
    UpperPageComponent,
    ServiziComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    MatChipsModule,
    MatTooltipModule,
    OAuthModule.forRoot({
      resourceServer:{
        allowedUrls:['http://localhost:4200/'],
        sendAccessToken:true
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
