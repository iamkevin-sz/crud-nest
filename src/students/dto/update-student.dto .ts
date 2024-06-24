import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateStudentDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id ?: string;
    @IsOptional()
    @IsString()
    readonly name ?: string;
    @IsOptional()
    @IsString()
    readonly city ?: string;
}