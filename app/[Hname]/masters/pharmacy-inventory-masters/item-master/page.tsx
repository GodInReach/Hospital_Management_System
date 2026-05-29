import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const itemMasterFields: MastersFormField[] = [
  { id: "itemCode", label: "Item Code", type: "text", pattern: "[a-zA-Z0-9]*", placeholder: "Auto running number" },
  { id: "itemName", label: "Item Name", type: "text", maxLength: 255, pattern: "[a-zA-Z\\s]*" },
  {
    id: "itemCategory",
    label: "Item Category",
    type: "select",
    options: ["Tablet", "Injection", "Consumable", "Equipment"],
  },
  {
    id: "purchaseUom",
    label: "Purchase UOM",
    type: "select",
    options: ["Box", "Bottle", "Strip", "Piece"],
  },
  {
    id: "saleUom",
    label: "Sale UOM",
    type: "select",
    options: ["Box", "Bottle", "Strip", "Piece"],
  },
  { id: "conversionFactor", label: "Conversion Factor", type: "number" },
  {
    id: "lastPurchasePrice",
    label: "Last Purchase Price",
    type: "display",
    placeholder: "Auto display",
  },
  { id: "salesPrice", label: "Sales Price", type: "number" },
  { id: "medicineCombination", label: "Medicine Combination", type: "text", maxLength: 255, pattern: "[a-zA-Z\\s]*" },
  { id: "currentStock", label: "Current Stock", type: "number" },
  { id: "minimumStockQty", label: "Minimum Stock Qty", type: "number" },
  { id: "maximumStockQty", label: "Maximum Stock Qty", type: "number" },
  {
    id: "manufacturer",
    label: "Manufacturer",
    type: "select",
    options: ["Cipla", "Sun Pharma", "Abbott", "Pfizer"],
  },
  {
    id: "lastPurchaseVendor",
    label: "Last Purchase Vendor",
    type: "display",
    placeholder: "Auto display",
  },
  { id: "activeFrom", label: "Active From", type: "datetime-local" },
  { id: "inactiveFrom", label: "Inactive From", type: "datetime-local" },
  {
    id: "inactiveReason",
    label: "Inactive Reason",
    type: "textarea",
    fullWidth: true,
  },
];

export default function ItemMasterPage() {
  return (
    <MastersFormPage
      title="Masters - Lab Hospital Facility Masters - Item Master"
      cardTitle="Item Master (Medicine)"
      description=""
      fields={itemMasterFields}
    />
  );
}
