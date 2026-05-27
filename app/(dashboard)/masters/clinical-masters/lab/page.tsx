import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const labFields: MastersFormField[] = [
  { id: "labCode", label: "Lab Code", type: "number", hint: "Number" },
  {
    id: "labName",
    label: "Lab Name",
    type: "text",
    hint: "Free Text",
    maxLength: 500,
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
