import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const bankMasterFields: MastersFormField[] = [
  {
    id: "bankCode",
    label: "Bank Code",
    type: "text",
    pattern: "[a-zA-Z0-9]*",
    placeholder: "Enter bank code",
    inputMode: "text",
  },
  {
    id: "bankName",
    label: "Bank Name",
    type: "text",
    pattern: "[a-zA-Z\\s]*",
    placeholder: "Enter bank name",
    maxLength: 150,
  },
  {
    id: "branchName",
    label: "Branch Name",
    type: "text",
    pattern: "[a-zA-Z\\s]*",
    placeholder: "Enter branch name",
    maxLength: 150,
  },
  {
    id: "accountNumber",
    label: "Account Number",
    type: "text",
    placeholder: "Enter account number",
    maxLength: 18,
    pattern: "[0-9]*",
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
    pattern: "[a-zA-Z\\s]*",
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
      description=""
      fields={bankMasterFields}
    />
  );
}
