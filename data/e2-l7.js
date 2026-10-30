// 중2 영어 (동아 윤정미) Lesson 7 Let's Enjoy Festivals
// 문제 유형: mc(고르기) · blank(빈칸) · order(배열) · tf(O/X) · write(쓰기)
// mc의 answer는 choices 안의 번호(0부터), blank·order·write의 answer는 맞는 답 목록
window.UNIT = {
  id: "e2-l7",
  grade: "중2",
  subject: "영어",
  book: "동아 윤정미",
  lesson: "Lesson 7",
  title: "Let's Enjoy Festivals",
  korTitle: "세계 여러 나라의 축제",

  concepts: [
    {
      tag: "대화",
      title: "선호 묻고 답하기",
      body: `
        <p>둘 중에서 <b>어느 것을 더 좋아하는지</b> 물을 때 써요.</p>
        <div class="ex">
          <p><span class="who">A</span> <b>Which do you like more</b>, winter <b>or</b> summer?</p>
          <p class="ko">겨울과 여름 중에서 어느 것을 더 좋아하니?</p>
          <p><span class="who">B</span> <b>I like</b> winter <b>more</b>.</p>
          <p class="ko">나는 겨울을 더 좋아해.</p>
        </div>
        <ul class="points">
          <li><b>Which</b>는 '어느 것', <b>A or B</b>는 'A와 B 중에서'라는 뜻이에요.</li>
          <li>대답은 <b>I like ○○ more.</b> 또는 <b>I prefer ○○.</b>로 해요.</li>
          <li>Yes / No로 대답하지 않아요! (Which로 물었으니까요)</li>
        </ul>`
    },
    {
      tag: "대화",
      title: "이유 묻고 답하기",
      body: `
        <p>왜 그것을 더 좋아하는지 <b>이유</b>를 물을 때 써요.</p>
        <div class="ex">
          <p><span class="who">A</span> <b>Why do you like</b> winter <b>more</b>?</p>
          <p class="ko">너는 왜 겨울을 더 좋아하니?</p>
          <p><span class="who">B</span> I love winter activities <b>like</b> skiing.</p>
          <p class="ko">나는 스키 같은 겨울 활동을 정말 좋아해.</p>
        </div>
        <ul class="points">
          <li>이유는 <b>I think ~.</b> / <b>Because ~.</b> / <b>I love ~.</b> 등으로 말해요.</li>
          <li>예) I think dogs are cuter. (나는 개가 더 귀엽다고 생각해.)</li>
          <li><b>like</b> + 명사는 '~ 같은'이라는 뜻이에요. (activities like skiing: 스키 같은 활동)</li>
        </ul>`
    },
    {
      tag: "문법",
      title: "It ~ to부정사 (가주어·진주어)",
      body: `
        <p>'<b>~하는 것은 …하다</b>'를 말할 때, 긴 주어(to + 동사원형)를 뒤로 보내고 그 자리에 <b>It</b>을 써요.</p>
        <div class="formula">It is <i>형용사</i> to <i>동사원형</i> ~.</div>
        <div class="ex">
          <p><s>To remember dead people</s> is important.</p>
          <p>→ <b>It</b> is important <b>to remember</b> dead people.</p>
          <p class="ko">죽은 사람들을 기억하는 것은 중요하다.</p>
        </div>
        <ul class="points">
          <li><b>It</b>은 '그것'이라고 해석하지 않아요. 진짜 주어는 뒤의 <b>to ~</b>예요.</li>
          <li>to 뒤에는 꼭 <b>동사원형</b>! (to remember ○ / to remembers ✕ / remember ✕)</li>
          <li>부정문: It <b>isn't</b> easy to exercise every day. (매일 운동하는 것은 쉽지 않다.)</li>
          <li>의문문: <b>Is it</b> possible to learn a new language? (새 언어를 배우는 것이 가능하니?)</li>
          <li>자주 쓰는 형용사: fun, exciting, interesting, important, hard, easy, possible</li>
        </ul>`
    },
    {
      tag: "문법",
      title: "call A B (A를 B라고 부르다)",
      body: `
        <p>누군가나 무엇을 <b>어떤 이름으로 부른다</b>고 말할 때 써요.</p>
        <div class="formula">call + <i>A(누구를·무엇을)</i> + <i>B(이름)</i></div>
        <div class="ex">
          <p>They <b>call</b> <u>it</u> <u>the Midsummer festival</u>.</p>
          <p class="ko">그들은 그것을 하지 축제라고 부른다.</p>
          <p>My friends <b>call</b> <u>me</u> <u>Bob</u>.</p>
          <p class="ko">내 친구들은 나를 Bob이라고 부른다.</p>
        </div>
        <ul class="points">
          <li>순서가 중요해요! <b>call 다음에 '누구를'</b>, 그다음에 <b>'이름'</b>이 와요.</li>
          <li>They call <b>it</b> Big Ben. ○ / They call Big Ben <b>it</b>. ✕</li>
          <li>A 자리에 대명사가 오면 목적격으로 써요: me, you, him, her, it, us, them</li>
          <li>주어가 3인칭 단수면 <b>calls</b>: Mia <b>calls</b> her little sister Baby.</li>
        </ul>`
    },
    {
      tag: "본문",
      title: "세계의 계절 축제 한눈에 보기",
      body: `
        <p>본문에는 계절마다 열리는 축제 네 가지가 나와요.</p>
        <div class="table-wrap"><table class="fest">
          <thead><tr><th>축제</th><th>언제 · 어디서</th><th>무엇을 하나요?</th></tr></thead>
          <tbody>
            <tr><td><b>Fallas</b><br><span class="season s-spring">봄</span></td>
                <td>3월 15~19일<br>스페인 발렌시아</td>
                <td>봄이 온 것을 축하해요. 퍼레이드와 불꽃놀이를 즐기고, 거대한 나무 조각상(fallas)을 마지막 날 <b>태워요</b>. 태우는 것은 <b>옛것과 작별하고 새로운 시작을 맞이함</b>을 상징해요.</td></tr>
            <tr><td><b>Midsummer</b><br><span class="season s-summer">여름</span></td>
                <td>6월 19~25일 사이 금요일 저녁 ~ 일요일<br>스웨덴</td>
                <td>겨울이 길고 어두워서 여름을 특히 반겨요. <b>일 년 중 낮이 가장 긴 날</b>을 축하하며, 꽃과 나뭇잎으로 꾸민 긴 기둥 주위에서 전통 춤을 춰요. 해가 거의 지지 않아 <b>밤새</b> 즐겨요.</td></tr>
            <tr><td><b>Day of the Dead</b><br><span class="season s-fall">가을</span></td>
                <td>11월 1~2일<br>멕시코</td>
                <td>일 년에 한 번 죽은 사람들이 가족과 친구를 만나러 집에 온다고 믿어요. 집에 <b>제단</b>을 차리고, <b>묘지</b>에서 큰 파티를 하고, <b>해골</b>처럼 분장하고 퍼레이드를 해요.</td></tr>
            <tr><td><b>Fur Rondy</b><br><span class="season s-winter">겨울</span></td>
                <td>2월 말<br>미국 알래스카</td>
                <td>세계에서 가장 큰 겨울 축제 중 하나예요. 겨울 스포츠와 알래스카 전통 놀이를 즐겨요. <b>순록 달리기</b>(Running of the Reindeer)에서는 재미있는 의상을 입고 순록보다 빨리 달리려고 해요. 이기는 것보다 <b>즐기는 것</b>이 중요해요!</td></tr>
          </tbody>
        </table></div>
        <p class="tip">본문 전체 글은 교과서 124~127쪽을 펴 놓고 함께 보세요.</p>`
    }
  ],

  // 단어: 문제지를 만들 때 단어 문제도 여기서 자동으로 만들어요
  words: [
    ["celebrate", "축하하다, 기념하다"],
    ["take place", "개최되다, 열리다"],
    ["parade", "퍼레이드, 행진"],
    ["fireworks", "불꽃놀이"],
    ["giant", "거대한"],
    ["wooden", "나무로 된"],
    ["statue", "조각상"],
    ["burn", "태우다"],
    ["symbolize", "상징하다"],
    ["surprisingly", "놀랍게도"],
    ["especially", "특히"],
    ["welcome", "환영하다, 반기다"],
    ["decorate", "장식하다, 꾸미다"],
    ["pole", "기둥, 막대기"],
    ["traditional", "전통적인"],
    ["hardly", "거의 ~않다"],
    ["set", "(해가) 지다"],
    ["believe", "믿다"],
    ["hold", "(행사를) 열다, 개최하다"],
    ["set up", "세우다, 차리다"],
    ["altar", "제단"],
    ["cemetery", "묘지"],
    ["dress up", "변장하다, 차려입다"],
    ["skeleton", "해골, 뼈대"],
    ["various", "다양한"],
    ["reindeer", "순록"],
    ["participate", "참가하다"],
    ["costume", "의상, 복장"],
    ["possible", "가능한"],
    ["matter", "중요하다, 문제가 되다"],
    ["seasonal", "계절의"],
    ["activity", "활동"],
    ["chance", "기회"],
    ["all night long", "밤새도록"],
    ["once a year", "일 년에 한 번"]
  ],

  questions: [
    // ── 대화 ──
    { cat: "talk", type: "blank", q: "A: ______ do you like more, cats or dogs?\nB: I like dogs more.", answer: ["Which"], explain: "둘 중 어느 것을 더 좋아하는지 물을 때는 Which를 써요." },
    { cat: "talk", type: "blank", q: "A: ______ do you like dogs more?\nB: I think dogs are cuter.", answer: ["Why"], explain: "이유를 물을 때는 Why를 써요." },
    { cat: "talk", type: "blank", q: "A: Which do you like ______, math or English?\nB: I like English more.", answer: ["more"], explain: "Which do you like more, A or B? (A와 B 중 어느 것을 더 좋아하니?)" },
    { cat: "talk", type: "mc", q: "A: Which do you like more, pizza or chicken?\nB: ____________", choices: ["I like chicken more.", "Yes, I do.", "No, I don't like it.", "I'm good at pizza."], answer: 0, explain: "Which로 물었으니 Yes/No가 아니라 '어느 것'을 골라 대답해요." },
    { cat: "talk", type: "mc", q: "A: Why do you like summer more?\nB: ____________", choices: ["I love summer activities like swimming.", "I like summer more.", "Summer or winter?", "No, I don't."], answer: 0, explain: "Why(왜)로 물었으니 이유를 말해야 해요. like swimming = 수영 같은" },
    { cat: "talk", type: "mc", q: "다음 대화 중 자연스럽지 <u>않은</u> 것은?", choices: ["A: Which do you like more, baseball or soccer?\nB: I like soccer more.", "A: Why do you like winter more?\nB: Because I love skiing.", "A: Which do you like more, cats or dogs?\nB: Yes, I like cats.", "A: Why do you like math more?\nB: I think it's interesting."], answer: 2, explain: "Which로 물었는데 Yes로 대답하면 어색해요. → I like cats more." },
    { cat: "talk", type: "order", q: "주어진 단어를 바르게 배열하세요. (너는 봄과 가을 중 어느 것을 더 좋아하니?)", words: ["like", "which", "more", "do", "you", "spring or fall"], answer: ["Which do you like more, spring or fall?"], explain: "Which do you like more, A or B?" },
    { cat: "talk", type: "write", q: "질문에 알맞게 영어로 대답하세요.\nA: Which do you like more, winter or summer?\nB: ____________ (겨울을 더 좋아한다고)", answer: ["I like winter more.", "I like winter more than summer."], explain: "I like ○○ more. 로 대답해요." },

    // ── 문법: It ~ to부정사 ──
    { cat: "grammar", type: "mc", q: "괄호 안에서 알맞은 것은?\nThey believe it is important ( ) dead people.", choices: ["remember", "to remember", "remembers", "remembered"], answer: 1, explain: "It ~ to부정사: to 뒤에 동사원형을 써요." },
    { cat: "grammar", type: "mc", q: "빈칸에 알맞은 것은?\n____ isn't easy to exercise every day.", choices: ["It", "This", "That", "They"], answer: 0, explain: "가주어 자리에는 It을 써요." },
    { cat: "grammar", type: "blank", q: "It is exciting ______ ride a horse.", answer: ["to"], explain: "It is 형용사 + to 동사원형" },
    { cat: "grammar", type: "mc", q: "어법상 <u>틀린</u> 문장은?", choices: ["It is hard to keep a diary every day.", "It is interesting read sci-fi novels.", "It isn't easy to get an A on a math test.", "It is fun to solve word puzzles."], answer: 1, explain: "read 앞에 to가 빠졌어요. → It is interesting to read sci-fi novels." },
    { cat: "grammar", type: "order", q: "주어진 단어를 바르게 배열하세요. (보드게임을 하는 것은 재미있다.)", words: ["fun", "is", "to", "it", "play", "board games"], answer: ["It is fun to play board games."], explain: "It is fun + to play board games." },
    { cat: "grammar", type: "order", q: "주어진 단어를 바르게 배열하세요. (어떤 나이에도 새 언어를 배우는 것이 가능하니?)", words: ["possible", "it", "is", "learn", "to", "a new language", "at any age"], answer: ["Is it possible to learn a new language at any age?"], explain: "의문문은 Is it ~ to ...? 순서예요." },
    { cat: "grammar", type: "mc", q: "다음 문장과 뜻이 같은 것은?\nTo solve word puzzles is fun.", choices: ["It is fun solve word puzzles.", "It is fun to solve word puzzles.", "It solves word puzzles fun.", "This is fun to solve word puzzles."], answer: 1, explain: "To ~ 주어를 뒤로 보내고 앞에 It을 써요." },
    { cat: "grammar", type: "write", q: "주어진 말을 이용해 문장을 쓰세요.\n(not easy, get up early)  일찍 일어나는 것은 쉽지 않다.", answer: ["It is not easy to get up early.", "It isn't easy to get up early.", "It's not easy to get up early."], explain: "It isn't easy to + 동사원형" },
    { cat: "grammar", type: "write", q: "주어진 말을 이용해 문장을 쓰세요.\n(important, drink lots of water)  물을 많이 마시는 것은 중요하다.", answer: ["It is important to drink lots of water.", "It's important to drink lots of water."], explain: "It is important to + 동사원형" },
    { cat: "grammar", type: "blank", q: "It is not easy ______ (learn) a new language.  ← 괄호 안의 말을 알맞게 바꾸세요.", answer: ["to learn"], explain: "It ~ 뒤에는 to + 동사원형" },

    // ── 문법: call A B ──
    { cat: "grammar", type: "mc", q: "괄호 안에서 알맞은 것은?\nThey call ( ).", choices: ["the Midsummer festival it", "it the Midsummer festival", "it is the Midsummer festival", "to it the Midsummer festival"], answer: 1, explain: "call + A(무엇을) + B(이름) 순서예요." },
    { cat: "grammar", type: "blank", q: "My name is Robert, but my friends ______ me Bob.", answer: ["call"], explain: "call A B: A를 B라고 부르다" },
    { cat: "grammar", type: "order", q: "주어진 단어를 바르게 배열하세요. (Mia는 자기 개를 Rex라고 부른다.)", words: ["Rex", "Mia", "her dog", "calls"], answer: ["Mia calls her dog Rex."], explain: "주어 + calls + A + B" },
    { cat: "grammar", type: "order", q: "주어진 단어를 바르게 배열하세요. (그들은 이날을 '죽은 자들의 날'이라고 부른다.)", words: ["this day", "they", "call", "the Day of the Dead"], answer: ["They call this day the Day of the Dead."], explain: "They call + this day + the Day of the Dead." },
    { cat: "grammar", type: "mc", q: "우리말을 영어로 바르게 옮긴 것은?\n사람들은 시카고를 '바람의 도시'라고 부른다.", choices: ["People call the Windy City Chicago.", "People call Chicago the Windy City.", "People Chicago call the Windy City.", "People call Chicago is the Windy City."], answer: 1, explain: "call + 시카고를 + 바람의 도시라고" },
    { cat: "grammar", type: "mc", q: "어법상 <u>틀린</u> 문장은?", choices: ["We call him Captain.", "She calls her robot Clean Master.", "People call this food pho.", "They call Big Ben it."], answer: 3, explain: "'그것을'이 먼저 와야 해요. → They call it Big Ben." },
    { cat: "grammar", type: "write", q: "우리말을 영어로 쓰세요.\n나는 내 고양이를 Coco라고 부른다.", answer: ["I call my cat Coco."], explain: "I call + my cat + Coco." },
    { cat: "grammar", type: "blank", q: "Mia ______ her little sister Baby.  (call을 알맞은 형태로)", answer: ["calls"], explain: "주어 Mia가 3인칭 단수라서 calls" },

    // ── 단어(문장 속에서) ──
    { cat: "vocab", type: "blank", q: "The white dove ______ peace.  (상징하다)", answer: ["symbolizes"], explain: "symbolize: 상징하다 (주어가 3인칭 단수 → symbolizes)" },
    { cat: "vocab", type: "blank", q: "We ______ the classroom with balloons yesterday.  (장식했다)", answer: ["decorated"], explain: "decorate의 과거형 decorated" },
    { cat: "vocab", type: "blank", q: "Many students will ______ in the school festival.  (참가하다)", answer: ["participate"], explain: "participate in: ~에 참가하다" },
    { cat: "vocab", type: "blank", q: "It doesn't ______. Let's just have fun!  (중요하다)", answer: ["matter"], explain: "It doesn't matter. = 상관없어, 중요하지 않아." },
    { cat: "vocab", type: "blank", q: "The festival ______ ______ every October.  (열린다)", answer: ["takes place"], explain: "take place: 열리다, 개최되다 (3인칭 단수 → takes place)" },
    { cat: "vocab", type: "mc", q: "밑줄 친 단어의 뜻으로 알맞은 것은?\nThe sun <u>hardly</u> sets at this time of year.", choices: ["거의 ~않다", "열심히", "딱딱하게", "갑자기"], answer: 0, explain: "hardly는 '거의 ~않다'예요. hard(열심히)와 헷갈리지 마세요!" },
    { cat: "vocab", type: "mc", q: "영영 풀이에 알맞은 단어는?\na large animal with big antlers that lives in cold places", choices: ["reindeer", "skeleton", "statue", "costume"], answer: 0, explain: "reindeer: 순록" },

    // ── 본문 내용 ──
    { cat: "reading", type: "tf", q: "Fallas 축제는 3월 15일부터 19일까지 열린다.", answer: true, explain: "This festival takes place from March 15 to 19." },
    { cat: "reading", type: "tf", q: "fallas를 태우는 것은 봄에게 작별 인사를 하는 것을 상징한다.", answer: false, explain: "옛것에 작별하고 새로운 시작을 맞이하는 것을 상징해요." },
    { cat: "reading", type: "tf", q: "Fallas 조각상은 축제 첫날에 태운다.", answer: false, explain: "마지막 날(the last day)에 태워요." },
    { cat: "reading", type: "tf", q: "스웨덴 사람들은 겨울이 길고 어두워서 여름을 특히 반긴다.", answer: true, explain: "Winter in Sweden is long and dark, so ~ especially welcome summer." },
    { cat: "reading", type: "tf", q: "Midsummer 축제는 일 년 중 가장 짧은 날을 축하한다.", answer: false, explain: "가장 긴 날(the longest day)을 축하해요." },
    { cat: "reading", type: "tf", q: "멕시코 사람들은 일 년에 한 번 죽은 사람들이 집으로 돌아온다고 믿는다.", answer: true, explain: "once a year: 일 년에 한 번" },
    { cat: "reading", type: "tf", q: "Running of the Reindeer에서는 이기는 것이 가장 중요하다.", answer: false, explain: "It doesn't matter. 모두 즐기는 것이 중요해요." },
    { cat: "reading", type: "tf", q: "Fur Rondy 축제는 세계에서 가장 큰 겨울 축제 중 하나이다.", answer: true, explain: "one of the biggest winter festivals in the world" },
    { cat: "reading", type: "mc", q: "Day of the Dead 축제가 열리는 날은?", choices: ["March 15 to 19", "June 19 to 25", "November 1 and 2", "the end of February"], answer: 2, explain: "멕시코의 Day of the Dead는 11월 1일과 2일이에요." },
    { cat: "reading", type: "mc", q: "Fur Rondy 축제가 열리는 곳은?", choices: ["Spain", "Sweden", "Mexico", "Alaska, USA"], answer: 3, explain: "미국 알래스카에서 2월 말에 열려요." },
    { cat: "reading", type: "mc", q: "Midsummer 축제를 밤새 즐길 수 있는 까닭은?", choices: ["해가 거의 지지 않아서", "불꽃놀이가 밤에 있어서", "겨울이 길어서", "축제가 3일 동안 열려서"], answer: 0, explain: "Because the sun hardly sets at this time of year" },
    { cat: "reading", type: "mc", q: "Fallas 축제의 주인공(stars)은 무엇인가?", choices: ["순록", "거대한 나무 조각상", "꽃으로 꾸민 기둥", "해골 의상"], answer: 1, explain: "The stars of the festival are fallas, giant wooden statues." },
    { cat: "reading", type: "mc", q: "축제와 하는 일이 <u>잘못</u> 짝지어진 것은?", choices: ["Fallas - 퍼레이드와 불꽃놀이", "Midsummer - 기둥 주위에서 전통 춤", "Day of the Dead - 집에 제단 차리기", "Fur Rondy - 나무 조각상 태우기"], answer: 3, explain: "나무 조각상을 태우는 것은 Fallas 축제예요." },
    { cat: "reading", type: "mc", q: "Day of the Dead 축제 때 하는 일이 <u>아닌</u> 것은?", choices: ["집에 제단을 차린다", "묘지에서 파티를 한다", "해골처럼 분장한다", "순록과 달리기를 한다"], answer: 3, explain: "순록 달리기는 Fur Rondy 축제의 행사예요." },
    { cat: "reading", type: "blank", q: "People in Valencia ______ the coming of spring with the Fallas festival.  (축하하다)", answer: ["celebrate"], explain: "celebrate: 축하하다, 기념하다" }
  ]
};
