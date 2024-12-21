import { frame, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const spring = { damping: 20, stiffness: 150, restDelta: 0.001 };

export function useFollowPointer() {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      frame.read(() => {
        xPoint.set(clientX);
        yPoint.set(clientY);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x, y };
}
