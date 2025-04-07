"use client";

// hooks/useMediaQuery.ts
import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Browser-only code
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);

      // Set initial value
      setMatches(media.matches);

      // Define callback for media query changes
      const listener = (): void => {
        setMatches(media.matches);
      };

      // Add event listener
      media.addEventListener("change", listener);

      // Clean up
      return () => {
        media.removeEventListener("change", listener);
      };
    }
  }, [query]);

  return matches;
}
