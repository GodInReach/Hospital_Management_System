import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const allergyFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "number", hint: "Number" },
  {
    id: "description",
    label: "Description",
    type: "text",
    hint: "Free Text",
    maxLength: 500,
  },
  {
    id: "symptoms",
    label: "Symptoms",
    type: "select",
    hint: "LOV",
    options: ["Cough", "Fever", "Headache", "Skin Rash"],
  },
  { id: "activeFrom", label: "Active From", type: "datetime-local", hint: "Date Time" },
  { id: "inactiveFrom", label: "Inactive From", type: "datetime-local", hint: "Date Time" },
  {
    id: "inactiveReason",
    label: "Inactive Reason",
    type: "textarea",
    hint: "Free Text",
    fullWidth: true,
  },
];

export default function AllergyPage() {
  return (
    <MastersFormPage
      title="Masters - Clinical Masters - Allergy"
      cardTitle="Allergy Master"
      description="Define allergy master details using the shared template form style."
      fields={allergyFields}
    />
  );
}
