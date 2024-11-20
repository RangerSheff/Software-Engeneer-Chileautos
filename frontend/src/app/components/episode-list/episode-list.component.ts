import { Component, Input, OnInit } from '@angular/core';
import { Episode, GenericResponseDto } from 'src/app/app.state';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css'],
})
export class EpisodeListComponent implements OnInit {
  @Input() episodes: Episode[] = [];
  @Input() loading: boolean = false;
  page: number = 1;
  pageSize: number = 20;

  constructor(private episodeService: ApiService, private router: Router) {}

  ngOnInit(): void {
    if (this.episodes.length === 0) {
      this.loadEpisodes();
    }
  }

  loadEpisodes(): void {
    this.loading = true;
    this.episodeService.getAllEpisodes(this.page).subscribe(
      (response: GenericResponseDto) => {
        if (response.data && Array.isArray(response.data.results)) {
          this.episodes = this.page === 1 ? response.data.results: [...this.episodes, ...response.data.results];
          this.page++;
        }
        this.loading = this.page === 1 ? true: false;
      },
      (error) => {
        console.error('Error fetching episodes:', error);
        this.episodes = [];
        this.loading = false;
      }
    );
  }

  onScroll(event: any): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      console.log('Scroll reached bottom, loading more episodes...');
      this.loadEpisodes();
    }
  }

  goToEpisodeDetail(id: number): void {
    this.router.navigate(['/episode', id]);
  }
}
