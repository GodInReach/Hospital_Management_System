import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const ledgerTypeFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "number" },
  { id: "description", label: "Description", type: "text", maxLength: 500 },
  { id: "ledgerPrefixCode", label: "Ledger Prefix Code", type: "text", maxLength: 50 },
  { id: "activeFrom", label: "Active From", type: "datetime-local" },
  { id: "inactiveDateFrom", label: "Inactivate Date From", type: "datetime-local" },
  {
    id: "inactiveReason",
    label: "Inactivate Reason",
    type: "textarea",
    fullWidth: true,
  },
];

export default function LedgerTypePage() {
  return (
    <MastersFormPage
      title="Masters - Lab Hospital Facility Masters - Ledger Type"
      cardTitle="Ledger Type"
      description="Define ledger type details using the shared template form style."
      fields={ledgerTypeFields}
    />
  );
}
