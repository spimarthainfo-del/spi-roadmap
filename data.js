/* =====================================================================
   SPI 個別学習ロードマップ — データ設定ファイル（data.js）
   ★ 運用する人はこのファイルだけ編集すればOKです ★
   （HTMLやJavaScriptの知識は不要。下のルールに沿って書き換えるだけ）
   ===================================================================== */


/* ---------------------------------------------------------------------
   【共通リンク】講義予約・LINEサポートの窓口（全生徒共通）
   --------------------------------------------------------------------- */
const SUPPORT_LINK = "https://line.me/R/ti/p/@your-line-id"; // ← 自分のLINE公式に差し替え


/* ---------------------------------------------------------------------
   【単元マスタ】各単元の教材リンクと推定時間（分）
     youtube … コツを掴む動画 ／ app … トレーニングアプリ ／ test … 確認テスト(10問)
   ※リンクは今はダミー（YouTubeは検索URL）。実際のURLに差し替えてください。
   --------------------------------------------------------------------- */
const TOPICS = {
  "集合":         { youtube:"https://youtu.be/lm9cSEJfxtg", app:"#", test:"https://drive.google.com/file/d/1JNPt-T4ENxyrQwnDU-Ia9uHdedJlpYrE/view?usp=sharing", min:{video:12,support:20,app:30,test:15} },
  "損益算":       { youtube:"https://youtu.be/OZFlIuBO2_g", app:"#", test:"https://drive.google.com/file/d/1JQrctPgsMy0rLk1WSPaYzsri0hxANCv1/view?usp=sharing", min:{video:15,support:20,app:30,test:15} },
  "割合":         { youtube:"https://youtu.be/XTSLelwhOuM", app:"#", test:"https://drive.google.com/file/d/1MLvkmiU2pOS7s9GIc0X-qtlnu5aTbL7m/view?usp=sharing", min:{video:12,support:20,app:30,test:15} },
  "表の読み取り": { youtube:"https://youtu.be/y3Ib8duaqVI", app:"#", test:"https://drive.google.com/file/d/1AkG_Jgq4IRQHgJw4RQxuaV6UVUtRw9Qb/view?usp=sharing", min:{video:12,support:20,app:25,test:15} },
  "場合の数":     { youtube:"https://youtu.be/kpIcFS9Kl_8", app:"#", test:"https://drive.google.com/file/d/1auZuhdecEB6H7IYNzNyby73QAIrCNqEe/view?usp=sharing", min:{video:18,support:25,app:35,test:20} },
  "重複組合せ":   { youtube:"https://youtu.be/UfbxqgPQLHM", app:"#", test:"#", min:{video:18,support:25,app:35,test:20} },  /* 確認テスト未提供 */
  "確率":         { youtube:"https://youtu.be/1DkSh0NeqaY", app:"#", test:"https://drive.google.com/file/d/1TtdDVZmPYkPfY9DFYITPkQs5h7p0m6cp/view?usp=sharing", min:{video:18,support:25,app:35,test:20} },
  "整数の推測":   { youtube:"https://youtu.be/SzKgbjw_Cd4", app:"#", test:"https://drive.google.com/file/d/1S1dxOz50tnAQgECBWhbMaFVL9IlHn9lI/view?usp=sharing", min:{video:15,support:25,app:30,test:20} },
  "推論":         { youtube:"https://youtu.be/49MRMpZ1Z-o", app:"#", test:"https://drive.google.com/file/d/1D_84bkGEKYa-i7B85_9qtBqwcibbXa3U/view?usp=sharing", min:{video:20,support:30,app:40,test:25} },
  "速度算":       { youtube:"https://youtu.be/GrI8TSZHpGw", app:"#", test:"https://drive.google.com/file/d/1yhIYipM_l1ABwml5LSzZAVZUttkwmkPz/view?usp=sharing", min:{video:15,support:20,app:30,test:15} },
  "速度応用":     { youtube:"https://youtu.be/1NPzp2vvBfQ", app:"#", test:"https://drive.google.com/file/d/1lb4DUoQM-efofgkVoG7USVTkSCs_z64u/view?usp=sharing", min:{video:15,support:20,app:30,test:15} },
  "仕事算":       { youtube:"https://youtu.be/FPKS9EguhDk", app:"#", test:"https://drive.google.com/file/d/1_CamUahKsUXmR7Qm4d67P0vQBVcHenga/view?usp=sharing", min:{video:15,support:20,app:30,test:15} },
  "代金精算":     { youtube:"https://youtu.be/JdL65wku_qE", app:"#", test:"#", min:{video:12,support:20,app:30,test:15} },  /* 確認テスト未提供 */
  "Web推論":      { youtube:"", app:"#", test:"#", min:{video:20,support:30,app:40,test:25} },  /* 動画なし・確認テスト未提供 */
};

/* 略称・別名 → TOPICS の正式キー（生徒が「損益」「表読解」と書いても教材リンクが効くように） */
const TOPIC_ALIAS = {
  "損益":"損益算", "速度":"速度算", "仕事":"仕事算", "表":"表の読み取り", "表読解":"表の読み取り",
  "整数":"整数の推測", "整数推測":"整数の推測", "代金清算":"代金精算", "代金の精算":"代金精算",
  "重複組み合わせ":"重複組合せ", "重複組合わせ":"重複組合せ", "速度算応用":"速度応用",
  "web推論":"Web推論", "WEB推論":"Web推論",
};


/* ---------------------------------------------------------------------
   【テスト形式別・おすすめ優先順位テンプレート（コピペ用の下書き）】
   生徒を追加するとき、本番日に合わせて due（中間締切）を埋めて使ってください。
   ・Webテスティング … 集合/損益 → 割合/表 → 場合の数/確率 → 整数の推測/推論 → 速度/仕事/Web推論
   ・テストセンター … 集合/損益 → 割合/場合の数 → 確率/推論 → 表/整数の推測 → 速度/仕事
   ・ペーパーテスト … 割合/損益 → 集合/表 → 速度/仕事 → 場合の数/確率 → 推論
   --------------------------------------------------------------------- */

/* ↑を入力画面(input.html)が実際に使うデータ。単元名は TOPICS のキーと一致させること */
const PLAN_TEMPLATES = {
  "Webテスティング": [ ["集合","損益算"], ["割合","表の読み取り"], ["場合の数","確率"], ["整数の推測","推論"], ["速度算","仕事算","Web推論"] ],
  "テストセンター":   [ ["集合","損益算"], ["割合","場合の数"], ["確率","推論"], ["表の読み取り","整数の推測"], ["速度算","仕事算"] ],
  "ペーパーテスト":   [ ["割合","損益算"], ["集合","表の読み取り"], ["速度算","仕事算"], ["場合の数","確率"], ["推論"] ],
};


/* ---------------------------------------------------------------------
   【生徒マスタ】生徒ごとの設定
     id        … URLに使う推測されにくい文字列（?id=この値 でアクセス）
     name      … 表示名
     examDate  … テスト本番日（YYYY-MM-DD）
     examType  … テスト形式（テストセンター / Webテスティング / ペーパーテスト）
     startDate … 学習開始日（YYYY-MM-DD）
     dailyLoad … 1日に確保できる学習量の目安（表示用の文字）
     plan      … 優先順位つき単元リスト＋中間締切。上から順に取り組む
     seedDone  … （任意）最初から「完了済み」にしておくステップ。"単元|ステップ" 形式
                  ステップ＝ video / support / app / test
   --------------------------------------------------------------------- */
const STUDENTS = [
  {
    id: "tanaka-7x9k2m",
    name: "田中 太郎",
    examDate: "2026-07-31",
    examType: "Webテスティング",
    startDate: "2026-06-12",
    dailyLoad: "平日30分・休日2時間（1日 1〜2ステップ）",
    plan: [
      { topics:["集合","損益算"],            due:"2026-06-15" },
      { topics:["割合","表の読み取り"],       due:"2026-06-25" },
      { topics:["場合の数","確率"],          due:"2026-07-05" },
      { topics:["整数の推測","推論"],         due:"2026-07-20" },
      { topics:["速度算","仕事算","Web推論"], due:"2026-07-31" },
    ],
    seedDone: [
      "集合|video","集合|support","集合|app","集合|test",
      "損益算|video","損益算|support",
    ],
  },
  {
    id: "sato-3p8w5n",
    name: "佐藤 花子",
    examDate: "2026-07-10",
    examType: "テストセンター",
    startDate: "2026-06-14",
    dailyLoad: "毎日1時間（1日 2ステップ）",
    plan: [
      { topics:["集合","損益算"],        due:"2026-06-22" },
      { topics:["割合","場合の数"],       due:"2026-06-28" },
      { topics:["確率","推論"],          due:"2026-07-03" },
      { topics:["表の読み取り","整数の推測"], due:"2026-07-08" },
      { topics:["速度算","仕事算"],       due:"2026-07-10" },
    ],
    seedDone: [
      "集合|video",
    ],
  },
];


/* =====================================================================
   生徒データをURLに載せて共有する仕組み（サーバー不要）
   共有リンク = 公開した index.html のURL + "#d=（圧縮した生徒データ）"
   このリンクを開けば、相手の端末にデータが無くてもロードマップが復元される。
   ===================================================================== */
function encodeStudent(st){
  return btoa(unescape(encodeURIComponent(JSON.stringify(st))))
    .replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");   // URLセーフ
}
function decodeStudent(s){
  try{ s=String(s).replace(/-/g,"+").replace(/_/g,"/");
    return JSON.parse(decodeURIComponent(escape(atob(s)))); }catch(e){ return null; }
}
function studentShareUrl(st){
  const base=location.origin+location.pathname.replace(/[^\/]*$/,"index.html");
  return base+"#d="+encodeStudent(st);
}
