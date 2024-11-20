import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode, GenericResponseDto } from 'src/app/app.state';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css'],
})
export class EpisodeDetailComponent {
  @Input() episode!: Episode;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private episodeService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.loadEpisode(id);
      }
    });
  }

  loadEpisode(id: string): void {
    this.loading = true;
    this.episodeService.getByIdsEpisode(id).subscribe(
      (response: GenericResponseDto) => {
        if (response.data && response.data) {
          this.episode = Array.isArray(response.data) ? response.data[0] : response.data;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching episode:', error);
        this.loading = false;
      }
    );
  }
}
