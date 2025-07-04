export const PATH = {
  index: () => "/",
  freeBoard: () => "/freeboard",
  secondHandMarket: () => "/secondhandmarket",
  notepad: () => "/notepad",
  // productDetail: (id) => `/product/${id}`,
  // profile: (userId) => `/profile/${userId}`,
};

export const NAV_MENUS = [
  { name: "자유게시판", href: PATH.freeBoard() },
  { name: "중고마켓", href: PATH.secondHandMarket() },
  { name: "낙서장", href: PATH.notepad() },
];
