import { useCallback, useEffect, useRef } from "react";

const FadeIn = (duration = 1, delay = 1) => {
  const dom = useRef();

  const handleScroll = useCallback(() => {
    const { current } = dom;
    const currentPosition = window.pageYOffset;
    const currentDomPosition =
      currentPosition + current.getBoundingClientRect().top;
    current.style.transition = `opacity ${duration}s easy-in-out ${delay}`;
    current.style.opacity = 1;
  }, []);

  useEffect(() => {
    if (dom.current) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  if (typeof duration === "number" || typeof delay === "number") return;
  return { ref: dom, style: { opacity: 0 } };
};

export default FadeIn;
