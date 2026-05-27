import { BlankPage } from "./blank-page";

export type MastersFormField = {
  id: string;
  label: string;
  type:
    | "text"
    | "number"
    | "select"
    | "multiselect"
    | "display"
    | "datetime-local"
    | "date"
    | "time"
    | "textarea";
  placeholder?: string;
  hint?: string;
  maxLength?: number;
  min?: number;
  max?: number;
  step?: string;
  options?: string[];
  fullWidth?: boolean;
  note?: string;
};

type MastersFormPageProps = {
  title: string;
  cardTitle: string;
  description: string;
  fields: MastersFormField[];
};

export function MastersFormPage({
  title,
  cardTitle,
  description,
  fields,
}: MastersFormPageProps) {
  return (
    <BlankPage title={title}>
      <section className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="border-b border-gray-100 px-6 py-5 dark:border-gray-800">
          <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
            {cardTitle}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>

        <div className="p-4 sm:p-6">
          <form className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {fields.map((field) => (
              <div
                key={field.id}
                className={field.fullWidth ? "lg:col-span-2" : undefined}
              >
                <label
                  htmlFor={field.id}
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  {field.label}
                </label>

                {field.type === "select" ? (
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
                ) : field.type === "multiselect" ? (
                  <select
                    id={field.id}
                    name={field.id}
                    multiple
                    className="min-h-28 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
                  >
                    {(field.options ?? []).map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    rows={4}
                    placeholder={field.placeholder}
                    maxLength={field.maxLength}
                    className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  />
                ) : (
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type === "display" ? "text" : field.type}
                    placeholder={field.placeholder}
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    maxLength={field.maxLength}
                    readOnly={field.type === "display"}
                    className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  />
                )}

                {field.note ? (
                  <p className="mt-1.5 text-xs text-slate-500 dark:text-gray-400">
                    {field.note}
                  </p>
                ) : null}
              </div>
            ))}
          </form>
        </div>
      </section>
    </BlankPage>
  );
}
