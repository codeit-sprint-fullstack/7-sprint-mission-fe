// 총 페이지 수를 찾아주는 함수.
// 전체 아이템 개수, 페이지 사이즈 입력(페이지 사이즈는 기본 10)
function pageEndFind(itemsCount, pageSize = 10) {
  const maxPage = Math.floor((itemsCount - 1) / pageSize) + 1;
  return maxPage;
}

// 페이지가 속한 범위 찾기. [1,2,3,4,5], [6,7,8,9,10], [11,12] 등의 배열을 리턴한다.
// 파라미터는 현재 페이지와 전체 페이지 2개 입력
function pageFieldFind(page, maxPage) {
  const oneToFive = [1, 2, 3, 4, 5];
  const num = Math.floor((page - 1) / 5) * 5;
  const result = oneToFive.map((n) => {
    if (num + n > maxPage) {
      return;
    } else {
      return num + n;
    }
  });
  const pageFieldArray = result.filter(Boolean);
  return pageFieldArray;
}

function PageButtonBox({ page, itemsCount, onClick }) {
  const maxPage = pageEndFind(itemsCount);

  // 페이지 변경
  const onPageChange = (e) => {
    e.preventDefault();
    const newPage = Number(e.target.textContent);
    onClick(newPage);
  };

  // 페이지 왼, 오 버튼
  const onPageLeftRight = (e) => {
    e.preventDefault();
    const pageArray = pageFieldFind(page, maxPage);
    const newPage =
      e.target.textContent === "<"
        ? Math.max(pageArray[0] - 5, 1)
        : pageArray[pageArray.length - 1] + 1;
    onClick(newPage);
  };

  return (
    <div>
      <div className="PageButtonBox">
        <ol>
          <button key="pageLeftButton" onClick={onPageLeftRight}>
            {"<"}
          </button>
          {pageFieldFind(page, maxPage).map((p) => {
            return (
              <button key={((p - 1) % 5) + 1} onClick={onPageChange}>
                {p}
              </button>
            );
          })}
          {pageFieldFind(page, maxPage).length === 5 && (
            <button key="pageRightButton" onClick={onPageLeftRight}>
              {">"}
            </button>
          )}
        </ol>
      </div>
    </div>
  );
}

export default PageButtonBox;
