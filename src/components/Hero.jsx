import { useEffect, useRef, useCallback } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import "./Hero.css";
import backgroundVideo from "../assets/background.mp4";
import zoomVideo from "../assets/zoom-scrub.mp4";

const ZOOM_END = 0.9;

function Hero() {
  const trackRef = useRef(null);
  const zoomRef = useRef(null);

  const durationRef = useRef(0);      // zoom video duration
  const targetTimeRef = useRef(0);    // where scroll wants us to be
  const rafRef = useRef(null);        // pending rAF handle

  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  /* 1. Metadata: cache duration, unlock seeking on iOS Safari */
  useEffect(() => {
    const v = zoomRef.current;
    if (!v) return;

    const onMeta = () => {
      durationRef.current = v.duration || 0;
      // Safari refuses to seek until the video has "played" once.
      const p = v.play();
      if (p && p.then) p.then(() => v.pause()).catch(() => {});
      else v.pause();
    };

    if (v.readyState >= 1) onMeta();
    else v.addEventListener("loadedmetadata", onMeta, { once: true });

    return () => v.removeEventListener("loadedmetadata", onMeta);
  }, []);

  /* 2. One guarded seek */
  const doSeek = useCallback(() => {
    const v = zoomRef.current;
    if (!v || !durationRef.current) return;
    if (v.seeking) return; // wait for current seek to finish

    const target = targetTimeRef.current;
    if (Math.abs(v.currentTime - target) < 0.005) return;

    try {
      if (typeof v.fastSeek === "function") v.fastSeek(target);
      else v.currentTime = target;
    } catch {
      /* seeking can throw if media isn't ready, ignore */
    }
  }, []);

  /* 3. When a seek finishes, chase the latest target if it changed */
  useEffect(() => {
    const v = zoomRef.current;
    if (!v) return;
    const onSeeked = () => {
      if (Math.abs(v.currentTime - targetTimeRef.current) > 0.01) {
        doSeek();
      }
    };
    v.addEventListener("seeked", onSeeked);
    return () => v.removeEventListener("seeked", onSeeked);
  }, [doSeek]);

  /* 4. Scroll sets the target time, one seek per animation frame.
        The intro video is NOT paused here, so it always finishes
        and holds on the finished logo. */
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (!durationRef.current) return;
    const progress = Math.min(p / ZOOM_END, 1);
    targetTimeRef.current = progress * durationRef.current;

    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      doSeek();
    });
  });

  useEffect(
    () => () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    },
    []
  );

  /* 5. Motion values */
  const contentOpacity = useTransform(scrollYProgress, [0, 0.14], [1, 0]);
  const contentY       = useTransform(scrollYProgress, [0, 0.3],  [0, -60]);
  const zoomOpacity    = useTransform(scrollYProgress, [0, 0.02], [0, 1]);
  const fillOpacity    = useTransform(
    scrollYProgress,
    [ZOOM_END - 0.1, ZOOM_END],
    [0, 1]
  );

  /* ---------- Reduced motion ---------- */
  if (reduceMotion) {
    return (
      <section className="hero hero--static" id="home">
        <video
          className="hero__video hero__video--bg"
          src={backgroundVideo}
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="hero__content">
          <h1 className="hero__title">
            <span>Make your brand</span>
            <span>impossible to ignore.</span>
          </h1>
          <p className="hero__subtitle">
            From social media to search engines, we help your business stand out
            in a crowded digital world.
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className="hero-scroll" ref={trackRef}>
      <section className="hero" id="home">
        <video
          className="hero__video hero__video--bg"
          src={backgroundVideo}
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        <motion.video
          ref={zoomRef}
          className="hero__video hero__video--zoom"
          src={zoomVideo}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          style={{ opacity: zoomOpacity }}
        />

        <motion.div
          className="hero__content"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <h1 className="hero__title">
            <span>Make your brand</span>
            <span>impossible to ignore.</span>
          </h1>
          <p className="hero__subtitle">
            From social media to search engines, we help your business stand out
            in a crowded digital world.
          </p>
        </motion.div>

        <motion.div
          className="hero__fill"
          style={{ opacity: fillOpacity }}
          aria-hidden="true"
        />
      </section>
    </div>
  );
}

export default Hero;