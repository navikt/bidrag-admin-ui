import { useApi } from "@navikt/bidrag-ui-common";

import { Api as BidragBehandlingApiV1 } from "../api/BidragBehandlingApiV1";
import { Api as BidragVedtakApi } from "../api/BidragVedtakApi";
import environment from "../environment";

export const BIDRAG_VEDTAK_API = useApi(
    new BidragVedtakApi({ baseURL: environment.url.bidragVedtak }),
    "bidrag-vedtak",
    "gcp"
);

export const BEHANDLING_API_V1 = useApi(
    new BidragBehandlingApiV1({ baseURL: environment.url.bidragBehandling }),
    "bidrag-behandling",
    "gcp"
);
