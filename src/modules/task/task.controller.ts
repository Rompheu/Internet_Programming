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
  constructor(private readonly taskService: TasksService) {}

  @Get('/')
  getAllTasks() {
    return this.taskService.findAll();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.findOne(Number(id));
  }

  @Post('/')
  create(@Body() taskData: Partial<Task>) {
    return this.taskService.create(taskData);
  }

  @Patch('/:id')
  updateTask(@Body() body: any, @Param('id') id: string) {
    return this.taskService.update(Number(id), body);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.remove(Number(id));
  }

  @Delete('/')
  deleteAllTasks() {
    return this.taskService.removeAll();
  }
}
