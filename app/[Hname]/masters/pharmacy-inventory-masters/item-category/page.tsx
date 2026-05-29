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
    maxLength: 50,
    pattern: "[a-zA-Z0-9]*",
  },
  {
    id: "groupName",
    label: "Group Name",
    type: "text",
    placeholder: "Enter group name",
    maxLength: 500,
    pattern: "[a-zA-Z\\s]*",
  },
];

export default function ItemCategoryPage() {
  return (
    <MastersFormPage
      title="Masters - Consultant Doctor Management - Item Category"
      cardTitle="Item Category Master"
      description=""
      fields={itemCategoryFields}
    />
  );
}
