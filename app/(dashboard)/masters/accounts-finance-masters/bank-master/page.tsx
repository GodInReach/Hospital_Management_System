import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const bankMasterFields: MastersFormField[] = [
  {
    id: "bankCode",
    label: "Bank Code",
    type: "number",
    placeholder: "Enter bank code",
    hint: "Running Number",
    min: 1,
    inputMode: "numeric",
  },
  {
    id: "bankName",
    label: "Bank Name",
    type: "text",
    placeholder: "Enter bank name",
    hint: "Free Text",
    maxLength: 150,
  },
  {
    id: "branchName",
    label: "Branch Name",
    type: "text",
    placeholder: "Enter branch name",
    hint: "Free Text",
    maxLength: 150,
  },
  {
    id: "accountNumber",
    label: "Account Number",
    type: "text",
    placeholder: "Enter account number",
    hint: "Free Text",
    maxLength: 30,
  },
  {
    id: "ifscCode",
    label: "IFSC Code",
    type: "text",
    placeholder: "Enter IFSC code",
    hint: "Free Text",
    maxLength: 20,
  },
  {
    id: "accountHolderName",
    label: "Account Holder Name",
    type: "text",
    placeholder: "Enter account holder name",
    hint: "Free Text",
    maxLength: 150,
  },
  {
    id: "accountType",
    label: "Account Type",
    type: "select",
    hint: "Dropdown",
    options: ["Savings", "Current"],
  },
  {
    id: "openingBalance",
    label: "Opening Balance",
    type: "text",
    placeholder: "Enter opening balance",
    hint: "Free Text",
    maxLength: 50,
  },
  {
    id: "status",
    label: "Status",
    type: "select",
    hint: "Boolean",
    options: ["Active", "Inactive"],
  },
  {
    id: "remarks",
    label: "Remarks",
    type: "textarea",
    placeholder: "Enter remarks",
    hint: "Free Text",
    fullWidth: true,
  },
];

export default function BankMasterPage() {
  return (
    <MastersFormPage
      title="Masters - Accounts Finance Masters - Bank Master"
      cardTitle="Bank Master"
      description="Maintain bank account and branch details for finance operations."
      fields={bankMasterFields}
    />
  );
}
