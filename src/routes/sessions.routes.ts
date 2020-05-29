import { Router } from 'express';

import AthenticateUserService from '../services/AthenticateUserService';

const sessionsRoutes = Router();

sessionsRoutes.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const athenticateUser = new AthenticateUserService();

    const { user, token } = await athenticateUser.execute({ email, password });

    delete user.password;

    return response.json({ user, token });
  } catch (error) {
    return response.status(error.statusCode).json({ error: error.message });
  }
});

export default sessionsRoutes;
