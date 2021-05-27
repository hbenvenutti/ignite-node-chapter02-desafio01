import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const emailIsTaken = this.usersRepository.findByEmail(email)

    if (emailIsTaken) {
      throw new Error(`Email ${email} is taken`);
    }
    const user = this.usersRepository.create({ email, name })

    return user;
  }
}

export { CreateUserUseCase };
