import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class EpisodeFindOneDto {
  @IsDefined({
    message: 'En la propiedad ids debe estar definido',
  })
  @IsString({
    message: 'El valor ids debe ser un string',
  })
  @IsNotEmpty()
  ids: string;
}

export class EpisodePaginateDto {
  @IsDefined({
    message: 'En la propiedad page debe estar definido',
  })
  @IsString({
    message: 'El valor page debe ser un string',
  })
  @IsNotEmpty()
  page: string;
}