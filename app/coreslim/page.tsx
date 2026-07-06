import type { Metadata } from "next";
import CoreSlimProductDetail from "../components/CoreSlimProductDetail";

const TITLE = "CoreSlim — Body Contouring Device | Solvia Medical";
const DESCRIPTION =
  "CoreSlim is a mid-low frequency body-contouring device for professional aesthetic studios — customizable, non-invasive, no downtime. Distributed worldwide by Solvia.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/coreslim",
    siteName: "Solvia Medical",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/coreslim/hero.png",
        alt: "CoreSlim main unit",
      },
    ],
  },
};

export default function CoreSlimPage() {
  return <CoreSlimProductDetail accent="#c8964f" showXLPad />;
}
