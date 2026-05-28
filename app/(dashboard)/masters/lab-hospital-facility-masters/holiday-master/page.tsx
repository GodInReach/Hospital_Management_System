import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const holidayMasterFields: MastersFormField[] = [
  {
    id: "code",
    label: "Code",
    type: "number",
    placeholder: "Enter code",
    note: "Number",
  },
  {
    id: "holidayName",
    label: "Holiday Name",
    type: "text",
    placeholder: "Enter holiday name",
    maxLength: 120,
    note: "Free Text",
  },
  {
    id: "date",
    label: "Date",
    type: "datetime-local",
    note: "Date Time",
  },
  {
    id: "holidayType",
    label: "Holiday Type",
    type: "select",
    options: ["National", "Festival", "Regional", "Special"],
    note: "LOV",
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

export default function HolidayMasterPage() {
  return (
    <MastersFormPage
      title="Masters - Pharmacy Inventory Masters - Holiday Master"
      cardTitle="Holiday Master"
      description="Set up holiday names, categories, and effective dates for the organization."
      fields={holidayMasterFields}
    />
  );
}
