import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const payModeFields: MastersFormField[] = [
  {
    id: "code",
    label: "Code",
    type: "text",
    pattern: "[a-zA-Z0-9]*",
    placeholder: "Enter code",
    inputMode: "text",
  },
  {
    id: "description",
    label: "Description",
    type: "text",
    pattern: "[a-zA-Z\\s]*",
    placeholder: "Enter description",
    maxLength: 200,
  },
];

export default function PayModePage() {
  return (
    <MastersFormPage
      title="Masters - Accounts Finance Masters - Pay Mode"
      cardTitle="Pay Mode"
      description=""
      fields={payModeFields}
    />
  );
}
