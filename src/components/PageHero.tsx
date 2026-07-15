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
        {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {children ? <div className="page-hero-copy">{children}</div> : null}
      </div>
    </section>
  );
}
