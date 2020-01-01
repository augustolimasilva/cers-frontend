import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddAdviceComponent } from './add-advice/add-advice.component';
import { DataTablesModule } from 'angular-datatables';
import { ListAdviceComponent } from './list-advice/list-advice.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAdviceComponent,
    ListAdviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
