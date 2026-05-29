import { notFound, redirect } from "next/navigation";
import { mastersData } from "../../../../lib/navigation";

interface Props {
  params: Promise<{ subgroup: string }>;
}

export default async function SubgroupPage({ params }: Props) {
  const resolvedParams = await params;
  const subgroupSlug = resolvedParams.subgroup;

  const subGroup = mastersData.find((item) => {
    return item.href?.includes(`/masters/${subgroupSlug}`);
  });

  if (!subGroup) {
    return notFound();
  }

  const defaultItem = subGroup.items?.[0]?.href;

  if (!defaultItem) {
    return notFound();
  }

  redirect(defaultItem);
}
