import { IsString, MinLength } from "class-validator";

export class CreateTeacherDto {

    @IsString()
    @MinLength(1)
    readonly name: string;
    @IsString()
    @MinLength(1)
    readonly direccion: string;


}
