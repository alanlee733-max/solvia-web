import type { Metadata } from "next";
import MPointProductDetail from "../components/MPointProductDetail";

const TITLE = "MPOINT — Dual-Energy Facial Treatment Device | Solvia Medical";
const DESCRIPTION =
  "MPOINT is a dual-energy, hands-free facial treatment device combining radiofrequency, low-frequency electrical stimulation, micro-vibration and a 5-channel electrode system in a 20-minute session. An export aesthetic device distributed worldwide by Solvia.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/mpoint",
    siteName: "Solvia Medical",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/mpoint/MPOINT_Device_Hero_Transparent.png",
        alt: "MPOINT facial treatment device",
      },
    ],
  },
};

export default function MPointPage() {
  return <MPointProductDetail />;
}
