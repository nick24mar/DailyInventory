import { StockProduct } from './../model/stock.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { DataService } from './../../shared/data/data.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  stockIsLoading: boolean = true;
  errorMsg: string;
  stocks: FirebaseListObservable<StockProduct[]>;
  isStockEmpty: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getStocks();
  }

  private getStocks() {
    this.stocks = this.dataService.getAllStocks();

    this.stocks.subscribe( _ => {
      this.stockIsLoading = false
      
      //Check if stock is empty 
      if( _.length === 0 ) {
        this.isStockEmpty = true;
      }
    });

  }

  deleteStock(key) {
    let option = confirm('Do you really want to delete this stock?');
    
    if(option) {
      this.dataService.deleteCurrentStock(key);
    }
  }

}
