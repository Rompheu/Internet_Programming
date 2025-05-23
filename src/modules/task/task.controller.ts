import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './task.service';
import { Task } from './task.entity';
@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {} // Use TasksService

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.findOne(Number(id)); // Matches service method name
  }

  @Get('/')
  getAllTasks() {
    return this.taskService.findAll(); // Add this to expose findAll
  }

  @Post('/')
  create(@Body() taskData: Partial<Task>) {
    return this.taskService.create(taskData);
  }

  @Patch('/:id')
  updateTask(@Body() body: any, @Param('id') id: string) {
    return this.taskService.update(Number(id), body); // Matches service method name
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.remove(Number(id)); // Matches service method name
  }
}
