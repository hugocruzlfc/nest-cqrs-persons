import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPersonsQuery } from './get-persons.query';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from '../../entities/person.entity';
import { Repository } from 'typeorm';
import { PersonResponseDto } from '../../dtos';

@QueryHandler(GetPersonsQuery)
export class GetPersonsHandler implements IQueryHandler<GetPersonsQuery> {
  constructor(
    @InjectRepository(Person) private personRepo: Repository<Person>,
  ) {}

  async execute(): Promise<PersonResponseDto[]> {
    return await this.personRepo.find();
  }
}
