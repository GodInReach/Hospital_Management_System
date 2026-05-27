import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const operationTheaterFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "number" },
  { id: "description", label: "Description", type: "text", maxLength: 500 },
  { id: "location", label: "Location", type: "text", maxLength: 255 },
  { id: "ratePerDay", label: "Rate Per Day", type: "number" },
  { id: "activeFrom", label: "Active From", type: "datetime-local" },
  { id: "inactiveFrom", label: "Inactive From", type: "datetime-local" },
  {
    id: "inactiveReason",
    label: "Inactive Reason",
    type: "textarea",
    fullWidth: true,
  },
];

export default function OperationTheaterPage() {
  return (
    <MastersFormPage
      title="Masters - Lab Hospital Facility Masters - Operation Theater"
      cardTitle="Operation Theater Master"
      description="Define operation theater details using the shared template form style."
      fields={operationTheaterFields}
    />
  );
}
