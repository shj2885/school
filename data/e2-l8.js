// 중2 영어 (동아 윤정미) Lesson 8 A Butterfly That Changed the Future
// 문제 유형: mc(고르기) · blank(빈칸) · order(배열) · tf(O/X) · write(쓰기)
// mc의 answer는 choices 안의 번호(0부터), blank·order·write의 answer는 맞는 답 목록
window.UNIT = {
  id: "e2-l8",
  grade: "중2",
  subject: "영어",
  book: "동아 윤정미",
  lesson: "Lesson 8",
  title: "A Butterfly That Changed the Future",
  korTitle: "미래를 바꾼 나비",

  concepts: [
    {
      tag: "문법",
      title: "현재완료 (have/has + 과거분사)",
      body: `
        <p>과거에 한 일이 <b>지금까지 이어져 있을 때</b> 써요.</p>
        <div class="formula">have / has + <i>과거분사</i></div>
        <div class="ex">
          <p>I<b>'ve never seen</b> such a huge thing.</p>
          <p class="ko">나는 그렇게 거대한 것을 본 적이 없어.</p>
          <p>We<b>'ve just arrived</b> in the jungle.</p>
          <p class="ko">우리는 방금 정글에 도착했어.</p>
        </div>
        <ul class="points">
          <li>부정문: have/has + <b>not(never)</b> + 과거분사 → I <b>haven't finished</b> it yet.</li>
          <li>의문문: <b>Have/Has</b> + 주어 + 과거분사 ~? → <b>Have</b> you ever <b>tried</b> gimbap?</li>
          <li>주어가 3인칭 단수(he, she, Tom)면 <b>has</b>, 나머지는 <b>have</b>예요.</li>
          <li>헷갈리는 과거분사: eat → <b>eaten</b>, see → <b>seen</b>, go → <b>gone</b>, run → <b>run</b>, break → <b>broken</b></li>
        </ul>`
    },
    {
      tag: "문법",
      title: "현재완료의 네 가지 뜻",
      body: `
        <div class="table-wrap"><table class="fest">
          <thead><tr><th>뜻</th><th>해석</th><th>같이 쓰는 말 · 예문</th></tr></thead>
          <tbody>
            <tr><td><b>경험</b></td><td>~한 적이 있다</td>
                <td>ever, never, before, once, twice<br>Have you <b>ever</b> been to Jeju-do?</td></tr>
            <tr><td><b>완료</b></td><td>(막, 벌써) ~했다</td>
                <td>just, already, yet<br>The concert has <b>already</b> started.</td></tr>
            <tr><td><b>계속</b></td><td>(지금까지) ~해 왔다</td>
                <td>for + 기간, since + 시작한 때<br>He has lived here <b>since</b> 2010.</td></tr>
            <tr><td><b>결과</b></td><td>~해 버렸다 (그래서 지금은…)</td>
                <td>lost, gone 등<br>Kevin has <b>lost</b> his phone. (지금 휴대폰이 없다)</td></tr>
          </tbody>
        </table></div>
        <ul class="points">
          <li><b>for</b> 다음에는 '얼마 동안'(for 10 years), <b>since</b> 다음에는 '언제부터'(since 2020)가 와요.</li>
        </ul>`
    },
    {
      tag: "문법",
      title: "현재완료와 과거시제 구별",
      body: `
        <p>시험에 가장 많이 나오는 함정이에요! <b>지난 때를 콕 집어 말하는 말</b>이 있으면 현재완료를 못 써요.</p>
        <div class="ex">
          <p>Sue <b>visited</b> Paris last summer.</p>
          <p class="ko">Sue는 지난여름에 파리를 방문했다. (과거)</p>
          <p>Sue <b>has visited</b> Paris many times.</p>
          <p class="ko">Sue는 파리를 여러 번 방문한 적이 있다. (현재완료)</p>
          <p><s>Sue has visited Paris in 2024.</s></p>
        </div>
        <ul class="points">
          <li>현재완료와 같이 못 쓰는 말: <b>yesterday, last ~, ~ ago, in 2020, when ~</b></li>
          <li>She <s>has watched</s> the movie last night. ✕ → She <b>watched</b> the movie last night. ○</li>
          <li>두 문장 합치기: Mina started to study Spanish three years ago. She still studies it.<br>→ Mina <b>has studied</b> Spanish <b>for three years</b>.</li>
        </ul>`
    },
    {
      tag: "문법",
      title: "-thing + 형용사",
      body: `
        <p>보통 형용사는 명사 <b>앞</b>에 오지만, <b>something, anything, nothing</b>은 형용사가 <b>뒤</b>에 와요.</p>
        <div class="formula">-thing + <i>형용사</i> (+ to <i>동사원형</i>)</div>
        <div class="ex">
          <p>I don't want you to do <b>anything foolish</b>.</p>
          <p class="ko">나는 네가 어리석은 일을 하지 않기를 바라.</p>
          <p>I need <b>something cold to drink</b>.</p>
          <p class="ko">나는 마실 차가운 것이 필요해.</p>
        </div>
        <ul class="points">
          <li><s>strange something</s> ✕ → <b>something strange</b> ○</li>
          <li>to부정사까지 붙으면 순서는 <b>-thing → 형용사 → to + 동사원형</b>이에요.</li>
          <li>뒤에 오는 말은 꼭 <b>형용사</b>! something <s>specially</s>(부사) ✕ → something <b>special</b> ○, anything <s>interest</s> ✕ → anything <b>interesting</b> ○</li>
        </ul>`
    },
    {
      tag: "본문",
      title: "이야기 순서 한눈에 보기",
      body: `
        <p>Ray Bradbury가 쓴 시간 여행 이야기를 바탕으로 한 글이에요.</p>
        <div class="table-wrap"><table class="fest">
          <thead><tr><th>장면</th><th>무슨 일이 있었나요?</th></tr></thead>
          <tbody>
            <tr><td><b>1</b><br>사무실</td><td>Eckels가 Time Travel 회사에 가요. 벽에는 큰 간판이 있고, TV 뉴스에는 새 대통령 <b>Keith</b> 씨가 나와요. 창립자 Parker 씨가 <b>6천만 년 전 정글</b>로 데려다 주겠다고 하고, 가이드 <b>Travis</b>의 지시를 꼭 따르라고 해요.</td></tr>
            <tr><td><b>2</b><br>도착</td><td>Travis가 규칙을 말해요. <b>길(path)에서 절대 벗어나지 말고, 아무것도 만지지 말 것.</b> 여기서의 작은 변화가 미래에 상상도 못 할 일을 일으킬 수 있기 때문이에요.</td></tr>
            <tr><td><b>3</b><br>정글</td><td>정글은 <b>안개로 덮여</b> 있고 아주 조용해요. 모두 길을 따라 걸어요.</td></tr>
            <tr><td><b>4</b><br>T. rex</td><td>100미터 앞에 티라노사우루스가 나타나요. 너무 무서워진 Eckels는 뛰다가 <b>실수로 길을 벗어나요</b>. 공룡이 큰 소리로 울부짖으며 달려와요.</td></tr>
            <tr><td><b>5</b><br>타임머신</td><td>Travis가 "당신이 우리 모두를 위험에 빠뜨렸어요"라며 화를 내요. Eckels는 "신발에 <b>진흙</b>이 조금 묻었을 뿐"이라고 해요.</td></tr>
            <tr><td><b>6</b><br>현재</td><td>돌아오니 <b>간판의 철자가 이상하게</b> 바뀌어 있고, 뉴스의 <b>대통령도 Keith 씨가 아니에요</b>. 오른쪽 신발 진흙 속에서 <b>죽은 작은 나비</b>를 발견해요.</td></tr>
          </tbody>
        </table></div>
        <p class="tip">본문 전체 글은 교과서 139~144쪽을 펴 놓고 함께 보세요.</p>`
    },
    {
      tag: "본문",
      title: "Eckels의 마음 변화와 주제",
      body: `
        <div class="formula">excited → scared · terrified → confused → shocked</div>
        <ul class="points">
          <li>정글에 도착했을 때: <b>excited</b> (신난)</li>
          <li>T. rex를 봤을 때: <b>scared, terrified</b> (무서운) — "I can't breathe."</li>
          <li>돌아와서 간판과 대통령이 바뀐 걸 봤을 때: <b>confused</b> (혼란스러운)</li>
          <li>죽은 나비를 발견했을 때: <b>shocked</b> (충격을 받은)</li>
          <li>주제: <b>작은 행동 하나가 미래를 크게 바꿀 수 있다</b> (나비효과, butterfly effect)</li>
        </ul>
        <div class="ex">
          <p>A little change here can cause something unthinkable in the future.</p>
          <p class="ko">이곳에서의 작은 변화가 미래에 상상할 수 없는 일을 일으킬 수 있습니다.</p>
        </div>`
    }
  ],

  // 단어: 문제지를 만들 때 단어 문제도 여기서 자동으로 만들어요
  words: [
    ["appear", "나타나다"],
    ["at any time", "아무 때나, 언제라도"],
    ["be covered in", "~로 덮이다"],
    ["breathe", "숨을 쉬다, 호흡하다"],
    ["by accident", "우연히, 실수로"],
    ["cause", "일으키다, ~의 원인이 되다"],
    ["confused", "혼란스러워하는"],
    ["dinosaur", "공룡"],
    ["except", "~을 제외하고는"],
    ["fog", "안개"],
    ["foolish", "어리석은"],
    ["founder", "설립자, 창립자"],
    ["instruction", "지시"],
    ["jungle", "정글, 밀림"],
    ["million", "100만"],
    ["mud", "진흙"],
    ["panic", "겁에 질려 어쩔 줄 모르다"],
    ["path", "길"],
    ["present", "현재, 지금"],
    ["president", "대통령"],
    ["put ~ in danger", "~을 위험에 빠뜨리다"],
    ["roar", "포효, 으르렁거림"],
    ["scared", "무서워하는, 겁먹은"],
    ["shocked", "충격을 받은"],
    ["silence", "침묵, 고요"],
    ["stare", "빤히 쳐다보다, 응시하다"],
    ["suddenly", "갑자기"],
    ["terrified", "몹시 무서워하는"],
    ["toward", "~을 향하여"],
    ["unthinkable", "상상도 할 수 없는"],
    ["whisper", "속삭이다"]
  ],

  questions: [
    // ── 문법: 현재완료 ──
    { cat: "grammar", type: "mc", q: "괄호 안에서 알맞은 것은?\nHave you ever ( ) gimbap?", choices: ["try", "tried", "tries", "trying"], answer: 1, explain: "Have + 주어 + 과거분사 ~? → tried" },
    { cat: "grammar", type: "mc", q: "괄호 안에서 알맞은 것은?\nShe ( ) lost her glasses.", choices: ["has", "have", "is", "did"], answer: 0, explain: "주어 She가 3인칭 단수라서 has" },
    { cat: "grammar", type: "mc", q: "어법상 <u>틀린</u> 문장은?", choices: ["The show has already started.", "I haven't seen her for five years.", "She has watched the movie last night.", "My uncle has lived in Japan since 2010."], answer: 2, explain: "last night(지난밤)처럼 지난 때를 콕 집는 말은 현재완료와 못 써요. → She watched the movie last night." },
    { cat: "grammar", type: "mc", q: "빈칸에 알맞은 것은?\nMr. Kim has lived in this city ______.", choices: ["for 10 years", "in 2020", "last month", "three years ago"], answer: 0, explain: "현재완료는 for + 기간과 함께 써요. in 2020, last month, ago는 과거시제와 써요." },
    { cat: "grammar", type: "mc", q: "대화의 빈칸에 알맞은 것은?\nA: ______ she ever run a marathon?\nB: Yes, she has.", choices: ["Has", "Have", "Did", "Does"], answer: 0, explain: "대답이 she has니까 Has she ~?로 물어요." },
    { cat: "grammar", type: "mc", q: "어법상 올바른 문장은?", choices: ["He has broke his phone.", "Has she ever went to Canada?", "They haven't finished their project yet.", "Did you ever spoken in front of people?"], answer: 2, explain: "haven't + 과거분사(finished) ○. broke → broken, went → gone/been, spoken → speak" },
    { cat: "grammar", type: "mc", q: "밑줄 친 부분이 어법상 <u>틀린</u> 것은?", choices: ["I have <u>lost</u> my wallet.", "Have you ever <u>ate</u> Indian food?", "He has just <u>cleaned</u> his room.", "She has <u>been</u> sick since last Friday."], answer: 1, explain: "eat의 과거분사는 eaten이에요. → Have you ever eaten Indian food?" },
    { cat: "grammar", type: "mc", q: "밑줄 친 현재완료의 뜻이 '경험'인 것은?", choices: ["I <u>have just eaten</u> a sandwich.", "She <u>has never seen</u> a dolphin.", "He <u>has lived</u> here since last year.", "Tom <u>has lost</u> his umbrella."], answer: 1, explain: "never(한 번도 ~않다)는 경험을 나타내요. just는 완료, since는 계속, lost는 결과예요." },
    { cat: "grammar", type: "blank", q: "I ______ known Jack since 2014.", answer: ["have"], explain: "주어 I → have + 과거분사(known)" },
    { cat: "grammar", type: "blank", q: "The students have ______ (learn) Spanish for three months.  ← 괄호 안의 말을 알맞게 바꾸세요.", answer: ["learned", "learnt"], explain: "have 다음에는 과거분사 learned" },
    { cat: "grammar", type: "blank", q: "My uncle has lived in Canada ______ 2010.", answer: ["since"], explain: "2010처럼 '언제부터'가 오면 since" },
    { cat: "grammar", type: "blank", q: "She has worked at the coffee shop ______ two months.", answer: ["for"], explain: "two months처럼 '얼마 동안'이 오면 for" },
    { cat: "grammar", type: "order", q: "주어진 단어를 바르게 배열하세요. (우리는 아직 그 과제를 끝내지 않았다.)", words: ["we", "haven't", "finished", "the project", "yet"], answer: ["We haven't finished the project yet."], explain: "haven't + 과거분사 ~ yet" },
    { cat: "grammar", type: "order", q: "주어진 단어를 바르게 배열하세요. (너는 산에 올라 본 적이 있니?)", words: ["have", "you", "ever", "climbed", "a mountain"], answer: ["Have you ever climbed a mountain?"], explain: "Have + 주어 + ever + 과거분사 ~?" },
    { cat: "grammar", type: "write", q: "현재완료를 써서 영어로 쓰세요. (be, Jeju-do, twice)\n나는 제주도에 두 번 가 본 적이 있다.", answer: ["I have been to Jeju-do twice.", "I've been to Jeju-do twice."], explain: "'가 본 적이 있다'는 have been to ~" },
    { cat: "grammar", type: "write", q: "현재완료를 써서 영어로 쓰세요. (just, finish, homework)\n그녀는 막 자신의 숙제를 끝냈다.", answer: ["She has just finished her homework.", "She's just finished her homework."], explain: "has + just + 과거분사" },
    { cat: "grammar", type: "write", q: "두 문장을 현재완료를 써서 한 문장으로 쓰세요.\nTom lost his umbrella. He doesn't have it now.", answer: ["Tom has lost his umbrella."], explain: "잃어버려서 지금 없다 → 현재완료 '결과'" },
    { cat: "grammar", type: "write", q: "두 문장을 현재완료를 써서 한 문장으로 쓰세요.\nMina started to study Spanish three years ago. She still studies Spanish.", answer: ["Mina has studied Spanish for three years.", "Mina has been studying Spanish for three years."], explain: "3년 전부터 지금까지 → has studied ~ for three years" },

    // ── 문법: -thing + 형용사 ──
    { cat: "grammar", type: "mc", q: "괄호 안에서 알맞은 것은?\nHe saw something ( ).", choices: ["strange", "stranger", "strangely", "strangeness"], answer: 0, explain: "something 뒤에는 형용사 strange" },
    { cat: "grammar", type: "mc", q: "괄호 안에서 알맞은 것은?\nThere is nothing ( ) on TV today.", choices: ["interest", "interested", "interesting", "interestingly"], answer: 2, explain: "TV 프로그램이 재미있다 → interesting" },
    { cat: "grammar", type: "mc", q: "우리말을 영어로 바르게 옮긴 것은?\n나는 방금 무언가 이상한 것을 들었다.", choices: ["I just heard strange something.", "I've just heard something strange.", "I've just heard strange something.", "I'm hearing something strange now."], answer: 1, explain: "현재완료(have just heard) + something strange" },
    { cat: "grammar", type: "mc", q: "주어진 말을 바르게 배열한 것은?\n오늘 입을 만한 좋은 옷이 없어.", choices: ["I don't have nice anything to wear today.", "I don't have anything to wear nice today.", "I don't have anything nice to wear today.", "I don't have to wear today anything nice."], answer: 2, explain: "-thing → 형용사 → to부정사 순서: anything nice to wear" },
    { cat: "grammar", type: "mc", q: "어법상 <u>틀린</u> 문장은?", choices: ["She bought useful something in the store.", "Did you see anything unusual last night?", "There is something interesting in the bag.", "He said nothing important at the meeting."], answer: 0, explain: "형용사는 -thing 뒤에 와요. → something useful" },
    { cat: "grammar", type: "blank", q: "I need something cold ______ drink.", answer: ["to"], explain: "something + 형용사 + to + 동사원형" },
    { cat: "grammar", type: "order", q: "주어진 단어를 바르게 배열하세요. (그들은 우리에게 맛있는 것을 가져왔다.)", words: ["they", "brought", "something", "delicious", "for us"], answer: ["They brought something delicious for us."], explain: "something delicious" },
    { cat: "grammar", type: "order", q: "주어진 단어를 바르게 배열하세요. (새로운 무언가를 시도해 보고 싶니?)", words: ["do", "you", "want", "to try", "something", "new"], answer: ["Do you want to try something new?"], explain: "want to try + something new" },
    { cat: "grammar", type: "write", q: "주어진 말을 이용해 문장을 완성하세요. (want, do, anything, foolish)\n나는 네가 어떤 어리석은 행동도 하지 않기를 바란다.\nI don't ______.", answer: ["I don't want you to do anything foolish."], explain: "want + 사람 + to do + anything foolish" },
    { cat: "grammar", type: "write", q: "밑줄 친 부분을 바르게 고쳐 문장 전체를 쓰세요.\nI want <u>sweet something</u> after lunch.", answer: ["I want something sweet after lunch."], explain: "sweet something → something sweet" },

    // ── 단어(문장 속에서) ──
    { cat: "vocab", type: "mc", q: "빈칸에 공통으로 알맞은 것은?\n• I won't put you ___ danger.\n• The road was covered ___ snow.", choices: ["in", "at", "by", "to"], answer: 0, explain: "put ~ in danger, be covered in" },
    { cat: "vocab", type: "mc", q: "빈칸에 들어갈 말이 바르게 짝지어진 것은?\n• They met at the airport ___ accident.\n• You can visit us ___ any time.", choices: ["by - at", "at - by", "in - at", "by - in"], answer: 0, explain: "by accident(우연히), at any time(언제라도)" },
    { cat: "vocab", type: "mc", q: "두 단어의 관계가 나머지와 <u>다른</u> 것은?", choices: ["quiet - loud", "huge - small", "smart - foolish", "terrified - scared"], answer: 3, explain: "terrified와 scared는 뜻이 비슷한 말, 나머지는 반대말이에요." },
    { cat: "vocab", type: "mc", q: "빈칸에 알맞은 것은?\nThe air was so smoky that it was hard to ______.", choices: ["breathe", "stare", "whisper", "appear"], answer: 0, explain: "연기가 자욱해서 숨쉬기 힘들다 → breathe" },
    { cat: "vocab", type: "mc", q: "영영 풀이에 알맞은 단어는?\nthe time that is happening now", choices: ["present", "president", "silence", "instruction"], answer: 0, explain: "present: 현재, 지금 (president는 대통령)" },
    { cat: "vocab", type: "mc", q: "영영 풀이에 알맞은 단어는?\nto speak very quietly so that only the person close to you can hear you", choices: ["whisper", "roar", "panic", "shout"], answer: 0, explain: "whisper: 속삭이다" },
    { cat: "vocab", type: "mc", q: "영영 풀이에 알맞은 단어는?\nimpossible to imagine or accept", choices: ["unthinkable", "confused", "foolish", "shocked"], answer: 0, explain: "unthinkable: 상상도 할 수 없는" },
    { cat: "vocab", type: "blank", q: "Everyone ______ Tom came to the party.  (~을 제외하고)", answer: ["except"], explain: "except: ~을 제외하고는" },
    { cat: "vocab", type: "blank", q: "Because of the thick ______, the airplane couldn't land on time.  (안개)", answer: ["fog"], explain: "fog: 안개" },
    { cat: "vocab", type: "blank", q: "He ______ at the painting for a long time.  (빤히 쳐다보았다)", answer: ["stared"], explain: "stare의 과거형 stared (stare at: ~을 쳐다보다)" },
    { cat: "vocab", type: "blank", q: "My dog ran ______ me when I called his name.  (~을 향하여)", answer: ["toward", "towards"], explain: "toward: ~을 향하여" },

    // ── 본문 내용 ──
    { cat: "reading", type: "tf", q: "Eckels는 항상 공룡을 보고 싶어 했다.", answer: true, explain: "I've always wanted to see a dinosaur." },
    { cat: "reading", type: "tf", q: "Parker 씨는 Eckels와 함께 시간 여행을 떠났다.", answer: false, explain: "Parker 씨는 회사 창립자이고, 함께 간 가이드는 Travis예요." },
    { cat: "reading", type: "tf", q: "타임머신은 10분 후에 출발할 예정이었다.", answer: true, explain: "There's a time machine that leaves in 10 minutes." },
    { cat: "reading", type: "tf", q: "Travis는 길을 벗어나도 괜찮지만 아무것도 만지지 말라고 했다.", answer: false, explain: "길을 절대 벗어나면 안 되고(must not leave it), 아무것도 만지면 안 돼요." },
    { cat: "reading", type: "tf", q: "정글은 안개로 덮여 있었고 매우 조용했다.", answer: true, explain: "The jungle was covered in fog. It was very quiet." },
    { cat: "reading", type: "tf", q: "Eckels는 공룡을 보고 기뻐하며 환호했다.", answer: false, explain: "너무 무서워서 숨을 쉴 수 없다고 했어요. (I'm so scared. I can't breathe.)" },
    { cat: "reading", type: "tf", q: "Eckels는 너무 무서워서 실수로 길을 벗어났다.", answer: true, explain: "He was so terrified that he left the path by accident." },
    { cat: "reading", type: "tf", q: "현재로 돌아오니 TV 뉴스에 나온 대통령은 여전히 Keith 씨였다.", answer: false, explain: "새 대통령이 나왔지만 Keith 씨가 아니었어요." },
    { cat: "reading", type: "mc", q: "타임머신이 도착한 곳은?", choices: ["6천만 년 전의 정글", "6백만 년 전의 사막", "60년 전의 도시", "미래의 정글"], answer: 0, explain: "the jungle of 60 million years ago" },
    { cat: "reading", type: "mc", q: "Travis가 아무것도 만지지 말라고 한 까닭은?", choices: ["작은 변화가 미래에 큰 일을 일으킬 수 있어서", "공룡이 배가 고파서", "정글에 안개가 끼어서", "타임머신이 곧 떠나서"], answer: 0, explain: "A little change here can cause something unthinkable in the future." },
    { cat: "reading", type: "mc", q: "현재로 돌아온 뒤 Eckels의 마음으로 알맞은 것은?", choices: ["puzzled and shocked", "happy and excited", "relieved and thankful", "angry and sad"], answer: 0, explain: "혼란스러워하다가(confused) 나비를 보고 충격을 받았어요(shocked)." },
    { cat: "reading", type: "mc", q: "T. rex가 나타난 장면의 분위기로 알맞은 것은?", choices: ["terrifying", "calm", "boring", "disappointing"], answer: 0, explain: "공룡이 울부짖으며 달려오는 무서운(terrifying) 장면이에요." },
    { cat: "reading", type: "mc", q: "현재로 돌아왔을 때 바뀐 것 두 가지는?", choices: ["간판의 철자와 대통령", "사무실 벽 색과 TV", "Parker 씨와 Travis", "타임머신과 정글"], answer: 0, explain: "간판 철자가 NAIM ANY YEER…로 바뀌고, 대통령이 Keith 씨가 아니었어요." },
    { cat: "reading", type: "blank", q: "In the mud on his right shoe, Eckels found a small dead ______.", answer: ["butterfly"], explain: "오른쪽 신발 진흙 속에서 죽은 작은 나비를 발견했어요." },
    { cat: "reading", type: "blank", q: "\"You put all of us in ______,\" said Travis.  (위험)", answer: ["danger"], explain: "put ~ in danger: ~을 위험에 빠뜨리다" },
    { cat: "reading", type: "write", q: "본문에 나온 '작은 변화가 큰 일을 일으키는 것'을 무엇이라고 부르는지 영어로 쓰세요. (나비 ○○)", answer: ["butterfly effect", "the butterfly effect"], explain: "the butterfly effect: 나비효과" }
  ]
};
