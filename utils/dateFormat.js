// 입력되는 date값은 YYYY-MM-DDTHH:MM:SS.SSSZ
// 일단은 YYYY-MM-DD 형식으로 리턴되게 함(추후 수정될 수 있음)

export default function dateFormat(date) {
  const result = date.split("T")[0];
  return result;
}
