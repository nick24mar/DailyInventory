import { InventoryComponent } from './../components/inventory/inventory.component';
import { AddStockFormComponent } from './../components/stocks/add-stock-form/add-stock-form.component';
import { HomeComponent } from './../components/home/home.component';
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'add-stock', component: AddStockFormComponent },
    { path: 'inventory', component: InventoryComponent },
    { path: '**', redirectTo: '' }
];