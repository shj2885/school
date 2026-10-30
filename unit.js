// 단원 페이지: ?id=e2-l7 → data/e2-l7.js 를 불러와 개념·단어·문제를 그려요
const params = new URLSearchParams(location.search);
const unitId = params.get("id") || "";

if (!/^[a-z0-9-]+$/.test(unitId)) {
  document.getElementById("title").textContent = "단원을 찾을 수 없어요";
} else {
  const s = document.createElement("script");
  s.src = `data/${unitId}.js`;
  s.onload = () => start(window.UNIT);
  s.onerror = () => { document.getElementById("title").textContent = "단원을 찾을 수 없어요"; };
  document.head.appendChild(s);
}

const CAT_NAMES = { vocab: "단어", talk: "대화", grammar: "문법", reading: "본문" };
const CAT_ORDER = ["vocab", "talk", "grammar", "reading"];
const MARKS = ["①", "②", "③", "④", "⑤"];
const HANGUL = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;

// 한글이 없는 영어 줄만 골라요 (문제 속 영어 문장 읽기용)
function englishLines(html) {
  return String(html).split("\n")
    .map(l => l.replace(/<[^>]+>/g, "").trim())
    .filter(l => /[a-z]{2}/i.test(l) && !HANGUL.test(l));
}

let U = null;
let sheet = [];   // 지금 문제지에 들어간 문제들

function start(unit) {
  U = unit;
  const name = `${U.grade} ${U.subject} ${U.lesson}`;
  document.title = `${name} · 중학교 공부방`;
  document.getElementById("crumb").textContent = `${U.grade} ${U.subject} · ${U.book}`;
  document.getElementById("title").textContent = `${U.lesson} ${U.title}`;
  document.getElementById("subtitle").textContent = U.korTitle;

  setupSpeed();
  renderConcepts();
  renderWords();
  setupTabs();
  setupQuiz();
  fitTitles();
}

/* ── 탭 ── */
function setupTabs() {
  const buttons = document.querySelectorAll(".tabs button");
  function show(tab) {
    if (!["concept", "words", "quiz"].includes(tab)) tab = "concept";
    buttons.forEach(b => b.classList.toggle("on", b.dataset.tab === tab));
    document.querySelectorAll(".panel").forEach(p => { p.hidden = p.id !== "p-" + tab; });
    fitTitles();
  }
  buttons.forEach(b => b.addEventListener("click", () => {
    history.replaceState(null, "", "#" + b.dataset.tab);
    show(b.dataset.tab);
    window.scrollTo({ top: 0 });
  }));
  window.addEventListener("hashchange", () => show(location.hash.slice(1)));
  show(location.hash.slice(1));
}

/* ── 읽기 속도 ── */
function setupSpeed() {
  const b = document.getElementById("speedBtn");
  if (!TTS.ok) { b.hidden = true; return; }
  const paint = () => { b.classList.toggle("on", TTS.slow); b.textContent = TTS.slow ? "천천히 읽기 켜짐" : "천천히 읽기"; };
  b.addEventListener("click", () => { setSlow(!TTS.slow); paint(); });
  paint();

  // 영어 목소리가 하나도 없으면 알려 줘요
  const tip = document.getElementById("voiceTip");
  const check = () => { tip.hidden = !!TTS.voice || !speechSynthesis.getVoices().length; };
  speechSynthesis.addEventListener("voiceschanged", check);
  check();
}

/* ── 개념 ── */
function renderConcepts() {
  const box = document.getElementById("p-concept");
  box.innerHTML = U.concepts.map(c => `
    <article class="concept">
      <h2><span class="tag t-${c.tag}">${c.tag}</span><span class="one-line fit">${c.title}</span></h2>
      ${c.body}
    </article>`).join("");

  // 예문 줄마다 듣기 버튼 (지운 줄과 우리말 줄은 빼요)
  box.querySelectorAll(".ex p:not(.ko)").forEach(p => {
    if (p.querySelector("s")) return;
    const copy = p.cloneNode(true);
    copy.querySelectorAll(".who").forEach(w => w.remove());
    const text = copy.textContent.replace(/^\s*→\s*/, "").trim();
    if (!/[a-z]{2}/i.test(text) || HANGUL.test(text)) return;
    p.classList.add("has-say");
    p.insertAdjacentHTML("beforeend", sayButton(text));
  });
}

/* ── 단어 ── */
function renderWords() {
  const box = document.getElementById("wordList");
  box.innerHTML = U.words.map(([en, ko]) =>
    `<div class="word"><span class="en-wrap">${sayButton(en, en + " 듣기")}<span class="en">${en}</span></span><span class="ko">${ko}</span></div>`).join("");

  // 모두 듣기: 단어를 차례로 읽어요 (다시 누르면 멈춰요)
  const all = document.getElementById("sayAll");
  if (!TTS.ok) all.hidden = true;
  all.addEventListener("click", () => speak(U.words.map(w => w[0] + "."), all));
  box.querySelectorAll(".word").forEach(w => w.addEventListener("click", () => w.classList.toggle("peek")));

  document.querySelectorAll("[data-hide]").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll("[data-hide]").forEach(x => x.classList.toggle("on", x === b));
    box.classList.remove("hide-en", "hide-ko");
    if (b.dataset.hide) box.classList.add(b.dataset.hide);
    box.querySelectorAll(".peek").forEach(w => w.classList.remove("peek"));
  }));
}

/* ── 문제 만들기 ── */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// 단어 목록으로 단어 문제를 하나씩 자동으로 만들어요 (뜻 고르기 / 단어 고르기 / 철자 쓰기)
function makeWordQuestion([en, ko]) {
  const others = shuffle(U.words.filter(w => w[0] !== en)).slice(0, 3);
  const kind = Math.floor(Math.random() * 3);
  if (kind === 0) {
    return { cat: "vocab", type: "mc", q: `다음 단어의 뜻으로 알맞은 것은?\n<b>${en}</b>`,
      choices: [ko, ...others.map(w => w[1])], answer: 0, explain: `${en}: ${ko}` };
  }
  if (kind === 1) {
    return { cat: "vocab", type: "mc", q: `'${ko}'의 뜻을 가진 단어는?`,
      choices: [en, ...others.map(w => w[0])], answer: 0, explain: `${ko}: ${en}` };
  }
  const hint = en.split(" ").map(w => w[0] + " _".repeat(w.length - 1)).join("   ");
  return { cat: "vocab", type: "blank", q: `뜻에 맞는 영어를 쓰세요.\n${ko}  ( ${hint} )`,
    answer: [en], explain: `${ko}: ${en}` };
}

// 고르기 문제의 보기 순서를 섞고, 정답 번호를 다시 맞춰요
function prepare(q) {
  q = { ...q };
  if (q.type === "mc") {
    const right = q.choices[q.answer];
    q.choices = shuffle(q.choices);
    q.answer = q.choices.indexOf(right);
  }
  if (q.type === "order") q.words = shuffle(q.words);
  q.user = null;
  return q;
}

function buildSheet() {
  const cats = [...document.querySelectorAll("input[name=cat]:checked")].map(i => i.value);
  const count = +document.querySelector("input[name=count]:checked").value;

  const pools = {};
  CAT_ORDER.filter(c => cats.includes(c)).forEach(c => {
    let pool = U.questions.filter(q => q.cat === c);
    if (c === "vocab") pool = pool.concat(U.words.map(makeWordQuestion));
    pools[c] = shuffle(pool);
  });

  // 범위마다 골고루 돌아가며 뽑아요
  const picked = {};
  Object.keys(pools).forEach(c => { picked[c] = []; });
  let total = 0, added = true;
  while (total < count && added) {
    added = false;
    for (const c of Object.keys(pools)) {
      if (total >= count) break;
      if (pools[c].length) { picked[c].push(pools[c].pop()); total++; added = true; }
    }
  }
  sheet = [];
  CAT_ORDER.forEach(c => (picked[c] || []).forEach(q => sheet.push(prepare(q))));
  renderSheet();
}

/* ── 문제지 그리기 ── */
function renderSheet() {
  const box = document.getElementById("sheet");
  if (!sheet.length) {
    box.innerHTML = `<p class="empty">범위를 하나 이상 고르고 '새 문제지 만들기'를 눌러 주세요.</p>`;
    return;
  }

  let html = `
    <div class="sheet-head">
      <h2 class="one-line fit">${U.grade} ${U.subject} ${U.lesson} 문제지</h2>
      <div class="sheet-meta">
        <span>이름 <b></b></span><span>날짜 <b></b></span><span>점수 <b></b> / ${sheet.length}</span>
      </div>
    </div>
    <div class="score" id="score" hidden></div>`;

  let lastCat = null;
  sheet.forEach((q, i) => {
    if (q.cat !== lastCat) {
      html += `<div class="section-title">${CAT_NAMES[q.cat]}</div>`;
      lastCat = q.cat;
    }
    html += `<div class="q" data-i="${i}">
      <div class="q-text"><span class="q-num">${i + 1}.</span><span>${q.q}</span>${englishLines(q.q).length ? sayButton(englishLines(q.q).join(" ")) : ""}</div>
      <div class="q-body">${answerArea(q, i)}</div>
      <div class="result" hidden></div>
    </div>`;
  });

  html += `<div class="answers">
    <h2>정답과 해설</h2>
    <ol>${sheet.map(q => `<li><b>${answerText(q)}</b> <span class="exp">${q.explain || ""}</span></li>`).join("")}</ol>
  </div>`;

  box.innerHTML = html;
  box.querySelectorAll(".choice").forEach(b => b.addEventListener("click", () => {
    const q = sheet[+b.dataset.i];
    q.user = b.dataset.v === "true" ? true : b.dataset.v === "false" ? false : +b.dataset.v;
    b.parentElement.querySelectorAll(".choice").forEach(x => x.classList.toggle("sel", x === b));
  }));
  box.querySelectorAll(".answer-in").forEach(inp => inp.addEventListener("input", () => {
    sheet[+inp.dataset.i].user = inp.value;
  }));
  fitTitles(box);
}

function answerArea(q, i) {
  if (q.type === "mc") {
    // 보기가 짧으면 프린트할 때 두 줄로 나란히 놓아 종이를 아껴요
    const short = q.choices.every(c => c.length <= 26 && !c.includes("\n")) ? " short" : "";
    return `<div class="choices${short}">${q.choices.map((c, k) =>
      `<button class="choice" data-i="${i}" data-v="${k}"><span class="mark">${MARKS[k]}</span><span>${c}</span></button>`).join("")}</div>`;
  }
  if (q.type === "tf") {
    return `<div class="tf">
      <button class="choice" data-i="${i}" data-v="true">O</button>
      <button class="choice" data-i="${i}" data-v="false">X</button>
    </div>`;
  }
  const words = q.type === "order" ? `<div class="words-box">( ${q.words.join(" / ")} )</div>` : "";
  const long = q.type === "blank" ? "" : " long";
  return `${words}
    <input class="answer-in" data-i="${i}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="답을 쓰세요">
    <div class="print-line${long}"></div>`;
}

function answerText(q) {
  if (q.type === "mc") return `${MARKS[q.answer]} ${q.choices[q.answer].replace(/\n/g, " / ")}`;
  if (q.type === "tf") return q.answer ? "O" : "X";
  return q.answer[0];
}

/* ── 채점 ── */
function norm(s) {
  return String(s).toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/\bisn't\b/g, "is not").replace(/\bit's\b/g, "it is")
    .replace(/\bdoesn't\b/g, "does not").replace(/\bdon't\b/g, "do not").replace(/\bi'm\b/g, "i am")
    .replace(/[.,!?]/g, " ")
    .replace(/\s+/g, " ").trim();
}

function isRight(q) {
  if (q.user === null || q.user === "") return false;
  if (q.type === "mc" || q.type === "tf") return q.user === q.answer;
  return q.answer.some(a => norm(a) === norm(q.user));
}

function grade() {
  if (!sheet.length) return;
  let ok = 0;
  document.querySelectorAll("#sheet .q").forEach(el => {
    const q = sheet[+el.dataset.i];
    const right = isRight(q);
    if (right) ok++;
    el.classList.toggle("is-ok", right);
    el.classList.toggle("is-bad", !right);
    el.querySelectorAll(".choice").forEach(b => {
      const v = b.dataset.v === "true" ? true : b.dataset.v === "false" ? false : +b.dataset.v;
      b.classList.toggle("right", v === q.answer);
      b.classList.toggle("wrong", v === q.user && v !== q.answer);
    });
    const r = el.querySelector(".result");
    r.hidden = false;
    r.className = "result " + (right ? "ok" : "bad");
    const head = right ? "맞았어요!" :
      (q.user === null || q.user === "") ? `답을 쓰지 않았어요. 정답: ${answerText(q)}` : `정답: ${answerText(q)}`;
    // 정답이 영어 문장·단어면 정답도 들어 볼 수 있어요
    const said = q.type !== "tf" && !HANGUL.test(answerText(q)) ? sayButton(answerText(q).replace(/^[①-⑤]\s*/, ""), "정답 듣기") : "";
    r.innerHTML = `<div><b>${head}</b> ${said}</div><div class="exp">${q.explain || ""}</div>`;
  });
  const score = document.getElementById("score");
  score.hidden = false;
  score.textContent = `${sheet.length}문제 중 ${ok}문제 맞았어요!`;
  score.scrollIntoView({ behavior: "smooth", block: "center" });
}

function setupQuiz() {
  document.getElementById("makeBtn").addEventListener("click", buildSheet);
  document.getElementById("gradeBtn").addEventListener("click", grade);
  document.getElementById("retryBtn").addEventListener("click", () => {
    sheet.forEach(q => { q.user = null; });
    renderSheet();
  });
  // 정답지 넣기: 버튼으로 프린트하든 Ctrl+P로 하든 체크 상태를 따라요
  const withAnswers = document.getElementById("withAnswers");
  const syncAnswers = () => document.body.classList.toggle("print-answers", withAnswers.checked);
  withAnswers.addEventListener("change", syncAnswers);
  window.addEventListener("beforeprint", syncAnswers);
  syncAnswers();
  document.getElementById("printBtn").addEventListener("click", () => {
    if (!sheet.length) buildSheet();
    window.print();
  });
  buildSheet();
}
