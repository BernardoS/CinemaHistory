import {Router} from 'express';
import { getAllPeriods,getPeriod,createPeriod,deletePeriod,updatePeriod } from '../controllers/periodController.js';

const router = Router();

router.get('/all',getAllPeriods);
router.get('/:id',getPeriod);

router.patch('/:id',updatePeriod);

router.post('/',createPeriod);

router.delete('/:id',deletePeriod);



export default router;