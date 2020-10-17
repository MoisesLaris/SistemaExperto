import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './system/questions/questions.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingComponent } from './system/routing/routing.component';
import { DetailMethodComponent } from './system/detail-method/detail-method.component'; 


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    NavbarComponent,
    RoutingComponent,
    DetailMethodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [ToastrModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
