import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const holidayTypeFields: MastersFormField[] = [
  {
    id: "code",
    label: "Code",
    type: "number",
    placeholder: "Enter code",
    hint: "Running Number",
    min: 1,
    inputMode: "numeric",
  },
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter holiday type name",
    hint: "Free Text",
    maxLength: 150,
  },
];

export default function HolidayTypePage() {
  return (
    <MastersFormPage
      title="Masters - Accounts Finance Masters - Holiday Type"
      cardTitle="Holiday Type"
      description="Maintain holiday type master values with code and name fields."
      fields={holidayTypeFields}
    />
  );
}
