import {
    createAuthorizationHeader,
    isHeaderValid,
} from 'ondc-crypto-sdk-nodejs';
import logger from './logger';

import axios from 'axios';
import { getBaseUrl as getBaseRegistryUrl } from '../config/registry-config';
import gcrConfig from '../config/gcr-config';
import { IncomingHttpHeaders } from 'http';
import { OndcPayload } from '../types/ondc-types';

const headerLogger = logger.child('header-utils');

export type TriggeringRequirements = {
    action: 'on_search';
    data: unknown;
    forwardingBaseUrl: string;
};

export const createHeader = async (requirements: TriggeringRequirements) => {
    try {
        const header = await createAuthorizationHeader({
            body: JSON.stringify(requirements.data),
            privateKey: gcrConfig.GCR_PRIVATE_KEY(),
            subscriberId: gcrConfig.GCR_ID(),
            subscriberUniqueKeyId: gcrConfig.GCR_UK_ID(),
        });
        headerLogger.info('Header created successfully', { header });
        return header;
    } catch (error) {
        headerLogger.error('Error creating header', {}, error);
    }
};

export const validateHeader = async (
    header: IncomingHttpHeaders,
    body: OndcPayload,
    publicKey: string
) => {
    try {
        const res = await isHeaderValid({
            header: JSON.stringify(header),
            body: JSON.stringify(body),
            publicKey: publicKey,
        });
        if (!res) {
            headerLogger.error('Invalid header', { header, body });
            return false;
        }
        headerLogger.info('Header is valid', { header, body });
        return res;
    } catch (error) {
        headerLogger.error('Error validating header', {}, error);
        return false;
    }
};

export const validateHeaderFromNp = async (
    headers: IncomingHttpHeaders,
    body: OndcPayload,
    loggerMeta: Record<string, unknown>
) => {
    const publicKey = await getPublicKeyFromHeaders(
        JSON.stringify(headers),
        loggerMeta
    );
    return await validateHeader(headers, body, publicKey);
};

const getPublicKeyFromHeaders = async (
    headers: string,
    loggerMeta: Record<string, unknown>
): Promise<string> => {
    const { subscriberId, ukId } =
        fetchSubscriberDetails(headers, loggerMeta) || {};
    if (!subscriberId || !ukId) {
        logger.error('Subscriber ID or UKID not found', {
            subscriberId,
            ukId,
        });
        throw new Error('Subscriber ID or UKID not found');
    }
    const response = await performLookup(subscriberId, ukId, loggerMeta);
    return response.signing_public_key;
};

const fetchSubscriberDetails = (
    header: string,
    loggingMeta: Record<string, unknown>
) => {
    logger.info('Fetching subscriber details', loggingMeta);
    const keyId: string[] = extractSignatureKeyId(header, loggingMeta);

    if (keyId.length === 0) {
        logger.error('Key ID not found in header', loggingMeta);
        return null;
    }

    // Split the matched keyId value by '|' and destructure the parts if they exist
    const [subscriberId, ukId, _] = keyId[0].split('|');
    logger.debug(
        'Extracted subscriber details',
        {
            subscriberId,
            ukId,
            extra: _,
        },
        loggingMeta
    );
    // Ensure both subscriberID and ukId are present
    return subscriberId && ukId ? { subscriberId, ukId } : null;
};

function extractSignatureKeyId(
    input: string,
    loggingMeta: Record<string, unknown>
): string[] {
    const keyIdRegex = /keyId=\\"([^\\"]+)\\"/g;
    const matches: string[] = [];
    let match;

    while ((match = keyIdRegex.exec(input)) !== null) {
        matches.push(match[1]);
    }
    logger.info('Extracted keyId from header', {
        matches,
        ...loggingMeta,
    });
    return matches;
}

async function performLookup(
    subId: string,
    ukId: string,
    loggingMeta: Record<string, unknown>
) {
    logger.info('Performing lookup for subscriber details', {
        subscriberId: subId,
        ukId,
        ...loggingMeta,
    });

    const baseUrl = getBaseRegistryUrl();
    const url = `${baseUrl}lookup`;
    const data = {
        subscriber_id: subId,
        ukId: ukId,
    };
    const header = await createAuthorizationHeader({
        body: JSON.stringify(data),
        privateKey: gcrConfig.GCR_PRIVATE_KEY(),
        subscriberId: gcrConfig.GCR_ID(),
        subscriberUniqueKeyId: gcrConfig.GCR_UK_ID(),
    });

    try {
        logger.info('Lookup request URL is: ' + url, loggingMeta);
        logger.info('Lookup request data', {
            data,
            ...loggingMeta,
            header: header,
        });
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: header,
            },
        });
        logger.info('Lookup response received', {
            data: response.data,
            ...loggingMeta,
        });
        return response.data[0];
    } catch (error) {
        logger.error(
            'Error while performing lookup',
            {
                subscriberId: subId,
                ukId,
                ...loggingMeta,
            },
            error
        );
        throw new Error('Error while performing lookup');
    }
}
