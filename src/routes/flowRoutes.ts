import { Router } from 'express';
import validateRequiredParams from '../middlewares/validateParams';
import { flowControllers } from '../controllers/flow-controller';
import ServiceContainer from '../container/ServiceContainer';

const flowRouter = Router();

const container = ServiceContainer.getInstance();

const flowControllersInstance = flowControllers(
    container.getQueueService(),
    container.getWorkbenchCacheService()
);

// flowRouter.post('/new');

// flowRouter.post('/proceed');

flowRouter.get(
    '/current-status',
    validateRequiredParams(['transaction_id', 'session_id']),
    flowControllersInstance.getFlowStatusController
);

export default flowRouter;
