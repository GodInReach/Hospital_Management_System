import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const warehouseFields: MastersFormField[] = [
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
    id: "warehouseName",
    label: "Warehouse Name",
    type: "text",
    placeholder: "Enter warehouse name",
    hint: "Free Text",
    maxLength: 150,
  },
  {
    id: "address",
    label: "Address",
    type: "textarea",
    placeholder: "Enter warehouse address",
    hint: "Free Text",
  },
  {
    id: "warehouseType",
    label: "Warehouse Type",
    type: "select",
    hint: "LOV",
    options: ["Central", "Regional", "Store", "Transit"],
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

export default function WarehouseMasterPage() {
  return (
    <MastersFormPage
      title="Masters - Accounts Finance Masters - Warehouse Master"
      cardTitle="Warehouse"
      description="Maintain warehouse identity, address, type, and active status details."
      fields={warehouseFields}
    />
  );
}
