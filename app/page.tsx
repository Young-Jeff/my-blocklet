import { type Metadata } from "next";

import { PATHS, PATHS_MAP } from "@/constants";
import { ProfilePage } from "@/features/profile/index";

export const metadata: Metadata = {
  title: (PATHS_MAP[PATHS.PROFILE]),
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProfilePage />
    </main>
  );
}
