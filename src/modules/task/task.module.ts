import { Module } from '@nestjs/common';
import { TasksController } from './task.controller';
import { TasksService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { UserModule } from '../user/user.module'; // Import the UsersModule

@Module({
  imports: [TypeOrmModule.forFeature([Task]), UserModule], // Import the Task entity
  providers: [TasksService],
  controllers: [TasksController],
})
export class TaskModule {}
