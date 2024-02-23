/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Kilde/type for en behandlingsreferanse */
export enum BehandlingsrefKilde {
    BEHANDLING_ID = "BEHANDLING_ID",
    BISYSSOKNAD = "BISYS_SØKNAD",
    BISYSKLAGEREFSOKNAD = "BISYS_KLAGE_REF_SØKNAD",
}

/** Angir om søknaden om engangsbeløp er besluttet avvist, stadfestet eller skal medføre endringGyldige verdier er 'AVVIST', 'STADFESTELSE' og 'ENDRING' */
export enum Beslutningstype {
    AVVIST = "AVVIST",
    STADFESTELSE = "STADFESTELSE",
    ENDRING = "ENDRING",
}

/** Beløpstype. Saertilskudd, gebyr m.m. */
export enum Engangsbeloptype {
    DIREKTE_OPPGJOR = "DIREKTE_OPPGJOR",
    DIREKTEOPPGJOR = "DIREKTE_OPPGJØR",
    ETTERGIVELSE = "ETTERGIVELSE",
    ETTERGIVELSE_TILBAKEKREVING = "ETTERGIVELSE_TILBAKEKREVING",
    GEBYR_MOTTAKER = "GEBYR_MOTTAKER",
    GEBYR_SKYLDNER = "GEBYR_SKYLDNER",
    INNKREVING_GJELD = "INNKREVING_GJELD",
    SAERTILSKUDD = "SAERTILSKUDD",
    SAeRTILSKUDD = "SÆRTILSKUDD",
    TILBAKEKREVING = "TILBAKEKREVING",
}

/** Grunnlagstype */
export enum Grunnlagstype {
    SAeRFRADRAG = "SÆRFRADRAG",
    SKATTEKLASSE = "SKATTEKLASSE",
    NETTOSAeRTILSKUDD = "NETTO_SÆRTILSKUDD",
    SAMVAeRSKLASSE = "SAMVÆRSKLASSE",
    BIDRAGSEVNE = "BIDRAGSEVNE",
    SAMVAeRSFRADRAG = "SAMVÆRSFRADRAG",
    SJABLON = "SJABLON",
    LOPENDEBIDRAG = "LØPENDE_BIDRAG",
    FAKTISK_UTGIFT = "FAKTISK_UTGIFT",
    BARNETILSYNMEDSTONAD = "BARNETILSYN_MED_STØNAD",
    FORPLEINING_UTGIFT = "FORPLEINING_UTGIFT",
    BARN = "BARN",
    DELT_BOSTED = "DELT_BOSTED",
    NETTO_BARNETILSYN = "NETTO_BARNETILSYN",
    UNDERHOLDSKOSTNAD = "UNDERHOLDSKOSTNAD",
    BPS_ANDEL_UNDERHOLDSKOSTNAD = "BPS_ANDEL_UNDERHOLDSKOSTNAD",
    TILLEGGSBIDRAG = "TILLEGGSBIDRAG",
    MAKS_BIDRAG_PER_BARN = "MAKS_BIDRAG_PER_BARN",
    BPSANDELSAeRTILSKUDD = "BPS_ANDEL_SÆRTILSKUDD",
    MAKSGRENSE25INNTEKT = "MAKS_GRENSE_25_INNTEKT",
    GEBYRFRITAK = "GEBYRFRITAK",
    INNBETALTBELOP = "INNBETALT_BELØP",
    FORHOLDSMESSIG_FORDELING = "FORHOLDSMESSIG_FORDELING",
    KLAGE_STATISTIKK = "KLAGE_STATISTIKK",
    BOSTATUS_PERIODE = "BOSTATUS_PERIODE",
    SIVILSTAND_PERIODE = "SIVILSTAND_PERIODE",
    INNTEKT_RAPPORTERING_PERIODE = "INNTEKT_RAPPORTERING_PERIODE",
    SOKNAD = "SØKNAD",
    VIRKNINGSTIDSPUNKT = "VIRKNINGSTIDSPUNKT",
    NOTAT = "NOTAT",
    SLUTTBEREGNING_FORSKUDD = "SLUTTBEREGNING_FORSKUDD",
    DELBEREGNING_SUM_INNTEKT = "DELBEREGNING_SUM_INNTEKT",
    DELBEREGNING_BARN_I_HUSSTAND = "DELBEREGNING_BARN_I_HUSSTAND",
    PERSON = "PERSON",
    PERSON_BIDRAGSMOTTAKER = "PERSON_BIDRAGSMOTTAKER",
    PERSON_BIDRAGSPLIKTIG = "PERSON_BIDRAGSPLIKTIG",
    PERSON_REELL_MOTTAKER = "PERSON_REELL_MOTTAKER",
    PERSONSOKNADSBARN = "PERSON_SØKNADSBARN",
    PERSON_HUSSTANDSMEDLEM = "PERSON_HUSSTANDSMEDLEM",
    BEREGNET_INNTEKT = "BEREGNET_INNTEKT",
    INNHENTET_HUSSTANDSMEDLEM = "INNHENTET_HUSSTANDSMEDLEM",
    INNHENTET_SIVILSTAND = "INNHENTET_SIVILSTAND",
    INNHENTET_ARBEIDSFORHOLD = "INNHENTET_ARBEIDSFORHOLD",
    INNHENTET_INNTEKT_SKATTEGRUNNLAG_PERIODE = "INNHENTET_INNTEKT_SKATTEGRUNNLAG_PERIODE",
    INNHENTET_INNTEKT_AORDNING = "INNHENTET_INNTEKT_AORDNING",
    INNHENTET_INNTEKT_BARNETILLEGG = "INNHENTET_INNTEKT_BARNETILLEGG",
    INNHENTETINNTEKTKONTANTSTOTTE = "INNHENTET_INNTEKT_KONTANTSTØTTE",
    INNHENTET_INNTEKT_AINNTEKT = "INNHENTET_INNTEKT_AINNTEKT",
    INNHENTET_INNTEKT_BARNETILSYN = "INNHENTET_INNTEKT_BARNETILSYN",
    INNHENTETINNTEKTSMABARNSTILLEGG = "INNHENTET_INNTEKT_SMÅBARNSTILLEGG",
    INNHENTET_INNTEKT_UTVIDETBARNETRYGD = "INNHENTET_INNTEKT_UTVIDETBARNETRYGD",
}

/** Angir om engangsbeløpet skal innkreves */
export enum Innkrevingstype {
    MED_INNKREVING = "MED_INNKREVING",
    UTEN_INNKREVING = "UTEN_INNKREVING",
}

/** Grunnlagsinnhold (generisk) */
export type JsonNode = object;

/** Liste med referanser til alle behandlinger som ligger som grunnlag til vedtaket */
export interface OpprettBehandlingsreferanseRequestDto {
    /** Kilde/type for en behandlingsreferanse */
    kilde: BehandlingsrefKilde;
    /** Kildesystemets referanse til behandlingen */
    referanse: string;
}

/** Liste over alle engangsbeløp som inngår i vedtaket */
export interface OpprettEngangsbelopRequestDto {
    /** Beløpstype. Saertilskudd, gebyr m.m. */
    type: Engangsbeloptype;
    /** Referanse til sak */
    sak: string;
    /** Personidenten til den som skal betale engangsbeløpet */
    skyldner: string;
    /** Personidenten til den som krever engangsbeløpet */
    kravhaver: string;
    /** Personidenten til den som mottar engangsbeløpet */
    mottaker: string;
    /**
     * Beregnet engangsbeløp
     * @min 0
     */
    beløp?: number;
    /** Valutakoden tilhørende engangsbeløpet */
    valutakode: string;
    /** Resultatkoden tilhørende engangsbeløpet */
    resultatkode: string;
    /** Angir om engangsbeløpet skal innkreves */
    innkreving: Innkrevingstype;
    /** Angir om søknaden om engangsbeløp er besluttet avvist, stadfestet eller skal medføre endringGyldige verdier er 'AVVIST', 'STADFESTELSE' og 'ENDRING' */
    beslutning: Beslutningstype;
    /**
     * Id for vedtaket det er klaget på. Utgjør sammen med referanse en unik id for et engangsbeløp
     * @format int32
     */
    omgjørVedtakId?: number;
    /** Referanse til engangsbeløp, brukes for å kunne omgjøre engangsbeløp senere i et klagevedtak. Unik innenfor et vedtak. Unik referanse blir generert av bidrag-vedtak hvis den ikke er angitt i requesten. */
    referanse?: string;
    /** Referanse - delytelsesId/beslutningslinjeId -> bidrag-regnskap. Skal fjernes senere */
    delytelseId?: string;
    /** Referanse som brukes i utlandssaker */
    eksternReferanse?: string;
    /** Liste over alle grunnlag som inngår i engangsbeløpet */
    grunnlagReferanseListe: string[];
}

/** Liste over alle grunnlag som inngår i vedtaket */
export interface OpprettGrunnlagRequestDto {
    /** Referanse (unikt navn på grunnlaget) */
    referanse: string;
    /** Grunnlagstype */
    type: Grunnlagstype;
    /** Grunnlagsinnhold (generisk) */
    innhold: JsonNode;
    /** Liste over grunnlagsreferanser */
    grunnlagsreferanseListe: string[];
    /** Referanse til personobjektet grunnlaget gjelder */
    gjelderReferanse?: string;
}

/** Liste over alle perioder som inngår i stønadsendringen */
export interface OpprettPeriodeRequestDto {
    /** Periode med fra-og-med-dato og til-dato med format ÅÅÅÅ-MM */
    periode: TypeArManedsperiode;
    /**
     * Beregnet stønadsbeløp
     * @min 0
     */
    beløp?: number;
    /** Valutakoden tilhørende stønadsbeløpet */
    valutakode: string;
    /** Resultatkoden tilhørende stønadsbeløpet */
    resultatkode: string;
    /** Referanse - delytelseId/beslutningslinjeId -> bidrag-regnskap. Skal fjernes senere */
    delytelseId?: string;
    /** Liste over alle grunnlag som inngår i perioden */
    grunnlagReferanseListe: string[];
}

/** Liste over alle stønadsendringer som inngår i vedtaket */
export interface OpprettStonadsendringRequestDto {
    /** Stønadstype */
    type: Stonadstype;
    /** Referanse til sak */
    sak: string;
    /** Personidenten til den som skal betale bidraget */
    skyldner: string;
    /** Personidenten til den som krever bidraget */
    kravhaver: string;
    /** Personidenten til den som mottar bidraget */
    mottaker: string;
    /**
     * Angir første år en stønad skal indeksreguleres
     * @format int32
     */
    førsteIndeksreguleringsår?: number;
    /** Angir om engangsbeløpet skal innkreves */
    innkreving: Innkrevingstype;
    /** Angir om søknaden om engangsbeløp er besluttet avvist, stadfestet eller skal medføre endringGyldige verdier er 'AVVIST', 'STADFESTELSE' og 'ENDRING' */
    beslutning: Beslutningstype;
    /**
     * Id for vedtaket det er klaget på
     * @format int32
     */
    omgjørVedtakId?: number;
    /** Referanse som brukes i utlandssaker */
    eksternReferanse?: string;
    /** Liste over grunnlag som er knyttet direkte til stønadsendringen */
    grunnlagReferanseListe: string[];
    /** Liste over alle perioder som inngår i stønadsendringen */
    periodeListe: OpprettPeriodeRequestDto[];
}

export interface OpprettVedtakRequestDto {
    /** Hva er kilden til vedtaket. Automatisk eller manuelt */
    kilde: OpprettVedtakRequestDtoKildeEnum;
    /** Type vedtak */
    type: Vedtakstype;
    /** Skal bare brukes ved batchkjøring. Id til batchjobb som oppretter vedtaket */
    opprettetAv?: string;
    /**
     * Tidspunkt/timestamp når vedtaket er fattet
     * @format date-time
     */
    vedtakstidspunkt: string;
    /** Enheten som er ansvarlig for vedtaket. Kan være null for feks batch */
    enhetsnummer: string;
    /**
     * Settes hvis overføring til Elin skal utsettes
     * @format date
     */
    innkrevingUtsattTilDato?: string;
    /** Settes hvis vedtaket er fastsatt i utlandet */
    fastsattILand?: string;
    /** Liste over alle grunnlag som inngår i vedtaket */
    grunnlagListe: OpprettGrunnlagRequestDto[];
    /** Liste over alle stønadsendringer som inngår i vedtaket */
    stønadsendringListe: OpprettStonadsendringRequestDto[];
    /** Liste over alle engangsbeløp som inngår i vedtaket */
    engangsbeløpListe: OpprettEngangsbelopRequestDto[];
    /** Liste med referanser til alle behandlinger som ligger som grunnlag til vedtaket */
    behandlingsreferanseListe: OpprettBehandlingsreferanseRequestDto[];
}

/** Stønadstype */
export enum Stonadstype {
    BIDRAG = "BIDRAG",
    FORSKUDD = "FORSKUDD",
    BIDRAG18AAR = "BIDRAG18AAR",
    EKTEFELLEBIDRAG = "EKTEFELLEBIDRAG",
    MOTREGNING = "MOTREGNING",
    OPPFOSTRINGSBIDRAG = "OPPFOSTRINGSBIDRAG",
}

/** Type vedtak */
export enum Vedtakstype {
    INDEKSREGULERING = "INDEKSREGULERING",
    ALDERSJUSTERING = "ALDERSJUSTERING",
    OPPHOR = "OPPHØR",
    ALDERSOPPHOR = "ALDERSOPPHØR",
    REVURDERING = "REVURDERING",
    FASTSETTELSE = "FASTSETTELSE",
    INNKREVING = "INNKREVING",
    KLAGE = "KLAGE",
    ENDRING = "ENDRING",
    ENDRING_MOTTAKER = "ENDRING_MOTTAKER",
}

/** Periode med fra-og-med-dato og til-dato med format ÅÅÅÅ-MM */
export interface TypeArManedsperiode {
    /**
     * @pattern YYYY-MM
     * @example "2023-01"
     */
    fom: string;
    /**
     * @pattern YYYY-MM
     * @example "2023-01"
     */
    til?: string;
}

/** BaseGrunnlag */
export interface BaseGrunnlag {
    /** Grunnlagstype */
    type: Grunnlagstype;
    /** Liste over grunnlagsreferanser */
    grunnlagsreferanseListe: string[];
    /** Referanse (unikt navn på grunnlaget) */
    referanse: string;
    /** Grunnlagsinnhold (generisk) */
    innhold: JsonNode;
    /** Referanse til personobjektet grunnlaget gjelder */
    gjelderReferanse?: string;
}

export interface MermaidResponse {
    mermaidGraph: string;
    vedtak: TreeVedtak;
    stønadsendringer: TreeStonad[];
    perioder: TreePeriode[];
    grunnlagListe: BaseGrunnlag[];
}

export interface TreePeriode {
    nodeId: string;
    beløp?: number;
    valutakode?: string;
    resultatkode: string;
    delytelseId?: string;
}

export interface TreeStonad {
    nodeId: string;
    /** Stønadstype */
    type: Stonadstype;
    sak: string;
    skyldner: string;
    kravhaver: string;
    mottaker: string;
    /** @format int32 */
    førsteIndeksreguleringsår?: number;
    /** Angir om engangsbeløpet skal innkreves */
    innkreving: Innkrevingstype;
    /** Angir om søknaden om engangsbeløp er besluttet avvist, stadfestet eller skal medføre endringGyldige verdier er 'AVVIST', 'STADFESTELSE' og 'ENDRING' */
    beslutning: Beslutningstype;
    /** @format int32 */
    omgjørVedtakId?: number;
    eksternReferanse?: string;
}

export interface TreeVedtak {
    nodeId: string;
    kilde: TreeVedtakKildeEnum;
    /** Type vedtak */
    type: Vedtakstype;
    opprettetAv: string;
    opprettetAvNavn?: string;
    kildeapplikasjon: string;
    /** @format date-time */
    vedtakstidspunkt: string;
    enhetsnummer?: string;
    /** @format date */
    innkrevingUtsattTilDato?: string;
    fastsattILand?: string;
    /** @format date-time */
    opprettetTidspunkt: string;
}

/** Grunnlag */
export interface GrunnlagDto {
    /** Referanse (unikt navn på grunnlaget) */
    referanse: string;
    /** Grunnlagstype */
    type: Grunnlagstype;
    /** Grunnlagsinnhold (generisk) */
    innhold: JsonNode;
    /** Liste over grunnlagsreferanser */
    grunnlagsreferanseListe: string[];
    /** Referanse til personobjektet grunnlaget gjelder */
    gjelderReferanse?: string;
}

export type POJONode = object;

export interface TreeChild {
    name: string;
    id: string;
    type: TreeChildTypeEnum;
    children: TreeChild[];
    innhold?: POJONode;
    /** Grunnlag */
    grunnlag?: GrunnlagDto;
    /** Grunnlagstype */
    grunnlagstype?: Grunnlagstype;
}

export interface OpprettVedtakResponseDto {
    /**
     * Unik id generert for vedtak
     * @format int32
     */
    vedtaksid: number;
    /** Liste over alle referansen for engangsbeløp som inngår i vedtaket. Ligger i samme rekkefølge som i requesten */
    engangsbeløpReferanseListe: string[];
}

/** Liste med referanser til alle behandlinger som ligger som grunnlag til vedtaket */
export interface BehandlingsreferanseDto {
    /** Kilde/type for en behandlingsreferanse */
    kilde: BehandlingsrefKilde;
    /** Kildesystemets referanse til behandlingen */
    referanse: string;
}

/** Liste over alle engangsbeløp som inngår i vedtaket */
export interface EngangsbelopDto {
    /** Beløpstype. Saertilskudd, gebyr m.m. */
    type: Engangsbeloptype;
    /** Referanse til sak */
    sak: string;
    /** Personidenten til den som skal betale engangsbeløpet */
    skyldner: string;
    /** Personidenten til den som krever engangsbeløpet */
    kravhaver: string;
    /** Personidenten til den som mottar engangsbeløpet */
    mottaker: string;
    /**
     * Beregnet engangsbeløp
     * @min 0
     */
    beløp?: number;
    /** Valutakoden tilhørende engangsbeløpet */
    valutakode: string;
    /** Resultatkoden tilhørende engangsbeløpet */
    resultatkode: string;
    /** Angir om engangsbeløpet skal innkreves */
    innkreving: Innkrevingstype;
    /** Angir om søknaden om engangsbeløp er besluttet avvist, stadfestet eller skal medføre endringGyldige verdier er 'AVVIST', 'STADFESTELSE' og 'ENDRING' */
    beslutning: Beslutningstype;
    /**
     * Id for vedtaket det er klaget på. Utgjør sammen med referanse en unik id for et engangsbeløp
     * @format int32
     */
    omgjørVedtakId?: number;
    /** Referanse til engangsbeløp, brukes for å kunne omgjøre engangsbeløp senere i et klagevedtak. Unik innenfor et vedtak.Referansen er enten angitt i requesten for opprettelse av vedtak eller generert av bidrag-vedtak hvis den ikke var angitt i requesten. */
    referanse: string;
    /** Referanse - delytelsesId/beslutningslinjeId -> bidrag-regnskap. Skal fjernes senere */
    delytelseId?: string;
    /** Referanse som brukes i utlandssaker */
    eksternReferanse?: string;
    /** Liste over alle grunnlag som inngår i beregningen */
    grunnlagReferanseListe: string[];
}

/** Liste over alle stønadsendringer som inngår i vedtaket */
export interface StonadsendringDto {
    /** Stønadstype */
    type: Stonadstype;
    /** Referanse til sak */
    sak: string;
    /** Personidenten til den som skal betale bidraget */
    skyldner: string;
    /** Personidenten til den som krever bidraget */
    kravhaver: string;
    /** Personidenten til den som mottar bidraget */
    mottaker: string;
    /**
     * Angir første år en stønad skal indeksreguleres
     * @format int32
     */
    førsteIndeksreguleringsår?: number;
    /** Angir om engangsbeløpet skal innkreves */
    innkreving: Innkrevingstype;
    /** Angir om søknaden om engangsbeløp er besluttet avvist, stadfestet eller skal medføre endringGyldige verdier er 'AVVIST', 'STADFESTELSE' og 'ENDRING' */
    beslutning: Beslutningstype;
    /**
     * Id for vedtaket det er klaget på
     * @format int32
     */
    omgjørVedtakId?: number;
    /** Referanse som brukes i utlandssaker */
    eksternReferanse?: string;
    /** Liste over grunnlag som er knyttet direkte til stønadsendringen */
    grunnlagReferanseListe: string[];
    /** Liste over alle perioder som inngår i stønadsendringen */
    periodeListe: VedtakPeriodeDto[];
}

export interface VedtakDto {
    /** Hva er kilden til vedtaket. Automatisk eller manuelt */
    kilde: VedtakDtoKildeEnum;
    /** Type vedtak */
    type: Vedtakstype;
    /** Id til saksbehandler eller batchjobb som opprettet vedtaket. For saksbehandler er ident hentet fra token */
    opprettetAv: string;
    /** Saksbehandlers navn */
    opprettetAvNavn?: string;
    /** Navn på applikasjon som vedtaket er opprettet i */
    kildeapplikasjon: string;
    /**
     * Tidspunkt/timestamp når vedtaket er fattet
     * @format date-time
     */
    vedtakstidspunkt: string;
    /** Enheten som er ansvarlig for vedtaket. Kan være null for feks batch */
    enhetsnummer?: string;
    /**
     * Settes hvis overføring til Elin skal utsettes
     * @format date
     */
    innkrevingUtsattTilDato?: string;
    /** Settes hvis vedtaket er fastsatt i utlandet */
    fastsattILand?: string;
    /**
     * Tidspunkt vedtaket er fattet
     * @format date-time
     */
    opprettetTidspunkt: string;
    /** Liste over alle grunnlag som inngår i vedtaket */
    grunnlagListe: GrunnlagDto[];
    /** Liste over alle stønadsendringer som inngår i vedtaket */
    stønadsendringListe: StonadsendringDto[];
    /** Liste over alle engangsbeløp som inngår i vedtaket */
    engangsbeløpListe: EngangsbelopDto[];
    /** Liste med referanser til alle behandlinger som ligger som grunnlag til vedtaket */
    behandlingsreferanseListe: BehandlingsreferanseDto[];
}

/** Liste over alle perioder som inngår i stønadsendringen */
export interface VedtakPeriodeDto {
    /** Periode med fra-og-med-dato og til-dato med format ÅÅÅÅ-MM */
    periode: TypeArManedsperiode;
    /**
     * Beregnet stønadsbeløp
     * @min 0
     */
    beløp?: number;
    /** Valutakoden tilhørende stønadsbeløpet */
    valutakode?: string;
    /** Resultatkoden tilhørende stønadsbeløpet */
    resultatkode: string;
    /** Referanse - delytelseId/beslutningslinjeId -> bidrag-regnskap. Skal fjernes senere */
    delytelseId?: string;
    /** Liste over alle grunnlag som inngår i perioden */
    grunnlagReferanseListe: string[];
}

/** Hva er kilden til vedtaket. Automatisk eller manuelt */
export enum OpprettVedtakRequestDtoKildeEnum {
    MANUELT = "MANUELT",
    AUTOMATISK = "AUTOMATISK",
}

export enum TreeVedtakKildeEnum {
    MANUELT = "MANUELT",
    AUTOMATISK = "AUTOMATISK",
}

export enum TreeChildTypeEnum {
    FRITTSTAENDE = "FRITTSTÅENDE",
    VEDTAK = "VEDTAK",
    STONADSENDRING = "STØNADSENDRING",
    PERIODE = "PERIODE",
    GRUNNLAG = "GRUNNLAG",
}

/** Hva er kilden til vedtaket. Automatisk eller manuelt */
export enum VedtakDtoKildeEnum {
    MANUELT = "MANUELT",
    AUTOMATISK = "AUTOMATISK",
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (
        securityData: SecurityDataType | null
    ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}

export enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
    public instance: AxiosInstance;
    private securityData: SecurityDataType | null = null;
    private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
    private secure?: boolean;
    private format?: ResponseType;

    constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
        this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://localhost:8889" });
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }

    public setSecurityData = (data: SecurityDataType | null) => {
        this.securityData = data;
    };

    protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
        const method = params1.method || (params2 && params2.method);

        return {
            ...this.instance.defaults,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }

    protected stringifyFormItem(formItem: unknown) {
        if (typeof formItem === "object" && formItem !== null) {
            return JSON.stringify(formItem);
        } else {
            return `${formItem}`;
        }
    }

    protected createFormData(input: Record<string, unknown>): FormData {
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            const propertyContent: any[] = property instanceof Array ? property : [property];

            for (const formItem of propertyContent) {
                const isFileType = formItem instanceof Blob || formItem instanceof File;
                formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
            }

            return formData;
        }, new FormData());
    }

    public request = async <T = any, _E = any>({
        secure,
        path,
        type,
        query,
        format,
        body,
        ...params
    }: FullRequestParams): Promise<AxiosResponse<T>> => {
        const secureParams =
            ((typeof secure === "boolean" ? secure : this.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
            {};
        const requestParams = this.mergeRequestParams(params, secureParams);
        const responseFormat = format || this.format || undefined;

        if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
            body = this.createFormData(body as Record<string, unknown>);
        }

        if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
            body = JSON.stringify(body);
        }

        return this.instance.request({
            ...requestParams,
            headers: {
                ...(requestParams.headers || {}),
                ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
            },
            params: query,
            responseType: responseFormat,
            data: body,
            url: path,
        });
    };
}

/**
 * @title bidrag-vedtak
 * @version v1
 * @baseUrl http://localhost:8889
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    vedtak = {
        /**
         * No description
         *
         * @tags vedtak-controller
         * @name OppdaterVedtak
         * @summary Oppdaterer grunnlag på et eksisterende vedtak
         * @request POST:/vedtak/oppdater/{vedtaksid}
         * @secure
         */
        oppdaterVedtak: (vedtaksid: number, data: OpprettVedtakRequestDto, params: RequestParams = {}) =>
            this.request<number, void>({
                path: `/vedtak/oppdater/${vedtaksid}`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags vedtak-graph-controller
         * @name VedtakTilMermaid
         * @request POST:/vedtak/mermaid/{vedtakId}
         * @secure
         */
        vedtakTilMermaid: (vedtakId: number, params: RequestParams = {}) =>
            this.request<MermaidResponse, any>({
                path: `/vedtak/mermaid/${vedtakId}`,
                method: "POST",
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags vedtak-graph-controller
         * @name VedtakTilTre
         * @request POST:/vedtak/graph/{vedtakId}
         * @secure
         */
        vedtakTilTre: (vedtakId: number, params: RequestParams = {}) =>
            this.request<TreeChild, any>({
                path: `/vedtak/graph/${vedtakId}`,
                method: "POST",
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags vedtak-controller
         * @name OpprettVedtak
         * @summary Oppretter nytt vedtak
         * @request POST:/vedtak/
         * @secure
         */
        opprettVedtak: (data: OpprettVedtakRequestDto, params: RequestParams = {}) =>
            this.request<OpprettVedtakResponseDto, void>({
                path: `/vedtak/`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags vedtak-controller
         * @name OpprettVedtak1
         * @summary Oppretter nytt vedtak
         * @request POST:/vedtak
         * @secure
         */
        opprettVedtak1: (data: OpprettVedtakRequestDto, params: RequestParams = {}) =>
            this.request<OpprettVedtakResponseDto, void>({
                path: `/vedtak`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags vedtak-controller
         * @name HentVedtak
         * @summary Henter et vedtak
         * @request GET:/vedtak/{vedtaksid}
         * @secure
         */
        hentVedtak: (vedtaksid: number, params: RequestParams = {}) =>
            this.request<VedtakDto, void>({
                path: `/vedtak/${vedtaksid}`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags vedtak-graph-controller
         * @name VedtakTilMermaidText
         * @request GET:/vedtak/mermaid/{vedtakId}/text
         * @secure
         */
        vedtakTilMermaidText: (vedtakId: number, params: RequestParams = {}) =>
            this.request<string, any>({
                path: `/vedtak/mermaid/${vedtakId}/text`,
                method: "GET",
                secure: true,
                ...params,
            }),
    };
}
