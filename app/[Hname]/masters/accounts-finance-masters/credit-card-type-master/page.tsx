import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const creditCardTypeFields: MastersFormField[] = [
  {
    id: "code",
    label: "Code",
    type: "text",
    pattern: "[a-zA-Z0-9]*",
    placeholder: "Enter code",
    note: "",
  },
  {
    id: "cardType",
    label: "Card Type",
    type: "text",
    pattern: "[a-zA-Z\\s]*",
    placeholder: "Enter card type",
    maxLength: 100,
    note: "",
  },
  {
    id: "serviceChargePercentage",
    label: "Service Charge %",
    type: "number",
    placeholder: "Enter service charge percentage",
    step: "0.01",
    note: "Number",
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

export default function CreditCardTypeMasterPage() {
  return (
    <MastersFormPage
      title="Masters - Pharmacy Inventory Masters - Credit Card Type Master"
      cardTitle="Credit Card Type Master"
      description=""
      fields={creditCardTypeFields}
    />
  );
}
