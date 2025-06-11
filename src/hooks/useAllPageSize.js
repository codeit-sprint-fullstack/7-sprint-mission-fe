import { useEffect, useState } from "react";

function calcAllPageSize(width) {
  if (width < 768) return 2;      // Mobile: 2열
  if (width < 1280) return 3;     // Tablet: 3열
  return 5;                       // Desktop: 5열
}

export function useAllPageSize() {
  const [pageSize, setPageSize] = useState(() => calcAllPageSize(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setPageSize(calcAllPageSize(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return pageSize;
}