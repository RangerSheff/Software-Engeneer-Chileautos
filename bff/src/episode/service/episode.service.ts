import { Injectable, Logger } from '@nestjs/common';
import { EpisodeRepository } from '../repository/episode.repository';
import {
  FIND_ALL_NOT_FOUND_RECORDS,
  FIND_ALL_SUCCESS,
  FIND_ONE_NOT_FOUND_RECORDS,
  FIND_ONE_SUCCESS,
} from '../contants/response.constants';

@Injectable()
export class EpisodeService {
  private readonly logger = new Logger(EpisodeService.name);
  constructor(private readonly episodeRepository: EpisodeRepository) {}

  async findAll(page: string) {
    const findRecords = await this.episodeRepository.getAllEpisode(page);
    this.logger.verbose(findRecords);
    if (findRecords.length === 0) {
      return FIND_ALL_NOT_FOUND_RECORDS;
    }
    FIND_ALL_SUCCESS.data = findRecords;
    return FIND_ALL_SUCCESS;
  }

  async findByIds(ids: string) {
    const findRecord = await this.episodeRepository.getEpisodeByIds(ids);
    this.logger.verbose(findRecord);
    if (findRecord.id === 0) {
      return FIND_ONE_NOT_FOUND_RECORDS;
    }
    FIND_ONE_SUCCESS.data = findRecord;
    return FIND_ONE_SUCCESS;
  }
}
