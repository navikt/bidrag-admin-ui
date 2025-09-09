import { BodyLong, Modal } from "@navikt/ds-react";
import React, { forwardRef, ReactNode, RefObject } from "react";

export const ConfirmationModal = forwardRef(
    (
        {
            heading,
            description,
            footer,
        }: {
            heading: ReactNode;
            description: string;
            footer: ReactNode;
        },
        ref: RefObject<HTMLDialogElement>
    ) => {
        return (
            <Modal ref={ref} closeOnBackdropClick aria-labelledby="modal-heading">
                <Modal.Header closeButton>{heading}</Modal.Header>
                <Modal.Body>
                    <BodyLong size="small">{description}</BodyLong>
                </Modal.Body>
                <Modal.Footer>{footer}</Modal.Footer>
            </Modal>
        );
    }
);
