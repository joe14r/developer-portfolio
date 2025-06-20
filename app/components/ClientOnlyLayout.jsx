"use client";
import ScrollToTop from "./helper/scroll-to-top";
import GoogleTagManagerClient from "./GoogleTagManagerClient";

export default function ClientOnlyLayout({ gtmId }) {
  return (
    <>
      <ScrollToTop />
      <GoogleTagManagerClient gtmId={gtmId} />
    </>
  );
} 