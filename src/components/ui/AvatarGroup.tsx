import Image from "next/image";

export type Avatar = { src: string; alt: string };

type AvatarGroupProps = {
  avatars: Avatar[];
  // Optional count badge at the end, e.g. "2K+"
  more?: string;
  className?: string;
};

// Overlapping round avatars (Hero "Happy Students", course cards, Create section).
// The white ring separates each face from the one it overlaps.
export function AvatarGroup({ avatars, more, className = "" }: AvatarGroupProps) {
  return (
    <ul className={`flex items-center -space-x-2 ${className}`}>
      {avatars.map((avatar) => (
        <li key={avatar.src}>
          <Image
            src={avatar.src}
            alt={avatar.alt}
            width={32}
            height={32}
            className="size-8 rounded-full object-cover ring-2 ring-white"
          />
        </li>
      ))}
      {more && (
        <li className="flex size-8 items-center justify-center rounded-full bg-secondary-500 text-label-xs font-bold text-neutral-950 ring-2 ring-white">
          {more}
        </li>
      )}
    </ul>
  );
}
