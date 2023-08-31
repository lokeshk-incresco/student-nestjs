import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema({ collection: 'students' })
export class Student extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
