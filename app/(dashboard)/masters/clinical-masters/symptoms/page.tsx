import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const symptomsFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "text", maxLength: 50, pattern: "[a-zA-Z0-9]*" },
  {
    id: "description",
    label: "Description",
    type: "text",
    maxLength: 500,
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
