"use client";
import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("./helper/scroll-to-top"), { ssr: false });
const GoogleTagManagerClient = dynamic(() => import("./GoogleTagManagerClient"), { ssr: false });

export default function ClientOnlyLayout({ gtmId }) {
  return (
    <>
      <ScrollToTop />
      <GoogleTagManagerClient gtmId={gtmId} />
    </>
  );
} 