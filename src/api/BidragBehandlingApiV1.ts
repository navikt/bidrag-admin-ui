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

export enum Bostatuskode {
    MED_FORELDER = "MED_FORELDER",
    DOKUMENTERT_SKOLEGANG = "DOKUMENTERT_SKOLEGANG",
    IKKE_MED_FORELDER = "IKKE_MED_FORELDER",
    MED_VERGE = "MED_VERGE",
    ALENE = "ALENE",
    DELT_BOSTED = "DELT_BOSTED",
    REGNES_IKKE_SOM_BARN = "REGNES_IKKE_SOM_BARN",
}

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

export enum Inntektsrapportering {
    AINNTEKT = "AINNTEKT",
    AINNTEKTBEREGNET3MND = "AINNTEKT_BEREGNET_3MND",
    AINNTEKTBEREGNET12MND = "AINNTEKT_BEREGNET_12MND",
    KAPITALINNTEKT = "KAPITALINNTEKT",
    LIGNINGSINNTEKT = "LIGNINGSINNTEKT",
    KONTANTSTOTTE = "KONTANTSTØTTE",
    SMABARNSTILLEGG = "SMÅBARNSTILLEGG",
    UTVIDET_BARNETRYGD = "UTVIDET_BARNETRYGD",
    AAP = "AAP",
    DAGPENGER = "DAGPENGER",
    FORELDREPENGER = "FORELDREPENGER",
    INTRODUKSJONSSTONAD = "INTRODUKSJONSSTØNAD",
    KVALIFISERINGSSTONAD = "KVALIFISERINGSSTØNAD",
    OVERGANGSSTONAD = "OVERGANGSSTØNAD",
    PENSJON = "PENSJON",
    SYKEPENGER = "SYKEPENGER",
    BARNETILLEGG = "BARNETILLEGG",
    BARNETILSYN = "BARNETILSYN",
    PERSONINNTEKT_EGNE_OPPLYSNINGER = "PERSONINNTEKT_EGNE_OPPLYSNINGER",
    KAPITALINNTEKT_EGNE_OPPLYSNINGER = "KAPITALINNTEKT_EGNE_OPPLYSNINGER",
    SAKSBEHANDLER_BEREGNET_INNTEKT = "SAKSBEHANDLER_BEREGNET_INNTEKT",
    LONNMANUELTBEREGNET = "LØNN_MANUELT_BEREGNET",
    NAeRINGSINNTEKTMANUELTBEREGNET = "NÆRINGSINNTEKT_MANUELT_BEREGNET",
    YTELSE_FRA_OFFENTLIG_MANUELT_BEREGNET = "YTELSE_FRA_OFFENTLIG_MANUELT_BEREGNET",
    AINNTEKT_KORRIGERT_BARNETILLEGG = "AINNTEKT_KORRIGERT_BARNETILLEGG",
    BARNETRYGD_MANUELL_VURDERING = "BARNETRYGD_MANUELL_VURDERING",
    BARNS_SYKDOM = "BARNS_SYKDOM",
    DOKUMENTASJONMANGLERSKJONN = "DOKUMENTASJON_MANGLER_SKJØNN",
    FORDELSKATTEKLASSE2 = "FORDEL_SKATTEKLASSE2",
    FORDELSAeRFRADRAGENSLIGFORSORGER = "FORDEL_SÆRFRADRAG_ENSLIG_FORSØRGER",
    FODSELADOPSJON = "FØDSEL_ADOPSJON",
    INNTEKTSOPPLYSNINGER_ARBEIDSGIVER = "INNTEKTSOPPLYSNINGER_ARBEIDSGIVER",
    KAPITALINNTEKT_SKE = "KAPITALINNTEKT_SKE",
    LIGNINGSOPPLYSNINGER_MANGLER = "LIGNINGSOPPLYSNINGER_MANGLER",
    LIGNING_SKE = "LIGNING_SKE",
    LONNSKE = "LØNN_SKE",
    LONNSKEKORRIGERTBARNETILLEGG = "LØNN_SKE_KORRIGERT_BARNETILLEGG",
    LONNTREKK = "LØNN_TREKK",
    MANGLENDEBRUKEVNESKJONN = "MANGLENDE_BRUK_EVNE_SKJØNN",
    NETTO_KAPITALINNTEKT = "NETTO_KAPITALINNTEKT",
    PENSJON_KORRIGERT_BARNETILLEGG = "PENSJON_KORRIGERT_BARNETILLEGG",
    REHABILITERINGSPENGER = "REHABILITERINGSPENGER",
    SKATTEGRUNNLAG_KORRIGERT_BARNETILLEGG = "SKATTEGRUNNLAG_KORRIGERT_BARNETILLEGG",
    SKATTEGRUNNLAG_SKE = "SKATTEGRUNNLAG_SKE",
}

export enum Inntektstype {
    AAP = "AAP",
    DAGPENGER = "DAGPENGER",
    FORELDREPENGER = "FORELDREPENGER",
    INTRODUKSJONSSTONAD = "INTRODUKSJONSSTØNAD",
    KVALIFISERINGSSTONAD = "KVALIFISERINGSSTØNAD",
    OVERGANGSSTONAD = "OVERGANGSSTØNAD",
    PENSJON = "PENSJON",
    SYKEPENGER = "SYKEPENGER",
    KONTANTSTOTTE = "KONTANTSTØTTE",
    SMABARNSTILLEGG = "SMÅBARNSTILLEGG",
    UTVIDET_BARNETRYGD = "UTVIDET_BARNETRYGD",
    KAPITALINNTEKT = "KAPITALINNTEKT",
    LONNSINNTEKT = "LØNNSINNTEKT",
    NAeRINGSINNTEKT = "NÆRINGSINNTEKT",
    BARNETILSYN = "BARNETILSYN",
    BARNETILLEGG_PENSJON = "BARNETILLEGG_PENSJON",
    BARNETILLEGGUFORETRYGD = "BARNETILLEGG_UFØRETRYGD",
    BARNETILLEGG_DAGPENGER = "BARNETILLEGG_DAGPENGER",
    BARNETILLEGGKVALIFISERINGSSTONAD = "BARNETILLEGG_KVALIFISERINGSSTØNAD",
    BARNETILLEGG_AAP = "BARNETILLEGG_AAP",
    BARNETILLEGG_DNB = "BARNETILLEGG_DNB",
    BARNETILLEGG_NORDEA = "BARNETILLEGG_NORDEA",
    BARNETILLEGG_STOREBRAND = "BARNETILLEGG_STOREBRAND",
    BARNETILLEGG_KLP = "BARNETILLEGG_KLP",
    BARNETILLEGG_SPK = "BARNETILLEGG_SPK",
}

export enum Kilde {
    MANUELL = "MANUELL",
    OFFENTLIG = "OFFENTLIG",
}

export enum OpplysningerType {
    INNTEKT_BEARBEIDET = "INNTEKT_BEARBEIDET",
    BOFORHOLD_BEARBEIDET = "BOFORHOLD_BEARBEIDET",
    INNTEKT = "INNTEKT",
    ARBEIDSFORHOLD = "ARBEIDSFORHOLD",
    HUSSTANDSMEDLEMMER = "HUSSTANDSMEDLEMMER",
    SIVILSTAND = "SIVILSTAND",
    BOFORHOLD = "BOFORHOLD",
    INNTEKTSOPPLYSNINGER = "INNTEKTSOPPLYSNINGER",
}

export enum Resultatkode {
    BARNETERSELVFORSORGET = "BARNET_ER_SELVFORSØRGET",
    BEGRENSETEVNEFLERESAKERUTFORFORHOLDSMESSIGFORDELING = "BEGRENSET_EVNE_FLERE_SAKER_UTFØR_FORHOLDSMESSIG_FORDELING",
    BEGRENSET_REVURDERING = "BEGRENSET_REVURDERING",
    BIDRAG_IKKE_BEREGNET_DELT_BOSTED = "BIDRAG_IKKE_BEREGNET_DELT_BOSTED",
    BIDRAG_REDUSERT_AV_EVNE = "BIDRAG_REDUSERT_AV_EVNE",
    BIDRAGREDUSERTTIL25PROSENTAVINNTEKT = "BIDRAG_REDUSERT_TIL_25_PROSENT_AV_INNTEKT",
    BIDRAG_SATT_TIL_BARNETILLEGG_BP = "BIDRAG_SATT_TIL_BARNETILLEGG_BP",
    BIDRAG_SATT_TIL_BARNETILLEGG_FORSVARET = "BIDRAG_SATT_TIL_BARNETILLEGG_FORSVARET",
    BIDRAG_SATT_TIL_UNDERHOLDSKOSTNAD_MINUS_BARNETILLEGG_BM = "BIDRAG_SATT_TIL_UNDERHOLDSKOSTNAD_MINUS_BARNETILLEGG_BM",
    DELT_BOSTED = "DELT_BOSTED",
    FORHOLDSMESSIGFORDELINGBIDRAGSBELOPENDRET = "FORHOLDSMESSIG_FORDELING_BIDRAGSBELØP_ENDRET",
    FORHOLDSMESSIG_FORDELING_INGEN_ENDRING = "FORHOLDSMESSIG_FORDELING_INGEN_ENDRING",
    INGEN_EVNE = "INGEN_EVNE",
    KOSTNADSBEREGNET_BIDRAG = "KOSTNADSBEREGNET_BIDRAG",
    REDUSERTFORSKUDD50PROSENT = "REDUSERT_FORSKUDD_50_PROSENT",
    ORDINAeRTFORSKUDD75PROSENT = "ORDINÆRT_FORSKUDD_75_PROSENT",
    FORHOYETFORSKUDD100PROSENT = "FORHØYET_FORSKUDD_100_PROSENT",
    FORHOYETFORSKUDD11AR125PROSENT = "FORHØYET_FORSKUDD_11_ÅR_125_PROSENT",
    SAeRTILSKUDDINNVILGET = "SÆRTILSKUDD_INNVILGET",
    SAeRTILSKUDDIKKEFULLBIDRAGSEVNE = "SÆRTILSKUDD_IKKE_FULL_BIDRAGSEVNE",
    AVSLAG = "AVSLAG",
    AVSLAG2 = "AVSLAG2",
    PAGRUNNAVBARNEPENSJON = "PÅ_GRUNN_AV_BARNEPENSJON",
    BARNETS_EKTESKAP = "BARNETS_EKTESKAP",
    BARNETS_INNTEKT = "BARNETS_INNTEKT",
    PAGRUNNAVYTELSEFRAFOLKETRYGDEN = "PÅ_GRUNN_AV_YTELSE_FRA_FOLKETRYGDEN",
    FULLT_UNDERHOLDT_AV_OFFENTLIG = "FULLT_UNDERHOLDT_AV_OFFENTLIG",
    IKKE_OMSORG = "IKKE_OMSORG",
    IKKE_OPPHOLD_I_RIKET = "IKKE_OPPHOLD_I_RIKET",
    MANGLENDE_DOKUMENTASJON = "MANGLENDE_DOKUMENTASJON",
    PAGRUNNAVSAMMENFLYTTING = "PÅ_GRUNN_AV_SAMMENFLYTTING",
    OPPHOLD_I_UTLANDET = "OPPHOLD_I_UTLANDET",
    UTENLANDSK_YTELSE = "UTENLANDSK_YTELSE",
}

export enum Rolletype {
    BA = "BA",
    BM = "BM",
    BP = "BP",
    FR = "FR",
    RM = "RM",
}

export enum Sivilstandskode {
    GIFT_SAMBOER = "GIFT_SAMBOER",
    BOR_ALENE_MED_BARN = "BOR_ALENE_MED_BARN",
    ENSLIG = "ENSLIG",
    SAMBOER = "SAMBOER",
}

export enum Stonadstype {
    BIDRAG = "BIDRAG",
    FORSKUDD = "FORSKUDD",
    BIDRAG18AAR = "BIDRAG18AAR",
    EKTEFELLEBIDRAG = "EKTEFELLEBIDRAG",
    MOTREGNING = "MOTREGNING",
    OPPFOSTRINGSBIDRAG = "OPPFOSTRINGSBIDRAG",
}

export enum SoktAvType {
    BIDRAGSMOTTAKER = "BIDRAGSMOTTAKER",
    BIDRAGSPLIKTIG = "BIDRAGSPLIKTIG",
    BARN18AR = "BARN_18_ÅR",
    BM_I_ANNEN_SAK = "BM_I_ANNEN_SAK",
    NAV_BIDRAG = "NAV_BIDRAG",
    FYLKESNEMDA = "FYLKESNEMDA",
    NAV_INTERNASJONALT = "NAV_INTERNASJONALT",
    KOMMUNE = "KOMMUNE",
    NORSKE_MYNDIGHET = "NORSKE_MYNDIGHET",
    UTENLANDSKE_MYNDIGHET = "UTENLANDSKE_MYNDIGHET",
    VERGE = "VERGE",
    TRYGDEETATEN_INNKREVING = "TRYGDEETATEN_INNKREVING",
    KLAGE_ANKE = "KLAGE_ANKE",
    KONVERTERING = "KONVERTERING",
}

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

export enum TypeArsakstype {
    ANNET = "ANNET",
    ENDRING3MANEDERTILBAKE = "ENDRING_3_MÅNEDER_TILBAKE",
    ENDRING3ARSREGELEN = "ENDRING_3_ÅRS_REGELEN",
    FRABARNETSFODSEL = "FRA_BARNETS_FØDSEL",
    FRABARNETSFLYTTEMANED = "FRA_BARNETS_FLYTTEMÅNED",
    FRA_KRAVFREMSETTELSE = "FRA_KRAVFREMSETTELSE",
    FRAMANEDETTERINNTEKTENOKTE = "FRA_MÅNED_ETTER_INNTEKTEN_ØKTE",
    FRA_OPPHOLDSTILLATELSE = "FRA_OPPHOLDSTILLATELSE",
    FRASOKNADSTIDSPUNKT = "FRA_SØKNADSTIDSPUNKT",
    FRA_SAMLIVSBRUDD = "FRA_SAMLIVSBRUDD",
    FRASAMMEMANEDSOMINNTEKTENBLEREDUSERT = "FRA_SAMME_MÅNED_SOM_INNTEKTEN_BLE_REDUSERT",
    PRIVAT_AVTALE = "PRIVAT_AVTALE",
    REVURDERINGMANEDENETTER = "REVURDERING_MÅNEDEN_ETTER",
    SOKNADSTIDSPUNKTENDRING = "SØKNADSTIDSPUNKT_ENDRING",
    TIDLIGERE_FEILAKTIG_AVSLAG = "TIDLIGERE_FEILAKTIG_AVSLAG",
    TREMANEDERTILBAKE = "TRE_MÅNEDER_TILBAKE",
    TREARSREGELEN = "TRE_ÅRS_REGELEN",
}

export interface HusstandsbarnDto {
    /** @format int64 */
    id?: number;
    medISak: boolean;
    /** @uniqueItems true */
    perioder: HusstandsbarnperiodeDto[];
    ident?: string;
    navn?: string;
    /**
     * @format date
     * @example "2025-01-25"
     */
    fødselsdato: string;
}

export interface HusstandsbarnperiodeDto {
    /** @format int64 */
    id?: number;
    /**
     * @format date
     * @example "2025-01-25"
     */
    datoFom?: string;
    /**
     * @format date
     * @example "2025-01-25"
     */
    datoTom?: string;
    bostatus: Bostatuskode;
    kilde: Kilde;
}

export interface InntektDtoV2 {
    /** @format int64 */
    id?: number;
    taMed: boolean;
    rapporteringstype: Inntektsrapportering;
    beløp: number;
    /**
     * @format date
     * @example "2024-01-01"
     */
    datoFom: string;
    /**
     * @format date
     * @example "2024-12-31"
     */
    datoTom?: string;
    /**
     * @format date
     * @example "2024-01-01"
     */
    opprinneligFom?: string;
    /**
     * @format date
     * @example "2024-12-31"
     */
    opprinneligTom?: string;
    ident: string;
    gjelderBarn?: string;
    kilde: Kilde;
    /** @uniqueItems true */
    inntektsposter: InntektspostDtoV2[];
    /** @uniqueItems true */
    inntektstyper: Inntektstype[];
}

export interface InntektspostDtoV2 {
    kode: string;
    visningsnavn: string;
    inntektstype?: Inntektstype;
    beløp?: number;
}

export interface OppdaterBehandlingRequestV2 {
    /** @format int64 */
    grunnlagspakkeId?: number;
    /** @format int64 */
    vedtaksid?: number;
    virkningstidspunkt?: OppdaterVirkningstidspunkt;
    /**
     *
     * For `husstandsbarn` og `sivilstand`
     * * Hvis feltet er null eller ikke satt vil det ikke bli gjort noe endringer.
     * * Hvis feltet er tom liste vil alt bli slettet
     * * Innholdet i listen vil erstatte alt som er lagret. Det er derfor ikke mulig å endre på deler av informasjon i listene.
     */
    boforhold?: OppdaterBoforholdRequest;
    /**
     *
     * For `inntekter`,
     * * Hvis feltet er null eller ikke satt vil det ikke bli gjort noe endringer.
     * * Hvis feltet er tom liste vil alt bli slettet
     * * Innholdet i listen vil erstatte alt som er lagret. Det er derfor ikke mulig å endre på deler av informasjon i listene.
     */
    inntekter?: OppdatereInntekterRequestV2;
}

/**
 *
 * For `husstandsbarn` og `sivilstand`
 * * Hvis feltet er null eller ikke satt vil det ikke bli gjort noe endringer.
 * * Hvis feltet er tom liste vil alt bli slettet
 * * Innholdet i listen vil erstatte alt som er lagret. Det er derfor ikke mulig å endre på deler av informasjon i listene.
 */
export interface OppdaterBoforholdRequest {
    /** @uniqueItems true */
    husstandsbarn?: HusstandsbarnDto[];
    /** @uniqueItems true */
    sivilstand?: SivilstandDto[];
    notat?: OppdaterNotat;
}

export interface OppdaterNotat {
    kunINotat?: string;
    medIVedtaket?: string;
}

export interface OppdaterVirkningstidspunkt {
    årsak?: TypeArsakstype;
    avslag?: Resultatkode;
    /**
     * Oppdater virkningsdato. Hvis verdien er satt til null vil virkningsdato bli slettet. Hvis verdien er satt til tom verdi eller ikke er satt vil det ikke bli gjort noe endringer
     * @format date
     * @example "2025-01-25"
     */
    virkningstidspunkt?: string;
    notat?: OppdaterNotat;
}

/**
 *
 * For `inntekter`,
 * * Hvis feltet er null eller ikke satt vil det ikke bli gjort noe endringer.
 * * Hvis feltet er tom liste vil alt bli slettet
 * * Innholdet i listen vil erstatte alt som er lagret. Det er derfor ikke mulig å endre på deler av informasjon i listene.
 */
export interface OppdatereInntekterRequestV2 {
    /** @uniqueItems true */
    inntekter?: InntektDtoV2[];
    notat?: OppdaterNotat;
}

export interface SivilstandDto {
    /** @format int64 */
    id?: number;
    /**
     * @format date
     * @example "2025-01-25"
     */
    datoFom?: string;
    /**
     * @format date
     * @example "2025-01-25"
     */
    datoTom?: string;
    sivilstand: Sivilstandskode;
    kilde: Kilde;
}

export interface BehandlingDtoV2 {
    /** @format int64 */
    id: number;
    vedtakstype: Vedtakstype;
    stønadstype?: Stonadstype;
    engangsbeløptype?: Engangsbeloptype;
    erVedtakFattet: boolean;
    /** @format date */
    søktFomDato: string;
    /** @format date */
    mottattdato: string;
    søktAv: SoktAvType;
    saksnummer: string;
    /** @format int64 */
    søknadsid: number;
    /** @format int64 */
    søknadRefId?: number;
    behandlerenhet: string;
    /** @uniqueItems true */
    roller: RolleDto[];
    /** @format int64 */
    grunnlagspakkeid?: number;
    virkningstidspunkt: VirkningstidspunktDto;
    inntekter: InntekterDtoV2;
    boforhold: BoforholdDto;
    opplysninger: GrunnlagsdataDto[];
}

export interface BehandlingNotatDto {
    kunINotat?: string;
    medIVedtaket?: string;
}

export interface BoforholdDto {
    /** @uniqueItems true */
    husstandsbarn: HusstandsbarnDto[];
    /** @uniqueItems true */
    sivilstand: SivilstandDto[];
    notat: BehandlingNotatDto;
}

export interface GrunnlagsdataDto {
    /** @format int64 */
    id: number;
    /** @format int64 */
    behandlingsid: number;
    grunnlagsdatatype: OpplysningerType;
    data: string;
    /** @format date-time */
    innhentet: string;
}

export interface InntekterDtoV2 {
    /** @uniqueItems true */
    barnetillegg: InntektDtoV2[];
    /** @uniqueItems true */
    barnetilsyn: InntektDtoV2[];
    /** @uniqueItems true */
    kontantstøtte: InntektDtoV2[];
    /** @uniqueItems true */
    månedsinntekter: InntektDtoV2[];
    /** @uniqueItems true */
    småbarnstillegg: InntektDtoV2[];
    /** @uniqueItems true */
    årsinntekter: InntektDtoV2[];
    /** @uniqueItems true */
    inntekter: InntektDtoV2[];
    notat: BehandlingNotatDto;
}

export interface RolleDto {
    /** @format int64 */
    id: number;
    rolletype: Rolletype;
    ident?: string;
    navn?: string;
    /** @format date */
    fødselsdato?: string;
}

export interface VirkningstidspunktDto {
    /** @format date */
    virkningstidspunkt?: string;
    årsak?: TypeArsakstype;
    avslag?: Resultatkode;
    notat: BehandlingNotatDto;
}

export interface BarnetilleggDto {
    /** @format int64 */
    id?: number;
    /** Bidragsmottaker eller bidragspliktig som mottar barnetillegget */
    ident: string;
    /** Hvilken barn barnetillegget mottas for */
    gjelderBarn: string;
    barnetillegg: number;
    /**
     * @format date
     * @example "2025-01-25"
     */
    datoFom: string;
    /**
     * @format date
     * @example "2025-01-25"
     */
    datoTom?: string;
}

export interface InntektDto {
    /** @format int64 */
    id?: number;
    taMed: boolean;
    inntektstype: Inntektsrapportering;
    beløp: number;
    /**
     * @format date
     * @example "2025-01-25"
     */
    datoFom: string;
    /**
     * @format date
     * @example "2025-01-25"
     */
    datoTom?: string;
    /**
     * @format date
     * @example "2025-01-25"
     */
    opprinneligFom?: string;
    /**
     * @format date
     * @example "2025-01-25"
     */
    opprinneligTom?: string;
    ident: string;
    fraGrunnlag: boolean;
    /** @uniqueItems true */
    inntektsposter: InntektPost[];
}

export interface InntektPost {
    /**
     * Kode for inntektspost
     * @example "bonus"
     */
    kode: string;
    inntekstype?: Inntektstype;
    /**
     * Visningsnavn for kode
     * @example "Bonus"
     */
    visningsnavn: string;
    /**
     * Beløp som utgjør inntektsposten
     * @example 60000
     */
    beløp: number;
}

export interface KontantstotteDto {
    /** Bidragsmottaker eller bidragspliktig som mottar barnetillegget */
    ident: string;
    /** Hvilken barn barnetillegget mottas for */
    gjelderBarn: string;
    kontantstøtte: number;
    /**
     * @format date
     * @example "2025-01-25"
     */
    datoFom: string;
    /**
     * @format date
     * @example "2025-01-25"
     */
    datoTom?: string;
}

export interface OppdaterBehandlingRequest {
    /** @format int64 */
    grunnlagspakkeId?: number;
    /** @format int64 */
    vedtaksid?: number;
    virkningstidspunkt?: OppdaterVirkningstidspunkt;
    /**
     *
     * For `husstandsbarn` og `sivilstand`
     * * Hvis feltet er null eller ikke satt vil det ikke bli gjort noe endringer.
     * * Hvis feltet er tom liste vil alt bli slettet
     * * Innholdet i listen vil erstatte alt som er lagret. Det er derfor ikke mulig å endre på deler av informasjon i listene.
     */
    boforhold?: OppdaterBoforholdRequest;
    /**
     *
     * For `inntekter`, `kontantstøtte`, `småbarnstillegg`, `barnetillegg`, `utvidetBarnetrygd`
     * * Hvis feltet er null eller ikke satt vil det ikke bli gjort noe endringer.
     * * Hvis feltet er tom liste vil alt bli slettet
     * * Innholdet i listen vil erstatte alt som er lagret. Det er derfor ikke mulig å endre på deler av informasjon i listene.
     */
    inntekter?: OppdatereInntekterRequest;
}

/**
 *
 * For `inntekter`, `kontantstøtte`, `småbarnstillegg`, `barnetillegg`, `utvidetBarnetrygd`
 * * Hvis feltet er null eller ikke satt vil det ikke bli gjort noe endringer.
 * * Hvis feltet er tom liste vil alt bli slettet
 * * Innholdet i listen vil erstatte alt som er lagret. Det er derfor ikke mulig å endre på deler av informasjon i listene.
 */
export interface OppdatereInntekterRequest {
    /** @uniqueItems true */
    inntekter?: InntektDto[];
    /** @uniqueItems true */
    kontantstøtte?: KontantstotteDto[];
    /** @uniqueItems true */
    småbarnstillegg?: InntektDto[];
    /** @uniqueItems true */
    barnetillegg?: BarnetilleggDto[];
    /** @uniqueItems true */
    utvidetbarnetrygd?: UtvidetBarnetrygdDto[];
    notat?: OppdaterNotat;
}

export interface UtvidetBarnetrygdDto {
    /** @format int64 */
    id?: number;
    deltBosted: boolean;
    beløp: number;
    /**
     * @format date
     * @example "2025-01-25"
     */
    datoFom: string;
    /**
     * @format date
     * @example "2025-01-25"
     */
    datoTom?: string;
}

export interface BehandlingDto {
    /** @format int64 */
    id: number;
    vedtakstype: Vedtakstype;
    stønadstype?: Stonadstype;
    engangsbeløptype?: Engangsbeloptype;
    erVedtakFattet: boolean;
    /** @format date */
    søktFomDato: string;
    /** @format date */
    mottattdato: string;
    søktAv: SoktAvType;
    saksnummer: string;
    /** @format int64 */
    søknadsid: number;
    /** @format int64 */
    søknadRefId?: number;
    behandlerenhet: string;
    /** @uniqueItems true */
    roller: RolleDto[];
    /** @format int64 */
    grunnlagspakkeid?: number;
    virkningstidspunkt: VirkningstidspunktDto;
    inntekter: InntekterDto;
    boforhold: BoforholdDto;
    opplysninger: GrunnlagsdataDto[];
}

export interface InntekterDto {
    /** @uniqueItems true */
    inntekter: InntektDto[];
    /** @uniqueItems true */
    barnetillegg: BarnetilleggDto[];
    /** @uniqueItems true */
    utvidetbarnetrygd: UtvidetBarnetrygdDto[];
    /** @uniqueItems true */
    kontantstøtte: KontantstotteDto[];
    /** @uniqueItems true */
    småbarnstillegg: InntektDto[];
    notat: BehandlingNotatDto;
}

export interface OppdaterRollerRequest {
    roller: OpprettRolleDto[];
}

/** Rolle beskrivelse som er brukte til å opprette nye roller */
export interface OpprettRolleDto {
    rolletype: Rolletype;
    /** F.eks fødselsnummer. Påkrevd for alle rolletyper utenom for barn som ikke inngår i beregning. */
    ident?: string | null;
    /** Navn på rolleinnehaver hvis ident er ukjent. Gjelder kun barn som ikke inngår i beregning */
    navn?: string | null;
    /**
     * F.eks fødselsdato
     * @format date
     */
    fødselsdato?: string;
    erSlettet: boolean;
}

/** BaseGrunnlag */
export interface BaseGrunnlag {
    type: Grunnlagstype;
    /** Referanse til personobjektet grunnlaget gjelder */
    gjelderReferanse?: string;
    /** Grunnlagsinnhold (generisk) */
    innhold: JsonNode;
    /** Referanse (unikt navn på grunnlaget) */
    referanse: string;
    /** Liste over grunnlagsreferanser */
    grunnlagsreferanseListe: string[];
}

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
    DELBEREGNING_INNTEKT = "DELBEREGNING_INNTEKT",
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
    INNHENTET_INNTEKT_AORDNING_PERIODE = "INNHENTET_INNTEKT_AORDNING_PERIODE",
    INNHENTET_INNTEKT_BARNETILLEGG_PERIODE = "INNHENTET_INNTEKT_BARNETILLEGG_PERIODE",
    INNHENTETINNTEKTKONTANTSTOTTEPERIODE = "INNHENTET_INNTEKT_KONTANTSTØTTE_PERIODE",
    INNHENTET_INNTEKT_AINNTEKT_PERIODE = "INNHENTET_INNTEKT_AINNTEKT_PERIODE",
    INNHENTET_INNTEKT_BARNETILSYN_PERIODE = "INNHENTET_INNTEKT_BARNETILSYN_PERIODE",
    INNHENTETINNTEKTSMABARNSTILLEGGPERIODE = "INNHENTET_INNTEKT_SMÅBARNSTILLEGG_PERIODE",
    INNHENTET_INNTEKT_UTVIDETBARNETRYGD_PERIODE = "INNHENTET_INNTEKT_UTVIDETBARNETRYGD_PERIODE",
}

/** Grunnlagsinnhold (generisk) */
export type JsonNode = object;

export interface TreeChild {
    name: string;
    id: string;
    type: TreeChildTypeEnum;
    children: TreeChild[];
    /** BaseGrunnlag */
    grunnlag?: BaseGrunnlag;
    grunnlagstype?: Grunnlagstype;
    periode?: TreePeriode;
}

export interface TreePeriode {
    beløp?: number;
    /** Valutakoden tilhørende stønadsbeløpet */
    valutakode?: string;
    /** Resultatkoden tilhørende stønadsbeløpet */
    resultatkode: string;
    /** Referanse - delytelseId/beslutningslinjeId -> bidrag-regnskap. Skal fjernes senere */
    delytelseId?: string;
}

export interface SivilstandGrunnlagDto {
    /** Id til personen sivilstanden er rapportert for */
    personId?: string;
    /** Type sivilstand fra PDL */
    type?: SivilstandskodePDL;
    /**
     * Dato sivilstanden er gyldig fra
     * @format date
     */
    gyldigFom?: string;
    /**
     * Dato NAV tidligst har fått bekreftet sivilstanden
     * @format date
     */
    bekreftelsesdato?: string;
    /** Master for opplysningen om sivilstand (FREG eller PDL) */
    master?: string;
    /**
     * Tidspunktet sivilstanden er registrert
     * @format date-time
     */
    registrert?: string;
    /** Angir om sivilstanden er historisk (true) eller aktiv (false) */
    historisk?: boolean;
}

/** Type sivilstand fra PDL */
export enum SivilstandskodePDL {
    GIFT = "GIFT",
    UGIFT = "UGIFT",
    UOPPGITT = "UOPPGITT",
    ENKE_ELLER_ENKEMANN = "ENKE_ELLER_ENKEMANN",
    SKILT = "SKILT",
    SEPARERT = "SEPARERT",
    REGISTRERT_PARTNER = "REGISTRERT_PARTNER",
    SEPARERT_PARTNER = "SEPARERT_PARTNER",
    SKILT_PARTNER = "SKILT_PARTNER",
    GJENLEVENDE_PARTNER = "GJENLEVENDE_PARTNER",
}

export interface SivilstandBeregnet {
    status: SivilstandBeregnetStatusEnum;
    sivilstandListe: SivilstandBeregnetPeriode[];
}

export interface SivilstandBeregnetPeriode {
    /** @format date */
    periodeFom: string;
    /** @format date */
    periodeTom?: string;
    sivilstandskode: Sivilstandskode;
    grunnlagsreferanser: string[];
}

/** Periodisert liste over innhentede inntekter fra a-inntekt og underliggende poster */
export interface AinntektGrunnlagDto {
    /** Id til personen inntekten er rapportert for */
    personId: string;
    /**
     * Periode fra-dato
     * @format date
     */
    periodeFra: string;
    /**
     * Periode til-dato
     * @format date
     */
    periodeTil: string;
    /** Liste over poster for innhentede inntektsposter */
    ainntektspostListe: AinntektspostDto[];
}

/** Liste over poster for innhentede inntektsposter */
export interface AinntektspostDto {
    /** Perioden innteksposten er utbetalt YYYYMM */
    utbetalingsperiode?: string;
    /**
     * Fra-dato for opptjening
     * @format date
     */
    opptjeningsperiodeFra?: string;
    /**
     * Til-dato for opptjening
     * @format date
     */
    opptjeningsperiodeTil?: string;
    /** Id til de som rapporterer inn inntekten */
    opplysningspliktigId?: string;
    /** Id til virksomheten som rapporterer inn inntekten */
    virksomhetId?: string;
    /** Type fordel: Kontantytelse, Naturalytelse, Utgiftsgodtgjorelse */
    fordelType?: string;
    /** Beskrivelse av inntekt */
    beskrivelse?: string;
    /**
     * Fra-dato etterbetaling
     * @format date
     */
    etterbetalingsperiodeFra?: string;
    /**
     * Til-dato etterbetaling
     * @format date
     */
    etterbetalingsperiodeTil?: string;
    /** Type inntekt: Lonnsinntekt, Naeringsinntekt, Pensjon eller trygd, Ytelse fra offentlig */
    inntektType: string;
    /** Type inntekt: Lonnsinntekt, Naeringsinntekt, Pensjon eller trygd, Ytelse fra offentlig */
    kategori: AinntektspostDtoKategoriEnum;
    /** Beløp */
    belop: number;
    /** Beløp */
    beløp: number;
}

/** Liste av ansettelsesdetaljer, med eventuell historikk */
export interface Ansettelsesdetaljer {
    /** Fradato for ansettelsesdetalj. År + måned */
    periodeFra?: {
        /** @format int32 */
        year?: number;
        month?: AnsettelsesdetaljerMonthEnum;
        /** @format int32 */
        monthValue?: number;
        leapYear?: boolean;
    };
    /** Eventuell sluttdato for ansettelsesdetalj. År + måned */
    periodeTil?: {
        /** @format int32 */
        year?: number;
        month?: AnsettelsesdetaljerMonthEnum1;
        /** @format int32 */
        monthValue?: number;
        leapYear?: boolean;
    };
    /** Type arbeidsforhold, Ordinaer, Maritim, Forenklet, Frilanser' */
    arbeidsforholdType?: string;
    /** Beskrivelse av arbeidstidsordning. Eks: 'Ikke skift' */
    arbeidstidsordningBeskrivelse?: string;
    /** Beskrivelse av ansettelsesform. Eks: 'Fast ansettelse' */
    ansettelsesformBeskrivelse?: string;
    /** Beskrivelse av yrke. Eks: 'KONTORLEDER' */
    yrkeBeskrivelse?: string;
    /**
     * Avtalt antall timer i uken
     * @format double
     */
    antallTimerPrUke?: number;
    /**
     * Avtalt stillingsprosent
     * @format double
     */
    avtaltStillingsprosent?: number;
    /**
     * Dato for forrige endring i stillingsprosent
     * @format date
     */
    sisteStillingsprosentendringDato?: string;
    /**
     * Dato for forrige lønnsendring
     * @format date
     */
    sisteLønnsendringDato?: string;
}

/** Periodisert liste over arbeidsforhold */
export interface ArbeidsforholdGrunnlagDto {
    /** Id til personen arbeidsforholdet gjelder */
    partPersonId: string;
    /**
     * Startdato for arbeidsforholdet
     * @format date
     */
    startdato?: string;
    /**
     * Eventuell sluttdato for arbeidsforholdet
     * @format date
     */
    sluttdato?: string;
    /** Navn på arbeidsgiver */
    arbeidsgiverNavn?: string;
    /** Arbeidsgivers organisasjonsnummer */
    arbeidsgiverOrgnummer?: string;
    /** Liste av ansettelsesdetaljer, med eventuell historikk */
    ansettelsesdetaljerListe?: Ansettelsesdetaljer[];
    /** Liste over registrerte permisjoner */
    permisjonListe?: Permisjon[];
    /** Liste over registrerte permitteringer */
    permitteringListe?: Permittering[];
}

/** Periodisert liste over innhentet barnetillegg */
export interface BarnetilleggGrunnlagDto {
    /** Id til personen barnetillegg er rapportert for */
    partPersonId: string;
    /** Id til barnet barnetillegget er rapportert for */
    barnPersonId: string;
    /** Type barnetillegg */
    barnetilleggType: string;
    /**
     * Periode fra- og med måned
     * @format date
     */
    periodeFra: string;
    /**
     * Periode til- og med måned
     * @format date
     */
    periodeTil?: string;
    /** Bruttobeløp */
    beløpBrutto: number;
    /** Angir om barnet er felles- eller særkullsbarn */
    barnType: string;
}

/** Periodisert liste over innhentet barnetilsyn */
export interface BarnetilsynGrunnlagDto {
    /** Id til personen som mottar barnetilsynet */
    partPersonId: string;
    /** Id til barnet barnetilsynet er for */
    barnPersonId: string;
    /**
     * Periode fra-dato
     * @format date
     */
    periodeFra: string;
    /**
     * Periode til-dato
     * @format date
     */
    periodeTil?: string;
    /**
     * Beløpet barnetilsynet er på
     * @format int32
     */
    beløp?: number;
    /** Angir om barnetilsynet er heltid eller deltid */
    tilsynstype?: BarnetilsynGrunnlagDtoTilsynstypeEnum;
    /** Angir om barnet er over eller under skolealder */
    skolealder?: BarnetilsynGrunnlagDtoSkolealderEnum;
}

/** Liste over perioder personen bor i samme husstand som BM/BP */
export interface BorISammeHusstandDto {
    /**
     * Personen bor i samme husstand som BM/BP fra- og med måned
     * @format date
     */
    periodeFra?: string;
    /**
     * Personen bor i samme husstand som BM/BP til- og med måned
     * @format date
     */
    periodeTil?: string;
}

/** Liste over evt. feil rapportert under henting av grunnlag */
export interface FeilrapporteringDto {
    grunnlagstype: GrunnlagRequestType;
    /** Id til personen grunnlaget er forsøkt hentet for */
    personId?: string;
    /** @format date */
    periodeFra?: string;
    /** @format date */
    periodeTil?: string;
    feiltype: FeilrapporteringDtoFeiltypeEnum;
    feilmelding?: string;
}

export enum GrunnlagRequestType {
    AINNTEKT = "AINNTEKT",
    SKATTEGRUNNLAG = "SKATTEGRUNNLAG",
    UTVIDETBARNETRYGDOGSMABARNSTILLEGG = "UTVIDET_BARNETRYGD_OG_SMÅBARNSTILLEGG",
    BARNETILLEGG = "BARNETILLEGG",
    HUSSTANDSMEDLEMMER_OG_EGNE_BARN = "HUSSTANDSMEDLEMMER_OG_EGNE_BARN",
    SIVILSTAND = "SIVILSTAND",
    KONTANTSTOTTE = "KONTANTSTØTTE",
    BARNETILSYN = "BARNETILSYN",
    ARBEIDSFORHOLD = "ARBEIDSFORHOLD",
    OVERGANGSSTONAD = "OVERGANGSSTONAD",
}

export interface HentGrunnlagDto {
    /** Periodisert liste over innhentede inntekter fra a-inntekt og underliggende poster */
    ainntektListe: AinntektGrunnlagDto[];
    /** Periodisert liste over innhentede inntekter fra skatt og underliggende poster */
    skattegrunnlagListe: SkattegrunnlagGrunnlagDto[];
    /** Periodisert liste over innhentet utvidet barnetrygd */
    utvidetBarnetrygdListe: UtvidetBarnetrygdGrunnlagDto[];
    /** Periodisert liste over innhentet småbarnstillegg */
    småbarnstilleggListe: SmabarnstilleggGrunnlagDto[];
    /** Periodisert liste over innhentet barnetillegg */
    barnetilleggListe: BarnetilleggGrunnlagDto[];
    /** Periodisert liste over innhentet kontantstøtte */
    kontantstøtteListe: KontantstotteGrunnlagDto[];
    /** Liste over alle personer som har bodd sammen med BM/BP i perioden fra virkningstidspunkt og fremover med en liste over hvilke perioder de har delt bolig. Listen inkluderer i tillegg personens egne barn, selv om de ikke har delt bolig med BM/BP */
    husstandsmedlemmerOgEgneBarnListe: RelatertPersonGrunnlagDto[];
    /** Periodisert liste over en persons sivilstand */
    sivilstandListe: SivilstandGrunnlagDto[];
    /** Periodisert liste over innhentet barnetilsyn */
    barnetilsynListe: BarnetilsynGrunnlagDto[];
    /** Periodisert liste over arbeidsforhold */
    arbeidsforholdListe: ArbeidsforholdGrunnlagDto[];
    /** Liste over evt. feil rapportert under henting av grunnlag */
    feilrapporteringListe: FeilrapporteringDto[];
    /** @format date-time */
    hentetTidspunkt: string;
}

/** Periodisert liste over innhentet kontantstøtte */
export interface KontantstotteGrunnlagDto {
    /** Id til personen som mottar kontantstøtten */
    partPersonId: string;
    /** Id til barnet kontantstøtten mottas for */
    barnPersonId: string;
    /**
     * Periode fra-dato
     * @format date
     */
    periodeFra: string;
    /**
     * Periode til-dato
     * @format date
     */
    periodeTil?: string;
    /**
     * Beløpet kontantstøtten er på
     * @format int32
     */
    beløp: number;
}

export interface KonverterInntekterDto {
    personId: string;
    grunnlagDto: HentGrunnlagDto;
}

/** Liste over registrerte permisjoner */
export interface Permisjon {
    /** @format date */
    startdato?: string;
    /** @format date */
    sluttdato?: string;
    beskrivelse?: string;
    /** @format double */
    prosent?: number;
}

/** Liste over registrerte permitteringer */
export interface Permittering {
    /** @format date */
    startdato?: string;
    /** @format date */
    sluttdato?: string;
    beskrivelse?: string;
    /** @format double */
    prosent?: number;
}

/** Liste over alle personer som har bodd sammen med BM/BP i perioden fra virkningstidspunkt og fremover med en liste over hvilke perioder de har delt bolig. Listen inkluderer i tillegg personens egne barn, selv om de ikke har delt bolig med BM/BP */
export interface RelatertPersonGrunnlagDto {
    /** Personid til BM/BP */
    partPersonId?: string;
    /** Personid til relatert person. Dette er husstandsmedlem eller barn av BM/BP */
    relatertPersonPersonId?: string;
    /** Navn på den relaterte personen, format <Fornavn, mellomnavn, Etternavn */
    navn?: string;
    /**
     * Den relaterte personens fødselsdato
     * @format date
     */
    fødselsdato?: string;
    /** Angir om den relaterte personen er barn av BM/BP */
    erBarnAvBmBp: boolean;
    /** Liste over perioder personen bor i samme husstand som BM/BP */
    borISammeHusstandDtoListe: BorISammeHusstandDto[];
}

/** Periodisert liste over innhentede inntekter fra skatt og underliggende poster */
export interface SkattegrunnlagGrunnlagDto {
    /** Id til personen inntekten er rapportert for */
    personId: string;
    /**
     * Periode fra
     * @format date
     */
    periodeFra: string;
    /**
     * Periode frem til
     * @format date
     */
    periodeTil: string;
    /** Liste over poster med skattegrunnlag */
    skattegrunnlagspostListe: SkattegrunnlagspostDto[];
}

/** Liste over poster med skattegrunnlag */
export interface SkattegrunnlagspostDto {
    /** Type skattegrunnlag: Ordinær eller Svalbard */
    skattegrunnlagType: string;
    /** Type inntekt: Lonnsinntekt, Naeringsinntekt, Pensjon eller trygd, Ytelse fra offentlig */
    inntektType: string;
    /** Beløp */
    belop: number;
    /** Beløp på skattegrunnlagposten */
    beløp: number;
    /** Tekniske navnet på inntektsposten. Er samme verdi som "Summert skattegrunnlag" fra NAV kodeverk ( https://kodeverk-web.dev.adeo.no/kodeverksoversikt/kodeverk/Summert%20skattegrunnlag ) */
    kode: string;
}

/** Periodisert liste over innhentet småbarnstillegg */
export interface SmabarnstilleggGrunnlagDto {
    /** Id til personen småbarnstillegg er rapportert for */
    personId: string;
    /**
     * Periode fra- og med måned
     * @format date
     */
    periodeFra: string;
    /**
     * Periode til- og med måned
     * @format date
     */
    periodeTil?: string;
    /** Beløp */
    beløp: number;
    /** Angir om stønaden er manuelt beregnet */
    manueltBeregnet: boolean;
}

/** Periodisert liste over innhentet utvidet barnetrygd */
export interface UtvidetBarnetrygdGrunnlagDto {
    /** Id til personen utvidet barnetrygd er rapportert for */
    personId: string;
    /**
     * Periode fra- og med måned
     * @format date
     */
    periodeFra: string;
    /**
     * Periode til- og med måned
     * @format date
     */
    periodeTil?: string;
    /** Beløp */
    beløp: number;
    /** Angir om stønaden er manuelt beregnet */
    manueltBeregnet: boolean;
}

/** Liste over summerte månedsinntekter (Ainntekt ++)) */
export interface SummertManedsinntekt {
    /**
     * Perioden inntekten gjelder for (format YYYY-MM)
     * @pattern YYYY-MM
     * @example "2023-01"
     */
    gjelderÅrMåned: string;
    /**
     * Summert inntekt for måneden
     * @example 50000
     */
    sumInntekt: number;
    /** Liste over inntektsposter som utgjør grunnlaget for summert inntekt */
    inntektPostListe: InntektPost[];
    grunnlagsreferanseListe: string[];
}

/** Liste over summerte årsinntekter (Ainntekt + Sigrun ++) */
export interface SummertArsinntekt {
    inntektRapportering: Inntektsrapportering;
    /**
     * Visningsnavn for inntekt
     * @example "Lønn og trekk 2022"
     */
    visningsnavn: string;
    /**
     * Summert inntekt for perioden, omgjort til årsinntekt
     * @example 600000
     */
    sumInntekt: number;
    /** Perioden inntekten gjelder for (fom-til) */
    periode: TypeArManedsperiode;
    /**
     * Id til barnet inntekten mottas for, brukes for kontantstøtte og barnetillegg
     * @example "12345678910"
     */
    gjelderBarnPersonId: string;
    /** Liste over inntektsposter (generisk, avhengig av type) som utgjør grunnlaget for summert inntekt */
    inntektPostListe: InntektPost[];
    grunnlagsreferanseListe: string[];
}

export interface TransformerInntekterResponse {
    /**
     * Dato + commit hash
     * @example "20230705081501_68e71c7"
     */
    versjon: string;
    /** Liste over summerte månedsinntekter (Ainntekt ++)) */
    summertMånedsinntektListe: SummertManedsinntekt[];
    /** Liste over summerte årsinntekter (Ainntekt + Sigrun ++) */
    summertÅrsinntektListe: SummertArsinntekt[];
}

/** Perioden inntekten gjelder for (fom-til) */
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

export interface RelatertPerson {
    relatertPersonPersonId?: string;
    /** @format date */
    fødselsdato?: string;
    erBarnAvBmBp: boolean;
    borISammeHusstandDtoListe: BorISammeHusstandDto[];
}

export interface BoforholdBearbeidetPeriode {
    /** @format date-time */
    fraDato: string;
    /** @format date-time */
    tilDato?: string;
    bostatus: Bostatuskode;
}

export interface BoforholdHusstandBearbeidet {
    /** @format date */
    foedselsdato?: string;
    ident: string;
    navn?: string;
    perioder: BoforholdBearbeidetPeriode[];
}

export interface BehandlingInfoDto {
    /** @format int64 */
    vedtakId?: number;
    /** @format int64 */
    behandlingId?: number;
    /** @format int64 */
    soknadId: number;
    erFattetBeregnet?: boolean;
    erVedtakIkkeTilbakekreving: boolean;
    stonadType?: Stonadstype;
    engangsBelopType?: Engangsbeloptype;
    behandlingType?: string;
    soknadType?: string;
    soknadFra?: SoktAvType;
    vedtakType?: Vedtakstype;
    barnIBehandling: string[];
}

export interface ForsendelseRolleDto {
    fødselsnummer?: string;
    type: Rolletype;
}

export interface InitalizeForsendelseRequest {
    /**
     * @minLength 0
     * @maxLength 7
     */
    saksnummer: string;
    behandlingInfo: BehandlingInfoDto;
    enhet?: string;
    tema?: string;
    roller: ForsendelseRolleDto[];
    behandlingStatus?: InitalizeForsendelseRequestBehandlingStatusEnum;
}

export interface OpprettBehandlingRequest {
    vedtakstype: Vedtakstype;
    /** @format date */
    søktFomDato: string;
    /** @format date */
    mottattdato: string;
    søknadFra: SoktAvType;
    /**
     * @minLength 7
     * @maxLength 7
     */
    saksnummer: string;
    /**
     * @minLength 4
     * @maxLength 4
     */
    behandlerenhet: string;
    /**
     * @maxItems 2147483647
     * @minItems 2
     * @uniqueItems true
     */
    roller: OpprettRolleDto[];
    stønadstype: Stonadstype;
    engangsbeløpstype: Engangsbeloptype;
    /** @format int64 */
    søknadsid: number;
    /** @format int64 */
    søknadsreferanseid?: number;
}

export interface OpprettBehandlingResponse {
    /** @format int64 */
    id: number;
}

/** Resultatet av en forskuddsberegning */
export interface BeregnetForskuddResultat {
    /** Periodisert liste over resultat av forskuddsberegning */
    beregnetForskuddPeriodeListe: ResultatPeriode[];
    /** Liste over grunnlag brukt i beregning */
    grunnlagListe: GrunnlagDto[];
}

/** Grunnlag */
export interface GrunnlagDto {
    /** Referanse (unikt navn på grunnlaget) */
    referanse: string;
    type: Grunnlagstype;
    /** Grunnlagsinnhold (generisk) */
    innhold: JsonNode;
    /** Liste over grunnlagsreferanser */
    grunnlagsreferanseListe: string[];
    /** Referanse til personobjektet grunnlaget gjelder */
    gjelderReferanse?: string;
}

/** Resultatet av en beregning */
export interface ResultatBeregning {
    /** Resultat beløp */
    belop: number;
    kode: Resultatkode;
    /** Resultat regel */
    regel: string;
}

export interface ResultatForskuddsberegning {
    resultatBarn: ResultatForskuddsberegningBarn[];
}

export interface ResultatForskuddsberegningBarn {
    barn: ResultatRolle;
    /** Resultatet av en forskuddsberegning */
    resultat: BeregnetForskuddResultat;
}

/** Resultatet av en beregning for en gitt periode */
export interface ResultatPeriode {
    /** Perioden inntekten gjelder for (fom-til) */
    periode: TypeArManedsperiode;
    /** Resultatet av en beregning */
    resultat: ResultatBeregning;
    /** Beregnet grunnlag innhold */
    grunnlagsreferanseListe: string[];
}

export interface ResultatRolle {
    ident?: string;
    navn: string;
    /** @format date */
    fødselsdato: string;
}

export interface AddOpplysningerRequest {
    /** @format int64 */
    behandlingId: number;
    aktiv: boolean;
    grunnlagstype: OpplysningerType;
    /** data */
    data: string;
    /**
     * @format date
     * @example "2025-01-25"
     */
    hentetDato: string;
}

export interface ArbeidOgInntektLenkeRequest {
    /** @format int64 */
    behandlingId: number;
    ident: string;
}

export interface Arbeidsforhold {
    /** Perioden inntekten gjelder for (fom-til) */
    periode: TypeArManedsperiode;
    arbeidsgiver: string;
    stillingProsent?: string;
    /** @format date */
    lønnsendringDato?: string;
}

export interface Barnetillegg {
    /** Perioden inntekten gjelder for (fom-til) */
    periode: TypeArManedsperiode;
    beløp: number;
}

export interface Boforhold {
    barn: BoforholdBarn[];
    sivilstand: SivilstandNotat;
    notat: Notat;
}

export interface BoforholdBarn {
    navn: string;
    /** @format date */
    fødselsdato?: string;
    opplysningerFraFolkeregisteret: OpplysningerFraFolkeregisteretBostatuskode[];
    opplysningerBruktTilBeregning: OpplysningerBruktTilBeregningBostatuskode[];
}

export interface Inntekter {
    inntekterPerRolle: InntekterPerRolle[];
    notat: Notat;
}

export interface InntekterPerRolle {
    rolle: Rolletype;
    arbeidsforhold: Arbeidsforhold[];
    inntekterSomLeggesTilGrunn: InntekterSomLeggesTilGrunn[];
    barnetillegg: Barnetillegg[];
    utvidetBarnetrygd: UtvidetBarnetrygd[];
}

export interface InntekterSomLeggesTilGrunn {
    inntektType?: Inntektsrapportering;
    beskrivelse?: string;
    /** Perioden inntekten gjelder for (fom-til) */
    periode?: TypeArManedsperiode;
    beløp: number;
}

export interface Notat {
    medIVedtaket?: string;
    intern?: string;
}

export interface NotatDto {
    saksnummer: string;
    saksbehandlerNavn?: string;
    virkningstidspunkt: Virkningstidspunkt;
    boforhold: Boforhold;
    parterISøknad: ParterISoknad[];
    inntekter: Inntekter;
    vedtak: Vedtak[];
}

export interface OpplysningerBruktTilBeregningBostatuskode {
    /** Perioden inntekten gjelder for (fom-til) */
    periode: TypeArManedsperiode;
    status: Bostatuskode;
    kilde: string;
}

export interface OpplysningerBruktTilBeregningSivilstandskode {
    /** Perioden inntekten gjelder for (fom-til) */
    periode: TypeArManedsperiode;
    status: Sivilstandskode;
    kilde: string;
}

export interface OpplysningerFraFolkeregisteretBostatuskode {
    /** Perioden inntekten gjelder for (fom-til) */
    periode: TypeArManedsperiode;
    status?: Bostatuskode;
}

export interface OpplysningerFraFolkeregisteretSivilstandskode {
    /** Perioden inntekten gjelder for (fom-til) */
    periode: TypeArManedsperiode;
    status?: Sivilstandskode;
}

export interface ParterISoknad {
    rolle: Rolletype;
    navn?: string;
    /** @format date */
    fødselsdato?: string;
    personident?: string;
}

export interface Resultat {
    type: string;
    /** Perioden inntekten gjelder for (fom-til) */
    periode: TypeArManedsperiode;
    inntekt: number;
    sivilstand: string;
    /** @format int32 */
    antallBarn: number;
    resultat: string;
}

export interface SivilstandNotat {
    opplysningerFraFolkeregisteret: OpplysningerFraFolkeregisteretSivilstandskode[];
    opplysningerBruktTilBeregning: OpplysningerBruktTilBeregningSivilstandskode[];
}

export interface UtvidetBarnetrygd {
    /** Perioden inntekten gjelder for (fom-til) */
    periode: TypeArManedsperiode;
    beløp: number;
}

export interface Vedtak {
    navn: string;
    /** @format date */
    fødselsdato: string;
    resultat: Resultat[];
}

export interface Virkningstidspunkt {
    søknadstype?: string;
    søktAv?: SoktAvType;
    mottattDato?: {
        /** @format int32 */
        year?: number;
        month?: VirkningstidspunktMonthEnum;
        /** @format int32 */
        monthValue?: number;
        leapYear?: boolean;
    };
    søktFraDato?: {
        /** @format int32 */
        year?: number;
        month?: VirkningstidspunktMonthEnum1;
        /** @format int32 */
        monthValue?: number;
        leapYear?: boolean;
    };
    /** @format date */
    virkningstidspunkt?: string;
    notat: Notat;
}

export enum TreeChildTypeEnum {
    VEDTAK = "VEDTAK",
    STONADSENDRING = "STØNADSENDRING",
    PERIODE = "PERIODE",
    GRUNNLAG = "GRUNNLAG",
}

export enum SivilstandBeregnetStatusEnum {
    OK = "OK",
    MANGLENDE_DATOINFORMASJON = "MANGLENDE_DATOINFORMASJON",
    LOGISK_FEIL_I_TIDSLINJE = "LOGISK_FEIL_I_TIDSLINJE",
    ALLE_FOREKOMSTER_ER_HISTORISKE = "ALLE_FOREKOMSTER_ER_HISTORISKE",
    SIVILSTANDSTYPE_MANGLER = "SIVILSTANDSTYPE_MANGLER",
}

/** Type inntekt: Lonnsinntekt, Naeringsinntekt, Pensjon eller trygd, Ytelse fra offentlig */
export enum AinntektspostDtoKategoriEnum {
    LOENNSINNTEKT = "LOENNSINNTEKT",
    NAERINGSINNTEKT = "NAERINGSINNTEKT",
    PENSJON_ELLER_TRYGD = "PENSJON_ELLER_TRYGD",
    YTELSE_FRA_OFFENTLIGE = "YTELSE_FRA_OFFENTLIGE",
}

export enum AnsettelsesdetaljerMonthEnum {
    JANUARY = "JANUARY",
    FEBRUARY = "FEBRUARY",
    MARCH = "MARCH",
    APRIL = "APRIL",
    MAY = "MAY",
    JUNE = "JUNE",
    JULY = "JULY",
    AUGUST = "AUGUST",
    SEPTEMBER = "SEPTEMBER",
    OCTOBER = "OCTOBER",
    NOVEMBER = "NOVEMBER",
    DECEMBER = "DECEMBER",
}

export enum AnsettelsesdetaljerMonthEnum1 {
    JANUARY = "JANUARY",
    FEBRUARY = "FEBRUARY",
    MARCH = "MARCH",
    APRIL = "APRIL",
    MAY = "MAY",
    JUNE = "JUNE",
    JULY = "JULY",
    AUGUST = "AUGUST",
    SEPTEMBER = "SEPTEMBER",
    OCTOBER = "OCTOBER",
    NOVEMBER = "NOVEMBER",
    DECEMBER = "DECEMBER",
}

/** Angir om barnetilsynet er heltid eller deltid */
export enum BarnetilsynGrunnlagDtoTilsynstypeEnum {
    HELTID = "HELTID",
    DELTID = "DELTID",
    IKKE_ANGITT = "IKKE_ANGITT",
}

/** Angir om barnet er over eller under skolealder */
export enum BarnetilsynGrunnlagDtoSkolealderEnum {
    OVER = "OVER",
    UNDER = "UNDER",
    IKKE_ANGITT = "IKKE_ANGITT",
}

export enum FeilrapporteringDtoFeiltypeEnum {
    TEKNISK_FEIL = "TEKNISK_FEIL",
    FUNKSJONELL_FEIL = "FUNKSJONELL_FEIL",
    UKJENT_FEIL = "UKJENT_FEIL",
}

export enum InitalizeForsendelseRequestBehandlingStatusEnum {
    OPPRETTET = "OPPRETTET",
    ENDRET = "ENDRET",
    FEILREGISTRERT = "FEILREGISTRERT",
}

export enum VirkningstidspunktMonthEnum {
    JANUARY = "JANUARY",
    FEBRUARY = "FEBRUARY",
    MARCH = "MARCH",
    APRIL = "APRIL",
    MAY = "MAY",
    JUNE = "JUNE",
    JULY = "JULY",
    AUGUST = "AUGUST",
    SEPTEMBER = "SEPTEMBER",
    OCTOBER = "OCTOBER",
    NOVEMBER = "NOVEMBER",
    DECEMBER = "DECEMBER",
}

export enum VirkningstidspunktMonthEnum1 {
    JANUARY = "JANUARY",
    FEBRUARY = "FEBRUARY",
    MARCH = "MARCH",
    APRIL = "APRIL",
    MAY = "MAY",
    JUNE = "JUNE",
    JULY = "JULY",
    AUGUST = "AUGUST",
    SEPTEMBER = "SEPTEMBER",
    OCTOBER = "OCTOBER",
    NOVEMBER = "NOVEMBER",
    DECEMBER = "DECEMBER",
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
        this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://localhost:8990" });
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
 * @title bidrag-behandling
 * @version v1
 * @baseUrl http://localhost:8990
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    api = {
        /**
         * @description Hente en behandling
         *
         * @tags behandling-controller-v-2
         * @name HentBehandlingV2
         * @request GET:/api/v2/behandling/{behandlingId}
         * @secure
         */
        hentBehandlingV2: (behandlingId: number, params: RequestParams = {}) =>
            this.request<BehandlingDtoV2, BehandlingDtoV2>({
                path: `/api/v2/behandling/${behandlingId}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Oppdatere behandling
         *
         * @tags behandling-controller-v-2
         * @name OppdatereBehandlingV2
         * @request PUT:/api/v2/behandling/{behandlingId}
         * @secure
         */
        oppdatereBehandlingV2: (behandlingId: number, data: OppdaterBehandlingRequestV2, params: RequestParams = {}) =>
            this.request<BehandlingDtoV2, any>({
                path: `/api/v2/behandling/${behandlingId}`,
                method: "PUT",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Hente en behandling
         *
         * @tags behandling-controller
         * @name HentBehandling
         * @request GET:/api/v1/behandling/{behandlingId}
         * @secure
         */
        hentBehandling: (behandlingId: number, params: RequestParams = {}) =>
            this.request<BehandlingDto, BehandlingDto>({
                path: `/api/v1/behandling/${behandlingId}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Oppdatere behandling
         *
         * @tags behandling-controller
         * @name OppdatereBehandling
         * @request PUT:/api/v1/behandling/{behandlingId}
         * @secure
         */
        oppdatereBehandling: (behandlingId: number, data: OppdaterBehandlingRequest, params: RequestParams = {}) =>
            this.request<BehandlingDto, any>({
                path: `/api/v1/behandling/${behandlingId}`,
                method: "PUT",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Sync fra behandling
         *
         * @tags behandling-controller
         * @name OppdaterRoller
         * @request PUT:/api/v1/behandling/{behandlingId}/roller
         * @secure
         */
        oppdaterRoller: (behandlingId: number, data: OppdaterRollerRequest, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v1/behandling/${behandlingId}/roller`,
                method: "PUT",
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
         * @request POST:/api/v2/vedtak/mermaid/{behandlingId}
         * @secure
         */
        vedtakTilMermaid: (behandlingId: number, params: RequestParams = {}) =>
            this.request<string, any>({
                path: `/api/v2/vedtak/mermaid/${behandlingId}`,
                method: "POST",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags vedtak-graph-controller
         * @name VedtakTilTre
         * @request POST:/api/v2/vedtak/graph/{behandlingId}
         * @secure
         */
        vedtakTilTre: (behandlingId: number, params: RequestParams = {}) =>
            this.request<TreeChild, any>({
                path: `/api/v2/vedtak/graph/${behandlingId}`,
                method: "POST",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags databehandler-controller
         * @name KonverterSivilstand
         * @request POST:/api/v2/databehandler/sivilstand/{behandlingId}
         * @deprecated
         * @secure
         */
        konverterSivilstand: (behandlingId: number, data: SivilstandGrunnlagDto[], params: RequestParams = {}) =>
            this.request<SivilstandBeregnet, any>({
                path: `/api/v2/databehandler/sivilstand/${behandlingId}`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags databehandler-controller
         * @name KonverterInntekter
         * @request POST:/api/v2/databehandler/inntekt/{behandlingId}
         * @deprecated
         * @secure
         */
        konverterInntekter: (behandlingId: number, data: KonverterInntekterDto, params: RequestParams = {}) =>
            this.request<TransformerInntekterResponse, any>({
                path: `/api/v2/databehandler/inntekt/${behandlingId}`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags databehandler-controller
         * @name KonverterBosstatus
         * @request POST:/api/v2/databehandler/bosstatus/{behandlingId}
         * @deprecated
         * @secure
         */
        konverterBosstatus: (behandlingId: number, data: RelatertPerson[], params: RequestParams = {}) =>
            this.request<BoforholdHusstandBearbeidet[], any>({
                path: `/api/v2/databehandler/bosstatus/${behandlingId}`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Oppretter forsendelse for behandling eller vedtak. Skal bare benyttes hvis vedtakId eller behandlingId mangler for behandling (Søknad som behandles gjennom Bisys)
         *
         * @tags forsendelse-controller
         * @name OpprettForsendelse
         * @request POST:/api/v1/forsendelse/init
         * @secure
         */
        opprettForsendelse: (data: InitalizeForsendelseRequest, params: RequestParams = {}) =>
            this.request<string[], any>({
                path: `/api/v1/forsendelse/init`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Legge til en ny behandling
         *
         * @tags behandling-controller
         * @name OppretteBehandling
         * @request POST:/api/v1/behandling
         * @secure
         */
        oppretteBehandling: (data: OpprettBehandlingRequest, params: RequestParams = {}) =>
            this.request<OpprettBehandlingResponse, OpprettBehandlingResponse>({
                path: `/api/v1/behandling`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Beregn forskudd
         *
         * @tags vedtak-controller
         * @name FatteVedtak
         * @request POST:/api/v1/behandling/{behandlingsid}/vedtak
         * @secure
         */
        fatteVedtak: (behandlingsid: number, params: RequestParams = {}) =>
            this.request<number, any>({
                path: `/api/v1/behandling/${behandlingsid}/vedtak`,
                method: "POST",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Beregn forskudd
         *
         * @tags behandling-beregn-forskudd-controller
         * @name BeregnForskudd
         * @request POST:/api/v1/behandling/{behandlingsid}/beregn
         * @secure
         */
        beregnForskudd: (behandlingsid: number, params: RequestParams = {}) =>
            this.request<ResultatForskuddsberegning, any>({
                path: `/api/v1/behandling/${behandlingsid}/beregn`,
                method: "POST",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Legge til nye opplysninger til behandling
         *
         * @tags opplysninger-controller
         * @name LeggTilOpplysninger
         * @request POST:/api/v1/behandling/{behandlingId}/opplysninger
         * @deprecated
         * @secure
         */
        leggTilOpplysninger: (behandlingId: number, data: AddOpplysningerRequest, params: RequestParams = {}) =>
            this.request<GrunnlagsdataDto, GrunnlagsdataDto>({
                path: `/api/v1/behandling/${behandlingId}/opplysninger`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Generer lenke for ainntekt-søk med filter for behandling og personident oppgitt i forespørsel
         *
         * @tags arbeid-og-inntekt-controller
         * @name GenererAinntektLenke
         * @request POST:/api/v1/arbeidoginntekt/ainntekt
         * @secure
         */
        genererAinntektLenke: (data: ArbeidOgInntektLenkeRequest, params: RequestParams = {}) =>
            this.request<string, any>({
                path: `/api/v1/arbeidoginntekt/ainntekt`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Generer lenke for aareg-søk for personident oppgitt i forespørsel
         *
         * @tags arbeid-og-inntekt-controller
         * @name GenererAaregLenke
         * @request POST:/api/v1/arbeidoginntekt/aareg
         * @secure
         */
        genererAaregLenke: (data: string, params: RequestParams = {}) =>
            this.request<string, any>({
                path: `/api/v1/arbeidoginntekt/aareg`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Omgjør vedtak til en behandling
         *
         * @tags behandling-controller-v-2
         * @name OmgjorVedtakTilBehandling
         * @request GET:/api/v2/behandling/vedtak/{vedtakId}
         * @secure
         */
        omgjorVedtakTilBehandling: (vedtakId: number, params: RequestParams = {}) =>
            this.request<BehandlingDtoV2, BehandlingDtoV2>({
                path: `/api/v2/behandling/vedtak/${vedtakId}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags visningsnavn-controller
         * @name HentVisningsnavn
         * @request GET:/api/v1/visningsnavn
         * @secure
         */
        hentVisningsnavn: (params: RequestParams = {}) =>
            this.request<Record<string, string>, any>({
                path: `/api/v1/visningsnavn`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags notat-opplysninger-controller
         * @name HentNotatOpplysninger
         * @request GET:/api/v1/notat/{behandlingId}
         * @secure
         */
        hentNotatOpplysninger: (behandlingId: number, params: RequestParams = {}) =>
            this.request<NotatDto, any>({
                path: `/api/v1/notat/${behandlingId}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),
    };
}