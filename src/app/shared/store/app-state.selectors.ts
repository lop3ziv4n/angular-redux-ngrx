import {createFeatureSelector} from '@ngrx/store';
import {AppState} from "../model/app-state.model";

export const selectAppState = createFeatureSelector<AppState>('appState');
