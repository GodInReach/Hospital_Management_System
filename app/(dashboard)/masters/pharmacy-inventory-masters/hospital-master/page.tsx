"use client";

import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

export default function HospitalMasterPage() {
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

  const hospitalMasterFields: MastersFormField[] = [
    {
      id: "code",
      label: "Code",
      type: "number",
      placeholder: "Enter hospital code",
      note: "Number",
    },
    {
      id: "hospitalName",
      label: "Hospital Name",
      type: "text",
      placeholder: "Enter hospital name",
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
      id: "address",
      label: "Address",
      type: "textarea",
      placeholder: "Enter hospital address",
      maxLength: 250,
      note: "Free Text",
      fullWidth: true,
    },
    {
      id: "country",
      label: "Country",
      type: "select",
      options: countries.map((c) => c.name),
      note: "LOV",
      onChange: handleCountryChange,
    },
    {
      id: "state",
      label: "State",
      type: "select",
      options: states.map((s) => s.name),
      note: "LOV",
      onChange: handleStateChange,
    },
    {
      id: "city",
      label: "City",
      type: "select",
      options: cities.map((c) => c.name),
      note: "LOV",
    },
    {
      id: "zipCode",
      label: "ZIP Code",
      type: "text",
      placeholder: "Enter ZIP or postal code",
      maxLength: 12,
      note: "Free Text",
    },
    {
      id: "email",
      label: "eMail",
      type: "text",
      placeholder: "Enter email address",
      maxLength: 120,
      note: "Free Text",
    },
    {
      id: "phoneOffice",
      label: "Phone - Office",
      type: "text",
      placeholder: "Enter office phone",
      maxLength: 20,
      note: "Free Text",
    },
    {
      id: "phoneResidence",
      label: "Phone - Resi",
      type: "text",
      placeholder: "Enter residence phone",
      maxLength: 20,
      note: "Free Text",
    },
    {
      id: "mobile",
      label: "Mobile",
      type: "text",
      placeholder: "Enter mobile number",
      maxLength: 20,
      note: "Free Text",
    },
    {
      id: "contactPerson",
      label: "Contact Person",
      type: "text",
      placeholder: "Enter contact person",
      maxLength: 80,
      note: "Free Text",
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

  return (
    <MastersFormPage
      title="Masters - Pharmacy Inventory Masters - Hospital Master"
      cardTitle="Hospital Master"
      description="Maintain hospital directory information, contact details, and active periods."
      fields={hospitalMasterFields}
    />
  );
}
