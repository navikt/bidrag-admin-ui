import { LoggerService } from "@navikt/bidrag-ui-common";
import { Alert, BodyShort, Button, Heading, Loader } from "@navikt/ds-react";
import { QueryClient, QueryClientProvider, useQueryErrorResetBoundary } from "@tanstack/react-query";
import { FlagProvider, IConfig } from "@unleash/proxy-client-react";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import VisualisePage from "./pages/visualise/VisualisePage";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 3,
            retryDelay: 2000,
        },
    },
});
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
            <QueryClientProvider client={queryClient}>
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
                            <Route path="/admin/visualiser/:id">
                                <Route index element={<VisualisePageWrapper />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </ErrorBoundary>
            </QueryClientProvider>
        </FlagProvider>
    );
}

const VisualisePageWrapper = () => {
    const { id } = useParams<{ id?: string }>();
    return (
        <Suspense
            fallback={
                <div className="flex justify-center">
                    <Loader size="3xlarge" title="venter..." variant="interaction" />
                </div>
            }
        >
            <VisualisePage id={id} />
        </Suspense>
    );
};
