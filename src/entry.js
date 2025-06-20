const core = require('@actions/core');
const { exportSecrets } = require('./action');

(async () => {
    try {
        const baseTag = 'v3.3.0';
        core.info(`sgnus-k8s/vault-action@delegated-auth: based on hashicorp/vault-action@${baseTag}`);
        await core.group('Get Vault Secrets', exportSecrets);
    } catch (error) {
        core.setOutput("errorMessage", error.message);
        core.setFailed(error.message);
    }
})();
