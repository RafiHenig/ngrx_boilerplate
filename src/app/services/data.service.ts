import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Payload } from '../interfaces/payload.interface';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public apiGetNumber(): Observable<Payload<number>> {
    return of({ payload: Math.floor(10 * Math.random() + 1) })
    .pipe(
      delay(4000)
    )
  }
}
