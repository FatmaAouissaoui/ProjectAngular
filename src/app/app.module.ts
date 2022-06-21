import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableBasicComponent } from './table-basic/table-basic.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StorageTraitementService } from '../app/services/storage-traitement.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    TableBasicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [StorageTraitementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
