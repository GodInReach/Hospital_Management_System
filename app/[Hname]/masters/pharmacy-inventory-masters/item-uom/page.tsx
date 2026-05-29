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
    maxLength: 50,
    pattern: "[a-zA-Z0-9]*",
  },
  {
    id: "uomDescription",
    label: "UOM Description",
    type: "text",
    placeholder: "Enter UOM description",
    maxLength: 100,
    pattern: "[a-zA-Z\\s]*",
  },
];

export default function ItemUomPage() {
  return (
    <MastersFormPage
      title="Masters - Consultant Doctor Management - Item UOM"
      cardTitle="UOM Master"
      description=""
      fields={itemUomFields}
    />
  );
}
