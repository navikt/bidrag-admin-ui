import { GrunnlagDto } from "../../api/BidragBehandlingApiV1";

export enum MermaidSubgraph {
    STONADSENDRING = "STONADSENDRING",
    PERIODE = "PERIODE",
    NOTAT = "NOTAT",
    SJABLON = "SJABLON",
    PERSON = "PERSON",
    INGEN = "INGEN",
    ACTION = "ACTION",
    ANDRE = "ANDRE",
}

export enum TreeChildType {
    FRITTSTÅENDE = "FRITTSTÅENDE",
    VEDTAK = "VEDTAK",
    STØNADSENDRING = "STØNADSENDRING",
    PERIODE = "PERIODE",
    GRUNNLAG = "GRUNNLAG",
}

// Interfaces
export interface TreeChild<T = {}> {
    name: string;
    id: string;
    type: TreeChildType;
    children: TreeChild<T>[];
    parent: TreeChild<T> | null;
    innhold: T | null;
}

export interface TreeVedtak {
    nodeId: string;
    kilde: string;
    type: string;
    opprettetAv: string;
    opprettetAvNavn: string | null;
    kildeapplikasjon: string;
    vedtakstidspunkt: string;
    enhetsnummer: string | null;
    innkrevingUtsattTilDato?: string;
    fastsattILand: string | null;
    opprettetTidspunkt: string;
}

export interface TreeStønad {
    nodeId: string;
    type: string;
    sak: string;
    skyldner: string;
    kravhaver: string;
    mottaker: string;
    førsteIndeksreguleringsår: number | null;
    innkreving: string;
    beslutning: string;
    omgjørVedtakId: number | null;
    eksternReferanse: string | null;
}

export interface TreePeriode {
    nodeId: string;
    beløp: number | null;
    valutakode: string | null;
    resultatkode: string;
    delytelseId: string | null;
}

export interface MermaidResponse {
    mermaidGraph: string;
    vedtak: TreeVedtak;
    stønadsendringer: TreeStønad[];
    perioder: TreePeriode[];
    grunnlagListe: GrunnlagDto[];
}
