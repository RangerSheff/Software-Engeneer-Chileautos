import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HealthCheckComponent } from './components/health-check/health-check.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';
import { ApiService } from './services/api.service';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HealthCheckComponent, EpisodeListComponent, CapitalizePipe, EpisodeDetailComponent],
  imports: [BrowserModule, HttpClientModule, StoreModule.forRoot({ app: appReducer }), RouterModule.forRoot([]), AppRoutingModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
