const gcrConfig = {
    GCR_ID: () => process.env.GCR_ID || 'default_gcr_id',
    GCR_PRIVATE_KEY: () => process.env.GCR_PRIVATE_KEY || 'default_private_key',
    GCR_PUBLIC_KEY: () => process.env.GCR_PUBLIC_KEY || 'default_public_key',
    GCR_UK_ID: () => process.env.GCR_UK_ID || 'default_uk_id',
};

export default gcrConfig;
