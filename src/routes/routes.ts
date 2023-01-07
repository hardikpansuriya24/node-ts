import express,{Request,Response} from 'express';
import { userCreate,userUpdate,userFind,userDelete } from '../controllers/users';
const router = express.Router();

router.post('/user/create', userCreate);
router.get('/user/update', userUpdate);
router.get('/user/search', userFind);
router.get('/user/delete', userDelete);

export {
    router
}