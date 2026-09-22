# COFFEE NOTE — 팀 커피 맛집 템플릿

팀원들이 각자 추천 카페를 한 파일에 추가하면 목록, 팀원 이름 필터, 상세 소개 창이 자동으로 만들어지는 정적 웹사이트입니다. 별도 설치 없이 `index.html`을 열어 확인할 수 있습니다.

## 1. 폴더 구성

```text
coffee-map-template/
├─ index.html          # 화면의 기본 구조
├─ styles.css          # 색상, 글꼴, 반응형 디자인
├─ app.js              # 목록·필터·상세 창 동작
├─ data/
│  └─ cafes.js         # 팀원이 카페 정보를 입력하는 곳
└─ assets/
   └─ cafe-hero.png    # 공통 샘플 이미지
```

팀원이 평소 수정할 파일은 대부분 `data/cafes.js` 하나입니다.

## 2. 내 카페 소개 추가하기

1. `data/cafes.js`를 엽니다.
2. 기존 `{ ... }` 한 묶음을 쉼표까지 복사합니다.
3. 배열의 마지막에 붙여 넣고 내용을 수정합니다.
4. 내 사진은 `assets/내이름/` 폴더를 만든 뒤 넣습니다.
5. 브라우저에서 `index.html`을 새로고침해 확인합니다.

입력 예시:

```js
{
  id: "cafe-name-hongdae",       // 영문 소문자+하이픈, 중복 금지
  name: "카페 이름",
  area: "홍대",
  address: "서울 마포구 ...",
  author: "홍길동",              // 상단 팀원 필터에 표시되는 이름
  visitedAt: "2026.09.22",
  image: "assets/honggildong/cafe-name.jpg",
  imageAlt: "창가에 놓인 핸드드립 커피",
  summary: "카드에 표시할 한 줄 소개",
  description: "직접 방문한 느낌과 추천 이유를 2~3문장으로 작성",
  signature: "추천 메뉴",
  price: "6,000원",
  tags: ["핸드드립", "데이트", "조용한"],
  rating: 4.7,
  mapUrl: "https://map.naver.com/..."
},
```

### 작성할 때 꼭 지킬 것

- `id`는 다른 카페와 겹치지 않게 작성합니다.
- `author`에 입력한 팀원 이름으로 상단 필터가 자동 생성됩니다.
- 한 팀원이 여러 카페를 등록할 때는 `author`의 띄어쓰기와 철자를 동일하게 작성합니다.
- 각 카페 묶음 사이에는 쉼표(`,`)가 있어야 합니다.
- 글자는 큰따옴표(`"`) 안에 씁니다.
- 평점 `rating`만 따옴표 없이 숫자로 씁니다.
- 사진 파일명에는 공백 대신 하이픈을 권장합니다.
- 사진은 가로형, 권장 크기 1600×1200px 이하로 준비합니다.
- 본인이 촬영했거나 사용 권한이 있는 사진만 올립니다.

## 3. 디자인 수정하기

`styles.css` 맨 위의 색상만 바꾸면 전체 분위기를 쉽게 변경할 수 있습니다.

```css
:root {
  --ink: #241913;     /* 제목, 진한 배경 */
  --paper: #f4eee4;   /* 페이지 배경 */
  --cream: #fffaf1;   /* 밝은 글자와 상세 창 */
  --accent: #b9572a;  /* 강조 색상 */
}
```

- 사이트 이름 수정: `index.html`의 `COFFEE NOTE` 검색 후 변경
- 첫 화면 문구 수정: `index.html`의 `<section class="hero">` 영역
- 카페 정보 수정/삭제: `data/cafes.js`의 해당 `{ ... }` 묶음
- 사진 교체: 새 사진을 `assets`에 넣고 `image` 경로 변경

## 4. Git으로 팀 작업하기

### 처음 한 명만: 저장소 만들기

```bash
cd coffee-map-template
git init
git add .
git commit -m "Initial coffee guide template"
git branch -M main
git remote add origin https://github.com/아이디/저장소명.git
git push -u origin main
```

GitHub에서 빈 저장소를 먼저 만든 뒤 주소를 `origin` 뒤에 붙입니다. GitHub 저장소 생성 시 README를 자동 생성하지 않아야 충돌을 피하기 쉽습니다.

### 팀원: 처음 내려받기

```bash
git clone https://github.com/아이디/저장소명.git
cd 저장소명
```

### 팀원별 권장 작업 순서

`이름` 부분은 영문이나 팀에서 정한 닉네임으로 바꿉니다.

```bash
git switch main
git pull origin main
git switch -c cafe/이름
```

내 카페 정보와 사진을 추가한 뒤:

```bash
git status
git add data/cafes.js assets/이름/
git commit -m "Add 이름 cafe recommendation"
git push -u origin cafe/이름
```

그다음 GitHub에서 `Compare & pull request`를 눌러 `main` 브랜치로 Pull Request를 만듭니다. 다른 팀원 한 명이 화면과 내용을 확인한 뒤 Merge합니다.

### 다른 사람 작업을 다시 받아오기

```bash
git switch main
git pull origin main
```

새 카페를 추가할 때마다 `main`에서 새로운 브랜치를 만드는 것이 안전합니다.

## 5. 충돌을 줄이는 팀 규칙

- 한 카페는 한 Pull Request로 올립니다.
- 작업 전 항상 `main`에서 `git pull`을 먼저 합니다.
- 사진은 `assets/팀원이름/`처럼 개인 폴더에 넣습니다.
- `data/cafes.js`에서 다른 팀원의 카페 정보는 수정하지 않습니다.
- `styles.css`, `app.js`, `index.html`은 디자인 담당자가 관리하는 것을 권장합니다.
- 충돌이 발생하면 임의로 삭제하지 말고 두 사람의 내용을 모두 남기는 방향으로 확인합니다.

## 6. 로컬에서 확인하기

가장 간단한 방법은 `index.html`을 더블클릭하는 것입니다. VS Code의 Live Server 확장을 사용한다면 `index.html`을 우클릭하고 **Open with Live Server**를 선택합니다.

Python이 설치되어 있다면 프로젝트 폴더에서 다음 명령도 사용할 수 있습니다.

```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 엽니다. 종료는 터미널에서 `Ctrl + C`입니다.

## 7. 최종 확인 목록

- [ ] 내 카페 카드가 목록에 보인다.
- [ ] 팀원 이름 필터가 동작한다.
- [ ] 카드를 누르면 상세 정보가 열린다.
- [ ] 이미지가 깨지지 않는다.
- [ ] 모바일 화면에서도 글과 카드가 잘 보인다.
- [ ] 지도 링크가 정확하다.
- [ ] 사진 사용 권한을 확인했다.
- [ ] Pull Request 설명에 추가한 카페 이름과 확인 내용을 적었다.
