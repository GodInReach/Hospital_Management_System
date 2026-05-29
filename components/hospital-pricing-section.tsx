import Link from "next/link";
import { ComponentCard } from "./component-card";

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  badge?: string;
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "999",
    description: "For smaller hospitals and clinics that need a clean launch path.",
    features: [
      "Hospital profile and admin setup",
      "Patient intake and reception workflow",
      "Daily reporting for one active site",
    ],
  },
  {
    name: "Growth",
    price: "1999",
    description: "For multi-department teams that want broader control.",
    badge: "Most popular",
    features: [
      "Masters, queue management, and billing",
      "Pharmacy and inventory coordination",
      "Role-friendly workflows for admin teams",
    ],
  },
  {
    name: "Enterprise",
    price: "2999",
    description: "For larger facilities that need multi-site oversight.",
    features: [
      "Multi-site admin setup",
      "Advanced reporting and finance oversight",
      "Priority onboarding and rollout support",
    ],
  },
];

type PricingSectionProps = {
  showHeading?: boolean;
};

export function PricingSection({ showHeading = true }: PricingSectionProps) {
  return (
    <section className="space-y-6">
      {showHeading ? (
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-500">
              Pricing
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white/90">
              Choose a plan that fits the hospital size
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Start with a lean deployment, then move up as more teams and
              locations come online.
            </p>
          </div>
        </div>
      ) : null}

      <div className="grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <ComponentCard
            key={plan.name}
            title={plan.name}
            desc={plan.description}
            className="h-full"
          >
            <div className="space-y-5">
              {plan.badge ? (
                <span className="inline-flex w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                  {plan.badge}
                </span>
              ) : null}

              <div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-semibold text-gray-900 dark:text-white/90">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-sm text-gray-500 dark:text-gray-400">
                    / month
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Template-based setup, account creation, and launch guidance
                  are all part of the flow.
                </p>
              </div>

              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/create-account"
                className="inline-flex w-full items-center justify-center rounded-lg bg-brand-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-brand-600"
              >
                Choose plan
              </Link>
            </div>
          </ComponentCard>
        ))}
      </div>
    </section>
  );
}
