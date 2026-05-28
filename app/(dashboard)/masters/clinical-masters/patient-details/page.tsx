import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const patientDetailsFields: MastersFormField[] = [
  { id: "patientId", label: "Patient ID", type: "text", hint: "Alphanumeric only", maxLength: 50, pattern: "[a-zA-Z0-9]*" },
  { id: "patientName", label: "Patient Name", type: "text", hint: "Alphabets only", maxLength: 500, pattern: "[a-zA-Z\\s]*" },
  { id: "address", label: "Address", type: "textarea", hint: "Free Text", fullWidth: true },
  {
    id: "country",
    label: "Country",
    type: "select",
    hint: "LOV",
    options: ["India", "Sri Lanka", "Singapore", "UAE"],
  },
  {
    id: "state",
    label: "State",
    type: "select",
    hint: "LOV",
    options: ["Tamil Nadu", "Telangana", "Karnataka", "Other"],
  },
  {
    id: "city",
    label: "City",
    type: "select",
    hint: "LOV",
    options: ["Chennai", "Coimbatore", "Madurai", "Trichy"],
  },
  { id: "zipCode", label: "ZIP Code", type: "text", hint: "6 digits only", maxLength: 6, pattern: "[0-9]{6}", inputMode: "numeric" },
  { id: "email", label: "eMail", type: "text", hint: "Free Text", maxLength: 255 },
  { id: "phoneOffice", label: "Phone - Office", type: "text", hint: "10 digits only", maxLength: 10, pattern: "[0-9]{10}", inputMode: "tel" },
  { id: "phoneResi", label: "Phone - Resi", type: "text", hint: "10 digits only", maxLength: 10, pattern: "[0-9]{10}", inputMode: "tel" },
  { id: "mobile", label: "Mobile", type: "text", hint: "10 digits only", maxLength: 10, pattern: "[0-9]{10}", inputMode: "tel" },
  { id: "hnNumber", label: "HN Number", type: "text", hint: "Free Text", maxLength: 50 },
  {
    id: "numberOfVisits",
    label: "Number of Visits till now",
    type: "number",
    hint: "Positive number only",
    min: 0,
  },
  {
    id: "lastVisitDateTime",
    label: "Last Visit Date & Time",
    type: "datetime-local",
    hint: "Date & Time",
  },
  {
    id: "lastVisitDoctorName",
    label: "Last visit doctor name",
    type: "text",
    hint: "Free Text",
    maxLength: 255,
  },
  { id: "profession", label: "Profession", type: "text", hint: "Free Text", maxLength: 255 },
  {
    id: "patientType",
    label: "Patient Type",
    type: "select",
    hint: "LOV",
    options: ["General", "Corporate", "Insurance", "VIP"],
  },
  {
    id: "preferredPaymentType",
    label: "Preferred Payment Type",
    type: "select",
    hint: "Cash / Card",
    options: ["Cash", "Card"],
  },
  {
    id: "mediclaimPolicyAvailable",
    label: "Mediclaim Policy Available",
    type: "select",
    hint: "Yes / No",
    options: ["Yes", "No"],
  },
  {
    id: "policyDetails",
    label: "Policy Details",
    type: "textarea",
    hint: "Free Text",
    fullWidth: true,
  },
  {
    id: "linkedPatientId",
    label: "Linked Patient Id",
    type: "select",
    hint: "LOV",
    options: ["P1001", "P1002", "P1003", "P1004"],
  },
  {
    id: "relationshipShipLinkedPatient",
    label: "Relation Ship - Linked Patient",
    type: "select",
    hint: "LOV",
    options: ["Spouse", "Child", "Parent", "Sibling"],
    note: "The above two fields should allow multiple records against a patient.",
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

export default function PatientDetailsPage() {
  return (
    <MastersFormPage
      title="Masters - Clinical Masters - Patient Details"
      cardTitle="Patient Details"
      description="Define patient details using the shared template form style."
      fields={patientDetailsFields}
    />
  );
}
