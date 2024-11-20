import { AxiosClient } from '@app/shared/client/axios.client';
import { Injectable, Logger } from '@nestjs/common';
import { Method } from 'axios';
import { Episode } from '../interfaces/episode.interface';

@Injectable()
export class EpisodeRepository {
  private readonly logger = new Logger(EpisodeRepository.name);
  constructor(private axiosClient: AxiosClient) {}

  async getAllEpisode(page: string) {
    const response = await this.axiosHelper<Episode[]>('GET', `/episode?page=${page}`);
    this.logger.verbose({ response });
    return response;
  }

  async getEpisodeByIds(ids: string) {
    const response = await this.axiosHelper<Episode>('GET', `/episode/${ids}`);
    this.logger.verbose({ response });
    return response;
  }

  private async axiosHelper<T>(method: Method, endpoint: string, headers?: any, body?: any): Promise<T> {
    const urlService = 'https://rickandmortyapi.com/api' + endpoint;
    this.logger.log(urlService);
    const { data } = await this.axiosClient.call<T>({
      method: method,
      url: urlService,
      headers: { headers },
      body: body,
    });
    return data;
  }
}
