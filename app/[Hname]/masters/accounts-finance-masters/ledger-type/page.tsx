import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const ledgerTypeFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "text", pattern: "[a-zA-Z0-9]*" },
  { id: "description", label: "Description", type: "text", maxLength: 500, pattern: "[a-zA-Z\\s]*" },
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
      description=""
      fields={ledgerTypeFields}
    />
  );
}
