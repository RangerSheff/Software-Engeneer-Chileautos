import { createAction, props } from '@ngrx/store';
import { ButtonState, HealthStatus } from './app.state';

export const setButtonState = createAction(
  '[App] Set Button State',
  props<{ text: string; isDisabled: boolean }>()
);

export const loadHealthStatus = createAction('[App] Load Health Status');
export const loadHealthStatusSuccess = createAction(
  '[App] Load Health Status Success',
  props<{ healthStatus: HealthStatus }>()
);
export const loadHealthStatusFailure = createAction(
  '[App] Load Health Status Failure',
  props<{ healthStatus: HealthStatus }>()
);
