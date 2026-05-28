import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const symptomsFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "text", hint: "Alphanumeric only", maxLength: 50, pattern: "[a-zA-Z0-9]*" },
  {
    id: "description",
    label: "Description",
    type: "text",
    hint: "Free Text",
    maxLength: 500,
  },
];

export default function SymptomsPage() {
  return (
    <MastersFormPage
      title="Masters - Clinical Masters - Symptoms"
      cardTitle="Symptoms Master"
      description="Define symptoms master details using the shared template form style."
      fields={symptomsFields}
    />
  );
}
