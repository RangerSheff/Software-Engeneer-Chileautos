import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.css'],
})
export class HealthCheckComponent implements OnInit {
  @Input() healthStatus: any = null;
  loading: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (!this.healthStatus) {
      this.apiService.getHealthCheck().subscribe(data => {
        this.healthStatus = data;
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }

  isHealthStatusAvailable(): boolean {
    return (this.healthStatus?.info && Object.keys(this.healthStatus.info).length > 0 || this.healthStatus?.error && Object.keys(this.healthStatus.error).length > 0  ) ;
  }

  objectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  getServiceStatus(service: string): string {
    const serviceInfo = this.healthStatus?.info[service];
    return serviceInfo?.status ?? 'unknown';
  }

  getSystemStatus(): string {
    return this.healthStatus?.status ?? 'unknown';
  }
}
