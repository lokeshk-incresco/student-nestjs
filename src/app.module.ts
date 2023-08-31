import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
console.log(process.env.MONGODB_URI)
@Module({
  imports: [
    StudentModule,
    MongooseModule.forRoot(
      process.env.MONGODB_URI||"mongodb+srv://lokesh:lokesh123@cluster0.z8mbmza.mongodb.net",
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
