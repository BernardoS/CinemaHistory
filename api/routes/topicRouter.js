//library imports
import {Router} from 'express';

//local imports
import { 
    getTopic,
    getAllTopics,
    getTopicByPeriod,
    createTopic,
    updateTopic,
    deleteTopic
 } from '../controllers/topicController';

const router = Router();

router.get('/all',getAllTopics);
router.get('/:id',getTopic);
router.get('/:idPeriod',getTopicByPeriod);

router.post('/',createTopic);

router.patch('/',updateTopic);

router.delete('/:id',deleteTopic);

export default router;