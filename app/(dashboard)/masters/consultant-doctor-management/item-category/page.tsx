import { BlankPage } from "../../../../../components/blank-page";

type ItemCategoryField = {
  id: string;
  label: string;
  type: "text" | "number";
  placeholder?: string;
  hint: string;
  maxLength?: number;
};

const itemCategoryFields: ItemCategoryField[] = [
  {
    id: "groupCode",
    label: "Group Code",
    type: "number",
    placeholder: "Enter running number",
    hint: "Running Number",
  },
  {
    id: "groupName",
    label: "Group Name",
    type: "text",
    placeholder: "Enter group name",
    hint: "Free Text, up to 500 characters",
    maxLength: 500,
  },
];

export default function ItemCategoryPage() {
  return (
    <BlankPage title="Masters - Consultant Doctor Management - Item Category">
      <section className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="border-b border-gray-100 px-6 py-5 dark:border-gray-800">
          <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
            Item Category Master
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Define item category master details using the shared template form style.
          </p>
        </div>

        <div className="p-4 sm:p-6">
          <form className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {itemCategoryFields.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  maxLength={field.maxLength}
                  className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                />
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
