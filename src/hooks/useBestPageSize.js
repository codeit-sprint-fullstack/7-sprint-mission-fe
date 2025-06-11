import { useEffect, useState } from "react";

function calcBestPageSize(width) {
  if (width < 768) return 1;      // Mobile: 1열
  if (width < 1280) return 2;     // Tablet: 2열
  return 4;                       // Desktop: 4열
}

export function useBestPageSize() {
  const [pageSize, setPageSize] = useState(() => Math.max(1, calcBestPageSize(window.innerWidth)));

  useEffect(() => {
    const handleResize = () => setPageSize(Math.max(1, calcBestPageSize(window.innerWidth)));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return pageSize;
}