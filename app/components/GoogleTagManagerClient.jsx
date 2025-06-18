"use client";
import { GoogleTagManager } from "@next/third-parties/google";

export default function GoogleTagManagerClient({ gtmId }) {
  return <GoogleTagManager gtmId={gtmId} />;
} 