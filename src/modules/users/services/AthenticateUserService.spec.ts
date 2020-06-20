import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AthenticateUserService from './AthenticateUserService';
import CreateUserService from './CreateUserService';

describe('AthenticateUser', () => {
  it('should be able authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    const athenticateUser = new AthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '12354',
    });

    const response = await athenticateUser.execute({
      email: 'johndoe@example.com',
      password: '12354',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });
});