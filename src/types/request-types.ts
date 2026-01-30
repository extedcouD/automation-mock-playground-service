import z from 'zod';

export const getFlowStatusQuerySchema = z.object({
    transaction_id: z.string(),
    session_id: z.string(),
});
export type GetFlowStatusQuery = z.infer<typeof getFlowStatusQuerySchema>;

export type MockRequest = {
    correlationId?: string;
    flowId?: string;
    transactionId?: string;
    subscriberUrl?: string;
    query: Record<string, unknown>;
    params: Record<string, unknown>;
    queryData?: Record<string, unknown>;
    transactionData?: {
        sessionId?: string;
    };
    body?: Record<string, any>;
};
