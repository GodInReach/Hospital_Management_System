"use client";

import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

export default function ConsultantDoctorPage() {
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [selectedStateCode, setSelectedStateCode] = useState("");

  const countries = Country.getAllCountries();
  const states = selectedCountryCode ? State.getStatesOfCountry(selectedCountryCode) : [];
  const cities = selectedStateCode ? City.getCitiesOfState(selectedCountryCode, selectedStateCode) : [];

  const countryNameToCode: { [key: string]: string } = {};
  countries.forEach((c) => {
    countryNameToCode[c.name] = c.isoCode;
  });

  const stateNameToCode: { [key: string]: string } = {};
  states.forEach((s) => {
    stateNameToCode[s.name] = s.isoCode;
  });

  const handleCountryChange = (countryName: string) => {
    const countryCode = countryNameToCode[countryName];
    setSelectedCountryCode(countryCode);
    setSelectedStateCode("");
  };

  const handleStateChange = (stateName: string) => {
    const stateCode = stateNameToCode[stateName];
    setSelectedStateCode(stateCode);
  };

  const consultantDoctorFields: MastersFormField[] = [
    { id: "code", label: "Code", type: "text", hint: "Alphanumeric only", maxLength: 50, pattern: "[a-zA-Z0-9]*" },
    {
      id: "type",
      label: "Type",
      type: "select",
      hint: "Consultant / Doctor",
      options: ["Consultant", "Doctor"],
    },
    {
      id: "doctorConsultantName",
      label: "Doctor / Consultant Name",
      type: "text",
      hint: "Alphabets only",
      maxLength: 255,
      pattern: "[a-zA-Z\\s]*",
    },
    { id: "address", label: "Address", type: "textarea", hint: "Free Text", fullWidth: true },
    {
      id: "country",
      label: "Country",
      type: "select",
      hint: "LOV",
      options: countries.map((c) => c.name),
      onChange: handleCountryChange,
    },
    {
      id: "state",
      label: "State",
      type: "select",
      hint: "LOV",
      options: states.map((s) => s.name),
      onChange: handleStateChange,
    },
    {
      id: "city",
      label: "City",
      type: "select",
      hint: "LOV",
      options: cities.map((c) => c.name),
    },
    { id: "zipCode", label: "ZIP Code", type: "text", hint: "6 digits only", maxLength: 6, pattern: "[0-9]{6}", inputMode: "numeric" },
    { id: "email", label: "eMail", type: "text", hint: "Free Text", maxLength: 255 },
    { id: "phoneOffice", label: "Phone - Office", type: "text", hint: "10 digits only", maxLength: 10, pattern: "[0-9]{10}", inputMode: "tel" },
    { id: "phoneResi", label: "Phone - Resi", type: "text", hint: "10 digits only", maxLength: 10, pattern: "[0-9]{10}", inputMode: "tel" },
    { id: "mobile", label: "Mobile", type: "text", hint: "10 digits only", maxLength: 10, pattern: "[0-9]{10}", inputMode: "tel" },
    { id: "roomNo", label: "Room No.", type: "text", hint: "Alphanumeric only", maxLength: 30, pattern: "[a-zA-Z0-9]*" },
    {
      id: "specialization",
      label: "Specialization",
      type: "text",
      hint: "Alphabets only",
      maxLength: 255,
      pattern: "[a-zA-Z\\s]*",
    },
    {
      id: "registrationNumber",
      label: "Registration Number",
      type: "text",
      hint: "Alphanumeric",
      maxLength: 50,
      pattern: "[a-zA-Z0-9]*",
    },
    {
      id: "clinic",
      label: "Clinic",
      type: "select",
      hint: "LOV",
      options: ["OPD", "Cardiology", "Orthopedics", "Neurology"],
    },
    {
      id: "appointmentScheduleLimit",
      label: "Appointment Schedule Limit",
      type: "number",
      hint: "Positive number only",
      min: 0,
    },
    { id: "activeFrom", label: "Active From", type: "datetime-local", hint: "Date Time" },
    { id: "inactiveFrom", label: "Inactive From", type: "datetime-local", hint: "Date Time" },
    {
      id: "inactiveReason",
      label: "Inactive Reason",
      type: "textarea",
      hint: "Free Text",
      fullWidth: true,
    },
    { id: "bankBranch", label: "Bank Branch", type: "text", hint: "Alphabets only", maxLength: 255, pattern: "[a-zA-Z\\s]*" },
    {
      id: "bankAccountNumber",
      label: "Bank Account Number",
      type: "text",
      hint: "Digits only",
      maxLength: 18,
      pattern: "[0-9]*",
    },
    {
      id: "bankBranchCode",
      label: "Bank Brach Code",
      type: "text",
      hint: "Alphanumeric",
      maxLength: 11,
      pattern: "[a-zA-Z0-9]*",
    },
    {
      id: "payMode",
      label: "Pay Mode",
      type: "select",
      hint: "From LOV",
      options: ["Cash", "Card", "Bank Transfer", "Cheque"],
    },
    {
      id: "paymentTermsDays",
      label: "Payment Terms Days",
      type: "select",
      hint: "From LOV",
      options: ["0", "7", "15", "30"],
    },
  ];

  return (
    <MastersFormPage
      title="Masters - Clinical Masters - Consultant Doctor"
      cardTitle="Consultant / Doctor Master"
      description="Define consultant and doctor master details using the shared template form style."
      fields={consultantDoctorFields}
    />
  );
}
