import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const bedFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "number" },
  { id: "description", label: "Description", type: "text", maxLength: 500 },
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
      description="Define bed details using the shared template form style."
      fields={bedFields}
    />
  );
}
