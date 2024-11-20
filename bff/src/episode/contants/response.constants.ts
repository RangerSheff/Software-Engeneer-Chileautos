import { GenericResponseDto } from '@app/shared/dto/generic-response.dto';
import { Episode } from '../interfaces/episode.interface';

export const FIND_ALL_SUCCESS = new GenericResponseDto<Episode[]>(0, 'Find All Success');
export const FIND_ALL_NOT_FOUND_RECORDS = new GenericResponseDto<Episode[]>(1, 'Not Found Records of Episodes');

export const FIND_ONE_SUCCESS = new GenericResponseDto<Episode>(0, 'Find Success');
export const FIND_ONE_NOT_FOUND_RECORDS = new GenericResponseDto<Episode>(2, 'Not Found Record of Episode');
