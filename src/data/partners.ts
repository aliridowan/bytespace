export type PartnerLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Partner logos under the Hero. Sizes are the SVGs' own sizes from Figma.
// "Logoipsum" is the placeholder brand used in the design.
export const partners: PartnerLogo[] = [
  { src: "/icons/partners/partner-1.svg", alt: "Logoipsum", width: 167, height: 41 },
  { src: "/icons/partners/partner-2.svg", alt: "Logoipsum", width: 168, height: 41 },
  { src: "/icons/partners/partner-3.svg", alt: "Logoipsum", width: 170, height: 41 },
  { src: "/icons/partners/partner-4.svg", alt: "Logoipsum", width: 170, height: 41 },
  { src: "/icons/partners/partner-5.svg", alt: "Logoipsum", width: 169, height: 42 },
];
