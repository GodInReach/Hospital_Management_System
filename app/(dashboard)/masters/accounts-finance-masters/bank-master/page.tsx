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
    min: 1,
    inputMode: "numeric",
  },
  {
    id: "bankName",
    label: "Bank Name",
    type: "text",
    placeholder: "Enter bank name",
    maxLength: 150,
  },
  {
    id: "branchName",
    label: "Branch Name",
    type: "text",
    placeholder: "Enter branch name",
    maxLength: 150,
  },
  {
    id: "accountNumber",
    label: "Account Number",
    type: "text",
    placeholder: "Enter account number",
    maxLength: 30,
  },
  {
    id: "ifscCode",
    label: "IFSC Code",
    type: "text",
    placeholder: "Enter IFSC code",
    maxLength: 20,
  },
  {
    id: "accountHolderName",
    label: "Account Holder Name",
    type: "text",
    placeholder: "Enter account holder name",
    maxLength: 150,
  },
  {
    id: "accountType",
    label: "Account Type",
    type: "select",
    options: ["Savings", "Current"],
  },
  {
    id: "openingBalance",
    label: "Opening Balance",
    type: "text",
    placeholder: "Enter opening balance",
    maxLength: 50,
  },
  {
    id: "status",
    label: "Status",
    type: "select",
    options: ["Active", "Inactive"],
  },
  {
    id: "remarks",
    label: "Remarks",
    type: "textarea",
    placeholder: "Enter remarks",
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
