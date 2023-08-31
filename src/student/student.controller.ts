import {
  Body,
  Controller,
  Delete,
  Get,
  // HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
  // Query,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from 'src/dto/student.dto';

// import { ListAllEntities } from 'src/dto/list-all-entities.dto';
// import { Student } from './student.interface';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Post()
  async create(@Body() student: StudentDto): Promise<StudentDto> {
    return this.studentService.create(student);
  }

  @Get()
  async findAll(): Promise<StudentDto[]> {
    return this.studentService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<StudentDto> {
    return this.studentService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() student: StudentDto,
  ): Promise<StudentDto> {
    return this.studentService.update(id, student);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<StudentDto> {
    return this.studentService.delete(id);
  }
}

// @Get()
// @HttpCode(201)
// findAll(): string {
//   return this.studentService.findAll();
// }
// @Get(':id')
// @HttpCode(201)
// findOne(@Param('id') id: any):  {
//   return this.studentService.findById(`${id}`);
// }
// @Post()
// create(@Body() body: any): string {
//   return this.studentService.create(body);
// }
// @Get()
// findAll(@Query() query: ListAllEntities) {
//   return `Your name: ${query.name} and age:${query.age}`;
// }
