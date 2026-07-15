"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

let introPlayedThisDocument = false;

export function IntroOverlay() {
  const [visible, setVisible] = useState(() => !introPlayedThisDocument);
  const [exiting, setExiting] = useState(false);
  const [canSkip, setCanSkip] = useState(false);
  const exitStarted = useRef(false);

  const finishIntro = useCallback(() => {
    setVisible(false);
    document.body.classList.remove("intro-lock");
  }, []);

  const startExit = useCallback(() => {
    if (exitStarted.current) return;
    exitStarted.current = true;
    setExiting(true);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(finishIntro, reducedMotion ? 260 : 680);
  }, [finishIntro]);

  useEffect(() => {
    if (!visible) return;

    introPlayedThisDocument = true;
    document.body.classList.add("intro-lock");

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const skipDelay = window.setTimeout(() => setCanSkip(true), reducedMotion ? 220 : 820);
    const exitDelay = window.setTimeout(startExit, reducedMotion ? 820 : 2920);
    const fallbackDelay = window.setTimeout(finishIntro, reducedMotion ? 1700 : 4300);

    return () => {
      window.clearTimeout(skipDelay);
      window.clearTimeout(exitDelay);
      window.clearTimeout(fallbackDelay);
      document.body.classList.remove("intro-lock");
    };
  }, [finishIntro, startExit, visible]);

  if (!visible) return null;

  return (
    <div className={`intro-overlay ${exiting ? "is-exiting" : ""}`} aria-hidden={exiting}>
      <button
        className="intro-skip-hitbox"
        type="button"
        aria-label="Skip intro"
        disabled={!canSkip || exiting}
        onClick={startExit}
      />
      <div className="intro-warmth" />
      <div className="intro-frame">
        <span className="intro-line intro-line-top" aria-hidden="true" />
        <Image
          src="/brand/osama-logo-official.svg"
          alt="شعار أسامه بن محفوظ للمحاماة والاستشارات القانونية"
          width={520}
          height={520}
          className="intro-logo"
          priority
          unoptimized
        />
        <span className="intro-line intro-line-bottom" aria-hidden="true" />
      </div>
    </div>
  );
}
