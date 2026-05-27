import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const patientTypeFields: MastersFormField[] = [
  {
    id: "typeCode",
    label: "Type Code",
    type: "number",
    placeholder: "Enter running number",
    hint: "Running Number",
  },
  {
    id: "description",
    label: "Description",
    type: "text",
    placeholder: "Enter description",
    hint: "Free Text, up to 100 characters",
    maxLength: 100,
  },
  {
    id: "serviceCharge",
    label: "Service Charge %",
    type: "number",
    placeholder: "0",
    hint: "Number from 0 to 100",
    min: 0,
    max: 100,
    step: "0.01",
  },
  {
    id: "doctorFee",
    label: "Doctor Fee %",
    type: "number",
    placeholder: "0",
    hint: "Number from 0 to 100",
    min: 0,
    max: 100,
    step: "0.01",
  },
  {
    id: "labCharges",
    label: "Lab Charges %",
    type: "number",
    placeholder: "0",
    hint: "Number from 0 to 100",
    min: 0,
    max: 100,
    step: "0.01",
  },
  {
    id: "xrayCharges",
    label: "X-Ray Charges",
    type: "number",
    placeholder: "0",
    hint: "Number from 0 to 100",
    min: 0,
    max: 100,
    step: "0.01",
  },
  {
    id: "medicinePriceList",
    label: "Medicine Price List",
    type: "select",
    hint: "LOV",
    options: ["General", "Corporate", "Staff", "Insurance"],
  },
  {
    id: "approvedBy",
    label: "Approved By",
    type: "select",
    hint: "LOV",
    options: ["Medical Director", "Admin Manager", "Finance Manager"],
  },
  {
    id: "activeFrom",
    label: "Active From",
    type: "datetime-local",
    hint: "Date Time",
  },
  {
    id: "inactiveFrom",
    label: "Inactivate From",
    type: "datetime-local",
    hint: "Initially it is blank",
  },
  {
    id: "inactiveReason",
    label: "Inactivate Reason",
    type: "textarea",
    placeholder: "Enter reason if the type is inactive",
    hint: "Optional free text",
    fullWidth: true,
  },
];

export default function PatientTypePage() {
  return (
    <MastersFormPage
      title="Masters - Consultant Doctor Management - Patient Type"
      cardTitle="Patient Type"
      description="Configure patient type details using the template-based form style."
      fields={patientTypeFields}
    />
  );
}
