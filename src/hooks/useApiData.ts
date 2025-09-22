import { useBidragAdminApi } from "@api/api";
import { EndringsLoggDto, OppdaterEndringsloggRequest, OpprettEndringsloggRequest } from "@api/BidragAdminApi";
import { LoggerService } from "@navikt/bidrag-ui-common";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";

export const useHentEndringslogger = () => {
    const adminApi = useBidragAdminApi();
    return useSuspenseQuery({
        queryKey: ["endringslogger"],
        queryFn: async (): Promise<EndringsLoggDto[]> => {
            const { data } = await adminApi.endringslogg.hentAlleEndringslogg({ bareAktive: false });
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

export const useAktiverEndringslogg = () => {
    const adminApi = useBidragAdminApi();

    return useMutation({
        mutationFn: async (endringsloggId: number): Promise<EndringsLoggDto> => {
            const { data } = await adminApi.endringslogg.aktiverEndringslogg(endringsloggId);
            return data;
        },
        networkMode: "always",
        onError: (error) => {
            console.log("onError", error);
            LoggerService.error("Feil ved aktivering av endringslogg", error);
        },
    });
};

export const useDeaktiverEndringslogg = () => {
    const adminApi = useBidragAdminApi();

    return useMutation({
        mutationFn: async (endringsloggId: number): Promise<EndringsLoggDto> => {
            const { data } = await adminApi.endringslogg.deaktiverEndringslogg(endringsloggId);
            return data;
        },
        networkMode: "always",
        onError: (error) => {
            console.log("onError", error);
            LoggerService.error("Feil ved deaktivering av endringslogg", error);
        },
    });
};
