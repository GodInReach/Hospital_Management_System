import type { Metadata } from "next";
import PageBreadCrumb from "../../components/PageBreadCrumb";
import { PricingSection } from "../../components/hospital-pricing-section";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Hospital management system pricing plans.",
};

export default function PricingPage() {
  return (
    <div className="space-y-6">
      <PageBreadCrumb pageTitle="Pricing" />
      <p className="max-w-3xl text-sm leading-6 text-gray-500 dark:text-gray-400">
        Choose the plan that matches the size of your hospital or clinic.
      </p>
      <PricingSection showHeading={false} />
    </div>
  );
}
