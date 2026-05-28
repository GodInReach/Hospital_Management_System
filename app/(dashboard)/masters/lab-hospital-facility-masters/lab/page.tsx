import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const labFields: MastersFormField[] = [
  { id: "labCode", label: "Lab Code", type: "text", maxLength: 50, pattern: "[a-zA-Z0-9]*" },
  {
    id: "labName",
    label: "Lab Name",
    type: "text",
    maxLength: 500,
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

export default function LabPage() {
  return (
    <MastersFormPage
      title="Masters - Clinical Masters - Lab"
      cardTitle="Lab Master"
      description="Define lab master details using the shared template form style."
      fields={labFields}
    />
  );
}
