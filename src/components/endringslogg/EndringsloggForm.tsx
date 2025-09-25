import { EndringsLoggDto, EndringsloggTilhorerSkjermbilde, Endringstype } from "@api/BidragAdminApi";
import { ChevronDownIcon, ChevronLeftIcon, ChevronUpIcon, MagnifyingGlassIcon, TrashIcon } from "@navikt/aksel-icons";
import {
    Box,
    Button,
    ErrorMessage,
    HStack,
    Label,
    Modal,
    Select,
    Switch,
    Textarea,
    TextField,
    VStack,
} from "@navikt/ds-react";
import React, { useRef, useState } from "react";
import {
    Controller,
    FormProvider,
    useFieldArray,
    UseFieldArrayReturn,
    useForm,
    useFormContext,
    useWatch,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { EndringsModal } from "../../pages/endringslogg/EndringsloggIndexPage";
import { CustomQuillEditor } from "../customEditor/CustomQuillEditor";

type Endring = {
    innhold: string;
    tittel: string;
    endringstype: Endringstype;
    id?: number;
};

type EndringForm = {
    innhold: string;
    tittel: string;
    endringstype: Endringstype;
};

export type EndringsloggFormValues = {
    id?: number;
    tittel: string;
    tilhørerSkjermbilde: "" | EndringsloggTilhorerSkjermbilde;
    sammendrag: string;
    erPåkrevd: boolean;
    endring: EndringForm;
    endringer: Endring[];
};

const fallbackToEmptyString = <T extends string | EndringsloggTilhorerSkjermbilde>(
    value: T | null | undefined
): T | "" => value ?? "";

const createDefaultValues = (endringslogg?: EndringsLoggDto): EndringsloggFormValues => {
    const defaultValues: EndringsloggFormValues = {
        id: !endringslogg?.id ? null : endringslogg.id,
        tittel: fallbackToEmptyString(endringslogg?.tittel),
        tilhørerSkjermbilde: fallbackToEmptyString(endringslogg?.gjelder),
        sammendrag: fallbackToEmptyString(endringslogg?.sammendrag),
        erPåkrevd: endringslogg?.erPåkrevd,
        endring: {
            tittel: "",
            innhold: "",
            endringstype: Endringstype.ENDRING,
        },
        endringer: endringslogg?.endringer?.map((endring) => ({
            innhold: endring?.innhold,
            tittel: endring?.tittel,
            endringstype: endring?.endringstype,
            id: endring?.id ? endring?.id : null,
        })),
    };

    return defaultValues;
};

export const EndringsloggTilhorerSkjermbildeToVisningsnavn = {
    [EndringsloggTilhorerSkjermbilde.BEHANDLING_BIDRAG]: "Bidrag",
    [EndringsloggTilhorerSkjermbilde.BEHANDLING_FORSKUDD]: "Forskudd",
    [EndringsloggTilhorerSkjermbilde.BEHANDLINGSAeRBIDRAG]: "Særbidrag",
    [EndringsloggTilhorerSkjermbilde.BEHANDLING_ALLE]: "Behandling (alle)",
    [EndringsloggTilhorerSkjermbilde.FORSENDELSE]: "Forsendelse",
    [EndringsloggTilhorerSkjermbilde.INNSYN_DOKUMENT]: "Innsyn dokument",
    [EndringsloggTilhorerSkjermbilde.SAMHANDLER]: "Samhandler",
    [EndringsloggTilhorerSkjermbilde.ALLE]: "Alle",
};

export const EndringstypeToVisningsnavn = {
    [Endringstype.ENDRING]: "Endring",
    [Endringstype.FEILFIKS]: "Feilfiks",
    [Endringstype.NYHET]: "Nyhet",
};

const EndringsBox = ({
    endringerFieldArray,
}: {
    endringerFieldArray: UseFieldArrayReturn<EndringsloggFormValues, "endringer">;
}) => {
    const quillRef = useRef(null);
    const modalRef = useRef<HTMLDialogElement>(null);
    const { getValues, control, resetField, setError, clearErrors } = useFormContext<EndringsloggFormValues>();

    const onAdd = () => {
        const endring = getValues("endring");
        let valid = true;

        if (!endring.tittel) {
            valid = false;
            setError("endring.tittel", {
                type: "required",
                message: "Dette feltet er påkrevd",
            });
        } else {
            clearErrors("endring.tittel");
        }

        if (!endring.innhold) {
            valid = false;
            setError("endring.innhold", {
                type: "required",
                message: "Dette feltet er påkrevd",
            });
        } else {
            clearErrors("endring.innhold");
        }

        if (valid) {
            endringerFieldArray.prepend(endring);
            resetField("endring");
            modalRef.current?.close();
        }
    };

    return (
        <>
            <Button
                type="button"
                variant="tertiary"
                size="small"
                className="w-max"
                onClick={() => {
                    endringerFieldArray.prepend({ tittel: "", innhold: "", endringstype: Endringstype.ENDRING });
                }}
            >
                + Legg til endring
            </Button>

            <Modal
                ref={modalRef}
                header={{ heading: "Endring" }}
                closeOnBackdropClick
                onClose={() => resetField("endring")}
                aria-labelledby="modal-heading"
                width={400}
            >
                <Modal.Body className="pb-0">
                    <Box
                        background="surface-default"
                        padding="4"
                        borderColor="border-default"
                        borderWidth="1"
                        borderRadius="medium"
                    >
                        <VStack gap="4">
                            <Controller
                                name="endring.tittel"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <TextField
                                        {...field}
                                        label="Tittel"
                                        size="small"
                                        error={fieldState.error?.message}
                                        className="h-max"
                                    />
                                )}
                            />
                            <Controller
                                name="endring.endringstype"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <Select
                                        {...field}
                                        error={fieldState.error?.message}
                                        label="Endringstype"
                                        size="small"
                                        className="h-max"
                                    >
                                        {Object.values(Endringstype).map((endringstype) => (
                                            <option key={endringstype} value={endringstype}>
                                                {EndringstypeToVisningsnavn[endringstype]}
                                            </option>
                                        ))}
                                    </Select>
                                )}
                            />

                            <Controller
                                name="endring.innhold"
                                defaultValue=""
                                control={control}
                                render={({ field, fieldState }) => (
                                    <CustomQuillEditor
                                        ref={quillRef}
                                        resize
                                        onTextChange={(innhold) => field.onChange(innhold)}
                                        readOnly={false}
                                        error={fieldState.error?.message}
                                        defaultValue={field.value}
                                    />
                                )}
                            />
                        </VStack>
                    </Box>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" variant="tertiary" size="small" className="w-max" onClick={onAdd}>
                        + Legg til endring
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const EndringsFormBox = ({
    index,
    endringerFieldArray,
}: {
    index: number;
    endringerFieldArray: UseFieldArrayReturn<EndringsloggFormValues, "endringer">;
}) => {
    const quillRef = useRef(null);
    const { control } = useFormContext<EndringsloggFormValues>();

    return (
        <>
            <Box
                background="surface-default"
                padding="4"
                borderColor="border-default"
                borderWidth="1"
                borderRadius="medium"
            >
                <VStack gap="4">
                    <HStack gap="4" align="center" justify="space-between">
                        <Label size="small">Endring</Label>
                        <HStack gap="2">
                            <Button
                                type="button"
                                onClick={() => endringerFieldArray.move(index, index - 1)}
                                disabled={index === 0}
                                icon={<ChevronUpIcon aria-hidden />}
                                variant="tertiary"
                                size="small"
                            />
                            <Button
                                type="button"
                                onClick={() => endringerFieldArray.move(index, index + 1)}
                                disabled={index === endringerFieldArray.fields.length - 1}
                                icon={<ChevronDownIcon aria-hidden />}
                                variant="tertiary"
                                size="small"
                            />
                            <Button
                                type="button"
                                onClick={() => endringerFieldArray.remove(index)}
                                icon={<TrashIcon aria-hidden />}
                                variant="tertiary"
                                size="small"
                            />
                        </HStack>
                    </HStack>

                    <Controller
                        name={`endringer.${index}.tittel`}
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Dette feltet er påkrevd",
                            },
                        }}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label="Tittel"
                                size="small"
                                error={fieldState.error?.message}
                                className="h-max"
                            />
                        )}
                    />
                    <Controller
                        name={`endringer.${index}.endringstype`}
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Dette feltet er påkrevd",
                            },
                        }}
                        render={({ field, fieldState }) => (
                            <Select
                                {...field}
                                error={fieldState.error?.message}
                                label="Endringstype"
                                size="small"
                                className="h-max"
                            >
                                {Object.values(Endringstype).map((endringstype) => (
                                    <option key={endringstype} value={endringstype}>
                                        {EndringstypeToVisningsnavn[endringstype]}
                                    </option>
                                ))}
                            </Select>
                        )}
                    />

                    <Controller
                        name={`endringer.${index}.innhold`}
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Dette feltet er påkrevd",
                            },
                        }}
                        render={({ field, fieldState }) => (
                            <CustomQuillEditor
                                ref={quillRef}
                                resize
                                onTextChange={(innhold) => field.onChange(innhold)}
                                readOnly={false}
                                error={fieldState.error?.message}
                                defaultValue={field.value}
                            />
                        )}
                    />
                </VStack>
            </Box>
        </>
    );
};

export default function EndringsloggForm({
    onSave,
    endringslogg,
    mutationError,
}: {
    onSave: (formValues: EndringsloggFormValues, onSuccess: () => void) => void;
    endringslogg?: EndringsLoggDto;
    mutationError: Error;
}) {
    const [previewed, setPreviewed] = useState<EndringsLoggDto | null>(null);

    const navigate = useNavigate();
    const defaultValues = createDefaultValues(endringslogg);
    const formMethods = useForm<EndringsloggFormValues>({
        defaultValues,
        mode: "onSubmit",
        reValidateMode: "onChange",
    });
    const endringerFieldArray = useFieldArray({
        control: formMethods.control,
        name: "endringer",
    });
    const watchFieldArray = useWatch({ control: formMethods.control, name: "endringer" });
    const controlledFields = endringerFieldArray.fields.map((field, index) => {
        return {
            ...field,
            ...watchFieldArray?.[index],
        };
    });

    const validateEndringer = () => {
        const endringer = formMethods.getValues("endringer");
        if (endringer.length < 0) {
            formMethods.setError("root", {
                type: "custom",
                message: "Du må legge til minst en endring",
            });
            return false;
        } else {
            formMethods.clearErrors("root");
            return true;
        }
    };

    const onSubmit = (formValues: EndringsloggFormValues) => {
        const hasEndringer = validateEndringer();

        if (!hasEndringer) {
            return;
        }

        onSave(formValues, () => {});
    };

    const onError = () => {
        validateEndringer();
    };

    return (
        <>
            <Button
                variant="secondary"
                type="button"
                size="small"
                onClick={() => navigate("/admin/endringslogg")}
                icon={<ChevronLeftIcon title="Tilbake" fontSize="1.5rem" />}
                className="mb-4"
            >
                Tilbake
            </Button>
            <FormProvider {...formMethods} key={defaultValues.id}>
                <form onSubmit={formMethods.handleSubmit(onSubmit, onError)} id={`skjema-${defaultValues.id}`}>
                    <div className="grid gap-4">
                        <div className="grid gap-4 grid-cols-3">
                            <div className="grid gap-4">
                                <Controller
                                    name="tittel"
                                    control={formMethods.control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Dette feltet er påkrevd",
                                        },
                                    }}
                                    render={({ field, fieldState }) => (
                                        <TextField
                                            {...field}
                                            label="Tittel"
                                            size="small"
                                            error={fieldState.error?.message}
                                            className="h-max"
                                        />
                                    )}
                                />
                                <Controller
                                    name="sammendrag"
                                    control={formMethods.control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Dette feltet er påkrevd",
                                        },
                                    }}
                                    render={({ field, fieldState }) => (
                                        <Textarea
                                            {...field}
                                            label="Sammendrag"
                                            size="small"
                                            error={fieldState.error?.message}
                                            minRows={5}
                                        />
                                    )}
                                />
                                <Controller
                                    name="erPåkrevd"
                                    control={formMethods.control}
                                    render={({ field }) => (
                                        <Switch
                                            checked={field.value}
                                            onChange={(e) => field.onChange(e.target.checked)}
                                            size="small"
                                        >
                                            Er påkrevd
                                        </Switch>
                                    )}
                                />
                                {formMethods.formState.errors?.root && (
                                    <ErrorMessage size="small" showIcon>
                                        {formMethods.formState.errors.root.message}
                                    </ErrorMessage>
                                )}
                                <EndringsBox endringerFieldArray={endringerFieldArray} />
                            </div>
                            <div>
                                <Controller
                                    name="tilhørerSkjermbilde"
                                    control={formMethods.control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Dette feltet er påkrevd",
                                        },
                                    }}
                                    render={({ field, fieldState }) => (
                                        <Select
                                            {...field}
                                            label="Gjelder"
                                            size="small"
                                            error={fieldState.error?.message}
                                            className="h-max"
                                        >
                                            <option value="">- Velg type skjermbilde -</option>
                                            {Object.values(EndringsloggTilhorerSkjermbilde).map((gjelder) => (
                                                <option key={gjelder} value={gjelder}>
                                                    {EndringsloggTilhorerSkjermbildeToVisningsnavn[gjelder]}
                                                </option>
                                            ))}
                                        </Select>
                                    )}
                                />
                            </div>
                        </div>
                        {controlledFields.length > 0 && (
                            <div className="grid gap-4 grid-cols-1">
                                {controlledFields.map((item, index) => (
                                    <EndringsFormBox
                                        key={`${item.id} + ${index}`}
                                        index={index}
                                        endringerFieldArray={endringerFieldArray}
                                    />
                                ))}
                            </div>
                        )}

                        <HStack gap={"2"}>
                            <Button type="submit" variant="primary" size="small">
                                Lagre
                            </Button>
                            {endringslogg && endringslogg.endringer.length > 0 && (
                                <Button
                                    variant="tertiary"
                                    size="small"
                                    icon={<MagnifyingGlassIcon title="Forhåndsvisning" />}
                                    onClick={() => setPreviewed(endringslogg)}
                                >
                                    Forhåndsvisning
                                </Button>
                            )}
                        </HStack>
                        {mutationError && (
                            <ErrorMessage size="small" showIcon>
                                Feil ved lagring. Prøv på nytt.
                            </ErrorMessage>
                        )}
                        {previewed && (
                            <EndringsModal
                                open={!!previewed}
                                onClose={() => setPreviewed(null)}
                                selectedEndringslogg={previewed}
                                closeOnBackdropClick
                            />
                        )}
                    </div>
                </form>
            </FormProvider>
        </>
    );
}
