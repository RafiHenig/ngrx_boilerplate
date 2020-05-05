import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { apiGetNumber, ApiSuccess } from '../actions/counter.actions';
import { mergeMap, map } from 'rxjs/operators';
import { DataService } from '../../services/data.service';


@Injectable()
export class CounterEffects {


  constructor(private actions$: Actions, private dataService: DataService) { }

  apiGetNumber$ = createEffect(() => this.actions$.pipe(
    ofType(apiGetNumber),
    mergeMap(() => this.dataService.apiGetNumber()),
    map(newNumber => ApiSuccess(newNumber))
  ))
}
