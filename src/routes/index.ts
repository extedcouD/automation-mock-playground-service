import { Router } from 'express';
import manualRouter from './manualRoutes';
import flowRouter from './flowRoutes';

const router = Router();

router.use('/manual', manualRouter);
router.use('/flow', flowRouter);
// router.use('/backdoor', backdoorRouter);
export default router;
