// 사실 이렇게 뺄정도가 싶기는 한데 컴포 재활용을 하다보니
// type이 article인지 product인지 구분해야 하고,
// 둘 다 아니라면 작동이 안 되게 해야 하는(오류문구 출력해야 함) 경우가 많아서 뺌..

export default function testType(type) {
  if (type !== "product" && type !== "article") {
    throw new Error("type은 product 혹은 article만 입력 가능합니다.");
  }
}
