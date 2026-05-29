import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const warehouseFields: MastersFormField[] = [
  {
    id: "code",
    label: "Code",
    type: "text",
    pattern: "[a-zA-Z0-9]*",
    placeholder: "Enter code",
    inputMode: "text",
  },
  {
    id: "warehouseName",
    label: "Warehouse Name",
    type: "text",
    pattern: "[a-zA-Z\\s]*",
    placeholder: "Enter warehouse name",
    maxLength: 150,
  },
  {
    id: "address",
    label: "Address",
    type: "textarea",
    placeholder: "Enter warehouse address",
  },
  {
    id: "warehouseType",
    label: "Warehouse Type",
    type: "select",
    options: ["Central", "Regional", "Store", "Transit"],
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

export default function WarehouseMasterPage() {
  return (
    <MastersFormPage
      title="Masters - Accounts Finance Masters - Warehouse Master"
      cardTitle="Warehouse"
      description=""
      fields={warehouseFields}
    />
  );
}
