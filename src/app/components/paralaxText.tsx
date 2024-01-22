import { useRef } from "react";
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  m,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from "next/image";
import { skils } from "@/data/skils";

interface ParallaxProps {
  baseVelocity: number;
  className?: string;
  reverse?: boolean;
}

export const ParallaxText = ({
  baseVelocity = 100,
  className,
  reverse = false,
}: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v: number) => `${wrap(-0, -25, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t: any, delta: number) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`parallax py-2 ${className || ""}`}>
      {
        reverse ? (
          <m.div className="scroller" style={{ x }}>
            {Object.values(skils)
              .map((item, index) => (
                <span
                  key={index}
                >
                  <item.icon />
                </span>
              ))}
          </m.div>
        ) : (
          <m.div className="scroller" style={{ x }}>
            {Object.values(skils)
              .reverse()
              .map((item, index) => (
                <span
                  key={index}
                >
                  <item.icon />
                </span>
              ))}
          </m.div>
        )
      }
    </div>
  );
};