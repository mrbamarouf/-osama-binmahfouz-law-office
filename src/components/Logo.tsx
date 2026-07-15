import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/routing";
import { identity } from "@/data/site";

type LogoProps = {
  locale: Locale;
  compact?: boolean;
};

export function Logo({ locale, compact = false }: LogoProps) {
  return (
    <Link className="logo-lockup" href={`/${locale}`} aria-label={identity.name[locale]}>
      <Image
        src="/brand/osama-logo.png"
        alt=""
        width={78}
        height={110}
        className="logo-mark"
        priority
      />
      {!compact ? (
        <span className="logo-text">
          <strong>{identity.name[locale]}</strong>
          <small>{identity.practice[locale]}</small>
        </span>
      ) : null}
    </Link>
  );
}
