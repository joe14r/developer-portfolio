"use client";
import dynamic from "next/dynamic";

const DynamicScrollToTop = dynamic(() => import("./helper/scroll-to-top"), { ssr: false });
const DynamicGoogleTagManagerClient = dynamic(() => import("./GoogleTagManagerClient"), { ssr: false });

export default function ClientLayoutWrapper() {
  return (
    <>
      <DynamicScrollToTop />
      <DynamicGoogleTagManagerClient gtmId={process.env.NEXT_PUBLIC_GTM} />
    </>
  );
} 