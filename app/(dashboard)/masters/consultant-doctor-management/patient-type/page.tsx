import { BlankPage } from "../../../../../components/blank-page";

type PatientTypeField = {
  id: string;
  label: string;
  type: "text" | "number" | "select" | "datetime-local" | "textarea";
  placeholder?: string;
  hint: string;
  min?: number;
  max?: number;
  step?: string;
  maxLength?: number;
  options?: string[];
};

const patientTypeFields: PatientTypeField[] = [
  {
    id: "typeCode",
    label: "Type Code",
    type: "number",
    placeholder: "Enter running number",
    hint: "Running Number",
  },
  {
    id: "description",
    label: "Description",
    type: "text",
    placeholder: "Enter description",
    hint: "Free Text, up to 100 characters",
    maxLength: 100,
  },
  {
    id: "serviceCharge",
    label: "Service Charge %",
    type: "number",
    placeholder: "0",
    hint: "Number from 0 to 100",
    min: 0,
    max: 100,
    step: "0.01",
  },
  {
    id: "doctorFee",
    label: "Doctor Fee %",
    type: "number",
    placeholder: "0",
    hint: "Number from 0 to 100",
    min: 0,
    max: 100,
    step: "0.01",
  },
  {
    id: "labCharges",
    label: "Lab Charges %",
    type: "number",
    placeholder: "0",
    hint: "Number from 0 to 100",
    min: 0,
    max: 100,
    step: "0.01",
  },
  {
    id: "xrayCharges",
    label: "X-Ray Charges",
    type: "number",
    placeholder: "0",
    hint: "Number from 0 to 100",
    min: 0,
    max: 100,
    step: "0.01",
  },
  {
    id: "medicinePriceList",
    label: "Medicine Price List",
    type: "select",
    hint: "LOV",
    options: ["General", "Corporate", "Staff", "Insurance"],
  },
  {
    id: "approvedBy",
    label: "Approved By",
    type: "select",
    hint: "LOV",
    options: ["Medical Director", "Admin Manager", "Finance Manager"],
  },
  {
    id: "activeFrom",
    label: "Active From",
    type: "datetime-local",
    hint: "Date Time",
  },
  {
    id: "inactiveFrom",
    label: "Inactivate From",
    type: "datetime-local",
    hint: "Initially it is blank",
  },
  {
    id: "inactiveReason",
    label: "Inactivate Reason",
    type: "textarea",
    placeholder: "Enter reason if the type is inactive",
    hint: "Optional free text",
  },
];

export default function PatientTypePage() {
  return (
    <BlankPage title="Masters - Consultant Doctor Management - Patient Type">
      <section className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="border-b border-gray-100 px-6 py-5 dark:border-gray-800">
          <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
            Patient Type
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Configure patient type details using the template-based form style.
          </p>
        </div>

        <div className="p-4 sm:p-6">
          <form className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {patientTypeFields.map((field) => (
              <div
                key={field.id}
                className={field.type === "textarea" ? "lg:col-span-2" : undefined}
              >
                <label
                  htmlFor={field.id}
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  {field.label}
                </label>

                {field.type === "select" ? (
                  <div className="relative">
                    <select
                      id={field.id}
                      name={field.id}
                      defaultValue=""
                      className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-10 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
                    >
                      <option value="" disabled>
                        Select {field.label}
                      </option>
                      {(field.options ?? []).map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    rows={4}
                    placeholder={field.placeholder}
                    className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  />
                ) : (
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    maxLength={field.maxLength}
                    className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  />
                )}

                <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">
                  {field.hint}
                </p>
              </div>
            ))}
          </form>
        </div>
      </section>
    </BlankPage>
  );
}
