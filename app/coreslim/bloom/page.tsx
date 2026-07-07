import type { Metadata } from "next";
import CoreSlimBloomHero from "../../components/CoreSlimBloomHero";

const TITLE = "CoreSlim — Energy, in bloom | Solvia Medical";
const DESCRIPTION =
  "CoreSlim body contouring — energy in bloom, tuned to every area. A mid-low frequency device for professional aesthetic studios, distributed worldwide by Solvia.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/coreslim/bloom",
    siteName: "Solvia Medical",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/hero-bloom.webp",
        alt: "CoreSlim — energy in bloom",
      },
    ],
  },
};

export default function CoreSlimBloomPage() {
  return <CoreSlimBloomHero />;
}
