import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Import the User entity
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService, TypeOrmModule],
  // Add any other necessary configurations or modules
})
export class UserModule {}
