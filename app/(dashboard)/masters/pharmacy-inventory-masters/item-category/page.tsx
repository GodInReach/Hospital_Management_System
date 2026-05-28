import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const itemCategoryFields: MastersFormField[] = [
  {
    id: "groupCode",
    label: "Group Code",
    type: "text",
    placeholder: "Enter group code",
    hint: "Alphanumeric only",
    maxLength: 50,
    pattern: "[a-zA-Z0-9]*",
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
