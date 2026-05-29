"use client";

import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import {
  MastersFormPage,
  type MastersFormField,
} from "../../../../../components/masters-form-page";

export default function SubLedgerMasterPage() {
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

  const subLedgerMasterFields: MastersFormField[] = [
    {
      id: "code",
      label: "Code",
      type: "text",
      pattern: "[a-zA-Z0-9]*",
      placeholder: "Enter sub ledger code",
      note: "Alphanumeric",
    },
    {
      id: "subLedgerName",
      label: "Sub Ledger Name",
      type: "text",
      pattern: "[a-zA-Z\\s]*",
      placeholder: "Enter sub ledger name",
      maxLength: 120,
      note: "",
    },
    {
      id: "ledger",
      label: "Ledger",
      type: "select",
      options: ["Ledger A", "Ledger B", "Ledger C", "Ledger D"],
      note: "LOV",
    },
    {
      id: "address",
      label: "Address",
      type: "textarea",
      placeholder: "Enter address",
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
      id: "taxRegistration1",
      label: "Tax Registration No-1",
      type: "text",
      placeholder: "Enter registration number",
      maxLength: 40,
    },
    {
      id: "taxRegistration2",
      label: "Tax Registration No-2",
      type: "text",
      placeholder: "Enter registration number",
      maxLength: 40,
    },
    {
      id: "taxRegistration3",
      label: "Tax Registration No-3",
      type: "text",
      placeholder: "Enter registration number",
      maxLength: 40,
    },
    {
      id: "taxRegistration4",
      label: "Tax Registration No-4",
      type: "text",
      placeholder: "Enter registration number",
      maxLength: 40,
    },
    {
      id: "bank",
      label: "Bank",
      type: "select",
      options: ["State Bank", "ICICI Bank", "HDFC Bank", "Axis Bank"],
      note: "LOV",
    },
    {
      id: "bankBranch",
      label: "Bank Branch",
      type: "text",
      placeholder: "Enter bank branch",
      maxLength: 80,
      note: "Free Text",
    },
    {
      id: "bankAccountNumber",
      label: "Bank Account Number",
      type: "text",
      placeholder: "Enter bank account number",
      maxLength: 30,
      note: "Free Text",
    },
    {
      id: "bankBranchCode",
      label: "Bank Brach Code",
      type: "text",
      placeholder: "Enter bank branch code",
      maxLength: 20,
      note: "Free Text",
    },
    {
      id: "payMode",
      label: "Pay Mode",
      type: "select",
      options: ["Cash", "Cheque", "RTGS", "NEFT", "Online Transfer"],
      note: "Cash / Cheque / RTGS / NEFT / Online Transfer",
    },
    {
      id: "paymentTermsDays",
      label: "Payment Terms Days",
      type: "select",
      options: ["Immediate", "7 Days", "15 Days", "30 Days", "45 Days"],
      note: "From LOV",
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
    {
      id: "contactPerson",
      label: "Contact Person",
      type: "text",
      placeholder: "Enter contact person",
      maxLength: 80,
      note: "Free Text",
    },
  ];

  return (
    <MastersFormPage
      title="Masters - Pharmacy Inventory Masters - Sub Ledger Master"
      cardTitle="Sub Ledger Master"
      description=""
      fields={subLedgerMasterFields}
    />
  );
}
