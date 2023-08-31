import { Injectable } from '@nestjs/common';
import { Student } from './student.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentDocument } from './student.schema';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('Student') private StudentModel: Model<StudentDocument>,
  ) {}

  async create(Student: Student): Promise<Student> {
    const createdStudent = new this.StudentModel(Student);
    return createdStudent.save();
  }

  async findAll(): Promise<Student[]> {
    return this.StudentModel.find().exec();
  }

  async findById(id: string): Promise<Student> {
    return this.StudentModel.findById(id).exec();
  }

  async update(id: string, Student: Student): Promise<Student> {
    return this.StudentModel.findByIdAndUpdate(id, Student, {
      new: true,
    }).exec();
  }

  async delete(id: string): Promise<Student> {
    return this.StudentModel.findByIdAndRemove(id).exec();
  }
}
