import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, apiGetNumber, ApiSuccess } from '../actions/counter.actions';


export const counterFeatureKey = 'counter';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0
};


export const reducer = createReducer(
  initialState,
  on(increment, state => ({ count: state.count + 2 })),
  on(decrement, state => ({ count: state.count - 1 })),
  on(ApiSuccess, (state, action) => ({ count: state.count + action.payload }))
);

