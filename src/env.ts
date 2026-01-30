export default function validateEnv() {
    const requiredEnvVars = ['NODE_ENV'];
    for (const varName of requiredEnvVars) {
        if (!process.env[varName]) {
            throw new Error(
                `Missing required environment variable: ${varName}`
            );
        }
    }
}
