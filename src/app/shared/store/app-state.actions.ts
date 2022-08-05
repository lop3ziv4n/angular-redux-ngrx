import {createAction, props} from "@ngrx/store";
import {AppState} from "../model/app-state.model";

export const setAPIStatus = createAction(
  '[API] success or failure status',
  props<{ apiStatus: AppState }>()
);
