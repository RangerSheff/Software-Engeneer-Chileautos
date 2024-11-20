import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AppActions from './app.actions';
import { AppState, Episode, GenericResponseDto } from './app.state';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button (click)="toggleHealthCheck()" [disabled]="(buttonState$ | async)?.isDisabled">
        {{ (buttonState$ | async)?.text }}
      </button>
      <app-health-check *ngIf="showHealthCheck" [healthStatus]="(healthStatus$ | async)"></app-health-check>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [],
})

export class AppComponent implements OnInit {
  healthStatus$: Observable<any>;
  buttonState$: Observable<any>;
  showHealthCheck: boolean = false;
  episodes: Episode[] = [];
  loading = true; 

  constructor(private store: Store<AppState>, private apiService: ApiService) {
    this.healthStatus$ = this.store.pipe(select(state => state['app'].healthStatus));
    this.buttonState$ = this.store.pipe(select(state => state['app'].buttonState));
  }

  ngOnInit(): void {}

  toggleHealthCheck() {
    this.showHealthCheck = !this.showHealthCheck;

    this.store.dispatch(AppActions.setButtonState({
      text: this.showHealthCheck ? 'Ocultar Status BFF' : 'Ver el Status del BFF',
      isDisabled: true
    }));

    this.store.dispatch(AppActions.loadHealthStatus());

    this.apiService.getHealthCheck().subscribe(
      (data) => {
        this.store.dispatch(AppActions.loadHealthStatusSuccess({ healthStatus: data }));
      },
      (error) => {
        this.store.dispatch(AppActions.loadHealthStatusFailure({ healthStatus: { status: 'down', info: {}, error, details: {} } }));
      }
    );

    setTimeout(() => {
      this.store.dispatch(AppActions.setButtonState({
        text: this.showHealthCheck ? 'Ocultar Status BFF' : 'Ver el Status del BFF',
        isDisabled: false
      }));
    }, 5000);
  }
}
