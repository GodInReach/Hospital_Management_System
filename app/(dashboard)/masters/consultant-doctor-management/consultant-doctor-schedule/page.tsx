import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const consultantDoctorScheduleFields: MastersFormField[] = [
  { id: "scheduleNo", label: "Schedule No", type: "text", maxLength: 50, pattern: "[a-zA-Z0-9]*" },
  {
    id: "consultantDoctorName",
    label: "Consultant / Doctor Name",
    type: "select",
    options: ["Dr. Raman", "Dr. Priya", "Dr. Kumar", "Dr. Anita"],
  },
  {
    id: "appointmentFromDate",
    label: "Appointment From Date",
    type: "date",
  },
  {
    id: "appointmentToDate",
    label: "Appointment To Date",
    type: "date",
  },
  { id: "availableTimeFrom", label: "Available Time From", type: "time" },
  { id: "availableTimeTo", label: "Available Time To", type: "time" },
  {
    id: "daysAvailable",
    label: "Days Available",
    type: "checkbox",
    options: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
  {
    id: "timeSlotMinutes",
    label: "Time Slot (In minutes)",
    type: "number",
    min: 0,
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

export default function ConsultantDoctorSchedulePage() {
  return (
    <MastersFormPage
      title="Masters - Clinical Masters - Consultant Doctor Schedule"
      cardTitle="Consultant / Doctor Schedule"
      description=""
      fields={consultantDoctorScheduleFields}
    />
  );
}
