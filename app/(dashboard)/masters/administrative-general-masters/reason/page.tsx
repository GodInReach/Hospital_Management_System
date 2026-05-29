import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const reasonFields: MastersFormField[] = [
  {
    id: "code",
    label: "Code",
    type: "text",
    pattern: "[a-zA-Z0-9]*",
    placeholder: "Enter code",
    note: "",
  },
  {
    id: "description",
    label: "Description",
    type: "text",
    pattern: "[a-zA-Z\\s]*",
    placeholder: "Enter description",
    maxLength: 120,
    note: "",
  },
  {
    id: "activeFrom",
    label: "Active From",
    type: "datetime-local",
    note: "Date Time",
  },
  {
    id: "inactiveDateFrom",
    label: "Inactive Date From",
    type: "datetime-local",
    note: "Date Time",
  },
  {
    id: "inactiveReason",
    label: "Inactive Reason",
    type: "textarea",
    placeholder: "Enter inactive reason",
    maxLength: 250,
    fullWidth: true,
  },
];

export default function AdministrativeReasonPage() {
  return (
    <MastersFormPage
      title="Masters - Administrative General Masters - Reason"
      cardTitle="Reason Master"
      description=""
      fields={reasonFields}
    />
  );
}
