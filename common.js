// 제목·이름은 꺾지 않고 한 줄로: 넘치면 글자 크기를 줄여서 맞춰요
function fitTitles(root) {
  (root || document).querySelectorAll(".fit").forEach(el => {
    el.style.whiteSpace = "nowrap";
    el.style.fontSize = "";
    let size = parseFloat(getComputedStyle(el).fontSize);
    while (el.scrollWidth > el.clientWidth + 1 && size > 10) {
      size -= 0.5;
      el.style.fontSize = size + "px";
    }
  });
}
window.addEventListener("load", () => fitTitles());

/* ── 영어 읽어 주기 (브라우저에 들어 있는 음성을 써서 따로 돈이 들지 않아요) ── */
const TTS = {
  ok: "speechSynthesis" in window && "SpeechSynthesisUtterance" in window,
  voice: null,
  slow: false,
  current: null
};

try { TTS.slow = localStorage.getItem("tts-slow") === "1"; } catch (e) {}

// 미국 영어 목소리를 먼저 찾고, 없으면 아무 영어 목소리나 써요
function pickVoice() {
  const voices = speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang));
  const liked = /Google US English|Samantha|Aria|Jenny|Zira|Natural/i;
  TTS.voice = voices.find(v => /en[-_]US/i.test(v.lang) && liked.test(v.name))
    || voices.find(v => /en[-_]US/i.test(v.lang))
    || voices[0] || null;
}
if (TTS.ok) {
  pickVoice();
  speechSynthesis.addEventListener("voiceschanged", pickVoice);
}

// 읽을 글을 다듬어요: 태그·빈칸 밑줄·대화의 A:/B: 를 정리
function cleanSpeech(text) {
  return String(text)
    .replace(/<[^>]+>/g, "")
    .replace(/_{2,}/g, ", blank, ")
    .replace(/^\s*[AB]\s*[:)]\s*/gm, "")
    .replace(/~/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/* ── 녹음 파일 (audio/index.js 목록) ──
   브라우저에 영어 목소리가 없으면 한국어 목소리가 영어를 이상하게 읽어요.
   그럴 땐 미리 녹음해 둔 영어 파일(단어·개념 예문)을 대신 틀어요. */
function audioKey(t) {
  return String(t).toLowerCase().replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim();
}
function audioFile(t) {
  const files = window.AUDIO_FILES || {};
  const f = files[audioKey(t)];
  return f ? "audio/" + f : null;
}
// 녹음이 있고, 브라우저에 영어 목소리가 없을 때만 녹음을 써요
function useRecording(t) {
  return !!audioFile(t) && (!TTS.ok || !TTS.voice);
}

// texts: 한 문장 또는 여러 문장(차례로 읽어요). btn: 누른 버튼(읽는 동안 표시)
function speak(texts, btn) {
  const wasPlaying = TTS.current === btn && TTS.playing;
  stopSpeaking();
  if (wasPlaying) return;   // 읽는 중에 같은 버튼을 다시 누르면 멈춰요

  const list = (Array.isArray(texts) ? texts : [texts]).map(cleanSpeech).filter(Boolean)
    .filter(t => TTS.ok || useRecording(t));
  if (!list.length) return;
  const run = (TTS.run || 0) + 1;
  TTS.run = run;
  TTS.current = btn || null;
  TTS.playing = true;
  if (btn) btn.classList.add("playing");

  const done = () => {
    if (TTS.run !== run) return;
    TTS.playing = false;
    if (btn) btn.classList.remove("playing");
    if (TTS.current === btn) TTS.current = null;
  };
  // 한 줄씩 차례로: 녹음이 있으면 파일을, 없으면 브라우저 목소리를 써요
  const next = k => {
    if (TTS.run !== run) return;
    if (k >= list.length) return done();
    const t = list[k];
    if (useRecording(t)) {
      const a = new Audio(audioFile(t));
      a.playbackRate = TTS.slow ? 0.75 : 1;
      TTS.audio = a;
      a.onended = () => next(k + 1);
      a.onerror = () => next(k + 1);
      a.play().catch(() => next(k + 1));
    } else {
      const u = new SpeechSynthesisUtterance(t);
      u.lang = TTS.voice ? TTS.voice.lang : "en-US";
      if (TTS.voice) u.voice = TTS.voice;
      u.rate = TTS.slow ? 0.7 : 0.95;
      u.onend = u.onerror = () => next(k + 1);
      speechSynthesis.speak(u);
    }
  };
  next(0);
}

function stopSpeaking() {
  TTS.run = (TTS.run || 0) + 1;
  TTS.playing = false;
  if (TTS.audio) { TTS.audio.pause(); TTS.audio = null; }
  if (TTS.ok) speechSynthesis.cancel();
  document.querySelectorAll(".say.playing, .btn.playing").forEach(b => b.classList.remove("playing"));
  TTS.current = null;
}

function setSlow(on) {
  TTS.slow = on;
  try { localStorage.setItem("tts-slow", on ? "1" : "0"); } catch (e) {}
}

// 스피커 버튼 하나 (data-say 에 읽을 글)
function sayButton(text, label) {
  if (!TTS.ok && !audioFile(cleanSpeech(text))) return "";
  const safe = String(text).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  return `<button type="button" class="say" data-say="${safe}" aria-label="${label || "영어로 듣기"}" title="듣기">` +
    `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M4 9v6h4l5 4V5L8 9H4z"/>` +
    `<path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>`;
}

// 화면 어디서든 스피커 버튼을 누르면 읽어요
document.addEventListener("click", e => {
  const b = e.target.closest(".say");
  if (!b) return;
  e.stopPropagation();
  e.preventDefault();
  speak(b.dataset.say, b);
}, true);
window.addEventListener("resize", () => fitTitles());
