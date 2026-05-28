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
    min: 1,
    inputMode: "numeric",
  },
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter name",
    maxLength: 200,
  },
  {
    id: "type",
    label: "Type",
    type: "select",
    options: ["Immediate", "Days", "Month"],
  },
  {
    id: "days",
    label: "Days",
    type: "select",
    options: dayOptions,
  },
  {
    id: "month",
    label: "Month",
    type: "select",
    options: dayOptions,
  },
  {
    id: "description",
    label: "Description",
    type: "text",
    placeholder: "Enter description",
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
