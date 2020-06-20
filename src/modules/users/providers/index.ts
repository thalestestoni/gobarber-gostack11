import { container } from 'tsyringe';

import IHashProvider from './HashProvider/models/IHashProvider';
import BCryptHashProdiver from './HashProvider/implementations/BCryptHashProdiver';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProdiver);
