import {
  Get,
  Param,
  Controller,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersService } from './user.service'; // correct name
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {} // use correct class

  @Post()
  create(@Body() userData: Partial<User>) {
    return this.usersService.create(userData);
  }

  @Get()
  findAllUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findUser(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() body: Partial<User>) {
    return this.usersService.update(+id, body);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.remove(+id);
  }
}
