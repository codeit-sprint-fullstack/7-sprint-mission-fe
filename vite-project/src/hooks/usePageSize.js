import { useWindowSize } from "./useWindowSize";

const BREAKPOINTS = {
  mobile: {
    min: 0,
    max: 743,
    pageSize: 4,
  },
  table: {
    min: 744,
    max: 1023,
    pageSize: 6,
  },
  pc: {
    min: 1024,
    max: Infinity,
    pageSize: 12,
  },
};

const getPageSizeByWindowWith = (windowWidth) => {
  const currentSize = Object.values(BREAKPOINTS).find(
    (breakpoint) =>
      windowWidth >= breakpoint.min && windowWidth <= breakpoint.max
  );

  return currentSize.pageSize;
};

export const usePageSize = () => {
  const {
    windowSize: { width },
  } = useWindowSize();

  const currentPageSize = getPageSizeByWindowWith(width);

  return {
    currentPageSize,
  };
};
