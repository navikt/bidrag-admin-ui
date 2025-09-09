import { useBidragAdminApi } from "@api/api";
import { EndringsLoggDto, OppdaterEndringsloggRequest, OpprettEndringsloggRequest } from "@api/BidragAdminApi";
import { LoggerService } from "@navikt/bidrag-ui-common";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";

export const useHentEndringslogger = () => {
    const adminApi = useBidragAdminApi();
    return useSuspenseQuery({
        queryKey: ["endringslogger"],
        queryFn: async (): Promise<EndringsLoggDto[]> => {
            const { data } = await adminApi.endringslogg.hentAlleEndringslogg();
            return data;
        },
    });
};

export const useCreateEndringslogg = () => {
    const adminApi = useBidragAdminApi();

    return useMutation({
        mutationFn: async (payload: OpprettEndringsloggRequest): Promise<EndringsLoggDto> => {
            const { data } = await adminApi.endringslogg.opprettEndringslogg(payload);
            return data;
        },
        networkMode: "always",
        onError: (error) => {
            console.log("onError", error);
            LoggerService.error("Feil ved oppreting av endringslogg", error);
        },
    });
};

export const useEditEndringslogg = (endringsloggId: number) => {
    const adminApi = useBidragAdminApi();

    return useMutation({
        mutationFn: async (payload: OppdaterEndringsloggRequest): Promise<EndringsLoggDto> => {
            const { data } = await adminApi.endringslogg.oppdaterEndringslogg(endringsloggId, payload);
            return data;
        },
        networkMode: "always",
        onError: (error) => {
            console.log("onError", error);
            LoggerService.error("Feil ved oppreting av endringslogg", error);
        },
    });
};

export const useHentEndringslogg = (endringsloggId: number) => {
    const adminApi = useBidragAdminApi();
    return useSuspenseQuery({
        queryKey: ["endringslogg", endringsloggId],
        queryFn: async (): Promise<EndringsLoggDto> => {
            const { data } = await adminApi.endringslogg.hentEndringslogg(endringsloggId);
            return data;
        },
    });
};

export const useDeleteEndringslogg = (endringsloggId: number) => {
    const adminApi = useBidragAdminApi();

    return useMutation({
        mutationFn: async (payload: OppdaterEndringsloggRequest): Promise<EndringsLoggDto> => {
            const { data } = await adminApi.endringslogg.oppdaterEndringslogg(endringsloggId, payload);
            return data;
        },
        networkMode: "always",
        onError: (error) => {
            console.log("onError", error);
            LoggerService.error("Feil ved oppreting av endringslogg", error);
        },
    });
};
