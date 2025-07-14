현재 파일 구조
main.jsx

- App.jsx (라우트 들어있음)

  - LandingPage

    - Header
    - TopImgSection
    - HotItemSection
    - SearchSection
    - RegisterSection
    - BottomImgSection
    - Footer

  - ItemsPage

    - Nav
    - SellingItemsSection
      - SellingItemsHeader
        - SearchBox
        - ItemRegBox
        - OrderByBox
      - ItemsList
        - Item
      - PageButtonBox
    - Footer

  - RegPage

    - Nav
    - RegSection
      - RegHeader
        - RegButton
      - RegItem
        - (아직은 안 쪼갰는데 아마 입력항목 4개도 컴포로 쪼개야 할 듯)
    - Footer

  - CommunityPage

- 이하 스프린트 미션6을 하며 했던 사고의 흐름과 궁금증 정리 등.. -

상품 등록 페이지

우선 RegButton을 클릭하면 post 요청을 전송
-> post하기 위한 api 코드 필요
-> 입력되는 4가지 항목에, 추가로 작성자ID, 작성일, 수정일을 함께 전송해야 함
... id가 작성자 아이디가 아니라 그냥 db 내부 난수 말하는건가..?

input박스에 입력되는 제품명 / 소개 / 가격 / 태그에 대해서 스테이트로 관리해야 할 것 같은데
프롭스를 어디서부터 내려줘야 하는지가 고민...
-> 일단은 RegSection에서 정의해서, RegItem과 RegHeader 모두에 내려줬다
헤더에 등록 버튼이 있고, 이 등록 버튼은 itemData가 필요하니깐..

tags가.. 보통 태그는 글씨를 입력하고 띄어쓰기를 하면 기존의 문자열을 태그로 인식하는데.
이러면 태그 인풋에는
문자열 입력
-> 스페이스 입력되면 여태 입력된 문자열을 값으로 인식하고 tags 리스트에 append
-> 이러면 itemData 스테이트 안에 tags 프로퍼티가 존재하는데, 이 프로퍼티 값이 리스트
-> useState의 set함수가 prev 값을 받아온다는 건 아는데, ...prev, tags: prev.tags.push(newValue) 이렇게도 작동 하려나?
-> 안되면 tags는 따로 스테이트를 빼주는 걸로 (다루기가어렵워)
-> tag 스테이트 갱신하는 거랑, 스페이스 입력됐을 때 작동하는 걸로 함수 2개 필요할 듯
-> onKeyDown을 onChange보다 먼저 실행햇으면 좋겠는데 어케야하지
-> 이벤트 프롭스를 한 줄에 2개 실행해도 괜찮다

공통 레이아웃 정의하고 아울렛 작성

tags에서 각 tag가 유니크 key를 가져야 하는데 이 유니크 키는 뭐로 설정해야 하지...
애초에 tags에서 중복값이 안 되게 해 놨는데 그냥 id={tag} 해도 유니크 값이긴 한데
