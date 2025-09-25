import { EndringsLoggDto, EndringsloggTilhorerSkjermbilde, OpprettEndringsloggRequest } from "@api/BidragAdminApi";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";

import EndringsloggForm, { EndringsloggFormValues } from "../../components/endringslogg/EndringsloggForm";
import { useCreateEndringslogg } from "../../hooks/useApiData";

const createPayload = (formValues: EndringsloggFormValues) => {
    const payload: OpprettEndringsloggRequest = {
        tittel: formValues.tittel?.trim(),
        tilhørerSkjermbilde: formValues.tilhørerSkjermbilde as EndringsloggTilhorerSkjermbilde,
        sammendrag: formValues.sammendrag?.trim(),
        erPåkrevd: formValues.erPåkrevd,
        endringstyper: formValues.endringer.map((endring) => endring.endringstype),
        endringer: formValues.endringer,
    };

    return payload;
};

export const EndringsloggCreatePage = () => {
    const mutation = useCreateEndringslogg();
    const queryClient = useQueryClient();

    const onSave = (formValues: EndringsloggFormValues, onSuccess: () => void) => {
        const payload = createPayload(formValues);
        mutation.mutate(payload, {
            onSuccess: (response) => {
                queryClient.setQueryData<EndringsLoggDto[]>(["endringslogger"], (currentData: EndringsLoggDto[]) =>
                    [response].concat(currentData)
                );
                onSuccess();
            },
        });
    };

    return <EndringsloggForm onSave={onSave} mutationError={mutation.error} />;
};
