import pino from 'pino';
import { getPinoConfig, getPinoTransports } from './transports';
export interface LoggerConfig {
    serviceName: string;
}

export function createLogger({ serviceName }: LoggerConfig) {
    if (!serviceName) {
        throw new Error('Service name is required to create a logger.');
    }

    const isProduction = process.env.NODE_ENV === 'production';
    console.info(
        `Logger is running in ${isProduction ? 'production' : 'development'} mode.`
    );

    const config = getPinoConfig(serviceName);
    const transport = getPinoTransports();

    return pino(config, transport);
}
