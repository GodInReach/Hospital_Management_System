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
    { id: "code", label: "Code", type: "text", maxLength: 50, pattern: "[a-zA-Z0-9]*" },
    {
      id: "type",
      label: "Type",
      type: "select",
      options: ["Consultant", "Doctor"],
    },
    {
      id: "doctorConsultantName",
      label: "Doctor / Consultant Name",
      type: "text",
      maxLength: 255,
      pattern: "[a-zA-Z\\s]*",
    },
    { id: "address", label: "Address", type: "textarea", fullWidth: true },
    {
      id: "country",
      label: "Country",
      type: "select",
      options: countries.map((c) => c.name),
      onChange: handleCountryChange,
    },
    {
      id: "state",
      label: "State",
      type: "select",
      options: states.map((s) => s.name),
      onChange: handleStateChange,
    },
    {
      id: "city",
      label: "City",
      type: "select",
      options: cities.map((c) => c.name),
    },
    { id: "zipCode", label: "ZIP Code", type: "text", maxLength: 6, pattern: "[0-9]{6}", inputMode: "numeric" },
    { id: "email", label: "eMail", type: "text", maxLength: 255 },
    { id: "phoneOffice", label: "Phone - Office", type: "text", maxLength: 10, pattern: "[0-9]{10}", inputMode: "tel" },
    { id: "phoneResi", label: "Phone - Resi", type: "text", maxLength: 10, pattern: "[0-9]{10}", inputMode: "tel" },
    { id: "mobile", label: "Mobile", type: "text", maxLength: 10, pattern: "[0-9]{10}", inputMode: "tel" },
    { id: "roomNo", label: "Room No.", type: "text", maxLength: 30, pattern: "[a-zA-Z0-9]*" },
    {
      id: "specialization",
      label: "Specialization",
      type: "text",
      maxLength: 255,
      pattern: "[a-zA-Z\\s]*",
    },
    {
      id: "registrationNumber",
      label: "Registration Number",
      type: "text",
      maxLength: 50,
      pattern: "[a-zA-Z0-9]*",
    },
    {
      id: "clinic",
      label: "Clinic",
      type: "select",
      options: ["OPD", "Cardiology", "Orthopedics", "Neurology"],
    },
    {
      id: "appointmentScheduleLimit",
      label: "Appointment Schedule Limit",
      type: "number",
      min: 0,
    },
    { id: "activeFrom", label: "Active From", type: "datetime-local" },
    { id: "inactiveFrom", label: "Inactive From", type: "datetime-local" },
    {
      id: "inactiveReason",
      label: "Inactive Reason",
      type: "textarea",
      fullWidth: true,
    },
    { id: "bankBranch", label: "Bank Branch", type: "text", maxLength: 255, pattern: "[a-zA-Z\\s]*" },
    {
      id: "bankAccountNumber",
      label: "Bank Account Number",
      type: "text",
      maxLength: 18,
      pattern: "[0-9]*",
    },
    {
      id: "bankBranchCode",
      label: "Bank Brach Code",
      type: "text",
      maxLength: 11,
      pattern: "[a-zA-Z0-9]*",
    },
    {
      id: "payMode",
      label: "Pay Mode",
      type: "select",
      options: ["Cash", "Card", "Bank Transfer", "Cheque"],
    },
    {
      id: "paymentTermsDays",
      label: "Payment Terms Days",
      type: "select",
      options: ["0", "7", "15", "30"],
    },
  ];

  return (
    <MastersFormPage
      title="Masters - Clinical Masters - Consultant Doctor"
      cardTitle="Consultant / Doctor Master"
      description=""
      fields={consultantDoctorFields}
    />
  );
}
