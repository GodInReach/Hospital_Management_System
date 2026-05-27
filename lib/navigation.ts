export type NavigationSection = {
  title: string;
  href?: string;
  items?: NavigationSection[];
};

export const navigation: NavigationSection[] = [
  {
    title: "Masters",
    href: "/masters",
    items: [
      {
        title: "Clinical Masters",
        href: "/masters/clinical-masters/symptoms",
        items: [
          { title: "Symptoms", href: "/masters/clinical-masters/symptoms" },
          { title: "Allergy", href: "/masters/clinical-masters/allergy" },
          { title: "Consultant Doctor", href: "/masters/clinical-masters/consultant-doctor" },
          {
            title: "Consultant Doctor Schedule",
            href: "/masters/clinical-masters/consultant-doctor-schedule",
          },
          { title: "Disease", href: "/masters/clinical-masters/disease" },
          { title: "Patient Details", href: "/masters/clinical-masters/patient-details" },
          { title: "Lab", href: "/masters/clinical-masters/lab" },
        ],
      },
      {
        title: "Consultant Doctor Management",
        href: "/masters/consultant-doctor-management/patient-type",
        items: [
          { title: "Patient Type", href: "/masters/consultant-doctor-management/patient-type" },
          { title: "Item Category", href: "/masters/consultant-doctor-management/item-category" },
          { title: "Item UOM", href: "/masters/consultant-doctor-management/item-uom" },
          { title: "Manufacturer", href: "/masters/consultant-doctor-management/manufacturer" },
        ],
      },
      {
        title: "Lab Hospital Facility Masters",
        href: "/masters/lab-hospital-facility-masters/item-master",
        items: [
          { title: "Item Master", href: "/masters/lab-hospital-facility-masters/item-master" },
          { title: "Medicine Usage", href: "/masters/lab-hospital-facility-masters/medicine-usage" },
          { title: "Ward", href: "/masters/lab-hospital-facility-masters/ward" },
          { title: "Bed", href: "/masters/lab-hospital-facility-masters/bed" },
          { title: "Operation Theater", href: "/masters/lab-hospital-facility-masters/operation-theater" },
          { title: "Room Type", href: "/masters/lab-hospital-facility-masters/room-type" },
          { title: "Room Master", href: "/masters/lab-hospital-facility-masters/room-master" },
          { title: "Ledger Type", href: "/masters/lab-hospital-facility-masters/ledger-type" },
          { title: "Account Type", href: "/masters/lab-hospital-facility-masters/account-type" },
        ],
      },
      {
        title: "Pharmacy Inventory Masters",
        href: "/masters/pharmacy-inventory-masters/ledger-master",
        items: [
          { title: "Ledger Master", href: "/masters/pharmacy-inventory-masters/ledger-master" },
          { title: "Sub Ledger Master", href: "/masters/pharmacy-inventory-masters/sub-ledger-master" },
          { title: "Credit Card Type Master", href: "/masters/pharmacy-inventory-masters/credit-card-type-master" },
          { title: "Department Master", href: "/masters/pharmacy-inventory-masters/department-master" },
          { title: "Equipment Master", href: "/masters/pharmacy-inventory-masters/equipment-master" },
          { title: "Holiday Master", href: "/masters/pharmacy-inventory-masters/holiday-master" },
          { title: "Hospital Master", href: "/masters/pharmacy-inventory-masters/hospital-master" },
          { title: "Medical Certificate", href: "/masters/pharmacy-inventory-masters/medical-certificate" },
        ],
      },
      {
        title: "Accounts Finance Masters",
        href: "/masters/accounts-finance-masters/reason",
        items: [
          { title: "Reason", href: "/masters/accounts-finance-masters/reason" },
          { title: "Service", href: "/masters/accounts-finance-masters/service" },
          { title: "Warehouse Master", href: "/masters/accounts-finance-masters/warehouse-master" },
          { title: "Bank Master", href: "/masters/accounts-finance-masters/bank-master" },
          { title: "Holiday Type", href: "/masters/accounts-finance-masters/holiday-type" },
          { title: "Currency", href: "/masters/accounts-finance-masters/currency" },
          { title: "Pay Mode", href: "/masters/accounts-finance-masters/pay-mode" },
          { title: "Payment Terms", href: "/masters/accounts-finance-masters/payment-terms" },
        ],
      },
      {
        title: "Administrative General Masters",
        href: "/masters/administrative-general-masters/holiday-master",
        items: [
          { title: "Holiday Master", href: "/masters/administrative-general-masters/holiday-master" },
          { title: "Holiday Type", href: "/masters/administrative-general-masters/holiday-type" },
          { title: "Medical Certificate", href: "/masters/administrative-general-masters/medical-certificate" },
          { title: "Reason", href: "/masters/administrative-general-masters/reason" },
        ],
      },
    ],
  },
  {
    title: "Pharmacy",
    items: [
      { title: "Purchase", href: "/pharmacy/purchase" },
      { title: "Inventory", href: "/pharmacy/inventory" },
      { title: "Dispensing", href: "/pharmacy/dispensing" },
      { title: "GRN", href: "/pharmacy/grn" },
      { title: "Supplier", href: "/pharmacy/supplier" },
    ],
  },
  {
    title: "Billing",
    items: [
      { title: "Cash Billing", href: "/billing/cash-billing" },
      { title: "Insurance Billing", href: "/billing/insurance-billing" },
      { title: "Claims", href: "/billing/claims" },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Discount Schema",
    href: "/discount-schema",
  },
  {
    title: "Queue Management",
    items: [
      { title: "Out Patient", href: "/queue-management/out-patient" },
      { title: "In Patient", href: "/queue-management/in-patient" },
      { title: "Pharmacist Screen", href: "/queue-management/pharmacist-screen" },
    ],
  },
];