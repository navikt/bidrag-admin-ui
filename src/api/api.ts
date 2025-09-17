import { Api as BidragAdminApi } from "@api/BidragAdminApi";
import { useApi } from "@navikt/bidrag-ui-common";

import environment from "../environment";

export const useBidragAdminApi = () =>
    useApi(new BidragAdminApi({ baseURL: environment.url.bidragAdmin }), {
        app: "bidrag-admin",
        cluster: "gcp",
    });
