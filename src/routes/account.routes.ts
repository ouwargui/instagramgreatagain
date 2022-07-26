import {Router} from 'express';
import {authAccountController} from '../modules/account/usecases/authAccount';
import {createAccountController} from '../modules/account/usecases/createAccount';

const router = Router();

router.post('/', (req, res) => createAccountController.handle(req, res));
router.post('/auth', (req, res) => authAccountController.handle(req, res));

export default router;
