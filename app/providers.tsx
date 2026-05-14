"use client";

import { GSAPProvider } from "@/components/providers/GSAPProvider";
import { LenisProvider } from "@/components/providers/LenisProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GSAPProvider>
      <LenisProvider>{children}</LenisProvider>
    </GSAPProvider>
  );
}
