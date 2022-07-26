import {Router} from 'express';
import {createAccountController} from '../modules/account/usecases/createAccount';

const router = Router();

router.post('/', (req, res) => createAccountController.handle(req, res));

export default router;
