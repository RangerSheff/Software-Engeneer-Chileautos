import { SharedModule } from '@app/shared/shared.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EpisodeService } from './service/episode.service';
import { EpisodeController } from './controller/episode.controller';
import { EpisodeRepository } from './repository/episode.repository';

@Module({
  imports: [SharedModule, ConfigModule],
  providers: [EpisodeService, EpisodeRepository],
  controllers: [EpisodeController],
  exports: [EpisodeService],
})
export class EpisodeModule {}
