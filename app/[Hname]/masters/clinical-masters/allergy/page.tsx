import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const allergyFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "text", maxLength: 50, pattern: "[a-zA-Z0-9]*", size: "small" },
  {
    id: "description",
    label: "Description",
    type: "textarea",
    maxLength: 500,
    fullWidth: true,
  },
  {
    id: "symptoms",
    label: "Symptoms",
    type: "select",
    options: ["Cough", "Fever", "Headache", "Skin Rash"],
    size: "medium",
  },
  { id: "activeFrom", label: "Active From", type: "datetime-local" },
  { id: "inactiveFrom", label: "Inactive From", type: "datetime-local" },
  {
    id: "inactiveReason",
    label: "Inactive Reason",
    type: "textarea",
    fullWidth: true,
  },
];

export default function AllergyPage() {
  return (
    <MastersFormPage
      title="Masters - Clinical Masters - Allergy"
      cardTitle="Allergy Master"
      description=""
      fields={allergyFields}
    />
  );
}
