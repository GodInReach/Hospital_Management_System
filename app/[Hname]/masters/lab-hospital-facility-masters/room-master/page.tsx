import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const roomMasterFields: MastersFormField[] = [
  { id: "code", label: "Code", type: "text", pattern: "[a-zA-Z0-9]*" },
  { id: "description", label: "Description", type: "text", maxLength: 500, pattern: "[a-zA-Z\\s]*" },
  {
    id: "roomType",
    label: "Room Type",
    type: "select",
    options: ["General Ward", "Semi Private", "Private", "Deluxe"],
  },
  { id: "rate", label: "Rate", type: "number" },
  { id: "location", label: "Location", type: "text", maxLength: 255 },
  { id: "activeFrom", label: "Active From", type: "datetime-local" },
  { id: "inactiveDateFrom", label: "Inactivate Date From", type: "datetime-local" },
  {
    id: "inactiveReason",
    label: "Inactivate Reason",
    type: "textarea",
    fullWidth: true,
  },
];

export default function RoomMasterPage() {
  return (
    <MastersFormPage
      title="Masters - Lab Hospital Facility Masters - Room Master"
      cardTitle="Room Master"
      description=""
      fields={roomMasterFields}
    />
  );
}
