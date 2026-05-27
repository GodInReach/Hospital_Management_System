import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const itemUomFields: MastersFormField[] = [
  {
    id: "uomCode",
    label: "UOM Code",
    type: "number",
    placeholder: "Enter running number",
    hint: "Running Number",
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
