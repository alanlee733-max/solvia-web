import { notFound } from "next/navigation";

/* Catch-all for routes without a dedicated page yet (brand cards link ahead
   of their detail pages). Static routes always win over this segment, so
   /coreslim, /ovalla and /n-mode-f are unaffected. Renders app/not-found.tsx
   with a 404 status. */
export default function CatchAllPage() {
  notFound();
}
