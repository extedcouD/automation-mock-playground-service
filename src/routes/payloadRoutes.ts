// import { Router } from 'express';
// import { receiveNewRequest } from '../controllers/request-controller';
// import {
//     validateOndcAuthHeader,
//     validateRetailSearch,
// } from '../controllers/validation-controller';
// import { asyncResponseControllers } from '../controllers/async-response-controller';
// import ServiceContainer from '../container/ServiceContainer';

// const payloadRouter = Router();

// const container = ServiceContainer.getInstance();

// const asyncController = asyncResponseControllers(container.getQueueService());

// payloadRouter.post(
//     '/:action',
//     validateOndcAuthHeader,
//     receiveNewRequest,
//     validateRetailSearch,
//     asyncController.respondWithAsyncOnSearch
// );

// export default payloadRouter;
