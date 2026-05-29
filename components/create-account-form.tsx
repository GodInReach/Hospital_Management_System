"use client";

import Link from "next/link";
import { useState } from "react";
import ComponentCard from "../Template/components/common/ComponentCard";
import PageBreadCrumb from "../Template/components/common/PageBreadCrumb";
import Label from "../Template/components/form/Label";
import InputField from "../Template/components/form/input/InputField";
import Button from "../Template/components/ui/button/Button";

type AccountField = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
  fullWidth?: boolean;
};

const accountFields: AccountField[] = [
  {
    id: "hospitalName",
    label: "Hospital name",
    type: "text",
    placeholder: "Enter hospital name",
    autoComplete: "organization",
    fullWidth: true,
  },
  {
    id: "adminMail",
    label: "Admin mail",
    type: "email",
    placeholder: "admin@hospital.com",
    autoComplete: "email",
  },
  {
    id: "password",
    label: "Pass",
    type: "password",
    placeholder: "Create a password",
    autoComplete: "new-password",
  },
  {
    id: "creatorName",
    label: "Creator name",
    type: "text",
    placeholder: "Enter creator name",
    autoComplete: "name",
  },
  {
    id: "siteName",
    label: "Site name",
    type: "text",
    placeholder: "Enter site name",
  },
  {
    id: "phoneNumber",
    label: "Phone number",
    type: "tel",
    placeholder: "+1 555 000 0000",
    autoComplete: "tel",
    fullWidth: true,
  },
];

export function CreateAccountForm() {
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const hospitalName = String(formData.get("hospitalName") ?? "").trim();
    const adminMail = String(formData.get("adminMail") ?? "").trim();
    const creatorName = String(formData.get("creatorName") ?? "").trim();

    setSubmitMessage(
      `${hospitalName} account is ready for ${adminMail || "the admin mail"} and will be managed by ${creatorName || "the creator"}.`,
    );

    event.currentTarget.reset();
  }

  return (
    <div className="space-y-6">
      <PageBreadCrumb pageTitle="Create Account" />

      <div className="grid gap-6">
        <ComponentCard
          title="Create account"
          desc="Register the hospital admin profile, ownership details, and login email."
        >
          <div className="space-y-5">
            {submitMessage ? (
              <div className="rounded-xl border border-success-200 bg-success-25 px-4 py-3 text-sm text-success-700 dark:border-success-800/40 dark:bg-success-500/10 dark:text-success-300">
                {submitMessage}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                {accountFields.map((field) => (
                  <div
                    key={field.id}
                    className={field.fullWidth ? "sm:col-span-2" : undefined}
                  >
                    <Label htmlFor={field.id}>
                      {field.label}
                      <span className="text-error-500">*</span>
                    </Label>
                    <InputField
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      required
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button type="submit">Create account</Button>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 transition hover:border-brand-300 hover:text-brand-600 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-300"
                >
                  Back to home
                </Link>
              </div>
            </form>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
