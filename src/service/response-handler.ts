// import { QueueJob } from '../queue/IQueueService';
// import { OndcPayload } from '../types/ondc-types';
// import logger from '../utils/logger';

// export type SearchRequestData = {
//     searchRequest: OndcPayload;
//     buyerId: string;
//     buyerUri: string;
// };

// export type SearchResponseResult = {
//     responseSent: boolean;
//     buyerResponseData?: unknown;
// };

// /**
//  * responsible for handling search and adding on_search responses to the queue
//  * @param data - SearchRequestData containing the search request and buyer info
//  * @returns SearchResponseResult indicating the result of processing the search request
//  */
// export async function handleSearchRequestJob(
//     data: SearchRequestData
// ): Promise<SearchResponseResult> {
//     logger.info('Processing async search response', {
//         buyerId: data.buyerId,
//         buyerUri: data.buyerUri,
//     });
//     // const onSearchContext: BeckContext = {
//     //     ...data.searchRequest.context,
//     //     timestamp: new Date().toISOString(),
//     // }
//     return {
//         responseSent: true,
//     };
// }

// export function searchRequestJobComplete(
//     job: QueueJob<SearchRequestData>,
//     result?: unknown
// ): void {
//     logger.info('Async search response job completed', {
//         jobId: job?.id,
//         result,
//     });
// }

// export function searchRequestJobFailed(
//     job: QueueJob<SearchRequestData>,
//     result?: unknown,
//     error?: Error
// ): void {
//     logger.error('Async search response job failed', {
//         jobId: job?.id,
//         error,
//     });
// }
