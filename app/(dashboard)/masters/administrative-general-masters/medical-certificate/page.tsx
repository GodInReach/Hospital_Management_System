import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const medicalCertificateFields: MastersFormField[] = [
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
    id: "defaultMessage",
    label: "Default Message",
    type: "textarea",
    placeholder: "Enter default message",
    maxLength: 250,
    note: "Free Text",
    fullWidth: true,
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

export default function AdministrativeMedicalCertificatePage() {
  return (
    <MastersFormPage
      title="Masters - Administrative General Masters - Medical Certificate"
      cardTitle="Medical Certificate Master"
      description="Define medical certificate descriptions, default messages, and active periods."
      fields={medicalCertificateFields}
    />
  );
}
