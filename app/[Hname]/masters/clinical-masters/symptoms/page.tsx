import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const symptomsFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "text", maxLength: 50, pattern: "[a-zA-Z0-9]*", size: "small" },
  {
    id: "description",
    label: "Description",
    type: "textarea",
    maxLength: 500,
    fullWidth: true,
  },
];

export default function SymptomsPage() {
  return (
    <MastersFormPage
      title="Masters - Clinical Masters - Symptoms"
      cardTitle="Symptoms Master"
      description=""
      fields={symptomsFields}
    />
  );
}
