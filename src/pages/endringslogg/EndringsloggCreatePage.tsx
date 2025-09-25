import {
    EndringsLoggDto,
    EndringsloggTilhorerSkjermbilde,
    OppdaterEndringsloggRequest,
    OpprettEndringsloggRequest,
} from "@api/BidragAdminApi";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";

import EndringsloggForm, { EndringsloggFormValues } from "../../components/endringslogg/EndringsloggForm";
import { useCreateEndringslogg, useEditEndringslogg } from "../../hooks/useApiData";

const createPayload = (formValues: EndringsloggFormValues) => {
    const payload: OpprettEndringsloggRequest & { id?: number } = {
        id: formValues.id,
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
    const mutationEdit = useEditEndringslogg();
    const queryClient = useQueryClient();

    const onSave = (formValues: EndringsloggFormValues, onSuccess: (id: number) => void) => {
        if (formValues.id) {
            const payload = createPayload(formValues);
            mutationEdit.mutate(
                { endringsloggId: formValues.id, payload: payload as OppdaterEndringsloggRequest },
                {
                    onSuccess: (response) => {
                        queryClient.setQueryData<EndringsLoggDto[]>(
                            ["endringslogger"],
                            (currentData: EndringsLoggDto[]) =>
                                currentData?.map((endring) => {
                                    if (endring.id === response.id) {
                                        return response;
                                    }
                                    return endring;
                                })
                        );
                        onSuccess(response.id);
                    },
                }
            );
            return;
        }
        const payload = createPayload(formValues);
        mutation.mutate(payload, {
            onSuccess: (response) => {
                queryClient.setQueryData<EndringsLoggDto[]>(["endringslogger"], (currentData: EndringsLoggDto[]) =>
                    [response].concat(currentData)
                );
                onSuccess(response.id);
            },
        });
    };

    return <EndringsloggForm onSave={onSave} mutationError={mutation.error} />;
};
