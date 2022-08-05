import {createReducer, on} from '@ngrx/store';
import {setAPIStatus} from './app-state.actions';
import {AppState} from "../model/app-state.model";

export const initialState: Readonly<AppState> = {
  apiResponseMessage: '',
  apiStatus: '',
};

export const appStateReducers = createReducer(
  initialState,
  on(setAPIStatus, (state, {apiStatus}) => {
    return {
      ...state,
      ...apiStatus
    };
  })
);
