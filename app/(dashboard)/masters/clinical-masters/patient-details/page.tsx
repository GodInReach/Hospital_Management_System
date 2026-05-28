"use client";

import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

export default function PatientDetailsPage() {
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [selectedStateCode, setSelectedStateCode] = useState("");

  const countries = Country.getAllCountries();
  const states = selectedCountryCode ? State.getStatesOfCountry(selectedCountryCode) : [];
  const cities = selectedStateCode ? City.getCitiesOfState(selectedCountryCode, selectedStateCode) : [];

  // Map country name to ISO code
  const countryNameToCode: { [key: string]: string } = {};
  countries.forEach((c) => {
    countryNameToCode[c.name] = c.isoCode;
  });

  // Map state name to ISO code
  const stateNameToCode: { [key: string]: string } = {};
  states.forEach((s) => {
    stateNameToCode[s.name] = s.isoCode;
  });

  const handleCountryChange = (countryName: string) => {
    const countryCode = countryNameToCode[countryName];
    setSelectedCountryCode(countryCode);
    setSelectedStateCode(""); // Reset state
  };

  const handleStateChange = (stateName: string) => {
    const stateCode = stateNameToCode[stateName];
    setSelectedStateCode(stateCode);
  };

  const patientDetailsFields: MastersFormField[] = [
    { id: "patientId", label: "Patient ID", type: "text", maxLength: 50, pattern: "[a-zA-Z0-9]*" },
    { id: "patientName", label: "Patient Name", type: "text", maxLength: 500, pattern: "[a-zA-Z\\s]*" },
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
    { id: "hnNumber", label: "HN Number", type: "text", maxLength: 50 },
    {
      id: "numberOfVisits",
      label: "Number of Visits till now",
      type: "number",
      min: 0,
    },
    {
      id: "lastVisitDateTime",
      label: "Last Visit Date & Time",
      type: "datetime-local",
    },
    {
      id: "lastVisitDoctorName",
      label: "Last visit doctor name",
      type: "text",
      maxLength: 255,
    },
    { id: "profession", label: "Profession", type: "text", maxLength: 255 },
    {
      id: "patientType",
      label: "Patient Type",
      type: "select",
      options: ["General", "Corporate", "Insurance", "VIP"],
    },
    {
      id: "preferredPaymentType",
      label: "Preferred Payment Type",
      type: "select",
      options: ["Cash", "Card"],
    },
    {
      id: "mediclaimPolicyAvailable",
      label: "Mediclaim Policy Available",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      id: "policyDetails",
      label: "Policy Details",
      type: "textarea",
      fullWidth: true,
    },
    {
      id: "linkedPatientId",
      label: "Linked Patient Id",
      type: "select",
      options: ["P1001", "P1002", "P1003", "P1004"],
    },
    {
      id: "relationshipShipLinkedPatient",
      label: "Relation Ship - Linked Patient",
      type: "select",
      options: ["Spouse", "Child", "Parent", "Sibling"],
      note: "",
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

  return (
    <MastersFormPage
      title="Masters - Clinical Masters - Patient Details"
      cardTitle="Patient Details"
      description=""
      fields={patientDetailsFields}
    />
  );
}
