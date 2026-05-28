import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const consultantDoctorFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "text", hint: "Alphanumeric only", maxLength: 50, pattern: "[a-zA-Z0-9]*" },
  {
    id: "type",
    label: "Type",
    type: "select",
    hint: "Consultant / Doctor",
    options: ["Consultant", "Doctor"],
  },
  {
    id: "doctorConsultantName",
    label: "Doctor / Consultant Name",
    type: "text",
    hint: "Alphabets only",
    maxLength: 255,
    pattern: "[a-zA-Z\\s]*",
  },
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
  { id: "roomNo", label: "Room No.", type: "text", hint: "Alphanumeric only", maxLength: 30, pattern: "[a-zA-Z0-9]*" },
  {
    id: "specialization",
    label: "Specialization",
    type: "text",
    hint: "Alphabets only",
    maxLength: 255,
    pattern: "[a-zA-Z\\s]*",
  },
  {
    id: "registrationNumber",
    label: "Registration Number",
    type: "text",
    hint: "Alphanumeric",
    maxLength: 50,
    pattern: "[a-zA-Z0-9]*",
  },
  {
    id: "clinic",
    label: "Clinic",
    type: "select",
    hint: "LOV",
    options: ["OPD", "Cardiology", "Orthopedics", "Neurology"],
  },
  {
    id: "appointmentScheduleLimit",
    label: "Appointment Schedule Limit",
    type: "number",
    hint: "Positive number only",
    min: 0,
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
  { id: "bankBranch", label: "Bank Branch", type: "text", hint: "Alphabets only", maxLength: 255, pattern: "[a-zA-Z\\s]*" },
  {
    id: "bankAccountNumber",
    label: "Bank Account Number",
    type: "text",
    hint: "Digits only",
    maxLength: 18,
    pattern: "[0-9]*",
  },
  {
    id: "bankBranchCode",
    label: "Bank Brach Code",
    type: "text",
    hint: "Alphanumeric",
    maxLength: 11,
    pattern: "[a-zA-Z0-9]*",
  },
  {
    id: "payMode",
    label: "Pay Mode",
    type: "select",
    hint: "From LOV",
    options: ["Cash", "Card", "Bank Transfer", "Cheque"],
  },
  {
    id: "paymentTermsDays",
    label: "Payment Terms Days",
    type: "select",
    hint: "From LOV",
    options: ["0", "7", "15", "30"],
  },
];

export default function ConsultantDoctorPage() {
  return (
    <MastersFormPage
      title="Masters - Clinical Masters - Consultant Doctor"
      cardTitle="Consultant / Doctor Master"
      description="Define consultant and doctor master details using the shared template form style."
      fields={consultantDoctorFields}
    />
  );
}
