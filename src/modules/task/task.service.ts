import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  // Fetch all tasks
  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  // Find one task by ID
  async findOne(id: number): Promise<Task> {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  // Create a new task
  async create(taskData: Partial<Task>): Promise<Task> {
    const task = this.taskRepository.create(taskData);
    return this.taskRepository.save(task);
  }

  // Update a task
  async update(id: number, taskData: Partial<Task>): Promise<Task> {
    await this.taskRepository.update(id, taskData);
    return this.findOne(id);
  }

  // Delete a single task by ID
  async remove(id: number): Promise<void> {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }

  // Delete all tasks
  async removeAll(): Promise<void> {
    await this.taskRepository.clear();
  }
}
