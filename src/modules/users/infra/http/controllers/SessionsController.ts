import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AthenticateUserService from '@modules/users/services/AthenticateUserService';

export default class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const athenticateUser = container.resolve(AthenticateUserService);

    const { user, token } = await athenticateUser.execute({ email, password });

    return response.json({ user: classToClass(user), token });
  }
}
