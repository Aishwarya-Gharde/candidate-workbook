import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialModule } from './shared/material.module';
import { CandidateComponent } from './candidate/candidate.component';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { Angular-FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CandidateComponent,
    AddCandidateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    Ng2SearchPipeModule,
    //AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
