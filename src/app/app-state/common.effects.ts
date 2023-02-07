import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import * as appActions from './common.action';
/**
 * @author: L V Priyanka Muddamsetty
 * @Injectable
 */
@Injectable({
  providedIn: 'root'
})
export class CommonEffects {
  
  constructor(private actions$: Actions, private api: ApiService) { }

  private apiUrl: string = 'https://random-data-api.com/api';
  
  getList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.getList),
      exhaustMap(action =>
        this.api.getList(this.apiUrl,50).pipe(
          map(response => {
            console.log("///////response:::", response)
            return appActions.getListSuccess({response})
          }),
          catchError((error: any) => of(appActions.getListFailure(error))))
      )
    )
  );


}
