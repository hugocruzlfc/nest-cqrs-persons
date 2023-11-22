import { CreatePersonRequestDto } from 'src/person/dtos/create-person-request.dto';

export class CreatePersonCommand {
  constructor(public readonly createPersonRequest: CreatePersonRequestDto) {}
}
