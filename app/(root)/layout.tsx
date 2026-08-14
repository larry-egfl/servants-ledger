import type { ReactNode } from "react";
import { Analytics } from "@/components/analytics";
import { baseMetadata } from "@/lib/metadata";
import "../globals.css";

export const metadata = baseMetadata;

export default function RedirectRootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}<Analytics /></body></html>;
}
