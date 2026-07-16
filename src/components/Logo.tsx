import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/routing";
import { identity } from "@/data/site";

type LogoProps = {
  locale: Locale;
  compact?: boolean;
  variant?: "responsive" | "full" | "symbol";
};

const shortName: Record<Locale, string> = {
  ar: "أسامه بن أحمد بن محفوظ",
  en: "Osama bin Ahmed bin Mahfouz"
};

const compactPractice: Record<Locale, string> = {
  ar: "للمحاماة والاستشارات القانونية",
  en: "Law Firm & Legal Consultancy"
};

export function Logo({ locale, compact = false, variant }: LogoProps) {
  const resolvedVariant = variant ?? (compact ? "symbol" : "responsive");

  return (
    <Link className={`logo-lockup logo-lockup-${resolvedVariant}`} href={`/${locale}`} aria-label={identity.name[locale]}>
      {resolvedVariant === "responsive" ? (
        <>
          <Image
            src="/brand/osama-logo-header.svg"
            alt=""
            width={489}
            height={488}
            className="logo-official-full"
            style={{ height: "auto" }}
            priority
            unoptimized
          />
          <span className="logo-compact-set">
            <Image
              src="/brand/osama-symbol-official.svg"
              alt=""
              width={96}
              height={78}
              className="logo-mark"
              priority
              unoptimized
            />
            <span className="logo-text">
              <strong>{shortName[locale]}</strong>
              <small>{compactPractice[locale]}</small>
            </span>
          </span>
        </>
      ) : null}

      {resolvedVariant === "full" ? (
        <Image
          src="/brand/osama-logo-official.svg"
          alt=""
          width={489}
          height={488}
          className="logo-official-full"
          style={{ width: "clamp(142px, 11vw, 196px)", height: "auto" }}
          priority
          unoptimized
        />
      ) : null}

      {resolvedVariant === "symbol" ? (
        <span className="logo-text">
          <Image
            src="/brand/osama-symbol-official.svg"
            alt=""
            width={96}
            height={78}
            className="logo-mark"
            priority
            unoptimized
          />
          <strong>{shortName[locale]}</strong>
          <small>{identity.practice[locale]}</small>
        </span>
      ) : null}
    </Link>
  );
}
