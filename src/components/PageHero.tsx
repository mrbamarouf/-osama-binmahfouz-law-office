import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  children?: ReactNode;
};

export function PageHero({ title, eyebrow, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <Image
          src="/brand/osama-symbol-official.svg"
          alt=""
          width={118}
          height={94}
          className="page-hero-logo"
          unoptimized
        />
        {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {children ? <div className="page-hero-copy">{children}</div> : null}
      </div>
    </section>
  );
}
