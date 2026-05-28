import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const serviceFields: MastersFormField[] = [
  {
    id: "code",
    label: "Code",
    type: "number",
    placeholder: "Enter code",
    hint: "Numer",
    min: 1,
    inputMode: "numeric",
  },
  {
    id: "description",
    label: "Description",
    type: "text",
    placeholder: "Enter description",
    hint: "Free Text",
    maxLength: 200,
  },
  {
    id: "serviceRate",
    label: "Service Rate",
    type: "number",
    placeholder: "Enter service rate",
    hint: "Numer",
    min: 0,
    step: "0.01",
    inputMode: "numeric",
  },
  {
    id: "activeFrom",
    label: "Active From",
    type: "datetime-local",
    hint: "Date Time",
  },
  {
    id: "inactiveDateFrom",
    label: "Inactive Date From",
    type: "datetime-local",
    hint: "Date Time",
  },
  {
    id: "inactiveReason",
    label: "Inactive Reason",
    type: "textarea",
    placeholder: "Enter inactive reason",
    hint: "Free Text",
    fullWidth: true,
  },
];

export default function ServicePage() {
  return (
    <MastersFormPage
      title="Masters - Accounts Finance Masters - Service"
      cardTitle="Service"
      description="Maintain service pricing and activation timelines in the shared master form layout."
      fields={serviceFields}
    />
  );
}
