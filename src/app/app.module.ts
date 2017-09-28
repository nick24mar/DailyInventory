import { DataService } from './shared/data/data.service';
import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Firebase Database
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddStockFormComponent } from './components/stocks/add-stock-form/add-stock-form.component';
import { InventoryComponent } from './components/inventory/inventory.component';

import { AppRoutes } from './routes/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddStockFormComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
