import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const holidayTypeFields: MastersFormField[] = [
  {
    id: "code",
    label: "Code",
    type: "text",
    pattern: "[a-zA-Z0-9]*",
    placeholder: "Enter code",
    inputMode: "text",
  },
  {
    id: "name",
    label: "Name",
    type: "text",
    pattern: "[a-zA-Z\\s]*",
    placeholder: "Enter holiday type name",
    maxLength: 150,
  },
];

export default function HolidayTypePage() {
  return (
    <MastersFormPage
      title="Masters - Accounts Finance Masters - Holiday Type"
      cardTitle="Holiday Type"
      description=""
      fields={holidayTypeFields}
    />
  );
}
