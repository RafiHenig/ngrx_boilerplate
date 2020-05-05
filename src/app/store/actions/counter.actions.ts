import { createAction, props } from '@ngrx/store';
import { Payload } from '../../interfaces/payload.interface';

export const increment = createAction(
  '[Counter] Increment Counter'
);

export const decrement = createAction(
  '[Counter] decrement Counter',
);

export const apiGetNumber = createAction(
  '[Counter] api get number',
)

export const ApiError = createAction(
  '[Counter] api error', props<{ error: any }>()
);

export const ApiSuccess = createAction(
  '[Counter] api success',
  props<Payload<number>>()
);

