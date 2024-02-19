// @ts-nocheck
const system = {
    isTest: process.env.NODE_ENV === "TEST",
    isDevelopment: process.env.NODE_ENV === "development",
    isProduction: process.env.NODE_ENV === "production",
};

const url = {
    bidragBehandling: process.env.BIDRAG_BEHANDLING_URL,
    bidragVedtak: process.env.BIDRAG_VEDTAK_URL,
};

export default { url, system };
