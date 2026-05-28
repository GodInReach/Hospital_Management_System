import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const bedFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "text", pattern: "[a-zA-Z0-9]*" },
  { id: "description", label: "Description", type: "text", maxLength: 500, pattern: "[a-zA-Z\\s]*" },
  { id: "rate", label: "Rate", type: "number" },
  {
    id: "ward",
    label: "Ward",
    type: "select",
    options: ["Ward A", "Ward B", "Ward C", "Ward D"],
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

export default function BedPage() {
  return (
    <MastersFormPage
      title="Masters - Lab Hospital Facility Masters - Bed"
      cardTitle="Bed Master"
      description=""
      fields={bedFields}
    />
  );
}
