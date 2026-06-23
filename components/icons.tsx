import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const defaults = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function BagIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M6.5 8.5h11l1 12h-13l1-12Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </svg>
  );
}
export function SunIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M20.2 15.2A8.2 8.2 0 0 1 8.8 3.8a8.2 8.2 0 1 0 11.4 11.4Z" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function TrashIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M12 2.5c.7 5.7 3.8 8.8 9.5 9.5-5.7.7-8.8 3.8-9.5 9.5-.7-5.7-3.8-8.8-9.5-9.5 5.7-.7 8.8-3.8 9.5-9.5Z" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M20.8 5.8a5.2 5.2 0 0 0-7.4 0L12 7.2l-1.4-1.4a5.2 5.2 0 0 0-7.4 7.4L12 22l8.8-8.8a5.2 5.2 0 0 0 0-7.4Z" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}
