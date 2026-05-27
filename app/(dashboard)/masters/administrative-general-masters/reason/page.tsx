import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const reasonFields: MastersFormField[] = [
  {
    id: "code",
    label: "Code",
    type: "number",
    placeholder: "Enter code",
    note: "Number",
  },
  {
    id: "description",
    label: "Description",
    type: "text",
    placeholder: "Enter description",
    maxLength: 120,
    note: "Free Text",
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
      description="Maintain reusable reason definitions and their effective lifecycle dates."
      fields={reasonFields}
    />
  );
}
