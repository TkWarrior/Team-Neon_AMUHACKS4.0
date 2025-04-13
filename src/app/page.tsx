import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { Button } from "~/components/ui/button";
import { api, HydrateClient } from "~/trpc/server";
import CreatePage from "./_components/(protected)/create/page";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <CreatePage></CreatePage>
  );
}
