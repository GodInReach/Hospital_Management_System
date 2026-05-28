import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const currencyFields: MastersFormField[] = [
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
    placeholder: "Enter currency name",
    hint: "Free Text",
    maxLength: 100,
  },
];

export default function CurrencyPage() {
  return (
    <MastersFormPage
      title="Masters - Accounts Finance Masters - Currency"
      cardTitle="Currency"
      description="Maintain currency master records with code and name values."
      fields={currencyFields}
    />
  );
}
