import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { ButtonState, HealthStatus } from './app.state';

export interface AppState {
  buttonState: ButtonState;
  healthStatus: HealthStatus;
}

export const initialState: AppState = {
  buttonState: { text: 'Ver el Status del BFF', isDisabled: false },
  healthStatus: { 
    status: '',  // valor por defecto de 'status'
    info: {},    // objeto vacío para 'info'
    error: {},   // objeto vacío para 'error'
    details: {}  // objeto vacío para 'details'
  },
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.setButtonState, (state, { text, isDisabled }) => ({
    ...state,
    buttonState: { text, isDisabled }
  })),
  on(AppActions.loadHealthStatus, (state) => ({
    ...state,
    healthStatus: { 
      status: '', 
      info: {}, 
      error: {}, 
      details: {} 
    }
  })),
  on(AppActions.loadHealthStatusSuccess, (state, { healthStatus }) => ({
    ...state,
    healthStatus
  })),
  on(AppActions.loadHealthStatusFailure, (state, { healthStatus }) => ({
    ...state,
    healthStatus
  }))
);
