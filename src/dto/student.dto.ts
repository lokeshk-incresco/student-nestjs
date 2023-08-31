import { IsNumber, IsString } from 'class-validator';

export class StudentDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;
}
