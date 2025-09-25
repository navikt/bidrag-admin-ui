import { isValidDate } from "@navikt/bidrag-ui-common";
import { DatePicker, useDatepicker } from "@navikt/ds-react";

interface FormDatePickerProps {
    onChange: (selectedDay: Date | undefined) => void;
    label: string;
    className?: string;
    defaultValue?: string;
    error?: string;
}
export const dateOrNull = (dateString?: string): Date | null => (dateString ? new Date(dateString) : null);

export const FormDatePicker = ({ label, onChange, defaultValue, error }: FormDatePickerProps) => {
    const { datepickerProps, inputProps } = useDatepicker({
        defaultSelected: isValidDate(new Date(defaultValue)) ? dateOrNull(defaultValue) : null,
        onDateChange: onChange,
        inputFormat: "dd.MM.yyyy",
    });

    return (
        <DatePicker {...datepickerProps}>
            <DatePicker.Input {...inputProps} label={label} error={error} size="small" />
        </DatePicker>
    );
};
