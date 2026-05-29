import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const currencyFields: MastersFormField[] = [
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
    placeholder: "Enter currency name",
    maxLength: 100,
  },
];

export default function CurrencyPage() {
  return (
    <MastersFormPage
      title="Masters - Accounts Finance Masters - Currency"
      cardTitle="Currency"
      description=""
      fields={currencyFields}
    />
  );
}
