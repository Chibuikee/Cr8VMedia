"use client";
import { useEffect, useState } from "react";

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let observer;

    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      });
      observer.observe(ref.current);
    }

    // Remove the observer as soon as the component is unmounted
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [ref]);

  return isIntersecting;
}
