"use client";
import { useEffect } from "react";
export default function useOnScreen(ref, setIntersecting) {
  let observer;
  useEffect(() => {
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      });
      // console.log(ref);
      observer.observe(ref?.current);
    }

    // Remove the observer as soon as the component is unmounted
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [ref, observer]);
  // return isIntersecting;
}
