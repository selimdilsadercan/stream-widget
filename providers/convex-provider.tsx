"use client";

import { ConvexProvider as ConvexProviderRoot, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

function ConvexProvider({ children }: { children: React.ReactNode }) {
  return <ConvexProviderRoot client={convex}>{children}</ConvexProviderRoot>;
}

export default ConvexProvider;
