import {
    EndringsLoggDto,
    EndringsloggTilhorerSkjermbilde,
    OppdaterEndringsloggEndring,
    OppdaterEndringsloggRequest,
} from "@api/BidragAdminApi";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

import EndringsloggForm, { EndringsloggFormValues } from "../../components/endringslogg/EndringsloggForm";
import { dateOrNull } from "../../components/FormDatePicker";
import { useEditEndringslogg, useHentEndringslogg } from "../../hooks/useApiData";

const createPayload = (formValues: EndringsloggFormValues) => {
    const payload: OppdaterEndringsloggRequest = {
        tittel: formValues.tittel?.trim(),
        tilhørerSkjermbilde: formValues.tilhørerSkjermbilde as EndringsloggTilhorerSkjermbilde,
        sammendrag: formValues.sammendrag?.trim(),
        erPåkrevd: formValues.erPåkrevd,
        aktivFraTidspunkt: dateOrNull(formValues.aktivFraTidspunkt)?.toLocaleDateString("sv-SV", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }),
        aktivTilTidspunkt: dateOrNull(formValues.aktivTilTidspunkt)?.toLocaleDateString("sv-SV", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }),
        endringstyper: formValues.endringer.map((endring) => endring.endringstype),
        endringer: formValues.endringer as OppdaterEndringsloggEndring[],
    };

    return payload;
};

export const EndringsloggEditPage = () => {
    const { id } = useParams<{
        id?: string;
    }>();
    const queryClient = useQueryClient();
    const endringslogg = useHentEndringslogg(Number(id));
    const mutation = useEditEndringslogg(Number(id));

    const onSave = (formValues: EndringsloggFormValues, onSuccess: () => void) => {
        const payload = createPayload(formValues);
        mutation.mutate(payload, {
            onSuccess: (response) => {
                queryClient.setQueryData<EndringsLoggDto[]>(["endringslogger"], (currentData: EndringsLoggDto[]) => {
                    return currentData?.map((endring) => {
                        if (endring.id === response.id) {
                            return response;
                        }
                        return endring;
                    });
                });
                queryClient.setQueryData<EndringsLoggDto>(["endringslogg", Number(id)], () => response);
                onSuccess();
            },
        });
    };
    return <EndringsloggForm onSave={onSave} mutationError={mutation.error} endringslogg={endringslogg.data} />;
};
