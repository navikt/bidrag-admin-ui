import { LoggerService } from "@navikt/bidrag-ui-common";
import { Alert, BodyShort, Button, Heading, Loader } from "@navikt/ds-react";
import { QueryClient, QueryClientProvider, useQueryErrorResetBoundary } from "@tanstack/react-query";
import { PersistedClient, Persister, PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { FlagProvider, IConfig } from "@unleash/proxy-client-react";
import { del, get, set } from "idb-keyval";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DokumentasjonPage from "./pages/DokumentasjonPage";
import PageWrapper from "./pages/PageWrapper";
import VedtakExplorer from "./pages/visualise/VedtakExplorer";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 3,
            retryDelay: 2000,
            networkMode: "offlineFirst",
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
            staleTime: 1000 * 60 * 60 * 24, // 24 hours
        },
    },
});
/**
 * Creates an Indexed DB persister
 * @see https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
 */
export function createIDBPersister(idbValidKey: IDBValidKey = "reactQuery") {
    return {
        persistClient: async (client: PersistedClient) => {
            await set(idbValidKey, client);
        },
        restoreClient: async () => {
            return await get<PersistedClient>(idbValidKey);
        },
        removeClient: async () => {
            await del(idbValidKey);
        },
    } as Persister;
}

const config: IConfig = {
    url: process.env.UNLEASH_API_URL as string,
    clientKey: process.env.UNLEASH_FRONTEND_TOKEN,
    refreshInterval: 15, // How often (in seconds) the client should poll the proxy for updates
    appName: "bidrag-admin-ui",
};
export default function App() {
    const { reset } = useQueryErrorResetBoundary();
    return (
        <FlagProvider config={config}>
            <ErrorBoundary
                onReset={reset}
                onError={(error, compStack) => {
                    LoggerService.error(
                        `Det skjedde en feil i bidrag-adnub skjermbildet ${error.message} - ${compStack.componentStack}`,
                        error
                    );
                }}
                fallbackRender={({ error, resetErrorBoundary }) => (
                    <Alert variant="error" className="w-8/12 m-auto mt-8">
                        <div>
                            <Heading spacing size="small" level="3">
                                Det har skjedd en feil
                            </Heading>
                            <BodyShort size="small">Feilmelding: {error.message}</BodyShort>
                            <Button size="small" className="w-max mt-4" onClick={() => resetErrorBoundary()}>
                                Last på nytt
                            </Button>
                        </div>
                    </Alert>
                )}
            >
                <BrowserRouter>
                    <Routes>
                        <Route path="/admin/vedtak/explorer">
                            <Route index element={<VedtakExplorerWrapper />} />
                        </Route>
                        <Route path="/admin/dokumentasjon">
                            <Route index element={<DokumentasjonWrapper />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ErrorBoundary>
        </FlagProvider>
    );
}

const DokumentasjonWrapper = () => {
    return (
        <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{ persister: createIDBPersister("bidrag-admin-ui"), maxAge: Infinity }}
        >
            <Suspense
                fallback={
                    <div className="flex justify-center">
                        <Loader size="3xlarge" title="venter..." variant="interaction" />
                    </div>
                }
            >
                <PageWrapper name="dokumentasjon">
                    <DokumentasjonPage />
                </PageWrapper>
            </Suspense>
        </PersistQueryClientProvider>
    );
};

const VedtakExplorerWrapper = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense
                fallback={
                    <div className="flex justify-center">
                        <Loader size="3xlarge" title="venter..." variant="interaction" />
                    </div>
                }
            >
                <VedtakExplorer />
            </Suspense>
        </QueryClientProvider>
    );
};
