// src/utils/getPageSize.js
import { Breakpoints } from "../constants/breakpoints.js";

export function getPageSize(width) {
  if (width <= Breakpoints.TABLET) {
    return 4;    // 모바일
  } else if (width <= Breakpoints.PC) {
    return 6;    // 태블릿
  } else {
    return 10;   // 데스크탑
  }
}
