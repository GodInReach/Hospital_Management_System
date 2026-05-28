import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const consultantDoctorScheduleFields: MastersFormField[] = [
  { id: "scheduleNo", label: "Schedule No", type: "text", hint: "Alphanumeric only", maxLength: 50, pattern: "[a-zA-Z0-9]*" },
  {
    id: "consultantDoctorName",
    label: "Consultant / Doctor Name",
    type: "select",
    hint: "LOV",
    options: ["Dr. Raman", "Dr. Priya", "Dr. Kumar", "Dr. Anita"],
  },
  {
    id: "appointmentFromDate",
    label: "Appointment From Date",
    type: "date",
    hint: "Date",
  },
  {
    id: "appointmentToDate",
    label: "Appointment To Date",
    type: "date",
    hint: "Date",
  },
  { id: "availableTimeFrom", label: "Available Time From", type: "time", hint: "Time" },
  { id: "availableTimeTo", label: "Available Time To", type: "time", hint: "Time" },
  {
    id: "daysAvailable",
    label: "Days Available",
    type: "checkbox",
    hint: "Select days",
    options: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
  {
    id: "timeSlotMinutes",
    label: "Time Slot (In minutes)",
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
];

export default function ConsultantDoctorSchedulePage() {
  return (
    <MastersFormPage
      title="Masters - Clinical Masters - Consultant Doctor Schedule"
      cardTitle="Consultant / Doctor Schedule"
      description="Define consultant and doctor schedule details using the shared template form style."
      fields={consultantDoctorScheduleFields}
    />
  );
}
