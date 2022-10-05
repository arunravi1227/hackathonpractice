import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { SchoolComponent } from './school/school.component';
import { CollageComponent } from './collage/collage.component';
import { OfficeComponent } from './office/office.component';
import { EndComponent } from './end/end.component';
// import { TableComponent } from './table/table.component';
import { TableComponent } from './table/table.component';
import {TableModule} from 'primeng/table';
import { TablebasicComponent } from './tablebasic/tablebasic.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SchoolComponent,
    CollageComponent,
    OfficeComponent,
    EndComponent,
    TableComponent,
    TablebasicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    TableModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
