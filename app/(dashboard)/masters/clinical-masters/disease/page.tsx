import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const diseaseFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "text", maxLength: 50, pattern: "[a-zA-Z0-9]*", size: "small" },
  {
    id: "description",
    label: "Description",
    type: "textarea",
    maxLength: 500,
    fullWidth: true,
  },
  {
    id: "standardValueMinimum",
    label: "Standard Value - Minimum",
    type: "number",
    min: 0,
    size: "small",
  },
  {
    id: "standardValueMaximum",
    label: "Standard Value - Maximum",
    type: "number",
    min: 0,
    size: "small",
  },
  { id: "activeFrom", label: "Active From", type: "datetime-local" },
  { id: "inactiveFrom", label: "Inactive From", type: "datetime-local" },
  {
    id: "inactiveReason",
    label: "Inactive Reason",
    type: "textarea",
    fullWidth: true,
  },
];

export default function DiseasePage() {
  return (
    <MastersFormPage
      title="Masters - Clinical Masters - Disease"
      cardTitle="Disease Master"
      description=""
      fields={diseaseFields}
    />
  );
}
