import { notFound, redirect } from "next/navigation";
import { mastersData } from "../../../../lib/navigation";

interface Props {
  params: Promise<{ subgroup: string; Hname: string }>;
}

export default async function SubgroupPage({ params }: Props) {
  const resolvedParams = await params;
  const { subgroup: subgroupSlug, Hname: hname } = resolvedParams;

  const subGroup = mastersData.find((item) => {
    return item.href?.includes(`/masters/${subgroupSlug}`);
  });

  if (!subGroup) {
    return notFound();
  }

  let defaultItem = subGroup.items?.[0]?.href;

  if (!defaultItem) {
    return notFound();
  }
  
  if (hname && hname !== "HSMS" && defaultItem.startsWith("/") && defaultItem !== "/") {
    defaultItem = `/${encodeURIComponent(hname)}${defaultItem}`;
  }

  redirect(defaultItem);
}
