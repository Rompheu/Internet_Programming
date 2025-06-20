import { Module } from '@nestjs/common';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';

@Module({
  providers: [StudentResolver, StudentService],
  exports: [StudentService], // Export if needed by other modules like Attendance
})
export class StudentModule {}
