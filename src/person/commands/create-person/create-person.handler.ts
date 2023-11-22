import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePersonCommand } from './create-person.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from '../../entities/person.entity';
import { PersonResponseDto } from '../../dtos';

@CommandHandler(CreatePersonCommand)
export class CreatePersonHandler
  implements ICommandHandler<CreatePersonCommand>
{
  constructor(
    @InjectRepository(Person) private personRepository: Repository<Person>,
  ) {}

  async execute({
    createPersonRequest,
  }: CreatePersonCommand): Promise<PersonResponseDto> {
    const { name, age } = createPersonRequest;
    const person = this.personRepository.create({ name, age });
    return await this.personRepository.save(person);
  }
}
