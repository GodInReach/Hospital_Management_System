import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

const patientTypeFields: MastersFormField[] = [
  {
    id: "typeCode",
    label: "Type Code",
    type: "text",
    placeholder: "Enter type code",
    maxLength: 50,
    pattern: "[a-zA-Z0-9]*",
    size: "small",
  },
  {
    id: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Enter description",
    maxLength: 100,
    fullWidth: true,
  },
  {
    id: "serviceCharge",
    label: "Service Charge %",
    type: "number",
    placeholder: "0",
    min: 0,
    max: 100,
    step: "0.01",
    size: "small",
  },
  {
    id: "doctorFee",
    label: "Doctor Fee %",
    type: "number",
    placeholder: "0",
    min: 0,
    max: 100,
    step: "0.01",
    size: "small",
  },
  {
    id: "labCharges",
    label: "Lab Charges %",
    type: "number",
    placeholder: "0",
    min: 0,
    max: 100,
    step: "0.01",
    size: "small",
  },
  {
    id: "xrayCharges",
    label: "X-Ray Charges",
    type: "number",
    placeholder: "0",
    min: 0,
    max: 100,
    step: "0.01",
    size: "small",
  },
  {
    id: "medicinePriceList",
    label: "Medicine Price List",
    type: "select",
    options: ["General", "Corporate", "Staff", "Insurance"],
  },
  {
    id: "approvedBy",
    label: "Approved By",
    type: "select",
    options: ["Medical Director", "Admin Manager", "Finance Manager"],
  },
  {
    id: "activeFrom",
    label: "Active From",
    type: "datetime-local",
  },
  {
    id: "inactiveFrom",
    label: "Inactivate From",
    type: "datetime-local",
  },
  {
    id: "inactiveReason",
    label: "Inactivate Reason",
    type: "textarea",
    placeholder: "Enter reason if the type is inactive",
    fullWidth: true,
  },
];

export default function PatientTypePage() {
  return (
    <MastersFormPage
      title="Masters - Consultant Doctor Management - Patient Type"
      cardTitle="Patient Type"
      description=""
      fields={patientTypeFields}
    />
  );
}
