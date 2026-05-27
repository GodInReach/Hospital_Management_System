import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const diseaseFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "number", hint: "Number" },
  {
    id: "description",
    label: "Description",
    type: "text",
    hint: "Free Text",
    maxLength: 500,
  },
  {
    id: "standardValueMinimum",
    label: "Standard Value - Minimum",
    type: "number",
    hint: "Number",
  },
  {
    id: "standardValueMaximum",
    label: "Standard Value - Maximum",
    type: "number",
    hint: "Number",
  },
  { id: "activeFrom", label: "Active From", type: "datetime-local", hint: "Date Time" },
  { id: "inactiveFrom", label: "Inactive From", type: "datetime-local", hint: "Date Time" },
  {
    id: "inactiveReason",
    label: "Inactive Reason",
    type: "textarea",
    hint: "Free Text",
    fullWidth: true,
  },
];

export default function DiseasePage() {
  return (
    <MastersFormPage
      title="Masters - Clinical Masters - Disease"
      cardTitle="Disease Master"
      description="Define disease master details using the shared template form style."
      fields={diseaseFields}
    />
  );
}
