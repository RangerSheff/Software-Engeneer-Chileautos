import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { SharedModule } from './shared/shared.module';
import { EpisodeModule } from './episode/episode.module';

@Module({
  imports: [SharedModule, TerminusModule, EpisodeModule],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
