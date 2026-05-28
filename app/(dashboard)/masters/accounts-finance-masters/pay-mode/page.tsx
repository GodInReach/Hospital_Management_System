import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const payModeFields: MastersFormField[] = [
  {
    id: "code",
    label: "Code",
    type: "number",
    placeholder: "Enter code",
    min: 1,
    inputMode: "numeric",
  },
  {
    id: "description",
    label: "Description",
    type: "text",
    placeholder: "Enter description",
    maxLength: 200,
  },
];

export default function PayModePage() {
  return (
    <MastersFormPage
      title="Masters - Accounts Finance Masters - Pay Mode"
      cardTitle="Pay Mode"
      description="Capture pay mode details using the shared accounts and finance master form layout."
      fields={payModeFields}
    />
  );
}
