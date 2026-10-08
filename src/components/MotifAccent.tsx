import Image from "next/image";

const motifs = {
  star: "/brand/motifs/star.png",
  path: "/brand/motifs/path.png",
  network: "/brand/motifs/network.png",
  loop: "/brand/motifs/loop.png",
  sparkles: "/brand/motifs/sparkles.png",
  arc: "/brand/motifs/arc.png",
  orbit: "/brand/motifs/orbit.png",
  cards: "/brand/motifs/cards.png",
} as const;

export type MotifName = keyof typeof motifs;

type MotifAccentProps = {
  name: MotifName;
  size?: number;
  className?: string;
  alt?: string;
};

/** Sliced motif-set accent for section cues. */
export function MotifAccent({
  name,
  size = 56,
  className,
  alt = "",
}: MotifAccentProps) {
  return (
    <Image
      src={motifs[name]}
      alt={alt}
      width={size}
      height={size}
      className={className}
    />
  );
}
