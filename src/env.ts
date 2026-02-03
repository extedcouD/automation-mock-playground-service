export default function validateEnv() {
    const requiredEnvVars = ['NODE_ENV', 'API_SERVICE_URL'];
    for (const varName of requiredEnvVars) {
        if (!process.env[varName]) {
            throw new Error(
                `Missing required environment variable: ${varName}`
            );
        }
    }
}
