import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const serviceFields: MastersFormField[] = [
  {
    id: "code",
    label: "Code",
    type: "text",
    pattern: "[a-zA-Z0-9]*",
    placeholder: "Enter code",
    inputMode: "text",
  },
  {
    id: "description",
    label: "Description",
    type: "text",
    pattern: "[a-zA-Z\\s]*",
    placeholder: "Enter description",
    maxLength: 200,
  },
  {
    id: "serviceRate",
    label: "Service Rate",
    type: "number",
    placeholder: "Enter service rate",
    min: 0,
    step: "0.01",
    inputMode: "numeric",
  },
  {
    id: "activeFrom",
    label: "Active From",
    type: "datetime-local",
  },
  {
    id: "inactiveDateFrom",
    label: "Inactive Date From",
    type: "datetime-local",
  },
  {
    id: "inactiveReason",
    label: "Inactive Reason",
    type: "textarea",
    placeholder: "Enter inactive reason",
    fullWidth: true,
  },
];

export default function ServicePage() {
  return (
    <MastersFormPage
      title="Masters - Accounts Finance Masters - Service"
      cardTitle="Service"
      description=""
      fields={serviceFields}
    />
  );
}
