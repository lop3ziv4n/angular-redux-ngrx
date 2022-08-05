import {createAction, props} from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const multiply = createAction('[Counter Component] Multiply', props<{ value: number }>());
export const divide = createAction('[Counter Component] Divide', props<{ value: number }>());
export const reset = createAction('[Counter Component] Reset');
