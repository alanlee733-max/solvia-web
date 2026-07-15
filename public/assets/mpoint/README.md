# MPOINT product images

Transparent PNG product renders for the `/mpoint` detail page and the
"Brands We Carry" card. Sourced from the K1MEDGLOBAL MPOINT material package.

| File                                          | Used on |
| --------------------------------------------- | ------- |
| `MPOINT_Device_Hero_Transparent.png`          | Hero + Brands We Carry card |
| `MPOINT_Device_Angled_Transparent.png`        | Overview |
| `MPOINT_Device_Front_Transparent.png`         | (spare — not currently referenced) |
| `MPOINT_Main_Console_Transparent.png`         | 5-channel system + Components (main unit) |
| `MPOINT_Probe_Adaptor_Pair_Transparent.png`   | Components (probe adaptors) |
| `MPOINT_Single_Use_Electrode_Front.png`       | Hygiene + Components |
| `MPOINT_Single_Use_Electrode_Back.png`        | Hygiene |

The code references these `.png` files directly (see `MPointProductDetail.tsx`
and the MPOINT card in `solviaLandingMarkup.ts`). To swap in smaller WebP
versions later, convert these files and update the `.png` references to `.webp`.

The RF-process, dual-energy, 5-channel and micro-vibration diagrams are drawn
in CSS/SVG on the page, so no raster illustrations are needed for those. The
"Mobile cart" component card uses a CSS stand-in (the cart appears in the full
device renders).
