// import { PartialType } from '@nestjs/mapped-types';
// import { CreateTeacherDto } from './create-teacher.dto';

import { IsString, MinLength } from "class-validator";

// export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {}
export class UpdateTeacherDto{
    @IsString()
    @MinLength(1)
    readonly name: string;
    @IsString()
    @MinLength(1)
    readonly direccion: string;
}