import type { Metadata } from "next";
import OvallaBrandDetail from "../components/OvallaBrandDetail";

const TITLE = "ōvalla — Korean Skincare | Solvia Medical";
const DESCRIPTION =
  "ōvalla is Solvia's Korean cosmetics house — quiet, botanical skincare formulas carried to partners in Korea, Japan, the United States and Singapore.";

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
        url: "/assets/forest-light.webp",
        alt: "ōvalla — light through a forest canopy",
      },
    ],
  },
};

export default function OvallaPage() {
  return <OvallaBrandDetail />;
}
