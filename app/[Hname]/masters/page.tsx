import Link from "next/link";
import { mastersData } from "../../../lib/navigation";
import {
  FolderIcon,
  GroupIcon,
  UserCircleIcon,
  BoxCubeIcon,
  BoxIcon,
  DollarLineIcon,
  DocsIcon,
} from "../../../components/icons";

export default function MastersPage() {
  const mastersItems = mastersData;

  const getIcon = (title: string) => {
    switch (title) {
      case "Clinical Masters":
        return <GroupIcon />;
      case "Consultant Doctor Management":
        return <UserCircleIcon />;
      case "Lab Hospital Facility Masters":
        return <BoxCubeIcon />;
      case "Pharmacy Inventory Masters":
        return <BoxIcon />;
      case "Accounts Finance Masters":
        return <DollarLineIcon />;
      case "Administrative General Masters":
        return <DocsIcon />;
      default:
        return <FolderIcon />;
    }
  };

  return (
    <div className="min-h-full bg-[#f3f4f6] px-4 py-5 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {mastersItems.map((item, index) => {
          // Determine the correct route for the subgroup boxes page.
          // By default, the href in navigation might point to the first item (e.g. /masters/clinical-masters/symptoms)
          // We want the box to point to the subgroup page itself, so extract base path like /masters/clinical-masters
          const linkHref = item.href ? item.href.split("/").slice(0, 3).join("/") : "#";

          return (
            <Link
              key={index}
              href={linkHref}
              className="group flex min-h-[180px] flex-col items-center justify-center rounded-sm border border-slate-200 bg-white px-6 py-10 text-center shadow-[0_1px_3px_rgba(15,23,42,0.08)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-500 transition-colors duration-200 group-hover:bg-blue-100 group-hover:text-blue-600">
                {getIcon(item.title)}
              </div>
              <span className="max-w-[14rem] text-lg font-semibold text-blue-500 transition-colors duration-200 group-hover:text-blue-600">
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
