import { BidragContainer } from "@navikt/bidrag-ui-common";
import { Outlet } from "react-router";

export const EndringsloggLayout = () => {
    return (
        <BidragContainer className="p-6">
            <Outlet />
        </BidragContainer>
    );
};
