import { Controller, Get, HttpCode, HttpStatus, Logger, Query } from '@nestjs/common';
import { EpisodeService } from '../service/episode.service';
import { EpisodeFindOneDto, EpisodePaginateDto } from '../dto/episode.dto';

@Controller('episode')
export class EpisodeController {
  private readonly logger = new Logger(EpisodeController.name);
  constructor(private readonly episode: EpisodeService) {}

  @Get('/all')
  @HttpCode(HttpStatus.OK)
  async findAllUser(@Query() query: EpisodePaginateDto) {
    return await this.episode.findAll(query.page);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findOne(@Query() query: EpisodeFindOneDto) {
    return await this.episode.findByIds(query.ids);
  }
}
