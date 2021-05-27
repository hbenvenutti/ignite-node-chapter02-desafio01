import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const user_id = request.get('user_id');
    console.log(user_id)

    try {
      const users = this.listAllUsersUseCase.execute({user_id});
      console.log(users)
      return response.json(users);
      
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }

  }
}

export { ListAllUsersController };
