import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const roomTypeFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "text", pattern: "[a-zA-Z0-9]*" },
  { id: "description", label: "Description", type: "text", maxLength: 500, pattern: "[a-zA-Z\\s]*" },
  { id: "activeFrom", label: "Active From", type: "datetime-local" },
  { id: "inactiveDateFrom", label: "Inactivate Date From", type: "datetime-local" },
  {
    id: "inactiveReason",
    label: "Inactivate Reason",
    type: "textarea",
    fullWidth: true,
  },
];

export default function RoomTypePage() {
  return (
    <MastersFormPage
      title="Masters - Lab Hospital Facility Masters - Room Type"
      cardTitle="Room Type Master"
      description=""
      fields={roomTypeFields}
    />
  );
}
