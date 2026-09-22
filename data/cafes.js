// 팀원은 아래 cafe 객체를 복사한 뒤 내용만 수정하세요.
// id는 영문 소문자와 하이픈으로 작성하며 서로 겹치면 안 됩니다.
window.CAFES = [
  {
    id: "slow-cup-seongsu",
    name: "슬로우 컵",
    area: "성수",
    address: "서울 성동구 연무장길 00",
    author: "김커피",
    visitedAt: "2026.09.14",
    image: "assets/cafe-hero.png",
    imageAlt: "나무 테이블 위 라테와 크루아상",
    summary: "오후의 빛과 고소한 라테가 오래 기억에 남는 곳",
    description: "직접 로스팅한 원두의 단맛이 또렷합니다. 좌석 간격이 여유로워 대화하거나 조용히 작업하기 좋았어요.",
    signature: "헤이즐넛 라테",
    price: "6,500원",
    tags: ["라테", "디저트", "조용한"],
    rating: 4.8,
    mapUrl: "https://map.naver.com/"
  },
  {
    id: "archive-roasters-mangwon",
    name: "아카이브 로스터스",
    area: "망원",
    address: "서울 마포구 포은로 00",
    author: "이원두",
    visitedAt: "2026.09.07",
    image: "assets/cafe-hero.png",
    imageAlt: "따뜻한 햇살이 드는 카페의 커피 테이블",
    summary: "산뜻한 필터 커피와 담백한 공간이 만나는 로스터리",
    description: "원두 선택지를 친절하게 설명해 줍니다. 산미 있는 커피를 처음 접하는 사람에게도 추천하기 좋은 곳입니다.",
    signature: "에티오피아 핸드드립",
    price: "7,000원",
    tags: ["핸드드립", "로스터리", "데이트"],
    rating: 4.6,
    mapUrl: "https://map.naver.com/"
  },
  {
    id: "mellow-table-suwon",
    name: "멜로우 테이블",
    area: "수원",
    address: "경기 수원시 팔달구 화서문로 00",
    author: "박디저트",
    visitedAt: "2026.08.30",
    image: "assets/cafe-hero.png",
    imageAlt: "크루아상과 라테가 놓인 카페 테이블",
    summary: "바삭한 페이스트리 때문에 주말마다 생각나는 카페",
    description: "매일 아침 직접 굽는 크루아상이 대표 메뉴입니다. 커피는 묵직한 편이라 버터 풍미와 잘 어울립니다.",
    signature: "플레인 크루아상 세트",
    price: "9,000원",
    tags: ["베이커리", "주차", "브런치"],
    rating: 4.7,
    mapUrl: "https://map.naver.com/"
  },
  // 아래 4곳은 웹 자료 기반 소개이며 실제 방문 기록이 아닙니다.
  // 가격은 검색 시 표시된 금액으로 변경될 수 있습니다.
  // 출처: https://itour.incheon.go.kr/ssst/ssst/detail.do?cotId=ITD26072216081675996
  // 메뉴·가격: https://polle.com/place/1Y7jwF/
  {
    id: "ans-bakery-songdo",
    name: "안스베이커리 송도점",
    area: "송도",
    address: "인천 연수구 센트럴로 160",
    author: "박규진",
    visitedAt: "2026.08.01",
    // 사진: UH 플랫 더 송도 https://uhflat.co.kr/nidon/?bmode=view&idx=67928813
    image: "assets/ans-bakery-songdo.jpg",
    imageAlt: "안스베이커리 송도점의 간판과 유리 출입문",
    summary: "센트럴파크 인근에서 명란바게트와 소금빵을 만나는 베이커리",
    description: "여기 명란바게트은 모르겠는데 이탈리안 고로켓이 맛있음.",
    signature: "명란바게트",
    price: "5,000원 (웹 게시 가격)",
    tags: ["베이커리", "포장"],
    rating: 4.2,
    mapUrl: "https://map.naver.com/p/search/안스베이커리%20송도점"
  },
  // 출처: https://www.diningcode.com/profile.php?rid=bBnlAVuljYEN
  // 주소: https://polle.com/place/36UQIJ/
  {
    id: "masian-bakery-yeongjong",
    name: "마시안제빵소",
    area: "영종도",
    address: "인천 영종구 마시란로 155",
    author: "박규진",
    visitedAt: "2026.05.10",
    // 사진: 한국관광공사 / 위기브 https://www.wegive.co.kr/contents/wetownDetail/2834155
    image: "assets/masian-bakery-yeongjong.jpg",
    imageAlt: "바다가 보이는 마시안제빵소 실내와 토끼 모양 의자",
    summary: "마시안해변의 바다 풍경과 연탄식빵을 함께 즐기는 베이커리 카페",
    description: "연탄 모양 식빵(?)이 맛있음. 바다와 갯벌을 바라보는 좌석과 야외 공간이 있어 좋음.",
    signature: "연탄식빵 (블랙)",
    price: "8,000원",
    tags: ["베이커리", "오션뷰", "연탄식빵"],
    rating: 4.5,
    mapUrl: "https://map.naver.com/p/search/마시안제빵소"
  },
  // 출처: https://megojigo.com/foodmap/2536
  // 메뉴·가격: https://www.diningcode.com/profile.php?rid=FA2q3rRAzXUx
  {
    id: "long-beach-coffee-and-bread-songdo",
    name: "롱비치커피앤브래드",
    area: "송도",
    address: "인천 연수구 랜드마크로 194 1층",
    author: "박규진",
    visitedAt: "2026.07.11",
    // 사진: 한국관광공사 / 코리아트립팁스 https://www.koreatriptips.com/dining/3445908.html
    image: "assets/long-beach-songdo.jpg",
    imageAlt: "노을빛이 비치는 롱비치커피앤브래드 야외 테라스",
    summary: "인천대교와 서해를 바라보며 커피와 빵을 즐기는 공간",
    description: "인천 대교 뷰가 아주 좋음. 다만 가격이 좀 많이 비싸고 사람이 많아 생각보단 쾌적하지 않음",
    signature: "롱비치돌체라떼",
    price: "8,000원",
    tags: ["베이커리", "오션뷰", "라테"],
    rating: 3.8,
    mapUrl: "https://map.naver.com/p/search/롱비치커피앤브래드"
  },
  // 출처: https://www.hankyung.com/article/202608250456O
  // 주소: https://findby.co.kr/details/22003-281853152013-st-652b67c58c641f9e38a57863
  {
    id: "bread-department-store-songdo",
    name: "빵백화점 송도센트럴파크점",
    area: "송도",
    address: "인천 연수구 센트럴로 232 더샵센트럴파크1 A동 1층 129호",
    author: "박규진",
    visitedAt: "2026.09.05",
    // 사진: 빵백화점 제공 / 한국경제 https://www.hankyung.com/article/202608250456O
    image: "assets/bread-department-songdo.jpg",
    imageAlt: "빵백화점 송도센트럴파크점의 간판과 매장 외관",
    summary: "센트럴파크 인근에서 빵과 예술작품을 함께 만나는 베이커리 카페",
    description: "송도에서 24시간 카페가 여기 말고는 진짜 딱히 없음.",
    signature: "매장 확인 필요",
    price: "미확인",
    tags: ["베이커리", "센트럴파크", "예술작품"],
    rating: 4.0,
    mapUrl: "https://map.naver.com/p/search/빵백화점%20송도센트럴파크점"
  }
];
