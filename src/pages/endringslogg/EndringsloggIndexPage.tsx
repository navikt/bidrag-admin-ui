import { Endringstype } from "@api/BidragAdminApi";
import { PencilIcon } from "@navikt/aksel-icons";
import { Button, Table, Tag, VStack } from "@navikt/ds-react";
import React from "react";
import { Link as ReactRouterLink } from "react-router";

import { EndringsloggTilhorerSkjermbildeToVisningsnavn } from "../../components/endringslogg/EndringsloggForm";
import { useHentEndringslogger } from "../../hooks/useApiData";

const format = (date: Date) => {
    const y = date.getFullYear();
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const d = date.getDate().toString().padStart(2, "0");
    return `${d}.${m}.${y}`;
};

export const EndringstypeToTagMapper = {
    [Endringstype.ENDRING]: {
        tag: "neutral" as const,
        tekst: "Endring",
    },
    [Endringstype.NYHET]: {
        tag: "info" as const,
        tekst: "Nyhet",
    },
    [Endringstype.FEILFIKS]: {
        tag: "success" as const,
        tekst: "Feilfiks",
    },
};

export const EndringsloggIndexPage = () => {
    const endringslogger = useHentEndringslogger();
    return (
        <VStack gap="4">
            <Button variant="secondary" size="small" as={ReactRouterLink} to="/admin/endringslogg/ny" className="w-max">
                + Lag ny
            </Button>
            <Table zebraStripes size="small">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell scope="col">Tittel</Table.HeaderCell>
                        <Table.HeaderCell scope="col">Gjelder</Table.HeaderCell>
                        <Table.HeaderCell scope="col">Dato</Table.HeaderCell>
                        <Table.HeaderCell scope="col">Endringstyper</Table.HeaderCell>
                        <Table.HeaderCell scope="col"></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {endringslogger.data.map(({ id, tittel, dato, gjelder, endringstyper }, i) => {
                        return (
                            <Table.Row key={i + tittel + dato}>
                                <Table.HeaderCell scope="row">{tittel}</Table.HeaderCell>
                                <Table.DataCell>
                                    {EndringsloggTilhorerSkjermbildeToVisningsnavn[gjelder]}
                                </Table.DataCell>
                                <Table.DataCell>{format(new Date(dato))}</Table.DataCell>
                                <Table.DataCell>
                                    {endringstyper.map((endringstype, i) => (
                                        <Tag
                                            key={i + endringstype}
                                            variant={EndringstypeToTagMapper[endringstype].tag}
                                            size="xsmall"
                                            className="mr-2"
                                        >
                                            {EndringstypeToTagMapper[endringstype].tekst}
                                        </Tag>
                                    ))}
                                </Table.DataCell>
                                <Table.DataCell>
                                    <Button
                                        variant="tertiary"
                                        size="small"
                                        as={ReactRouterLink}
                                        to={`/admin/endringslogg/${id}`}
                                        icon={<PencilIcon title="Rediger" />}
                                    />
                                </Table.DataCell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        </VStack>
    );
};
