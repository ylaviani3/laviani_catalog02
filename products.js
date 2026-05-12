// products.js – רמי לויאני עסקי מזון

const CAT_LABELS = {
  1: "ממרחים ומחיות",
  2: "שוקולדים ותוספות",
  3: "שמן ומרגרינה",
  4: "תמציות ותבלינים",
  5: "קטניות, פירות ואגוזים",
  8: "עזרי אפייה",
  9: "קטניות, פירות ואגוזים"
};

function pickImage(name, cat) {
  var n = name;
  if (cat === 1) {
    if (n.indexOf("נוטלה") >= 0 || n.indexOf("פררו") >= 0) return "https://images.unsplash.com/photo-1548848221-0c2e497ed557?w=400&q=80";
    if (n.indexOf("פיסטוק") >= 0) return "https://images.unsplash.com/photo-1590080876351-41f4cf03fa7a?w=400&q=80";
    if (n.indexOf("חלבה") >= 0) return "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80";
    if (n.indexOf("לוטוס") >= 0 || n.indexOf("ספקולוס") >= 0) return "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80";
    if (n.indexOf("בוטנים") >= 0) return "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400&q=80";
    if (n.indexOf("לוז") >= 0) return "https://images.unsplash.com/photo-1568740347312-94bf5e386b1e?w=400&q=80";
    if (n.indexOf("קשיו") >= 0) return "https://images.unsplash.com/photo-1590080876351-41f4cf03fa7a?w=400&q=80";
    if (n.indexOf("שקדים") >= 0) return "https://images.unsplash.com/photo-1574570173583-21a946a1e83a?w=400&q=80";
    if (n.indexOf("תמרים") >= 0) return "https://images.unsplash.com/photo-1596554933370-3b2a8b3a49ad?w=400&q=80";
    if (n.indexOf("ריבת חלב") >= 0) return "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&q=80";
    if (n.indexOf("ריבה") >= 0) return "https://images.unsplash.com/photo-1563673800951-96e8a99e63ad?w=400&q=80";
    if (n.indexOf("סילאן") >= 0) return "https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=400&q=80";
    if (n.indexOf("סירופ") >= 0 || n.indexOf("מתק") >= 0) return "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&q=80";
    if (n.indexOf("גלוקוזה") >= 0) return "https://images.unsplash.com/photo-1582563495014-2cdf6bcb5b3a?w=400&q=80";
    if (n.indexOf("חמאה") >= 0) return "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&q=80";
    if (n.indexOf("כפתורים") >= 0 || n.indexOf("מטבעות") >= 0 || n.indexOf("פנינים") >= 0) return "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&q=80";
    if (n.indexOf("ביסקוויט") >= 0 || n.indexOf("ביסקויט") >= 0) return "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80";
    if (n.indexOf("גליליות") >= 0) return "https://images.unsplash.com/photo-1589841494578-5c22eb58e9da?w=400&q=80";
    if (n.indexOf("פרלין") >= 0) return "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&q=80";
    if (n.indexOf("ציפוי") >= 0 || n.indexOf("צמקאו") >= 0) return "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&q=80";
    if (n.indexOf("בייגלה") >= 0) return "https://images.unsplash.com/photo-1509461399763-ae67a981b254?w=400&q=80";
    if (n.indexOf("דובדבן") >= 0) return "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=400&q=80";
    if (n.indexOf("פצפוצים") >= 0 || n.indexOf("קורנפלקס") >= 0) return "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80";
    if (n.indexOf("מיונז") >= 0) return "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80";
    if (n.indexOf("מלית") >= 0 || n.indexOf("מילוי") >= 0) return "https://images.unsplash.com/photo-1571108000978-76c47b3a49d0?w=400&q=80";
    return "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&q=80";
  }
  if (cat === 2) {
    if (n.indexOf("מריר") >= 0) return "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&q=80";
    if (n.indexOf("חלב") >= 0 && n.indexOf("שוקולד") >= 0) return "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&q=80";
    if (n.indexOf("לבן") >= 0 && n.indexOf("שוקולד") >= 0) return "https://images.unsplash.com/photo-1548741487-18d363dc4469?w=400&q=80";
    if (n.indexOf("קקאו") >= 0 || n.indexOf("עיסת") >= 0) return "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80";
    if (n.indexOf("צמקאו") >= 0) return "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&q=80";
    if (n.indexOf("מזרה") >= 0) return "https://images.unsplash.com/photo-1549212863-1aac4f166f29?w=400&q=80";
    if (n.indexOf("זית") >= 0) return "https://images.unsplash.com/photo-1571197119738-e8bbd04ef8f4?w=400&q=80";
    if (n.indexOf("טונה") >= 0) return "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80";
    if (n.indexOf("פטריות") >= 0) return "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400&q=80";
    if (n.indexOf("רוטב") >= 0) return "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80";
    if (n.indexOf("רסק") >= 0) return "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80";
    if (n.indexOf("מיונז") >= 0) return "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80";
    return "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&q=80";
  }
  if (cat === 3) {
    if (n.indexOf("קוקוס") >= 0) return "https://images.unsplash.com/photo-1580509376733-7d29aa24a90a?w=400&q=80";
    if (n.indexOf("מרגרינה") >= 0) return "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&q=80";
    if (n.indexOf("קקאו") >= 0) return "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80";
    if (n.indexOf("זית") >= 0) return "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80";
    return "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80";
  }
  if (cat === 4) {
    if (n.indexOf("קמח") >= 0) return "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80";
    if (n.indexOf("סוכר") >= 0) return "https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=400&q=80";
    if (n.indexOf("שמרים") >= 0) return "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80";
    if (n.indexOf("ג'לטין") >= 0 || n.indexOf("אגר") >= 0) return "https://images.unsplash.com/photo-1582563495014-2cdf6bcb5b3a?w=400&q=80";
    if (n.indexOf("וניל") >= 0) return "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?w=400&q=80";
    if (n.indexOf("תמצית") >= 0) return "https://images.unsplash.com/photo-1558612497-8f4bcfc79a7d?w=400&q=80";
    if (n.indexOf("קינמון") >= 0) return "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=400&q=80";
    if (n.indexOf("קקאו") >= 0) return "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80";
    if (n.indexOf("קפה") >= 0) return "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80";
    if (n.indexOf("דבש") >= 0) return "https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=400&q=80";
    if (n.indexOf("מלח") >= 0) return "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=400&q=80";
    if (n.indexOf("תבלין") >= 0) return "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400&q=80";
    if (n.indexOf("פודינג") >= 0) return "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&q=80";
    return "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400&q=80";
  }
  if (cat === 5 || cat === 9) {
    if (n.indexOf("שקד") >= 0) return "https://images.unsplash.com/photo-1574570173583-21a946a1e83a?w=400&q=80";
    if (n.indexOf("לוז") >= 0) return "https://images.unsplash.com/photo-1568740347312-94bf5e386b1e?w=400&q=80";
    if (n.indexOf("אגוז מלך") >= 0) return "https://images.unsplash.com/photo-1603046891744-1f0b5c6a7e54?w=400&q=80";
    if (n.indexOf("פיסטוק") >= 0) return "https://images.unsplash.com/photo-1590080876351-41f4cf03fa7a?w=400&q=80";
    if (n.indexOf("קשיו") >= 0) return "https://images.unsplash.com/photo-1590080876351-41f4cf03fa7a?w=400&q=80";
    if (n.indexOf("פקאן") >= 0) return "https://images.unsplash.com/photo-1572464483156-00e2d4bb3f44?w=400&q=80";
    if (n.indexOf("בוטנ") >= 0) return "https://images.unsplash.com/photo-1567380177130-0b4f33a51f37?w=400&q=80";
    if (n.indexOf("קוקוס") >= 0) return "https://images.unsplash.com/photo-1580509376733-7d29aa24a90a?w=400&q=80";
    if (n.indexOf("שומשום") >= 0) return "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80";
    if (n.indexOf("צנובר") >= 0) return "https://images.unsplash.com/photo-1572464483156-00e2d4bb3f44?w=400&q=80";
    if (n.indexOf("חמוציות") >= 0) return "https://images.unsplash.com/photo-1563746099882-0d5d34cf5e97?w=400&q=80";
    if (n.indexOf("צימוק") >= 0) return "https://images.unsplash.com/photo-1563746099882-0d5d34cf5e97?w=400&q=80";
    if (n.indexOf("תמר") >= 0) return "https://images.unsplash.com/photo-1596554933370-3b2a8b3a49ad?w=400&q=80";
    if (n.indexOf("אננס") >= 0) return "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&q=80";
    if (n.indexOf("מנגו") >= 0) return "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80";
    if (n.indexOf("משמש") >= 0) return "https://images.unsplash.com/photo-1586161024768-f96bc6ad0b12?w=400&q=80";
    if (n.indexOf("תאנ") >= 0) return "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400&q=80";
    if (n.indexOf("תות") >= 0) return "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=400&q=80";
    if (n.indexOf("קינואה") >= 0) return "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80";
    if (n.indexOf("אורז") >= 0) return "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&q=80";
    if (n.indexOf("שיבולת") >= 0) return "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?w=400&q=80";
    if (n.indexOf("פרג") >= 0) return "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80";
    if (n.indexOf("גרעיני") >= 0) return "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80";
    if (n.indexOf("בננה") >= 0) return "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80";
    return "https://images.unsplash.com/photo-1574570173583-21a946a1e83a?w=400&q=80";
  }
  if (cat === 8) {
    if (n.indexOf("נייר") >= 0) return "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80";
    if (n.indexOf("שק זילוף") >= 0) return "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80";
    if (n.indexOf("מגש") >= 0) return "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&q=80";
    if (n.indexOf("קופסא") >= 0 || n.indexOf("קרטון") >= 0) return "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80";
    if (n.indexOf("צלחת") >= 0 || n.indexOf("תחתית") >= 0) return "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80";
    if (n.indexOf("תבנית") >= 0) return "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80";
    if (n.indexOf("כפפות") >= 0 || n.indexOf("סינרים") >= 0) return "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=400&q=80";
    return "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80";
  }
  return "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&q=80";
}

var PRODUCTS = [
  {id:40459,cat:1,name:'איזומלט (20 ק"ג)'},
  {id:10325,cat:1,name:'אצבעות שוקולד חלב 8 ס"מ'},
  {id:11176,cat:1,name:'בייגלה טחון 10 ק"ג'},
  {id:10320,cat:1,name:'בייגלה מצופה שוקולד חלב'},
  {id:10319,cat:1,name:"בייגלה מצופה שוקולד לבן 8*500 גר'"},
  {id:11177,cat:1,name:'ביסקוויט טחון קרמל 10 ק"ג'},
  {id:10063,cat:1,name:'ביסקויט בטעם קרמל (לוטוס) 4 ק"ג'},
  {id:10061,cat:1,name:'ביסקויט פתיבר וניל טחון 5 ק"ג'},
  {id:10031,cat:1,name:'ביסקויט קרמבו שחור 4 ק"ג'},
  {id:10068,cat:1,name:'ביסקויט קרמל טחון 5 ק"ג'},
  {id:10069,cat:1,name:'ביסקויט שחור טחון 5 ק"ג'},
  {id:10233,cat:1,name:'בלוק חלבה 3 ק"ג'},
  {id:11015,cat:1,name:'גלוקוזה בדלי'},
  {id:10231,cat:1,name:'גלזורה שקופה (13 ק"ג)'},
  {id:10066,cat:1,name:'גליליות ארוך (130 יחידות)'},
  {id:10064,cat:1,name:'גליליות קצר (290 יחידות)'},
  {id:11109,cat:1,name:'דובדבן אמרנה 5 ק"ג'},
  {id:11108,cat:1,name:'דובדבן בסירופ'},
  {id:11105,cat:1,name:'דובדבן מסוכר יבש (10 ק"ג)'},
  {id:11014,cat:1,name:'חלב מרוכז (10 ק"ג)'},
  {id:10287,cat:1,name:'חמאה (25 ק"ג) מהדרין'},
  {id:10286,cat:1,name:'חמאת בוטנים – חבית (230 ק"ג)'},
  {id:10284,cat:1,name:'חמאת בוטנים 100% (5 ק"ג)'},
  {id:10272,cat:1,name:'חמאת לוז 100% (5 ק"ג)'},
  {id:10282,cat:1,name:'חמאת פיסטוק ירוק 100% (5 ק"ג)'},
  {id:10281,cat:1,name:'חמאת קשיו 100%'},
  {id:10280,cat:1,name:'חמאת שקדים (18 ק"ג)'},
  {id:10285,cat:1,name:'חמאת שקדים (5 ק"ג)'},
  {id:10311,cat:1,name:'כפתורים שוקולד חלב חלבי 5 ק"ג'},
  {id:10310,cat:1,name:'כפתורים שוקולד מריר 52% פרווה 10 ק"ג'},
  {id:10307,cat:1,name:'מטבעות שוקולד לבן חלבי 5 ק"ג'},
  {id:20080,cat:1,name:'מיונז אמיתי (5 ק"ג)'},
  {id:11066,cat:1,name:'מילוי בטעם תות שדה 22 ק"ג'},
  {id:10041,cat:1,name:'מיני עדשים (6 ק"ג)'},
  {id:10322,cat:1,name:'מיני קורנפלקס מצופה שוקולד חלב 2*3 ק"ג'},
  {id:10323,cat:1,name:'מיני קורנפלקס מצופה שוקולד לבן 2*3 ק"ג'},
  {id:11020,cat:1,name:'מלית אוכמניות (13 ק"ג)'},
  {id:11042,cat:1,name:'מלית בטעם וניל (13 ק"ג)'},
  {id:11030,cat:1,name:'מלית דובדבן (13 ק"ג)'},
  {id:11041,cat:1,name:'מלית פרג 22 ק"ג'},
  {id:11040,cat:1,name:'מלית פרג (13 ק"ג)'},
  {id:10283,cat:1,name:'מלית שקדים 13 ק"ג'},
  {id:11095,cat:1,name:'מלית תפוח עץ ללא סוכר (10 ק"ג)'},
  {id:11036,cat:1,name:'מלית תפוח עץ קוביות (17 ק"ג)'},
  {id:40032,cat:1,name:'מלית תפוח עץ פרימיום 5.5 ק"ג'},
  {id:10254,cat:1,name:'ממרח אגוזי לוז רוזמרי (6 ק"ג)'},
  {id:10289,cat:1,name:'ממרח אגוזים 50% עם קוקוס'},
  {id:11182,cat:1,name:'ממרח בטעם פיסטוק 22 ק"ג'},
  {id:11183,cat:1,name:'ממרח בטעם פיסטוק 6 ק"ג'},
  {id:10224,cat:1,name:'ממרח בטעם שוקולד איטלקי (22 ק"ג)'},
  {id:10225,cat:1,name:'ממרח בטעם שוקולד בהיר לאפייה'},
  {id:10228,cat:1,name:'ממרח בטעם שוקולד בהיר למריחה'},
  {id:11174,cat:1,name:'ממרח בייגלה מלוח 5 ק"ג'},
  {id:11072,cat:1,name:'ממרח חלבה פרימיום 22 ק"ג'},
  {id:11073,cat:1,name:'ממרח חלבה פרימיום 6 ק"ג'},
  {id:11071,cat:1,name:'ממרח חלבה (22 ק"ג)'},
  {id:10232,cat:1,name:'ממרח חלבה (6 ק"ג)'},
  {id:10227,cat:1,name:'ממרח לבן בטעם שוקולד (22 ק"ג)'},
  {id:10303,cat:1,name:'ממרח לבן חלבי 2*5 ק"ג'},
  {id:11178,cat:1,name:'ממרח לוטוס (6 ק"ג)'},
  {id:11175,cat:1,name:'ממרח נוטלה (3 ק"ג)'},
  {id:10241,cat:1,name:'ממרח ספקולוס (6 ק"ג)'},
  {id:10317,cat:1,name:'ממרח פיסטוק 2*5 ק"ג'},
  {id:11172,cat:1,name:'ממרח פיסטוק 30% – 20 ק"ג'},
  {id:11173,cat:1,name:'ממרח פררו רושה 5 ק"ג – חלבי'},
  {id:11181,cat:1,name:'ממרח צ\'ארה (קינדר) 5 ק"ג פרווה'},
  {id:10304,cat:1,name:'ממרח צ\'יארה חלבי 2*5 ק"ג'},
  {id:10229,cat:1,name:'ממרח קינמון (22 ק"ג)'},
  {id:10234,cat:1,name:'ממרח קפוצ\'ינו (6 ק"ג)'},
  {id:11171,cat:1,name:'ממרח קקאו אגוזים 5 ק"ג'},
  {id:10302,cat:1,name:'ממרח קקאו ואגוזי לוז חלבי 2*5 ק"ג'},
  {id:10301,cat:1,name:'ממרח קקאו חלבי 10 ק"ג'},
  {id:10324,cat:1,name:'ממרח קקאו פרווה 10 ק"ג'},
  {id:10223,cat:1,name:'ממרח שוקולד – עומר'},
  {id:10222,cat:1,name:'ממרח שוקולד MB'},
  {id:10226,cat:1,name:'ממרח שוקולד MB טעם חמאה'},
  {id:11170,cat:1,name:'ממרח שוקולד לבן ג\'ובאני 5 ק"ג'},
  {id:10326,cat:1,name:'ממרח שוקולד לבן פרווה 5 ק"ג'},
  {id:10246,cat:1,name:'ממרח שוקולד ללא סוכר'},
  {id:11163,cat:1,name:'ממרח תמרים טעמי הגליל 22 ק"ג'},
  {id:11164,cat:1,name:'ממרח תמרים טעמי הגליל בד"צ (22 ק"ג)'},
  {id:11165,cat:1,name:'ממרח תמרים כהה עין יהב (22 ק"ג)'},
  {id:11168,cat:1,name:'ממרח תמרים ללא סוכר 22 ק"ג'},
  {id:10026,cat:1,name:'מקופלת פצפוצים לבן (10 ק"ג)'},
  {id:11008,cat:1,name:'מתק – תחליף דבש (13 ק"ג)'},
  {id:11009,cat:1,name:'מתק דבש 22 ק"ג'},
  {id:11158,cat:1,name:'סילאן בג\'ריקן 10*1.5 ק"ג'},
  {id:11160,cat:1,name:'סילאן בג\'ריקן (5 ק"ג)'},
  {id:11153,cat:1,name:'סילאן טבעי 100% בדלי 25 ק"ג'},
  {id:11140,cat:1,name:'סירופ בטעם מייפל גלון (5 ק"ג)'},
  {id:11141,cat:1,name:'סירופ בטעם שוקולד'},
  {id:11016,cat:1,name:'סירופ ריבת חלב קומידה 5 ק"ג'},
  {id:10268,cat:1,name:'פרלין 56% לוז + 44% סוכר (5 ק"ג)'},
  {id:10306,cat:1,name:'פרלין שוקולד חלב 5 ק"ג'},
  {id:10308,cat:1,name:'פרלין שוקולד לבן 5 ק"ג'},
  {id:10267,cat:1,name:'פרליני איטלקי 50%'},
  {id:10057,cat:1,name:'פתיבר וניל 5.5 ק"ג'},
  {id:10318,cat:1,name:'ציפוי מתקשה לבן חלבי 2*5 ק"ג'},
  {id:10321,cat:1,name:'ציפוי מתקשה קקאו חלבי 2*5 ק"ג'},
  {id:10059,cat:1,name:'צמקאו בלוק חום (5 ק"ג)'},
  {id:10039,cat:1,name:'צמקאו מטבעות חום ללא סוכר (5 ק"ג)'},
  {id:10100,cat:1,name:'קצפת צמחית גלידן (5 ק"ג)'},
  {id:10029,cat:1,name:'קרם אוראו'},
  {id:11179,cat:1,name:'קרם בטעם בייגלה (6 ק"ג)'},
  {id:10221,cat:1,name:'קרם שוקולד מיוחד למילוי מאפינס'},
  {id:11003,cat:1,name:'ריבה בטעם תות 10 ק"ג'},
  {id:11004,cat:1,name:'ריבה צהובה (10 ק"ג)'},
  {id:11012,cat:1,name:'ריבת חלב LITE'},
  {id:11046,cat:1,name:'ריבת חלב פרווה טופי (13 ק"ג)'},
  {id:11010,cat:1,name:'ריבת חלב קומידה (10 ק"ג)'},
  {id:11011,cat:1,name:'ריבת חלב קונדיטור (5 ק"ג)'},
  {id:11017,cat:1,name:'ריבת משמש 13 ק"ג'},
  {id:11007,cat:1,name:'ריבת תות שדה – 13 ק"ג'},
  // שוקולדים ותוספות
  {id:10053,cat:2,name:'שוקולד חלב CALLEBAUT'},
  {id:10043,cat:2,name:'שוקולד חלב חתם סופר'},
  {id:10044,cat:2,name:'שוקולד לבן חתם סופר'},
  {id:10001,cat:2,name:'שוקולד מריר 55%'},
  {id:10035,cat:2,name:'מזרה איטלקי'},
  {id:10030,cat:2,name:'מזרה חום'},
  {id:10038,cat:2,name:'מזרה לבן'},
  {id:10034,cat:2,name:'מזרה צבעוני'},
  {id:10047,cat:2,name:'אצבעות צמקאו (8 ק"ג)'},
  {id:10042,cat:2,name:'צמקאו מטבעות חום פרימיום'},
  {id:10046,cat:2,name:'צמקאו מטבעות לבן פרימיום'},
  {id:10060,cat:2,name:'צמקאו בלוק לבן 3 ק"ג'},
  {id:30022,cat:2,name:'עיסת קקאו (25 ק"ג)'},
  {id:40804,cat:2,name:'קקאו בארי קליבו 20-22'},
  {id:40811,cat:2,name:'אבקת קקאו בארי קליבו EBONY'},
  {id:20001,cat:2,name:'זיתים טבעות ירוק'},
  {id:20003,cat:2,name:'זיתי קלמטה מגולענים 15.5 ק"ג'},
  {id:20006,cat:2,name:'זיתים XXL חרוזית (10 ק"ג)'},
  {id:20005,cat:2,name:'זיתים טבעות שחור'},
  {id:20025,cat:2,name:'טונה גדול לבנה פאוץ 1 ק"ג'},
  {id:20026,cat:2,name:'טונה גדול שימורים'},
  {id:20010,cat:2,name:'מיונז הלמנס (4*3.44 ק"ג)'},
  {id:20038,cat:2,name:'פטריות חתוך מוסדי'},
  {id:20031,cat:2,name:'פטריות חתוכות קטן 400 גרם'},
  {id:20084,cat:2,name:'רוטב אלף האיים (4 ליטר)'},
  {id:20083,cat:2,name:'רוטב סויה'},
  {id:20032,cat:2,name:'רוטב פיצה 24 ק"ג'},
  {id:20028,cat:2,name:'רסק עגבניות 28'},
  {id:10004,cat:2,name:'רצועות שוקולד חלב'},
  {id:10003,cat:2,name:'רצועות שוקולד מריר פרווה'},
  {id:10023,cat:2,name:'מיני מקופלת חום (5 ק"ג)'},
  {id:10024,cat:2,name:'מיני מקופלת לבן (5 ק"ג)'},
  {id:10025,cat:2,name:'מקופלת פצפוצים חום (10 ק"ג)'},
  // שמן ומרגרינה
  {id:30035,cat:3,name:'מרגרינה לבצק עלים'},
  {id:30030,cat:3,name:'מרגרינה לבצק שמרים (מחמאה)'},
  {id:30031,cat:3,name:'מרגרינה מחמאה ירושלים'},
  {id:30036,cat:3,name:'מרגרינה עלים (פייסטרי) קשה'},
  {id:30033,cat:3,name:'מרגרינה רכה – פריך'},
  {id:30134,cat:3,name:'חמאת קוקוס (6 ק"ג)'},
  {id:30020,cat:3,name:'חמאת קקאו בלוק (25 ק"ג)'},
  {id:30021,cat:3,name:'חמאת קקאו מטבעות בדלי (3 ק"ג)'},
  {id:30016,cat:3,name:'שומן קוקוס 26'},
  {id:30017,cat:3,name:'שמן דקל נוזלי (16 ק"ג)'},
  {id:30103,cat:3,name:'שמן זית 3.8 ליטר'},
  {id:30113,cat:3,name:'שמן חמניה 1 ליטר'},
  {id:30115,cat:3,name:'שמן חמניה 16 ק"ג'},
  {id:30106,cat:3,name:'שמן חמניות 5 ליטר'},
  {id:30100,cat:3,name:'שמן סויה – 17.4 ליטר'},
  {id:30118,cat:3,name:'שמן סויה 5 ליטר'},
  {id:30112,cat:3,name:'שמן קוקוס אורגני'},
  {id:30116,cat:3,name:'שמן קנולה – בקבוק 10 ליטר'},
  {id:30101,cat:3,name:'שמן קנולה 5 ליטר'},
  {id:30105,cat:3,name:'שמן קנולה ליטר'},
  // תמציות ותבלינים
  {id:40410,cat:4,name:'אבקת אפיה (1 ק"ג)'},
  {id:40424,cat:4,name:'אבקת סוכר אשבל 1 ק"ג'},
  {id:40423,cat:4,name:'אבקת סוכר ברמן – 10 ק"ג'},
  {id:40435,cat:4,name:'אבקת סוכר תוצרת חוץ – 25 ק"ג'},
  {id:40810,cat:4,name:'אבקת קקאו טבעית T-3'},
  {id:40472,cat:4,name:'אגר אגר'},
  {id:40478,cat:4,name:'אוסם פודינג אינסטנט וניל'},
  {id:40493,cat:4,name:'דבש 1 ק"ג'},
  {id:40456,cat:4,name:'דבש דבורים טהור (25 ק"ג)'},
  {id:40401,cat:4,name:'דקסטרוזה'},
  {id:40474,cat:4,name:'ג\'לטין OK'},
  {id:40473,cat:4,name:'ג\'לטין דגים (25 ק"ג)'},
  {id:40417,cat:4,name:'ג\'לטין דגים בד"צ עד"ח (25 ק"ג)'},
  {id:40690,cat:4,name:'מלח בשק'},
  {id:40692,cat:4,name:'מלח חבילות דק'},
  {id:40431,cat:4,name:'מלטודקסטרין (25 ק"ג)'},
  {id:40420,cat:4,name:'מלטיטול אבקה'},
  {id:40427,cat:4,name:'מלטיטול נוזלי (275 ק"ג)'},
  {id:40451,cat:4,name:'מאפינס וניל – קרטון 15 ק"ג'},
  {id:40453,cat:4,name:'מאפינס שוקולד – קרטון 15 ק"ג'},
  {id:40600,cat:4,name:'קמח בשק'},
  {id:40602,cat:4,name:'קמח חבילות'},
  {id:40601,cat:4,name:'קמח לחם שטיבל (25 ק"ג)'},
  {id:40609,cat:4,name:'קמח מנופה בוואקום (25 ק"ג)'},
  {id:40612,cat:4,name:'קמח אורז'},
  {id:40421,cat:4,name:'סודה לשתיה (1 ק"ג)'},
  {id:40405,cat:4,name:'סודה לשתיה (25 ק"ג)'},
  {id:40660,cat:4,name:'סוכר בשק'},
  {id:40664,cat:4,name:'סוכר חום דמררה (25 ק"ג)'},
  {id:40665,cat:4,name:'סוכר חום כהה 25 ק"ג'},
  {id:40663,cat:4,name:'סוכר קנים אורגני (25 ק"ג)'},
  {id:40413,cat:4,name:'סוכר וניל'},
  {id:40426,cat:4,name:'סוכר וניל (10 ק"ג) – גלעם'},
  {id:40506,cat:4,name:'שמרים 10 ק"ג ויקטוריה בורגמן'},
  {id:40503,cat:4,name:'שמרים טריים (10 ק"ג)'},
  {id:40500,cat:4,name:'שמרים יבשים בורגמן 10 ק"ג'},
  {id:40491,cat:4,name:'קפה נמס בדלי 4 ק"ג'},
  {id:40490,cat:4,name:'קפה נמס קונגו ארוז 20 ק"ג'},
  {id:40492,cat:4,name:'קפה שחור עלית 1 ק"ג'},
  {id:40807,cat:4,name:'קקאו דה זאן D11DL'},
  {id:40801,cat:4,name:'קקאו דזאן D-11B'},
  {id:40802,cat:4,name:'קקאו דזאן D-11S'},
  {id:40800,cat:4,name:'קקאו דזאן DL-21'},
  {id:40487,cat:4,name:'קרם פטיסייר – 13 ק"ג'},
  {id:40513,cat:4,name:'קרמל נוזלי (30 ק"ג)'},
  {id:40319,cat:4,name:'תבלין אורגנו'},
  {id:40322,cat:4,name:'תבלין בזיליקום'},
  {id:40320,cat:4,name:'תבלין כורכום'},
  {id:40323,cat:4,name:'תבלין כמון'},
  {id:40300,cat:4,name:'תבלין קינמון'},
  {id:40309,cat:4,name:'תבלין פפריקה מתוקה'},
  {id:40303,cat:4,name:'תבלין פלפל שחור'},
  {id:40301,cat:4,name:'תבלין שום'},
  {id:40010,cat:4,name:'תמצית וניל'},
  {id:40020,cat:4,name:'תמצית חמאה'},
  {id:40012,cat:4,name:'תמצית לימון'},
  {id:40014,cat:4,name:'תמצית רום'},
  {id:40026,cat:4,name:'תמצית פיסטוק'},
  {id:40030,cat:4,name:'תמצית שוקולד'},
  {id:40036,cat:4,name:'תמצית שקדים'},
  {id:40016,cat:4,name:'תמצית תפוז'},
  // קטניות פירות ואגוזים
  {id:50221,cat:5,name:'אגוז מלך גרוס'},
  {id:50236,cat:5,name:'אגוז מלך לב 10 ק"ג 80%'},
  {id:50234,cat:5,name:'אגוזי מלך קליפורניה (11.35 ק"ג)'},
  {id:50030,cat:5,name:'אורז בסמטי מעולה ארוך'},
  {id:20117,cat:5,name:'אננס טבעי – 10 ק"ג'},
  {id:50232,cat:5,name:'בוטנים ג14'},
  {id:50218,cat:5,name:'בוטנים חצאים'},
  {id:50220,cat:5,name:'בוטנים חצאים מולבנים 25 ק"ג'},
  {id:50036,cat:5,name:'בורגול דק'},
  {id:50035,cat:5,name:'בורגול עבה'},
  {id:50033,cat:5,name:'בננה צ\'יפס (8 ק"ג)'},
  {id:50026,cat:5,name:'גרעיני דלעת קלוף – 25 ק"ג'},
  {id:50021,cat:5,name:'גרעיני חמניה מקולף (5 ק"ג)'},
  {id:50013,cat:5,name:'זרעי ציה'},
  {id:50104,cat:5,name:'חומוס (25 ק"ג)'},
  {id:20116,cat:5,name:'חמוציות אמריקאיות פרימיום'},
  {id:20124,cat:5,name:'חמוציות ברכז תפוחים'},
  {id:50019,cat:5,name:'כוסמת (25 ק"ג)'},
  {id:50114,cat:5,name:'לוז טבעי 9/11'},
  {id:50225,cat:5,name:'לוז טבעי חצאים (שבור)'},
  {id:50261,cat:5,name:'לוז טבעי שלם 11/13'},
  {id:50249,cat:5,name:'לוז מולבן גרוס 1-3 (10 ק"ג)'},
  {id:20111,cat:5,name:'מנגו דל סוכר – 20 ק"ג'},
  {id:20112,cat:5,name:'מנגו קוביות 5 מ"מ'},
  {id:20110,cat:5,name:'משמש טבעי (10 ק"ג)'},
  {id:20118,cat:5,name:'משמש מיובש'},
  {id:50247,cat:5,name:'משמש קוביות (10 ק"ג)'},
  {id:50238,cat:5,name:'פיסטוק בקליפה 18-22'},
  {id:50266,cat:5,name:'פיסטוק חצאים EXTRA GREEN'},
  {id:50252,cat:5,name:'פיסטוק טחון'},
  {id:50241,cat:5,name:'פיסטוק מקולף חצאים (10 ק"ג)'},
  {id:50245,cat:5,name:'פקאן טבעי גרוס 3-5'},
  {id:50242,cat:5,name:'פקאן סיני (מסוכר)'},
  {id:50028,cat:5,name:'פרג שלם כחול (25 ק"ג)'},
  {id:50020,cat:5,name:'פשתן – זרעי פשתן'},
  {id:20114,cat:5,name:'צימוק אוכמניה'},
  {id:20119,cat:5,name:'צימוק אמריקאי חום'},
  {id:20122,cat:5,name:'צימוק אמריקאי לבן (13.65 ק"ג)'},
  {id:20123,cat:5,name:'צימוק כהה (10 ק"ג)'},
  {id:50233,cat:5,name:'צנובר סיני 25 ק"ג'},
  {id:50254,cat:5,name:'קוקוס טחון (25 ק"ג)'},
  {id:50258,cat:5,name:'קוקוס לבן ללא סולפיטים (25 ק"ג)'},
  {id:50248,cat:5,name:'קוקוס לבן פיליפיני (22.7 ק"ג)'},
  {id:50251,cat:5,name:'קוקוס ממותק אטריות (22.7 ק"ג)'},
  {id:50250,cat:5,name:'קוקוס קלוי קראנץ (22.7 ק"ג)'},
  {id:50016,cat:5,name:'קינואה לבנה (25 ק"ג)'},
  {id:50270,cat:5,name:'קשיו 160'},
  {id:50211,cat:5,name:'קשיו SP'},
  {id:50214,cat:5,name:'קשיו גרוס טבעי BB'},
  {id:50213,cat:5,name:'קשיו חצאים LP'},
  {id:50210,cat:5,name:'קשיו שלם 320'},
  {id:50255,cat:5,name:'רצועות קוקוס מיובש (10 ק"ג)'},
  {id:50010,cat:5,name:'שומשום EXTRA'},
  {id:50011,cat:5,name:'שומשום לבן (5 ק"ג)'},
  {id:50015,cat:5,name:'שומשום מלא (25 ק"ג)'},
  {id:50014,cat:5,name:'שומשום שחור'},
  {id:50034,cat:5,name:'שיבולת שועל דקה (20 ק"ג)'},
  {id:50022,cat:5,name:'שיבולת שועל עבה (25 ק"ג)'},
  {id:50216,cat:5,name:'שקד בינוני שבור 20 ק"ג'},
  {id:50200,cat:5,name:'שקד טבעי אמריקאי'},
  {id:50257,cat:5,name:'שקד טבעי טחון (11.35 ק"ג)'},
  {id:50205,cat:5,name:'שקד טבעי ישראלי בינוני (20 ק"ג)'},
  {id:50207,cat:5,name:'שקד טחון מולבן אמריקאי (11.35 ק"ג)'},
  {id:50223,cat:5,name:'שקד מולבן גפרור/מקלות (10 ק"ג)'},
  {id:50032,cat:5,name:'שקד מולבן גרוס אמריקאי (11.35 ק"ג)'},
  {id:50269,cat:5,name:'שקד מולבן חצאים (10 ק"ג)'},
  {id:50204,cat:5,name:'שקד מולבן טחון מנולט (11.35 ק"ג)'},
  {id:50206,cat:5,name:'שקד מולבן טחון ספרדי (10 ק"ג)'},
  {id:50217,cat:5,name:'שקד מולבן פרוס (10 ק"ג)'},
  {id:50243,cat:5,name:'שקד מולבן פרוס (1 ק"ג)'},
  {id:50265,cat:5,name:'שקד מולבן שלם (10 ק"ג)'},
  {id:50215,cat:5,name:'שקד קלוי גרוס'},
  {id:20125,cat:5,name:'תאנים מיובשות'},
  {id:20115,cat:5,name:'תות שדה קוביות 5 מ"מ'},
  {id:50230,cat:5,name:'תפוח עץ טבעות 10 ק"ג'},
  // עזרי אפייה
  {id:80051,cat:8,name:'כפפות לטקס L/XL'},
  {id:80037,cat:8,name:'מגש קרטון 20 זהב (250 יח\')'},
  {id:80038,cat:8,name:'מגש קרטון אינגליש קייק'},
  {id:80104,cat:8,name:'נייר אפיה 60/60 (1000 יח\')'},
  {id:80106,cat:8,name:'נייר אפיה 60/80 (500 יח\')'},
  {id:80102,cat:8,name:'נייר אפיה סיליקון 50/70 (1000 יח\')'},
  {id:80107,cat:8,name:'נייר אפייה 30/30 (1000 יחידות)'},
  {id:80101,cat:8,name:'נייר אפייה 40/70 לבן (1000 יח\')'},
  {id:80105,cat:8,name:'נייר אפייה לבן 50/80 (500 יח\')'},
  {id:80103,cat:8,name:'נייר אפייה סיליקון חום 40/60 (1000 יח\')'},
  {id:80100,cat:8,name:'נייר אפייה סיליקון לבן 40/60 (1000 יח\')'},
  {id:80021,cat:8,name:'נייר ניגוב 6/1'},
  {id:80018,cat:8,name:'סינרים חד פעמי גדול 100 יחידות'},
  {id:80033,cat:8,name:'צלחת טורט זהב 24 (100 יח\')'},
  {id:80032,cat:8,name:'צלחת כסף בינוני קוטר 24 (100 יח\')'},
  {id:80034,cat:8,name:'צלחת כסף גדול קוטר 29 (100 יח\')'},
  {id:80040,cat:8,name:'קופסא בורקס 1.5 ק"ג לבן (100 יח\')'},
  {id:80041,cat:8,name:'קופסא מעוצבת 1.5 ק"ג (150 יח\')'},
  {id:80024,cat:8,name:'קרטון 1.5 ק"ג לבן (100 יח\')'},
  {id:80022,cat:8,name:'קרטון בורקס 1.5 ק"ג חום (150 יח\')'},
  {id:80010,cat:8,name:'שק זילוף בד גדול'},
  {id:80012,cat:8,name:'שק זילוף בד קטן'},
  {id:80014,cat:8,name:'שק זילוף חד פעמי גדול'},
  {id:80016,cat:8,name:'שק זילוף חד פעמי קטן'},
  {id:80036,cat:8,name:'תבנית אינגליש קייק (1000 יח\')'},
  {id:80035,cat:8,name:'תחתית זהב/כסף 28 ס"מ'},
  {id:80031,cat:8,name:'תחתית לטורט זהב/כסף קוטר 24 ס"מ'}
];