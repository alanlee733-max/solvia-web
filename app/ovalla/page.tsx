import type { Metadata } from "next";
import OvallaBrandDetail from "../components/OvallaBrandDetail";

const TITLE = "ōvalla — Sustainable Beauty | Solvia Medical";
const DESCRIPTION =
  "ōvalla is a Korean premium skincare brand built on the Fucocentella™ CICA care formula — sustainable beauty carried by Solvia to partners in Korea, Japan, the US and Singapore.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/ovalla",
    siteName: "Solvia Medical",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/ovalla/main.webp",
        alt: "ōvalla — Fucocentella line hero visual",
      },
    ],
  },
};

export default function OvallaPage() {
  return <OvallaBrandDetail />;
}
