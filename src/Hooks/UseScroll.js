import { useCallback, useEffect, useRef, useState } from "react";

const devider = 100;

export const useScroll = () => {
  const [cur, setCur] = useState(1);
  const element = useRef();

  const throttle = (fn, delay) => {
    let timer;
    return function () {
      if (!timer) {
        fn.apply(this, arguments);
        timer = setTimeout(() => {
          timer = null;
        }, delay);
      }
    };
  };

  function scrollTo(top, cur) {
    setCur(cur);
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }

  function fn() {
    const innetHeight = window.innerHeight;
    const cur = this.scrollY;
    const Y = arguments[0].deltaY;

    if (Y < 0) {
      if (cur >= 0 && cur <= innetHeight) {
        scrollTo(0, 1);
      } else {
        scrollTo(innetHeight, 2);
      }
    } else {
      if (cur >= 0 && cur < innetHeight) {
        scrollTo(innetHeight, 2);
      } else if (cur >= innetHeight && cur < innetHeight * 2) {
        scrollTo(innetHeight * 2, 3);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("wheel", throttle(fn, 1200));

    return () => {
      window.removeEventListener("wheel", throttle(fn, 1200));
    };
  }, []);

  return { ref: element, cur };
};
