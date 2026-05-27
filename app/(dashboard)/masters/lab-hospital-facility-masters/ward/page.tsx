import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const wardFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "number" },
  { id: "description", label: "Description", type: "text", maxLength: 500 },
  { id: "rate", label: "Rate", type: "number" },
  { id: "remarks", label: "Remarks", type: "textarea", fullWidth: true },
  { id: "activeFrom", label: "Active From", type: "datetime-local" },
  { id: "inactiveFrom", label: "Inactive From", type: "datetime-local" },
  {
    id: "inactiveReason",
    label: "Inactive Reason",
    type: "textarea",
    fullWidth: true,
  },
];

export default function WardPage() {
  return (
    <MastersFormPage
      title="Masters - Lab Hospital Facility Masters - Ward"
      cardTitle="Ward Master"
      description="Define ward details using the shared template form style."
      fields={wardFields}
    />
  );
}
