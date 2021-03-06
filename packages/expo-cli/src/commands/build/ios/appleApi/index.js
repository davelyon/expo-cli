import authenticate from './authenticate';
import createDistributionCertManager from './distributionCert';
import createPushKeyManager from './pushKey';
import createProvisioningProfileManager from './provisioningProfile';
import ensureAppExists from './ensureAppExists';
import setup from './setup';

const createManagers = ctx => ({
  distributionCert: createDistributionCertManager(ctx),
  pushKey: createPushKeyManager(ctx),
  provisioningProfile: createProvisioningProfileManager(ctx),
});

export { authenticate, createManagers, ensureAppExists, setup };
