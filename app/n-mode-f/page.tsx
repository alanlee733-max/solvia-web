import type { Metadata } from "next";
import NModeFProductDetail from "../components/NModeFProductDetail";

const TITLE = "N MODE F — V Fat Care Cream | Solvia Medical";
const DESCRIPTION =
  "N MODE F is a Korean dual-functional body cream — niacinamide 5% and adenosine 0.04% in a barrier-respecting contour-care formula. The topical partner to CoreSlim, distributed worldwide by Solvia.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/n-mode-f",
    siteName: "Solvia Medical",
    type: "website",
    locale: "en_US",
  },
};

export default function NModeFPage() {
  return <NModeFProductDetail />;
}
