import Image from "next/image";

const icons = {
  learn: "/brand/icons/learn.png",
  app: "/brand/icons/app.png",
  path: "/brand/icons/path.png",
  verify: "/brand/icons/verify.png",
  talk: "/brand/icons/talk.png",
  pause: "/brand/icons/pause.png",
} as const;

export type BrandIconName = keyof typeof icons;

type BrandIconProps = {
  name: BrandIconName;
  size?: number;
  className?: string;
  alt?: string;
};

export function BrandIcon({
  name,
  size = 48,
  className,
  alt = "",
}: BrandIconProps) {
  return (
    <Image
      src={icons[name]}
      alt={alt}
      width={size}
      height={size}
      className={className}
      unoptimized
    />
  );
}
