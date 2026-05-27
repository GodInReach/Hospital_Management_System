import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const manufacturerFields: MastersFormField[] = [
  {
    id: "manufacturerCode",
    label: "Code",
    type: "number",
    placeholder: "Enter running number",
    hint: "Running Number",
  },
  {
    id: "manufacturerName",
    label: "Manufacturer Name",
    type: "text",
    placeholder: "Enter manufacturer name",
    hint: "Free Text, up to 500 characters",
    maxLength: 500,
  },
];

export default function ManufacturerPage() {
  return (
    <MastersFormPage
      title="Masters - Consultant Doctor Management - Manufacturer"
      cardTitle="Manufacturer Master"
      description="Define manufacturer details using the shared template form style."
      fields={manufacturerFields}
    />
  );
}
