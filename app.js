const cafes = Array.isArray(window.CAFES) ? window.CAFES : [];
const grid = document.querySelector("#cafe-grid");
const filters = document.querySelector("#filters");
const count = document.querySelector("#cafe-count");
const emptyState = document.querySelector("#empty-state");
const dialog = document.querySelector("#cafe-dialog");
const dialogContent = document.querySelector("#dialog-content");
const closeButton = document.querySelector(".dialog-close");
let activeAuthor = "전체";

const escapeHtml = (value) => String(value ?? "").replace(/[&<>'"]/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
}[char]));

function renderFilters() {
  const authors = ["전체", ...new Set(cafes.map((cafe) => cafe.author))];
  filters.innerHTML = authors.map((author) => `
    <button class="filter-button${author === activeAuthor ? " is-active" : ""}" type="button" data-author="${escapeHtml(author)}">
      ${escapeHtml(author)}
    </button>
  `).join("");
}

function cardTemplate(cafe, index) {
  return `
    <article class="cafe-card">
      <button class="card-open" type="button" data-id="${escapeHtml(cafe.id)}" aria-label="${escapeHtml(cafe.name)} 상세 보기">
        <div class="card-image-wrap">
          <img src="${escapeHtml(cafe.image)}" alt="${escapeHtml(cafe.imageAlt)}" loading="lazy" />
          <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
        </div>
        <div class="card-content">
          <div class="card-meta"><span>${escapeHtml(cafe.area)}</span><span>★ ${escapeHtml(cafe.rating)}</span></div>
          <h3>${escapeHtml(cafe.name)}</h3>
          <p>${escapeHtml(cafe.summary)}</p>
          <div class="tags">${cafe.tags.map((tag) => `<span>#${escapeHtml(tag)}</span>`).join("")}</div>
          <span class="card-author">by ${escapeHtml(cafe.author)}</span>
        </div>
      </button>
    </article>`;
}

function renderCafes() {
  const visible = activeAuthor === "전체" ? cafes : cafes.filter((cafe) => cafe.author === activeAuthor);
  grid.innerHTML = visible.map(cardTemplate).join("");
  count.textContent = `${visible.length} PLACES`;
  emptyState.hidden = visible.length > 0;
}

function openCafe(id) {
  const cafe = cafes.find((item) => item.id === id);
  if (!cafe) return;
  dialogContent.innerHTML = `
    <img class="dialog-image" src="${escapeHtml(cafe.image)}" alt="${escapeHtml(cafe.imageAlt)}" />
    <div class="dialog-body">
      <p class="eyebrow">${escapeHtml(cafe.area)} · ${escapeHtml(cafe.visitedAt)}</p>
      <h2 id="dialog-title">${escapeHtml(cafe.name)}</h2>
      <p class="dialog-summary">${escapeHtml(cafe.summary)}</p>
      <p>${escapeHtml(cafe.description)}</p>
      <dl>
        <div><dt>추천 메뉴</dt><dd>${escapeHtml(cafe.signature)}</dd></div>
        <div><dt>가격</dt><dd>${escapeHtml(cafe.price)}</dd></div>
        <div><dt>주소</dt><dd>${escapeHtml(cafe.address)}</dd></div>
        <div><dt>기록한 사람</dt><dd>${escapeHtml(cafe.author)}</dd></div>
      </dl>
      <a class="map-link" href="${escapeHtml(cafe.mapUrl)}" target="_blank" rel="noopener noreferrer">지도에서 보기 ↗</a>
    </div>`;
  dialog.showModal();
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-author]");
  if (!button) return;
  activeAuthor = button.dataset.author;
  renderFilters();
  renderCafes();
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-id]");
  if (button) openCafe(button.dataset.id);
});

closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

renderFilters();
renderCafes();
