import { MockRunnerConfig } from '../types/mock-runner-types';

export function getSaveDataConfig(config: MockRunnerConfig, actionId: string) {
    const actionConfig = config.steps?.find(
        step => step.action_id === actionId
    );
    if (!actionConfig) {
        throw new Error(`Action config not found for actionId: ${actionId}`);
    }
    return actionConfig?.mock.saveData;
}
