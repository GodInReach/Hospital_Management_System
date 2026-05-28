import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const accountTypeFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "number" },
  { id: "description", label: "Description", type: "text", maxLength: 500 },
  { id: "activeFrom", label: "Active From", type: "datetime-local" },
  { id: "inactiveDateFrom", label: "Inactivate Date From", type: "datetime-local" },
  {
    id: "inactiveReason",
    label: "Inactivate Reason",
    type: "textarea",
    fullWidth: true,
  },
];

export default function AccountTypePage() {
  return (
    <MastersFormPage
      title="Masters - Lab Hospital Facility Masters - Account Type"
      cardTitle="Account Type"
      description="Define account type details using the shared template form style."
      fields={accountTypeFields}
    />
  );
}
