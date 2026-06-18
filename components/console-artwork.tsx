import type { Product } from "@/lib/products";

type ArtworkProps = {
  type: Product["artwork"];
  color: string;
  secondary: string;
  className?: string;
  label?: string;
};

function Controls({ secondary }: { secondary: string }) {
  return (
    <>
      <circle cx="102" cy="176" r="23" fill="#111319" opacity=".92" />
      <rect x="92" y="158" width="20" height="36" rx="5" fill="#d8d9dc" />
      <rect x="84" y="166" width="36" height="20" rx="5" fill="#d8d9dc" />
      <circle cx="498" cy="161" r="10" fill={secondary} />
      <circle cx="526" cy="180" r="10" fill={secondary} opacity=".82" />
      <circle cx="470" cy="180" r="10" fill={secondary} opacity=".66" />
      <circle cx="498" cy="199" r="10" fill={secondary} opacity=".5" />
    </>
  );
}
export function ConsoleArtwork({
  type,
  color,
  secondary,
  className,
  label = "Custom handheld console",
}: ArtworkProps) {
  const gradientId = `screen-${type}-${color.replace("#", "")}-${secondary.replace("#", "")}`;
  const shadowId = `shadow-${type}-${color.replace("#", "")}`;

  if (type === "ds") {
    return (
      <svg className={className} viewBox="0 0 600 420" role="img" aria-label={label}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor={secondary} />
            <stop offset=".55" stopColor="#161821" />
            <stop offset="1" stopColor="#08090d" />
          </linearGradient>
          <filter id={shadowId}>
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodOpacity=".28" />
          </filter>
        </defs>
        <ellipse cx="300" cy="372" rx="190" ry="20" fill="#000" opacity=".18" />
        <g filter={`url(#${shadowId})`} transform="rotate(-2 300 210)">
          <rect x="145" y="30" width="310" height="168" rx="22" fill={color} />
          <rect x="179" y="54" width="242" height="119" rx="9" fill="#111319" />
          <rect x="191" y="65" width="218" height="96" rx="4" fill={`url(#${gradientId})`} />
          <rect x="135" y="190" width="330" height="178" rx="26" fill={color} />
          <rect x="194" y="210" width="212" height="112" rx="7" fill="#111319" />
          <rect x="205" y="220" width="190" height="91" rx="3" fill={`url(#${gradientId})`} opacity=".8" />
          <rect x="154" y="260" width="53" height="15" rx="4" fill="#d5d6d8" />
          <rect x="173" y="241" width="15" height="53" rx="4" fill="#d5d6d8" />
          <circle cx="425" cy="251" r="8" fill={secondary} />
          <circle cx="443" cy="272" r="8" fill={secondary} opacity=".7" />
        </g>
      </svg>
    );
  }

  if (type === "gba") {
    return (
      <svg className={className} viewBox="0 0 600 360" role="img" aria-label={label}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor={secondary} />
            <stop offset=".45" stopColor="#20232d" />
            <stop offset="1" stopColor="#07090e" />
          </linearGradient>
          <filter id={shadowId}>
            <feDropShadow dx="0" dy="22" stdDeviation="20" floodOpacity=".3" />
          </filter>
        </defs>
        <ellipse cx="300" cy="315" rx="212" ry="20" fill="#000" opacity=".18" />
        <g filter={`url(#${shadowId})`} transform="rotate(-3 300 180)">
          <path d="M64 92c11-34 42-54 79-58 104-12 210-12 314 0 37 4 68 24 79 58 17 54 20 116 7 171-8 35-43 55-77 44l-66-21H200l-66 21c-34 11-69-9-77-44-13-55-10-117 7-171Z" fill={color} />
          <rect x="179" y="68" width="242" height="155" rx="18" fill="#202228" />
          <rect x="200" y="85" width="200" height="120" rx="5" fill={`url(#${gradientId})`} />
          <rect x="93" y="150" width="68" height="18" rx="5" fill="#d9dadd" />
          <rect x="118" y="125" width="18" height="68" rx="5" fill="#d9dadd" />
          <circle cx="477" cy="139" r="15" fill={secondary} />
          <circle cx="445" cy="175" r="15" fill={secondary} opacity=".75" />
          <circle cx="278" cy="258" r="5" fill="#303239" />
          <circle cx="322" cy="258" r="5" fill="#303239" />
        </g>
      </svg>
    );
  }

  if (type === "switch") {
    return (
      <svg className={className} viewBox="0 0 640 340" role="img" aria-label={label}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor={secondary} />
            <stop offset=".32" stopColor="#283041" />
            <stop offset="1" stopColor="#07090e" />
          </linearGradient>
          <filter id={shadowId}>
            <feDropShadow dx="0" dy="24" stdDeviation="22" floodOpacity=".32" />
          </filter>
        </defs>
        <ellipse cx="320" cy="294" rx="240" ry="20" fill="#000" opacity=".18" />
        <g filter={`url(#${shadowId})`} transform="rotate(-2 320 170)">
          <rect x="42" y="62" width="556" height="216" rx="42" fill="#16191e" />
          <path d="M83 62h66v216H83c-23 0-41-18-41-41V103c0-23 18-41 41-41Z" fill={color} />
          <path d="M491 62h66c23 0 41 18 41 41v134c0 23-18 41-41 41h-66V62Z" fill={secondary} />
          <rect x="154" y="76" width="332" height="188" rx="7" fill="#080a0f" />
          <rect x="166" y="87" width="308" height="166" rx="3" fill={`url(#${gradientId})`} />
          <circle cx="99" cy="119" r="18" fill="#20242a" />
          <circle cx="99" cy="207" r="16" fill="#20242a" />
          <circle cx="540" cy="207" r="18" fill="#20242a" />
          <circle cx="540" cy="119" r="8" fill="#252930" />
          <circle cx="566" cy="143" r="8" fill="#252930" />
          <circle cx="514" cy="143" r="8" fill="#252930" />
          <circle cx="540" cy="165" r="8" fill="#252930" />
        </g>
      </svg>
    );
  }

  if (type === "vita") {
    return (
      <svg className={className} viewBox="0 0 640 340" role="img" aria-label={label}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor={secondary} />
            <stop offset=".42" stopColor="#242a3a" />
            <stop offset="1" stopColor="#05060a" />
          </linearGradient>
          <filter id={shadowId}>
            <feDropShadow dx="0" dy="24" stdDeviation="22" floodOpacity=".32" />
          </filter>
        </defs>
        <ellipse cx="320" cy="294" rx="235" ry="19" fill="#000" opacity=".2" />
        <g filter={`url(#${shadowId})`} transform="rotate(-2 320 170)">
          <path d="M68 73c-34 12-47 52-47 97s13 85 47 97c32 12 75 13 110-1h284c35 14 78 13 110 1 34-12 47-52 47-97s-13-85-47-97c-32-12-75-13-110 1H178c-35-14-78-13-110-1Z" fill={color} />
          <rect x="167" y="79" width="306" height="182" rx="17" fill="#08090d" />
          <rect x="180" y="91" width="280" height="158" rx="8" fill={`url(#${gradientId})`} />
          <circle cx="112" cy="135" r="17" fill="#17191f" />
          <circle cx="121" cy="208" r="17" fill="#17191f" />
          <circle cx="527" cy="208" r="17" fill="#17191f" />
          <circle cx="527" cy="121" r="8" fill={secondary} />
          <circle cx="553" cy="143" r="8" fill={secondary} opacity=".8" />
          <circle cx="501" cy="143" r="8" fill={secondary} opacity=".65" />
          <circle cx="527" cy="164" r="8" fill={secondary} opacity=".5" />
          <rect x="86" y="166" width="51" height="14" rx="4" fill="#d8d9dc" />
          <rect x="104" y="148" width="14" height="51" rx="4" fill="#d8d9dc" />
        </g>
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 620 340" role="img" aria-label={label}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={secondary} />
          <stop offset=".42" stopColor="#272c38" />
          <stop offset="1" stopColor="#06070b" />
        </linearGradient>
        <filter id={shadowId}>
          <feDropShadow dx="0" dy="22" stdDeviation="20" floodOpacity=".32" />
        </filter>
      </defs>
      <ellipse cx="310" cy="294" rx="225" ry="19" fill="#000" opacity=".18" />
      <g filter={`url(#${shadowId})`} transform="rotate(-2 310 170)">
        <path d="M61 87c8-25 31-40 58-40h382c27 0 50 15 58 40 17 51 17 115 0 166-8 25-31 40-58 40H119c-27 0-50-15-58-40-17-51-17-115 0-166Z" fill={color} />
        <rect x="166" y="72" width="288" height="180" rx="8" fill="#14161b" />
        <rect x="180" y="85" width="260" height="154" rx="3" fill={`url(#${gradientId})`} />
        <Controls secondary={secondary} />
        <circle cx="121" cy="230" r="16" fill="#17191f" />
        <rect x="270" y="268" width="34" height="6" rx="3" fill="#9b9da2" opacity=".7" />
        <rect x="316" y="268" width="34" height="6" rx="3" fill="#9b9da2" opacity=".7" />
      </g>
    </svg>
  );
}
