import React, { useEffect } from "react";

export const useActiveNav = (
  ref: React.MutableRefObject<any>,
  handler: (event: MouseEvent) => void
) => {
  useEffect(() => {
    console.log("run");

    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("scroll", listener);

    // return () => {
    //   // componentwillunmount
    //   document.removeEventListener("mousemove", listener);
    // };
  }, [ref, handler]);
};
