import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetPersonsQuery } from './queries/get-persons/get-persons.query';
import { CreatePersonCommand } from './commands/create-person/create-person.command';
import { CreatePersonRequestDto } from './dtos/create-person-request.dto';

@Controller('person')
export class PersonController {
  constructor(
    private queryBus: QueryBus,
    private commandBus: CommandBus,
  ) {}

  @Get('all')
  async getAllPersons() {
    return await this.queryBus.execute(new GetPersonsQuery());
  }

  @Post('create')
  async createPerson(@Body() body: CreatePersonRequestDto) {
    return await this.commandBus.execute<CreatePersonCommand, void>(
      new CreatePersonCommand(body),
    );
  }
}
