import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const equipmentMasterFields: MastersFormField[] = [
  {
    id: "code",
    label: "Code",
    type: "number",
    placeholder: "Enter code",
    note: "Number",
  },
  {
    id: "equipmentName",
    label: "Equipment Name",
    type: "text",
    placeholder: "Enter equipment name",
    maxLength: 120,
    note: "Free Text",
  },
  {
    id: "usageRate",
    label: "Usage Rate",
    type: "number",
    placeholder: "Enter usage rate",
    step: "0.01",
    note: "Number",
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
    note: "Free Text",
    fullWidth: true,
  },
];

export default function EquipmentMasterPage() {
  return (
    <MastersFormPage
      title="Masters - Pharmacy Inventory Masters - Equipment Master"
      cardTitle="Equipment Master"
      description="Define equipment names, usage rates, and activation lifecycle details."
      fields={equipmentMasterFields}
    />
  );
}
