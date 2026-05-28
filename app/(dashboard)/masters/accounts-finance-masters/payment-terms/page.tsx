import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const dayOptions = Array.from({ length: 31 }, (_, index) => `${index + 1}`);

const paymentTermsFields: MastersFormField[] = [
  {
    id: "code",
    label: "Code",
    type: "number",
    placeholder: "Enter code",
    hint: "Running Number",
    min: 1,
    inputMode: "numeric",
  },
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter name",
    hint: "Free Text",
    maxLength: 200,
  },
  {
    id: "type",
    label: "Type",
    type: "select",
    hint: "Immediate,Days,Month",
    options: ["Immediate", "Days", "Month"],
  },
  {
    id: "days",
    label: "Days",
    type: "select",
    hint: "Numbers dropdown (1 to 31)",
    options: dayOptions,
  },
  {
    id: "month",
    label: "Month",
    type: "select",
    hint: "Numbers dropdown (1 to 31)",
    options: dayOptions,
  },
  {
    id: "description",
    label: "Description",
    type: "text",
    placeholder: "Enter description",
    hint: "Free Text",
    maxLength: 300,
    fullWidth: true,
  },
];

export default function PaymentTermsPage() {
  return (
    <MastersFormPage
      title="Masters - Accounts Finance Masters - Payment Terms"
      cardTitle="Payment Terms"
      description="Define payment term rules including type, day, and month scheduling options."
      fields={paymentTermsFields}
    />
  );
}
