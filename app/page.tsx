import type { Metadata } from "next";
import Link from "next/link";
import ComponentCard from "../Template/components/common/ComponentCard";
import { PricingSection } from "../components/hospital-pricing-section";

const hospitalHighlights = [
  {
    title: "Admissions",
    description:
      "Keep patient intake, queue flow, and ward handoff in one controlled path.",
  },
  {
    title: "Billing",
    description:
      "Coordinate cash, insurance, and service billing without juggling separate tools.",
  },
  {
    title: "Pharmacy",
    description:
      "Link dispensing, inventory, and stock updates to the same hospital system.",
  },
  {
    title: "Masters",
    description:
      "Manage sites, users, departments, and supporting records centrally.",
  },
];

export const metadata: Metadata = {
  title: "Hospital Management System",
  description: "Hospital management system landing page with pricing and account creation.",
};

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-start">
        <Link
          href="/masters"
          className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-theme-xs transition hover:border-brand-300 hover:text-brand-600 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-300"
        >
          Go to Masters
        </Link>
      </div>

      <section className="grid gap-6">
        <ComponentCard
          title="Hospital management systems"
          desc="Centralize patient flow, admin data, and operational control in one place."
          className="h-full"
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
            <div className="space-y-6">
              <div className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                Hospital platform
              </div>

              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-gray-900 dark:text-white/90 sm:text-5xl">
                  Run hospital operations from one connected system.
                </h1>
                <p className="max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400 sm:text-base">
                  Hospital management systems bring admissions, appointments,
                  pharmacy, billing, and master data into a single flow so teams
                  spend less time switching tools.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/create-account"
                  className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3.5 text-sm font-medium text-white transition hover:bg-brand-600"
                >
                  Create account
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-white/[0.02]">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white/90">
                What it handles
              </h2>
              <ul className="mt-4 space-y-4">
                {hospitalHighlights.map((highlight) => (
                  <li key={highlight.title} className="space-y-1">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white/90">
                      {highlight.title}
                    </h3>
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ComponentCard>
      </section>

      <PricingSection />
    </div>
  );
}
