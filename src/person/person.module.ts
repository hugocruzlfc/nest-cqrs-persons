import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities';
import { PersonQueryHandlers } from './queries';
import { PersonCommandHandlers } from './commands';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Person])],
  controllers: [PersonController],
  providers: [...PersonQueryHandlers, ...PersonCommandHandlers],
})
export class PersonModule {}
