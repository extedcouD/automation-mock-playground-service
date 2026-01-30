import os from 'os';
import promClient from 'prom-client';
import logger from './logger';

export const systemCpuUsage = new promClient.Gauge({
    name: 'system_cpu_usage_percent',
    help: 'System CPU usage percentage',
});

export const systemMemoryUsage = new promClient.Gauge({
    name: 'system_memory_usage_percent',
    help: 'System memory usage percentage',
});

export const systemDiskUsage = new promClient.Gauge({
    name: 'system_disk_usage_percent',
    help: 'System disk usage percentage',
    labelNames: ['mount_point'],
});

export const networkConnections = new promClient.Gauge({
    name: 'network_connections_total',
    help: 'Total number of network connections',
    labelNames: ['state'],
});

export const dbHealthStatus = new promClient.Gauge({
    name: 'db_health_status',
    help: 'Database health status (1 = up, 0 = down)',
});

export const dbLatencyGauge = new promClient.Gauge({
    name: 'db_response_time_ms',
    help: 'Database response time in milliseconds',
});

export class HealthMonitor {
    private monitoringInterval: NodeJS.Timeout | null = null;

    constructor() {
        this.startMonitoring();
    }

    private async getCPUUsage(): Promise<number> {
        const cpus = os.cpus();
        let totalIdle = 0;
        let totalTick = 0;

        cpus.forEach(cpu => {
            for (const type in cpu.times) {
                totalTick += cpu.times[type as keyof typeof cpu.times];
            }
            totalIdle += cpu.times.idle;
        });

        return ((totalTick - totalIdle) / totalTick) * 100;
    }

    private getMemoryUsage(): number {
        const totalMem = os.totalmem();
        const freeMem = os.freemem();
        return ((totalMem - freeMem) / totalMem) * 100;
    }

    private async collectMetrics(): Promise<void> {
        try {
            const cpuUsage = await this.getCPUUsage();
            const memoryUsage = this.getMemoryUsage();

            systemCpuUsage.set(cpuUsage);
            systemMemoryUsage.set(memoryUsage);

            logger.debug('Health metrics collected', {
                cpu: cpuUsage.toFixed(2),
                memory: memoryUsage.toFixed(2),
            });
        } catch (error) {
            logger.error('Failed to collect health metrics', {}, error);
        }
    }
    public startMonitoring(intervalMs: number = 30000): void {
        if (this.monitoringInterval) {
            clearInterval(this.monitoringInterval);
        }

        this.monitoringInterval = setInterval(() => {
            this.collectMetrics();
        }, intervalMs);

        this.collectMetrics();
        logger.info('Health monitoring started', { intervalMs });
    }

    public stopMonitoring(): void {
        if (this.monitoringInterval) {
            clearInterval(this.monitoringInterval);
            this.monitoringInterval = null;
            logger.info('Health monitoring stopped');
        }
    }

    public async getHealthStatus(): Promise<any> {
        const dbValue = (await dbHealthStatus.get()).values?.[0]?.value;
        const dbLatency = (await dbLatencyGauge.get()).values?.[0]?.value;

        return {
            status: dbValue === 1 ? 'ok' : 'error',
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
            environment: process.env.NODE_ENV || 'development',
            cpu: await this.getCPUUsage(),
            memory: process.memoryUsage(),
            db: {
                healthy: dbValue === 1,
                latencyMs: dbLatency ?? null,
            },
        };
    }
}

export const healthMonitor = new HealthMonitor();
