import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCourseDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id ?: string
    @IsString()
    @IsOptional()
    readonly name ?: string;
    @IsString()
    @IsOptional()
    readonly dificultad ?: string;
}