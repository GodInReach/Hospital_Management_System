import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const itemCategoryFields: MastersFormField[] = [
  {
    id: "groupCode",
    label: "Group Code",
    type: "number",
    placeholder: "Enter running number",
    hint: "Running Number",
  },
  {
    id: "groupName",
    label: "Group Name",
    type: "text",
    placeholder: "Enter group name",
    hint: "Free Text, up to 500 characters",
    maxLength: 500,
  },
];

export default function ItemCategoryPage() {
  return (
    <MastersFormPage
      title="Masters - Consultant Doctor Management - Item Category"
      cardTitle="Item Category Master"
      description="Define item category master details using the shared template form style."
      fields={itemCategoryFields}
    />
  );
}
