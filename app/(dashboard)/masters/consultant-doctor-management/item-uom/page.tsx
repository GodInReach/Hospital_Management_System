import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const itemUomFields: MastersFormField[] = [
  {
    id: "uomCode",
    label: "UOM Code",
    type: "text",
    placeholder: "Enter UOM code",
    hint: "Alphanumeric only",
    maxLength: 50,
    pattern: "[a-zA-Z0-9]*",
  },
  {
    id: "uomDescription",
    label: "UOM Description",
    type: "text",
    placeholder: "Enter UOM description",
    hint: "Free Text, up to 100 characters",
    maxLength: 100,
  },
];

export default function ItemUomPage() {
  return (
    <MastersFormPage
      title="Masters - Consultant Doctor Management - Item UOM"
      cardTitle="UOM Master"
      description="Define unit of measure details using the shared template form style."
      fields={itemUomFields}
    />
  );
}
