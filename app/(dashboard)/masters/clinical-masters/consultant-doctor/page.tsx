import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const consultantDoctorFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "number", hint: "Number" },
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
    hint: "Free Text",
    maxLength: 255,
  },
  { id: "address", label: "Address", type: "textarea", hint: "Free Text", fullWidth: true },
  {
    id: "city",
    label: "City",
    type: "select",
    hint: "LOV",
    options: ["Chennai", "Coimbatore", "Madurai", "Trichy"],
  },
  {
    id: "country",
    label: "Country",
    type: "select",
    hint: "LOV",
    options: ["India", "Sri Lanka", "Singapore", "UAE"],
  },
  { id: "zipCode", label: "ZIP Code", type: "text", hint: "Free Text", maxLength: 20 },
  { id: "email", label: "eMail", type: "text", hint: "Free Text", maxLength: 255 },
  { id: "phoneOffice", label: "Phone - Office", type: "text", hint: "Free Text", maxLength: 30 },
  { id: "phoneResi", label: "Phone - Resi", type: "text", hint: "Free Text", maxLength: 30 },
  { id: "mobile", label: "Mobile", type: "text", hint: "Free Text", maxLength: 30 },
  { id: "roomNo", label: "Room No.", type: "text", hint: "Free Text", maxLength: 30 },
  {
    id: "specialization",
    label: "Specialization",
    type: "text",
    hint: "Free Text",
    maxLength: 255,
  },
  {
    id: "registrationNumber",
    label: "Registration Number",
    type: "text",
    hint: "Free Text",
    maxLength: 100,
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
    hint: "Number",
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
  { id: "bankBranch", label: "Bank Branch", type: "text", hint: "Free Text", maxLength: 255 },
  {
    id: "bankAccountNumber",
    label: "Bank Account Number",
    type: "text",
    hint: "Free Text",
    maxLength: 50,
  },
  {
    id: "bankBranchCode",
    label: "Bank Brach Code",
    type: "text",
    hint: "Free Text",
    maxLength: 50,
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
