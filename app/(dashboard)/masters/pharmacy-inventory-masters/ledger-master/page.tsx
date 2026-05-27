import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const ledgerMasterFields: MastersFormField[] = [
  {
    id: "code",
    label: "Code",
    type: "text",
    placeholder: "Enter ledger code",
    note: "Character",
  },
  {
    id: "ledgerName",
    label: "Ledger Name",
    type: "text",
    placeholder: "Enter ledger name",
    maxLength: 100,
    note: "Free Text",
  },
  {
    id: "controlAccount",
    label: "Control Account",
    type: "select",
    options: ["Yes", "No"],
    note: "Yes / No",
  },
  {
    id: "ledgerType",
    label: "Ledger Type",
    type: "select",
    options: ["Customer", "Supplier", "General", "Asset", "Liability"],
    note: "LOV",
  },
  {
    id: "accountType",
    label: "Account Type",
    type: "select",
    options: ["Income", "Expense", "Asset", "Liability", "Equity"],
    note: "LOV",
  },
  {
    id: "activeFrom",
    label: "Active From",
    type: "datetime-local",
    note: "Date Time",
  },
  {
    id: "inactiveDateFrom",
    label: "Inactive Date From",
    type: "datetime-local",
    note: "Date Time",
  },
  {
    id: "inactiveReason",
    label: "Inactive Reason",
    type: "textarea",
    placeholder: "Enter inactive reason",
    maxLength: 250,
    note: "Free Text",
    fullWidth: true,
  },
];

export default function LedgerMasterPage() {
  return (
    <MastersFormPage
      title="Masters - Pharmacy Inventory Masters - Ledger Master"
      cardTitle="Ledger Master"
      description="Capture ledger definitions, account classification, and active dates."
      fields={ledgerMasterFields}
    />
  );
}
