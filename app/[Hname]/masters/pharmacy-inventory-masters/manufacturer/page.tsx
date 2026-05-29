import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const manufacturerFields: MastersFormField[] = [
  {
    id: "manufacturerCode",
    label: "Code",
    type: "text",
    placeholder: "Enter manufacturer code",
    maxLength: 50,
    pattern: "[a-zA-Z0-9]*",
  },
  {
    id: "manufacturerName",
    label: "Manufacturer Name",
    type: "text",
    placeholder: "Enter manufacturer name",
    maxLength: 500,
    pattern: "[a-zA-Z\\s]*",
  },
];

export default function ManufacturerPage() {
  return (
    <MastersFormPage
      title="Masters - Consultant Doctor Management - Manufacturer"
      cardTitle="Manufacturer Master"
      description=""
      fields={manufacturerFields}
    />
  );
}
