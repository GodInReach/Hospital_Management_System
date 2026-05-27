"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mastersData } from "../lib/navigation";

type BlankPageProps = {
  title: string;
  children?: React.ReactNode;
};

export function BlankPage({ title, children }: BlankPageProps) {
  const pathname = usePathname();
  const matchedGroup = mastersData.find((group) =>
    group.items?.some((item) => item.href === pathname),
  );

  return (
    <main className="min-h-full bg-[#f3f4f6] px-4 py-5 sm:px-6 lg:px-8">
      <h1 className="sr-only">{title}</h1>
      <div className="space-y-6">
        {matchedGroup ? (
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                {matchedGroup.title}
              </h2>
            </div>

            <div className="w-full lg:flex lg:justify-end">
              <div className="flex flex-wrap gap-2 rounded-2xl bg-slate-200/70 p-1.5 lg:max-w-3xl lg:justify-end">
                {matchedGroup.items?.map((item) => {
                  const isActive = item.href === pathname;

                  return (
                    <Link
                      key={item.href}
                      href={item.href || "#"}
                      className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 ${
                        isActive
                          ? "border border-slate-200 bg-white text-slate-900 shadow-[0_1px_2px_rgba(15,23,42,0.08)]"
                          : "border border-transparent bg-transparent text-slate-600 hover:border-slate-300 hover:bg-white hover:text-slate-900"
                      }`}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}

        {children ? <div>{children}</div> : null}
      </div>
    </main>
  );
}
