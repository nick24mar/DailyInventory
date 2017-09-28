import { DataService } from './../../../shared/data/data.service';
import { StockProduct } from './../../model/stock.model';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-stock-form',
  templateUrl: './add-stock-form.component.html',
  styleUrls: ['./add-stock-form.component.css']
})
export class AddStockFormComponent implements OnInit {
  isSuccess: boolean;
  stock: StockProduct;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  addStock(addStockForm: NgForm) {
    this.stock = addStockForm.value;

    if (this.stock.isPerTray == true) {
      let _stock = {
        balotPcs: this.stock.balotPcs *= 30,
        pinoyPcs: this.stock.pinoyPcs *= 30,
        pakalPcs: this.stock.pakalPcs *= 30,
        abnoyPcs: this.stock.abnoyPcs *= 30,
        isPerTray: this.stock.isPerTray,
        timestamp: Date.now()
      };

      this.dataService.addStock(_stock)
        .then(() => {
          this.isSuccess = true;
        });
    }

    else {
      let _stock = {
        balotPcs: this.stock.balotPcs,
        pinoyPcs: this.stock.pinoyPcs,
        pakalPcs: this.stock.pakalPcs,
        abnoyPcs: this.stock.abnoyPcs,
        isPerTray: this.stock.isPerTray,
        timestamp: Date.now()
      };

      this.dataService.addStock(_stock)
        .then(() => {
          this.isSuccess = true;
        });
    }
  }

}
