import { StockProduct } from './../../components/model/stock.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  private path = '/stocks';

  constructor(private afDb: AngularFireDatabase) { }

  getAllStocks() {
    return this.afDb.list('/stocks');
  }

  addStock(stock: StockProduct) {
    return this.afDb.list(this.path).push(stock);
  }

  deleteCurrentStock(key) {
    return this.afDb.list(this.path).remove(key)
      .then(_ => console.log('Delete success'))
      .catch(err => console.log(err.message))
  }

}
