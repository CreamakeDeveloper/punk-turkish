import { Viewports } from "../../types";

export const defaultViewports: Required<Viewports> = [
  { width: 360, height: "auto", icon: "Smartphone", label: "Mobil" },
  { width: 768, height: "auto", icon: "Tablet", label: "Tablet" },
  { width: 1280, height: "auto", icon: "Monitor", label: "Bilgisayar" },
];
