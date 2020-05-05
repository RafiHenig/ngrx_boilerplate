import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './store/reducers';
import { increment, decrement, apiGetNumber } from './store/actions/counter.actions';
import { Observable } from 'rxjs';
import { getCount } from './store/selectors/counter.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public count$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.increment();
    this.count$ = this.store.pipe(select(getCount))
  }

  public increment(): void {
    this.store.dispatch(increment());
  }

  public decrement(): void {
    this.store.dispatch(decrement());
  }

  incrementByAsyncNumber():void{
    this.store.dispatch(apiGetNumber())
  }
}
