/* =========================================================================
   KOD.UZ — DARSLIK MA'LUMOTLARI
   Har bir kategoriya (HTML, CSS, JavaScript, Git, Kutubxonalar) items massiviga ega.
   item.type === 'lesson' -> oddiy dars
   item.type === 'quiz'   -> test (har 5 ta darsdan keyin)
   item.type === 'video'  -> video bilan tushuntiriladigan qo'shimcha mavzu
   ========================================================================= */

const COURSE = [

/* ======================================================================= */
/* ============================== 1. HTML ================================ */
/* ======================================================================= */
{
  id:'html', name:'HTML', color:'var(--html)', badge:'H',
  items:[

  {type:'lesson', id:'html-1', title:"HTML nima va sahifa tuzilishi", file:'01-nima.html',
    explain:[
      "<b>HTML</b> (HyperText Markup Language) — bu dasturlash tili emas, balki <b>belgilash (markup) tili</b>. U veb-sahifaning <b>skeletini</b>, ya'ni qaysi joyda sarlavha, qaysi joyda matn, qaysi joyda rasm turishini belgilaydi.",
      "Uni <b>CSS</b> bilan solishtiring: HTML — uyning g'ishtlari va devorlari (struktura), CSS — bo'yoq va bezaklar (ko'rinish), JavaScript esa — eshik-derazalarning ochilib-yopilishi (harakat, mantiq).",
      "Har qanday HTML sahifa quyidagi qat'iy tuzilishga ega bo'ladi. Buni <b>VS Code</b>da <code>!</code> belgisini yozib <kbd>Tab</kbd> bosish orqali avtomatik hosil qilish mumkin — bunga <b>boilerplate</b> deyiladi."
    ],
    examples:[
      {lang:'html', title:'index.html — asosiy skelet', code:
"<!DOCTYPE html>\n<html lang=\"uz\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Mening sahifam</title>\n</head>\n<body>\n  <h1>Salom, dunyo!</h1>\n  <p>Bu mening birinchi HTML sahifam.</p>\n</body>\n</html>", previewHtml:null}
    ],
    notes:[{type:'note', text:"<b>&lt;!DOCTYPE html&gt;</b> — brauzerga \"bu HTML5 sahifa\" ekanini aytadi. <b>&lt;head&gt;</b> ichida ko'zga ko'rinmaydigan ma'lumotlar (sarlavha, meta) bo'ladi, <b>&lt;body&gt;</b> ichida esa foydalanuvchi ko'radigan hamma narsa joylashadi."}],
    task:{text:"Mustaqil vazifa:", steps:[
      "VS Code'ni oching, <code>mening-ismim.html</code> nomli fayl yarating.",
      "<code>!</code> yozib <kbd>Tab</kbd> bosing va boilerplate hosil qiling.",
      "<code>&lt;title&gt;</code> ichiga ismingizni yozing.",
      "<code>&lt;body&gt;</code> ichiga <code>&lt;h1&gt;</code> bilan \"Salom, men — [ismingiz]\" deb yozing.",
      "Faylni brauzerda ochib ko'ring (Live Server kengaytmasidan foydalaning)."
    ]}
  },

  {type:'lesson', id:'html-2', title:"Teglar va atributlar", file:'02-teglar.html',
    explain:[
      "HTML sahifa <b>elementlar</b>dan tashkil topgan. Har bir element <b>teg</b> va ixtiyoriy <b>atribut</b>lardan iborat.",
      "Teglarning ikki turi bor: <b>juft (paired)</b> — ochiladigan va yopiladigan qismga ega (<code>&lt;p&gt;...&lt;/p&gt;</code>), va <b>yakka (unpaired)</b> — yopilish qismi yo'q (<code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>).",
      "<b>Atribut</b> — teg haqida qo'shimcha ma'lumot beruvchi <code>nom=\"qiymat\"</code> juftligi. Bitta tegda bir nechta atribut bo'lishi mumkin."
    ],
    examples:[
      {lang:'html', title:'Teg turlari', code:
"<!-- juft teg -->\n<p>Bu paragraf matni</p>\n\n<!-- yakka teg -->\n<img src=\"rasm.jpg\" alt=\"Tavsif\" />\n<br />\n\n<!-- bir nechta atribut -->\n<a href=\"https://uz.wikipedia.org\" target=\"_blank\">Vikipediya</a>"}
    ],
    notes:[{type:'note', text:"Element ichidagi elementga <b>bola (child)</b>, tashqarisidagini <b>ota (parent)</b>, bir darajadagi elementlarni esa <b>qo'shni (sibling)</b> deb ataymiz."}],
    task:{text:"Mustaqil vazifa:", steps:[
      "3 ta <code>&lt;p&gt;</code> teg yozing.",
      "Ulardan biriga <code>title</code> atributini qo'shing (sichqoncha ustiga borganda matn chiqadi).",
      "Bittasidan keyin <code>&lt;hr&gt;</code> (chiziq) chizing."
    ]}
  },

  {type:'lesson', id:'html-3', title:"Sarlavha va matn teglari", file:'03-matn.html',
    explain:[
      "Sarlavhalar uchun <code>&lt;h1&gt;</code> dan <code>&lt;h6&gt;</code> gacha teglar bor. <b>&lt;h1&gt;</b> — eng katta va sahifada odatda <b>faqat bitta</b> marta ishlatiladi (SEO uchun muhim), <b>&lt;h6&gt;</b> — eng kichik.",
      "Matn bilan ishlash uchun: <code>&lt;p&gt;</code> — paragraf, <code>&lt;br&gt;</code> — qatorni ko'chirish, <code>&lt;hr&gt;</code> — gorizontal chiziq, <code>&lt;pre&gt;</code> — formatlanishi saqlanadigan matn."
    ],
    examples:[
      {lang:'html', title:"Sarlavhalar va abzatslar", code:
"<h1>Eng katta sarlavha (32px)</h1>\n<h2>Ikkinchi darajali (24px)</h2>\n<h3>Uchinchi darajali</h3>\n\n<p>Bu — oddiy paragraf.<br />Bu esa yangi qatorda.</p>\n\n<hr />\n\n<pre>\n  Bu    matn\n     xuddi shu ko'rinishda\n        saqlanadi\n</pre>"}
    ],
    task:{text:"Mustaqil vazifa:", steps:["O'zingiz haqingizda mini-\"CV\" tuzing: h1 — ism-familiya, h2 — kasb, p — 2-3 gapli tavsif, hr bilan ajratilgan."]}
  },

  {type:'lesson', id:'html-4', title:"Formatlash teglari", file:'04-formatlash.html',
    explain:[
      "Matnni vizual jihatdan ta'kidlash uchun maxsus teglar bor: <code>&lt;b&gt;</code>/<code>&lt;strong&gt;</code> — qalin, <code>&lt;i&gt;</code>/<code>&lt;em&gt;</code> — kursiv, <code>&lt;u&gt;</code>/<code>&lt;ins&gt;</code> — tagiga chizilgan, <code>&lt;del&gt;</code> — o'chirilgan, <code>&lt;mark&gt;</code> — belgilangan (highlight).",
      "<b>&lt;strong&gt;</b> va <b>&lt;em&gt;</b> semantik jihatdan muhimroq — ular \"bu matn muhim/urg'uli\" deb ma'no beradi, <b>&lt;b&gt;</b> va <b>&lt;i&gt;</b> esa faqat tashqi ko'rinishni o'zgartiradi."
    ],
    examples:[
      {lang:'html', title:"Formatlash misoli", code:
"<p><b>Qalin matn</b> va <strong>muhim matn</strong></p>\n<p><i>Kursiv matn</i> va <em>urg'uli matn</em></p>\n<p><u>Tagiga chizilgan</u></p>\n<p><del>Eski narx: 100 000</del> <mark>Yangi narx: 70 000</mark></p>\n<p>H<sub>2</sub>O va 3<sup>2</sup> = 9</p>"}
    ],
    task:{text:"Mustaqil vazifa:", steps:["Bitta mahsulot e'loni yozing: nomi <b>strong</b> bilan, eski narxi <b>del</b> bilan, yangi narxi <b>mark</b> bilan ko'rsatilsin."]}
  },

  {type:'lesson', id:'html-5', title:"Ro'yxatlar (ul, ol, li)", file:'05-royxat.html',
    explain:[
      "<b>&lt;ul&gt;</b> (unordered list) — tartibsiz ro'yxat (nuqtalar bilan), <b>&lt;ol&gt;</b> (ordered list) — tartiblangan ro'yxat (raqamlar bilan). Har ikkisining ichida <b>&lt;li&gt;</b> (list item) elementlari bo'ladi.",
      "<code>&lt;ol&gt;</code> uchun <code>type</code> (1, A, a, I, i) va <code>start</code> atributlari mavjud."
    ],
    examples:[
      {lang:'html', title:"Ro'yxatlar", code:
"<h3>Xarid ro'yxati</h3>\n<ul>\n  <li>Non</li>\n  <li>Sut</li>\n  <li>Tuxum</li>\n</ul>\n\n<h3>Bajarish tartibi</h3>\n<ol type=\"1\" start=\"1\">\n  <li>VS Code o'rnatish</li>\n  <li>HTML o'rganish</li>\n  <li>CSS o'rganish</li>\n</ol>"}
    ],
    task:{text:"Mustaqil vazifa:", steps:["Haftalik dars jadvalingizni <ol> bilan, sevimli 5 ta film/kitobingizni <ul> bilan chiqaring."]}
  },

  {type:'quiz', id:'quiz-html-1', title:"Test #1 — HTML asoslari", file:'test-1.html',
    questions:[
      {q:"HTML nimani anglatadi?", options:["HyperText Markup Language","High Tech Modern Language","Home Tool Markup Language","HyperTransfer Making Language"], correct:0},
      {q:"Quyidagilardan qaysi biri yakka (unpaired) teg?", options:["<p>","<div>","<img>","<span>"], correct:2},
      {q:"Eng katta sarlavha tegi qaysi?", options:["<h6>","<h1>","<head>","<title>"], correct:1},
      {q:"Matnni qalin qilib, semantik jihatdan \"muhim\" deb belgilaydigan teg?", options:["<b>","<i>","<strong>","<u>"], correct:2},
      {q:"Tartiblangan (raqamli) ro'yxat qaysi teg bilan yaratiladi?", options:["<ul>","<ol>","<li>","<list>"], correct:1},
    ]
  },

  {type:'lesson', id:'html-6', title:"Rasmlar (img)", file:'06-rasm.html',
    explain:[
      "Rasm qo'yish uchun <code>&lt;img&gt;</code> tegi ishlatiladi. Muhim atributlar: <code>src</code> — rasm manzili, <code>alt</code> — rasm yuklanmasa chiqadigan matn (SEO va accessibility uchun <b>majburiy</b>), <code>width</code>/<code>height</code> — o'lcham.",
      "Rasm formatlari: <b>jpg/jpeg</b> — fotolar uchun, <b>png</b> — shaffof fon kerak bo'lsa, <b>svg</b> — vektor grafika (logotiplar), <b>gif</b> — animatsiya."
    ],
    examples:[
      {lang:'html', title:"img tegi", code:
"<img src=\"https://picsum.photos/300/180\" alt=\"Tasodifiy rasm\" width=\"300\" />\n\n<!-- favicon qo'shish (head ichida) -->\n<!-- <link rel=\"icon\" href=\"favicon.ico\" /> -->", previewHtml:null}
    ],
    notes:[{type:'warn', text:"<code>alt</code> atributini hech qachon bo'sh qoldirmang — ekran o'quvchilari (screen reader) va Google uni o'qiydi!"}],
    task:{text:"Mustaqil vazifa:", steps:["<a href=\"https://pexels.com\" target=\"_blank\">pexels.com</a> dan bitta rasm havolasini oling va uni <code>width=\"250\"</code> bilan sahifangizga joylashtiring."]}
  },

  {type:'lesson', id:'html-7', title:"Havolalar (a) — href, target, download", file:'07-havola.html',
    explain:[
      "<code>&lt;a&gt;</code> tegi havola yaratadi. <code>href</code> — manzil, <code>target=\"_blank\"</code> — yangi tabda ochish, <code>download</code> — faylni yuklab olish.",
      "Havolalar <b>ichki (relative)</b> — saytning boshqa sahifasiga, va <b>tashqi (absolute)</b> — boshqa saytga bo'lishi mumkin. Shuningdek <code>tel:</code> va <code>mailto:</code> maxsus havolalar ham bor."
    ],
    examples:[
      {lang:'html', title:"Havola turlari", code:
"<!-- tashqi havola, yangi tabda -->\n<a href=\"https://t.me/abdulazizprogrammer\" target=\"_blank\">Telegram kanal</a>\n\n<!-- ichki havola -->\n<a href=\"pages/about.html\">Biz haqimizda</a>\n\n<!-- telefon va email -->\n<a href=\"tel:+998901234567\">Qo'ng'iroq qilish</a>\n<a href=\"mailto:info@example.com\">Email yozish</a>\n\n<!-- yuklab olish -->\n<a href=\"fayl.pdf\" download>PDF yuklab olish</a>"}
    ],
    task:{text:"Mustaqil vazifa:", steps:["O'zingizning 3 ta ijtimoiy tarmoq (Telegram, Instagram va h.k.) havolalarini <code>target=\"_blank\"</code> bilan chiqaring."]}
  },

  {type:'lesson', id:'html-8', title:"div, span va block/inline elementlar", file:'08-div-span.html',
    explain:[
      "<code>&lt;div&gt;</code> — <b>block</b> element, tarkibni bo'limlarga ajratish uchun ishlatiladi (butun qatorni egallaydi). <code>&lt;span&gt;</code> — <b>inline</b> element, matn ichidagi kichik qismni belgilash uchun (faqat kerakli joyni egallaydi).",
      "<b>Block</b> elementlar (h1-h6, p, div, ul) — har doim yangi qatordan boshlanadi. <b>Inline</b> elementlar (span, a, b, img) — matn oqimida yonma-yon turadi."
    ],
    examples:[
      {lang:'html', title:"div va span", code:
"<div style=\"background:#eee;padding:10px;\">\n  Bu div ichidagi matn. <span style=\"color:red;\">Bu qism</span> alohida rangda.\n</div>\n<div style=\"background:#dfe;padding:10px;margin-top:5px;\">\n  Bu ikkinchi div — yangi qatordan boshlandi.\n</div>"}
    ],
    task:{text:"Mustaqil vazifa:", steps:["Bitta paragraf yozing va ichidagi 2 ta so'zni <span> bilan turli ranglarga bo'yang (style=\"color:...\" orqali)."]}
  },

  {type:'lesson', id:'html-9', title:"Jadval (table)", file:'09-jadval.html',
    explain:[
      "Jadval <code>&lt;table&gt;</code> tegi bilan boshlanadi. <code>&lt;tr&gt;</code> — qator (table row), <code>&lt;th&gt;</code> — sarlavha katakcha, <code>&lt;td&gt;</code> — oddiy katakcha (table data).",
      "<code>colspan</code> — bir necha ustunni birlashtiradi, <code>rowspan</code> — bir necha qatorni birlashtiradi."
    ],
    examples:[
      {lang:'html', title:"Baholar jadvali", code:
"<table border=\"1\" style=\"border-collapse:collapse; width:100%;\">\n  <tr>\n    <th>Ism</th>\n    <th>Fan</th>\n    <th>Baho</th>\n  </tr>\n  <tr>\n    <td>Aziz</td>\n    <td>Matematika</td>\n    <td>5</td>\n  </tr>\n  <tr>\n    <td>Laylo</td>\n    <td>Ingliz tili</td>\n    <td>4</td>\n  </tr>\n</table>"}
    ],
    task:{text:"Mustaqil vazifa:", steps:["3 o'quvchi, 3 fan bo'yicha o'z jadvalingizni tuzing.", "Bitta katakchani <code>colspan=\"2\"</code> bilan birlashtiring."]}
  },

  {type:'lesson', id:'html-10', title:"Semantik teglar va formalar asoslari", file:'10-semantik-forma.html',
    explain:[
      "<b>Semantik teglar</b> — o'z nomi bilan ma'no anglatadi: <code>&lt;header&gt;</code> (sahifa boshi), <code>&lt;nav&gt;</code> (navigatsiya), <code>&lt;main&gt;</code> (asosiy kontent), <code>&lt;section&gt;</code> (bo'lim), <code>&lt;article&gt;</code> (mustaqil maqola), <code>&lt;aside&gt;</code> (yon panel), <code>&lt;footer&gt;</code> (sahifa oxiri). Ular <code>&lt;div&gt;</code>ga qaraganda qidiruv tizimlari (SEO) va ekran o'quvchilari uchun tushunarliroq.",
      "<b>Forma</b> (<code>&lt;form&gt;</code>) — foydalanuvchidan ma'lumot olish uchun. Ichida <code>&lt;input&gt;</code> (matn, email, parol...) va <code>&lt;button&gt;</code> bo'ladi. Formalarni chuqurroq CSS bo'limidan keyin, 10-darsda to'liq o'rganamiz."
    ],
    examples:[
      {lang:'html', title:"Semantik struktura", code:
"<header>\n  <h1>Mening Blogim</h1>\n  <nav>\n    <a href=\"#\">Bosh sahifa</a>\n    <a href=\"#\">Bloglar</a>\n  </nav>\n</header>\n\n<main>\n  <article>\n    <h2>Birinchi maqola</h2>\n    <p>Maqola matni...</p>\n  </article>\n</main>\n\n<footer>\n  <p>&copy; 2026 Mening Blogim</p>\n</footer>"},
      {lang:'html', title:"Oddiy forma", code:
"<form>\n  <label for=\"ism\">Ismingiz:</label>\n  <input type=\"text\" id=\"ism\" placeholder=\"Ismingizni kiriting\" required />\n\n  <label for=\"email\">Email:</label>\n  <input type=\"email\" id=\"email\" />\n\n  <button type=\"submit\">Yuborish</button>\n</form>"}
    ],
    task:{text:"Mustaqil vazifa (HTML bo'limi yakuniy loyihasi):", steps:[
      "header, nav, main, footer teglaridan foydalangan holda \"Shaxsiy sahifa\" tuzing.",
      "Ichiga o'zingiz haqingizda 1 ta article, rasmingiz va oddiy \"Bog'lanish\" formasi qo'shing.",
      "Barcha matnlarni to'g'ri semantik teglar bilan formatlang."
    ]}
  },

  {type:'quiz', id:'quiz-html-2', title:"Test #2 — HTML chuqurroq", file:'test-2.html',
    questions:[
      {q:"Rasm ko'rinmasa qaysi matn chiqishi kerak?", options:["title","alt","src","name"], correct:1},
      {q:"Havolani yangi tabda ochish uchun qaysi atribut ishlatiladi?", options:["target=\"_blank\"","new=\"tab\"","open=\"new\"","href=\"_blank\""], correct:0},
      {q:"Quyidagilardan qaysi biri inline element?", options:["<div>","<p>","<span>","<h1>"], correct:2},
      {q:"Jadvalda sarlavha katakchasi qaysi teg?", options:["<td>","<tr>","<th>","<table>"], correct:2},
      {q:"Sahifaning asosiy navigatsiya menyusi uchun qaysi semantik teg mos?", options:["<div>","<nav>","<section>","<aside>"], correct:1},
    ]
  },

  ] // end html items
},

/* ======================================================================= */
/* ============================== 2. CSS ================================= */
/* ======================================================================= */
{
  id:'css', name:'CSS', color:'var(--css)', badge:'C',
  items:[

  {type:'lesson', id:'css-1', title:"CSS nima va ulash usullari", file:'01-nima.css',
    explain:[
      "<b>CSS</b> (Cascading Style Sheets) HTML elementlarining <b>ko'rinishini</b> (rang, o'lcham, joylashuv) belgilaydi.",
      "CSS ni 3 xil usulda ulash mumkin: <b>Inline</b> — to'g'ridan-to'g'ri <code>style</code> atributida, <b>Internal</b> — <code>&lt;head&gt;</code> ichidagi <code>&lt;style&gt;</code> tegida, <b>External</b> — alohida <code>.css</code> faylda (eng ko'p tavsiya etiladigan usul, chunki kod toza va qayta ishlatiladigan bo'ladi).",
      "<b>Stil ustunligi (overriding):</b> Inline stil — eng kuchli, undan keyin ID, keyin class, keyin teg selektori keladi. Bir xil kuchga ega qoidalar orasida <b>oxirgi yozilgani</b> g'alaba qiladi."
    ],
    examples:[
      {lang:'html', title:"External CSS ulash (index.html)", code:
"<head>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>"},
      {lang:'css', title:"style.css", code:
"/* tag selektor */\nh1 {\n  color: darkblue;\n}\n\n/* class selektor */\n.btn {\n  background-color: green;\n  color: white;\n  padding: 10px 20px;\n}\n\n/* id selektor */\n#logo {\n  font-size: 24px;\n}", previewHtml:"<h1>Sarlavha</h1><button class='btn'>Tugma</button><p id='logo'>LOGO</p>"}
    ],
    task:{text:"Mustaqil vazifa:", steps:["1-darsdagi HTML faylingizga alohida <code>style.css</code> faylini ulang.", "h1 rangini, body foni rangini o'zgartiring."]}
  },

  {type:'lesson', id:'css-2', title:"Selektorlar va ranglar", file:'02-selektor-rang.css',
    explain:[
      "Asosiy selektorlar: <code>*</code> — barcha elementlar, <code>tag</code> — muayyan teg, <code>.class</code> — class bo'yicha, <code>#id</code> — id bo'yicha (id sahifada faqat bitta marta ishlatiladi!).",
      "Ranglarni 4 xil usulda berish mumkin: <b>nom</b> (<code>red</code>), <b>HEX</b> (<code>#ff0000</code>), <b>RGB/RGBA</b> (<code>rgb(255,0,0)</code>, alpha — shaffoflik uchun), <b>HSL</b> (hue-saturation-lightness)."
    ],
    examples:[
      {lang:'css', title:"Selektorlar", code:
"* {\n  margin: 0;\n}\n\np {\n  color: #333;\n}\n\n.card {\n  border: 1px solid gray;\n}\n\n#main-title {\n  color: rgb(30, 144, 255);\n}", previewHtml:"<p id='main-title'>Sarlavha (id)</p><p class='card'>Karta (class)</p><p>Oddiy paragraf</p>"},
      {lang:'css', title:"Rang turlari", code:
".v1 { color: red; }\n.v2 { color: #e74c3c; }\n.v3 { color: rgb(46, 204, 113); }\n.v4 { color: rgba(52, 152, 219, 0.6); }\n.v5 { color: hsl(280, 70%, 55%); }", previewHtml:"<p class='v1'>Nom orqali</p><p class='v2'>HEX orqali</p><p class='v3'>RGB orqali</p><p class='v4'>RGBA orqali (shaffof)</p><p class='v5'>HSL orqali</p>"}
    ],
    task:{text:"Mustaqil vazifa:", steps:["5 ta paragraf yozing, har birini boshqa-boshqa rang usuli (nom, hex, rgb, rgba, hsl) bilan bo'yang."]}
  },

  {type:'lesson', id:'css-3', title:"Matn va shrift stillari", file:'03-matn.css',
    explain:[
      "Matn bilan ishlash uchun asosiy xossalar: <code>font-size</code>, <code>font-weight</code> (100-900), <code>font-family</code>, <code>text-align</code>, <code>text-decoration</code>, <code>text-transform</code>, <code>line-height</code>, <code>letter-spacing</code>.",
      "<code>font-family</code>da bir nechta shrift ketma-ket yoziladi (agar birinchisi topilmasa keyingisi ishlatiladi), oxirida umumiy toifa (<code>sans-serif</code>, <code>serif</code>, <code>monospace</code>) qoldiriladi."
    ],
    examples:[
      {lang:'css', title:"Matn stillash", code:
"h2 {\n  font-family: 'Arial', sans-serif;\n  font-weight: 700;\n  text-align: center;\n  text-transform: uppercase;\n}\n\np {\n  font-size: 16px;\n  line-height: 1.6;\n  letter-spacing: 0.5px;\n  text-decoration: underline;\n}", previewHtml:"<h2>Sarlavha markazda</h2><p>Bu matn tagiga chizilgan va oraliqli.</p>"}
    ],
    task:{text:"Mustaqil vazifa:", steps:["Sarlavhangizga <code>Google Fonts</code>dan (fonts.google.com) bitta shriftni ulang va qo'llang."]}
  },

  {type:'lesson', id:'css-4', title:"Box model (padding, border, margin)", file:'04-box-model.css',
    explain:[
      "Har bir HTML element aslida to'rtburchak \"quti\" (box)dir. Bu quti 4 qatlamdan iborat: <b>content</b> (kontent) → <b>padding</b> (ichki bo'shliq) → <b>border</b> (chegara) → <b>margin</b> (tashqi bo'shliq).",
      "<code>padding</code> va <code>margin</code> bir necha qiymat qabul qilishi mumkin: <code>10px</code> (hammasi), <code>10px 20px</code> (tepa-past 10, chap-o'ng 20), <code>10px 20px 30px 40px</code> (tepa, o'ng, past, chap — soat yo'nalishida).",
      "<b>box-sizing: border-box</b> — juda muhim xossa: u padding va borderni elementning umumiy kengligiga <b>qo'shmaydi</b>, hisoblashni osonlashtiradi. Shuning uchun deyarli har bir loyihada CSS boilerplate sifatida ishlatiladi."
    ],
    examples:[
      {lang:'css', title:"Box model", code:
".card {\n  width: 200px;\n  padding: 20px;\n  border: 3px solid #333;\n  margin: 15px auto;\n  background: #f0f8ff;\n}", previewHtml:"<div class='card'>Bu — box model kartasi</div>"},
      {lang:'css', title:"CSS boilerplate", code:
"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}"}
    ],
    task:{text:"Mustaqil vazifa:", steps:["3 xil o'lchamdagi \"karta\" (div) yasang: har birida padding, border-radius va margin turlicha bo'lsin."]}
  },

  {type:'lesson', id:'css-5', title:"Display: block, inline, inline-block, none", file:'05-display.css',
    explain:[
      "<code>display</code> xossasi elementning qanday joylashishini boshqaradi: <b>block</b> — butun qatorni egallaydi (div, p, h1), <b>inline</b> — faqat kerakli joyni egallaydi va width/height qabul qilmaydi (span, a), <b>inline-block</b> — inline kabi yonma-yon turadi, lekin width/height'ni qabul qiladi, <b>none</b> — elementni butunlay yashiradi (joyini ham egallamaydi)."
    ],
    examples:[
      {lang:'css', title:"Display turlari", code:
".inline-item {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  background: coral;\n  margin: 5px;\n  text-align: center;\n  line-height: 80px;\n  color: white;\n}\n.hidden {\n  display: none;\n}", previewHtml:"<div class='inline-item'>1</div><div class='inline-item'>2</div><div class='inline-item hidden'>Yashirin</div><div class='inline-item'>3</div>"}
    ],
    task:{text:"Mustaqil vazifa:", steps:["5 ta <span> ni <code>inline-block</code> qilib, kvadrat \"kartochkalar qatori\" yasang."]}
  },

  {type:'quiz', id:'quiz-css-1', title:"Test #3 — CSS asoslari", file:'test-3.html',
    questions:[
      {q:"CSS ulashning eng tavsiya etiladigan usuli?", options:["Inline","Internal","External (alohida fayl)","Hech biri"], correct:2},
      {q:"Bitta sahifada nechta marta bir xil <b>id</b> ishlatish mumkin?", options:["Cheklanmagan","Faqat 1 marta","Maksimal 2 marta","5 marta"], correct:1},
      {q:"Box modelda qaysi qatlam ichki bo'shliq hisoblanadi?", options:["margin","border","padding","content"], correct:2},
      {q:"box-sizing: border-box nima uchun ishlatiladi?", options:["Rangni o'zgartirish uchun","Padding va borderni width ichiga hisoblash uchun","Shriftni o'zgartirish uchun","Animatsiya uchun"], correct:1},
      {q:"Elementni butunlay ko'rinmas qilib, joyini ham egallamasligi uchun?", options:["visibility: hidden","display: none","opacity: 0","color: transparent"], correct:1},
    ]
  },

  {type:'lesson', id:'css-6', title:"Position: static, relative, absolute, fixed, sticky", file:'06-position.css',
    explain:[
      "<code>position</code> xossasi elementni odatiy oqimdan chiqarib, aniq joyga qo'yish imkonini beradi. Qiymatlari: <b>static</b> (standart), <b>relative</b> (o'zining asl joyiga nisbatan siljiydi), <b>absolute</b> (eng yaqin <code>relative/absolute</code> ota-elementga nisbatan), <b>fixed</b> (ekranga nisbatan qotib qoladi, scroll qilinsa ham joyidan qo'zg'almaydi), <b>sticky</b> (scroll paytida bir joyga \"yopishib qoladi\").",
      "<code>top/right/bottom/left</code> xossalari faqat <code>position</code> <b>static</b>dan boshqa bo'lganda ishlaydi.",
      "<code>z-index</code> — elementlarning bir-birining ustiga chiqish tartibini belgilaydi (kattarog'i tepada turadi). Bu xossa faqat <code>position</code> statik bo'lmagan elementlarda ishlaydi."
    ],
    examples:[
      {lang:'css', title:"position: relative va absolute", code:
".parent {\n  position: relative;\n  width: 250px;\n  height: 120px;\n  background: #eee;\n}\n.child {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  background: crimson;\n  color: white;\n  padding: 6px 10px;\n}", previewHtml:"<div class='parent'>Ota (relative)<div class='child'>Bola (absolute)</div></div>"},
      {lang:'css', title:"Doimiy navbar (fixed)", code:
"header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: #222;\n  color: white;\n  padding: 12px;\n  z-index: 99;\n}"}
    ],
    task:{text:"Mustaqil vazifa:", steps:["\"Yangi\" degan yorliqni (badge) rasmning burchagiga <code>position: absolute</code> yordamida joylashtiring."]}
  },

  {type:'lesson', id:'css-7', title:"Flexbox", file:'07-flexbox.css',
    explain:[
      "<b>Flexbox</b> — elementlarni bir qatorda yoki bir ustunda oson joylashtirish uchun layout tizimi. Ota elementga <code>display: flex</code> beriladi.",
      "Ota-element xossalari: <code>justify-content</code> (gorizontal joylashuv: flex-start, center, space-between...), <code>align-items</code> (vertikal joylashuv), <code>flex-direction</code> (row/column), <code>flex-wrap</code> (qatorga sig'masa keyingi qatorga o'tish).",
      "Bola-element xossalari: <code>flex-grow</code> (ortiqcha joyni egallash), <code>order</code> (tartibni o'zgartirish), <code>align-self</code>."
    ],
    examples:[
      {lang:'css', title:"Flexbox — markazlashtirish", code:
".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  height: 150px;\n  background: #f4f4f4;\n}\n.box {\n  width: 60px;\n  height: 60px;\n  background: teal;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}", previewHtml:"<div class='container'><div class='box'>1</div><div class='box'>2</div><div class='box'>3</div></div>"},
      {lang:'css', title:"space-between bilan navbar", code:
".navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #333;\n  color: white;\n  padding: 12px 20px;\n}", previewHtml:"<div class='navbar'><span>LOGO</span><span>Bosh sahifa | Aloqa</span></div>"}
    ],
    task:{text:"Mustaqil vazifa:", steps:["Flexbox yordamida 4 ta \"karta\"ni bitta qatorda, orasida teng bo'shliq (<code>gap</code>) bilan chiqaring.", "Mobil ekranda ular pastga tushishi uchun <code>flex-wrap: wrap</code> qo'shing."]}
  },

  {type:'lesson', id:'css-8', title:"Grid layout", file:'08-grid.css',
    explain:[
      "<b>CSS Grid</b> — ikki o'lchamli (qator + ustun) layout tizimi, murakkab sahifa tuzilishlari uchun juda qulay. Ota elementga <code>display: grid</code> beriladi.",
      "<code>grid-template-columns</code> — ustunlar sonini va o'lchamini belgilaydi. <code>fr</code> birligi — mavjud joyning ulushini bildiradi. <code>repeat()</code> funksiyasi takrorlanuvchi ustunlarni qisqa yozishga yordam beradi. <code>gap</code> — elementlar orasidagi bo'shliq.",
      "<b>Grid vs Flexbox:</b> Flexbox — bir yo'nalishli (qator YOKI ustun), Grid — ikki yo'nalishli (qator VA ustun bir vaqtda) tuzilishlar uchun ideal."
    ],
    examples:[
      {lang:'css', title:"3 ustunli grid", code:
".gallery {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n.gallery div {\n  background: #6c5ce7;\n  color: white;\n  padding: 20px;\n  text-align: center;\n}", previewHtml:"<div class='gallery'><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div></div>"}
    ],
    task:{text:"Mustaqil vazifa:", steps:["9 ta rasm/karta uchun 3x3 grid galereya yasang."]}
  },

  {type:'lesson', id:'css-9', title:"Media query va responsive dizayn", file:'09-responsive.css',
    explain:[
      "<b>Responsive dizayn</b> — sayt istalgan ekran o'lchamiga (kompyuter, planshet, telefon) moslashishi. Buning uchun <code>@media</code> qoidalari ishlatiladi.",
      "Ikki yondashuv bor: <b>first-desktop</b> (<code>max-width</code> bilan, kattadan kichikka) va <b>first-mobile</b> (<code>min-width</code> bilan, kichikdan kattaga). Muhim: <code>&lt;head&gt;</code>da <code>&lt;meta name=\"viewport\"...&gt;</code> bo'lishi shart!"
    ],
    examples:[
      {lang:'css', title:"Media query misoli", code:
".box {\n  width: 300px;\n  background: dodgerblue;\n  color: white;\n  padding: 20px;\n}\n\n@media (max-width: 600px) {\n  .box {\n    width: 100%;\n    background: crimson;\n  }\n}", previewHtml:"<div class='box'>Ekranni torайтиринг — rang o'zgaradi (haqiqiy saytda)</div>"}
    ],
    notes:[{type:'note', text:"Bu misolni chinakam sinash uchun brauzer oynasini toraytirib ko'ring — 600px dan kichik bo'lsa fon rangi qizil bo'ladi."}],
    task:{text:"Mustaqil vazifa:", steps:["Flexbox bilan yasagan kartalar qatorini telefon ekranida (max-width:600px) ustma-ust (column) chiqadigan qiling."]}
  },

  {type:'lesson', id:'css-10', title:"Pseudo-class, transition va animation", file:'10-pseudo-animatsiya.css',
    explain:[
      "<b>Pseudo-class</b>lar elementning ma'lum <i>holatini</i> belgilaydi: <code>:hover</code> (sichqoncha ustida), <code>:focus</code> (fokusda), <code>:first-child</code>, <code>:last-child</code>, <code>:nth-child(n)</code>.",
      "<b>transition</b> — bir holatdan ikkinchisiga <i>silliq</i> o'tishni ta'minlaydi: <code>transition: property davomiylik timing-function;</code>",
      "<b>@keyframes</b> — murakkabroq, ko'p bosqichli animatsiyalar uchun ishlatiladi."
    ],
    examples:[
      {lang:'css', title:"Hover + transition", code:
".btn {\n  background: #2ecc71;\n  color: white;\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  transition: 0.3s ease;\n}\n.btn:hover {\n  background: #27ae60;\n  transform: scale(1.08);\n}", previewHtml:"<button class='btn'>Sichqonchani ustiga qo'ying</button>"},
      {lang:'css', title:"@keyframes animatsiya", code:
"@keyframes pulse {\n  0%   { transform: scale(1); }\n  50%  { transform: scale(1.2); }\n  100% { transform: scale(1); }\n}\n.heart {\n  display: inline-block;\n  font-size: 40px;\n  animation: pulse 1s infinite;\n}", previewHtml:"<div class='heart'>❤️</div>"}
    ],
    task:{text:"Mustaqil vazifa (CSS bo'limi yakuniy loyihasi):", steps:[
      "Flexbox/Grid, box model va pseudo-class'lardan foydalanib to'liq \"Landing page\" (header + kartalar + footer) yasang.",
      "Barcha tugmalarga :hover effekti qo'shing.",
      "Sahifani telefon ekraniga moslang (@media)."
    ]}
  },

  {type:'quiz', id:'quiz-css-2', title:"Test #4 — CSS chuqurroq", file:'test-4.html',
    questions:[
      {q:"Elementni ekranga nisbatan qotirib qo'yish uchun qaysi position qiymati ishlatiladi?", options:["relative","absolute","fixed","static"], correct:2},
      {q:"Flexbox'da elementlarni gorizontal markazlashtirish uchun?", options:["align-items: center","justify-content: center","text-align: center","display: center"], correct:1},
      {q:"CSS Grid'da 'fr' birligi nimani bildiradi?", options:["Fixed radius","Foydalanuvchi rangi","Mavjud joy ulushi (fraction)","Font razmeri"], correct:2},
      {q:"Ekran o'lchamiga qarab stil o'zgartirish uchun nima ishlatiladi?", options:["@font-face","@media","@import","@keyframes"], correct:1},
      {q:"Sichqoncha element ustiga kelganda ishlaydigan pseudo-class?", options:[":focus",":active",":hover",":visited"], correct:2},
    ]
  },

  ] // end css items
},

/* ======================================================================= */
/* ========================== 3. JAVASCRIPT =============================== */
/* ======================================================================= */
{
  id:'js', name:'JavaScript', color:'var(--js)', badge:'JS',
  items:[

  {type:'lesson', id:'js-1', title:"JavaScript nima? O'zgaruvchilar (let, const, var)", file:'01-ozgaruvchilar.js',
    explain:[
      "<b>JavaScript</b> — veb-sahifani \"jonlantiradigan\", interaktiv qiladigan dasturlash tili. Agar HTML — skelet, CSS — tashqi ko'rinish bo'lsa, JavaScript — <b>miya va harakat</b>dir.",
      "<b>O'zgaruvchi</b> — ma'lumotni saqlash uchun \"quti\". JavaScript'da 3 xil e'lon qilish kalit so'zi bor: <code>var</code> (eski, endi kam ishlatiladi), <code>let</code> (qiymati o'zgarishi mumkin), <code>const</code> (qiymati o'zgarmaydi, doim boshlang'ich qiymat bilan e'lon qilinishi shart).",
      "Muhim tushunchalar: <b>e'lon qilish (declaration)</b> — <code>let ism;</code>, <b>ishga tushirish (initialization)</b> — <code>ism = 'Aziz';</code>, <b>o'zlashtirish (assignment)</b> — qiymatni qayta berish."
    ],
    examples:[
      {lang:'js', title:"O'zgaruvchilar", code:
"let ism = \"Aziz\";\nlet yosh = 20;\nconst PI = 3.14;\n\nconsole.log(ism);\nconsole.log(yosh);\n\nyosh = 21; // let o'zgarishi mumkin\nconsole.log(yosh);\n\n// PI = 3.15; // XATOLIK! const o'zgarmaydi", run:true},
    ],
    notes:[{type:'warn', text:"<code>const</code> bilan e'lon qilingan o'zgaruvchini keyinchalik qayta o'zgartira olmaysiz — dastur xato beradi!"}],
    task:{text:"Mustaqil vazifa:", steps:["<code>let</code> bilan o'z ismingiz, yoshingiz, shahringizni saqlovchi o'zgaruvchilar yarating.", "<code>console.log()</code> orqali barchasini chiqaring.", "Yoshingizni 1 taga oshirib, qayta chiqaring."]}
  },

  {type:'lesson', id:'js-2', title:"Ma'lumot turlari (data types)", file:'02-malumot-turlari.js',
    explain:[
      "JavaScript'da asosiy (primitive) turlar: <b>number</b> (son), <b>string</b> (matn), <b>boolean</b> (true/false), <b>undefined</b> (qiymat berilmagan), <b>null</b> (qasddan bo'sh qiymat).",
      "Murakkab turlar: <b>array</b> (massiv — ro'yxat) va <b>object</b> (obyekt — kalit-qiymat juftliklari).",
      "Turini bilish uchun <code>typeof</code> operatoridan foydalaniladi."
    ],
    examples:[
      {lang:'js', title:"Turlar bilan tanishuv", code:
"let son = 25;\nlet matn = \"Salom\";\nlet holat = true;\nlet nomalum;\nlet arr = [1, 2, 3];\nlet obj = { ism: \"Aziz\", yosh: 20 };\n\nconsole.log(typeof son);\nconsole.log(typeof matn);\nconsole.log(typeof holat);\nconsole.log(typeof nomalum);\nconsole.log(typeof arr);\nconsole.log(typeof obj);", run:true}
    ],
    task:{text:"Mustaqil vazifa:", steps:["Har bir tur (number, string, boolean, array, object) uchun bittadan o'zgaruvchi yarating va <code>typeof</code> bilan tekshiring."]}
  },

  {type:'lesson', id:'js-3', title:"Operatorlar va shart operatorlari (if-else)", file:'03-shart.js',
    explain:[
      "Arifmetik operatorlar: <code>+ - * / % **</code>. Solishtirish: <code>== === != !== &gt; &lt; &gt;= &lt;=</code> (<b>===</b> — qiymat va turini ham solishtiradi, shuning uchun har doim shuni ishlating!). Mantiqiy: <code>&& (va) || (yoki) ! (emas)</code>.",
      "<code>if...else</code> — shartga qarab har xil kod bloklarini ishga tushiradi. <code>else if</code> bilan bir nechta shartni ketma-ket tekshirish mumkin."
    ],
    examples:[
      {lang:'js', title:"if-else misoli", code:
"let yosh = 17;\n\nif (yosh >= 18) {\n  console.log(\"Siz kattasiz\");\n} else if (yosh >= 13) {\n  console.log(\"Siz o'smirsiz\");\n} else {\n  console.log(\"Siz bolasiz\");\n}", run:true},
      {lang:'js', title:"Ternary (qisqa) operator", code:
"let yosh = 20;\nlet natija = yosh >= 18 ? \"Katta\" : \"Kichik\";\nconsole.log(natija);", run:true}
    ],
    task:{text:"Mustaqil vazifa:", steps:["Foydalanuvchi balli (0-100) asosida baho (A,B,C,D,F) chiqaruvchi if-else zanjiri yozing."]}
  },

  {type:'lesson', id:'js-4', title:"Sikllar (for, while)", file:'04-sikl.js',
    explain:[
      "Sikllar bir xil amalni ko'p marta takrorlash uchun ishlatiladi. <b>for</b> — nechchi marta takrorlashni oldindan bilsak, <b>while</b> — shart to'g'ri bo'lguncha takrorlaydi.",
      "<code>break</code> — siklni to'liq to'xtatadi, <code>continue</code> — joriy iteratsiyani o'tkazib yuborib, keyingisiga o'tadi."
    ],
    examples:[
      {lang:'js', title:"for sikli — 1 dan 5 gacha", code:
"for (let i = 1; i <= 5; i++) {\n  console.log(\"Qadam: \" + i);\n}", run:true},
      {lang:'js', title:"while sikli va break", code:
"let i = 0;\nwhile (i < 10) {\n  if (i === 5) {\n    break;\n  }\n  console.log(i);\n  i++;\n}", run:true}
    ],
    task:{text:"Mustaqil vazifa:", steps:["1 dan 100 gacha bo'lgan sonlar ichidan faqat 3 ga bo'linadiganlarini chiqaruvchi <code>for</code> sikli yozing."]}
  },

  {type:'lesson', id:'js-5', title:"Funksiyalar", file:'05-funksiya.js',
    explain:[
      "<b>Funksiya</b> — ma'lum vazifani bajaruvchi, qayta-qayta chaqirsa bo'ladigan kod bo'lagi. <code>parametr</code> — funksiya e'lon qilinganda yoziladigan o'zgaruvchi, <code>argument</code> — funksiya chaqirilganda beriladigan haqiqiy qiymat.",
      "<code>return</code> — funksiyadan qiymat qaytaradi va uni to'xtatadi. Zamonaviy JavaScript'da <b>arrow function</b> (<code>=&gt;</code>) qisqaroq yozish uslubi sifatida keng qo'llaniladi."
    ],
    examples:[
      {lang:'js', title:"Oddiy funksiya", code:
"function qoshish(a, b) {\n  return a + b;\n}\n\nlet natija = qoshish(5, 3);\nconsole.log(natija);", run:true},
      {lang:'js', title:"Arrow function", code:
"const kvadrat = (x) => x * x;\n\nconsole.log(kvadrat(4));\nconsole.log(kvadrat(7));", run:true}
    ],
    task:{text:"Mustaqil vazifa:", steps:["Ikki sonni oladigan va ularning eng kattasini qaytaruvchi <code>maksimal(a, b)</code> funksiyasini yozing."]}
  },

  {type:'quiz', id:'quiz-js-1', title:"Test #5 — JS asoslari", file:'test-5.html',
    questions:[
      {q:"Qiymati o'zgarmaydigan o'zgaruvchi qaysi kalit so'z bilan e'lon qilinadi?", options:["var","let","const","static"], correct:2},
      {q:"Ikkita qiymatni HAM turi, HAM qiymati bo'yicha solishtiradigan operator?", options:["==","===","=","!="], correct:1},
      {q:"typeof [1,2,3] natijasi nima bo'ladi?", options:["'array'","'object'","'list'","'number'"], correct:1},
      {q:"Siklni butunlay to'xtatuvchi kalit so'z?", options:["continue","return","stop","break"], correct:3},
      {q:"Funksiyadan natija qaytarish uchun qaysi kalit so'z ishlatiladi?", options:["return","give","output","yield"], correct:0},
    ]
  },

  {type:'lesson', id:'js-6', title:"Massivlar (array) va metodlari", file:'06-massiv.js',
    explain:[
      "<b>Massiv</b> — buyumlar ro'yxatini saqlaydi, indekslari <b>0</b> dan boshlanadi. Muhim metodlar: <code>push()</code> (oxiriga qo'shish), <code>pop()</code> (oxiridan olib tashlash), <code>unshift()</code>/<code>shift()</code> (boshiga qo'shish/olib tashlash), <code>slice()</code> (yangi massiv qaytaradi), <code>includes()</code> (bor-yo'qligini tekshiradi).",
      "Zamonaviy iteratsiya uchun <b>high-order</b> metodlar: <code>map()</code> (har elementni o'zgartirib, yangi massiv qaytaradi), <code>filter()</code> (shartga mos elementlarni tanlaydi), <code>forEach()</code> (har biriga amal bajaradi, qaytarmaydi)."
    ],
    examples:[
      {lang:'js', title:"Massiv metodlari", code:
"let mevalar = [\"olma\", \"banan\", \"uzum\"];\n\nmevalar.push(\"anor\");\nconsole.log(mevalar);\n\nconsole.log(mevalar[0]);\nconsole.log(mevalar.length);", run:true},
      {lang:'js', title:"map va filter", code:
"let sonlar = [1, 2, 3, 4, 5, 6];\n\nlet ikkilangan = sonlar.map(n => n * 2);\nconsole.log(ikkilangan);\n\nlet juftlar = sonlar.filter(n => n % 2 === 0);\nconsole.log(juftlar);", run:true}
    ],
    task:{text:"Mustaqil vazifa:", steps:["5 ta sondan iborat massiv yarating.", "<code>map()</code> bilan har birini kvadratga oshiring.", "<code>filter()</code> bilan 10dan katta bo'lganlarini ajrating."]}
  },

  {type:'lesson', id:'js-7', title:"Stringlar va metodlari", file:'07-string.js',
    explain:[
      "Stringlar (matnlar) ham massivga o'xshab indekslanadi. Foydali metodlar: <code>toUpperCase()</code>/<code>toLowerCase()</code>, <code>trim()</code> (bo'shliqlarni olib tashlash), <code>split()</code> (massivga bo'lish), <code>slice()</code>, <code>replace()</code>, <code>includes()</code>.",
      "<b>Template literal</b> (orqa qo'shtirnoq bilan) matn ichiga o'zgaruvchi qo'shishni osonlashtiradi: <code>`Salom, ${ism}!`</code>"
    ],
    examples:[
      {lang:'js', title:"String metodlari", code:
"let matn = \"  Salom, Dunyo!  \";\n\nconsole.log(matn.trim());\nconsole.log(matn.toUpperCase());\nconsole.log(matn.includes(\"Dunyo\"));\n\nlet qismlar = \"olma,banan,uzum\".split(\",\");\nconsole.log(qismlar);", run:true},
      {lang:'js', title:"Template literal", code:
"let ism = \"Aziz\";\nlet yosh = 20;\n\nlet gap = `Mening ismim ${ism}, men ${yosh} yoshdaman.`;\nconsole.log(gap);", run:true}
    ],
    task:{text:"Mustaqil vazifa:", steps:["Ism va familiyangizni alohida o'zgaruvchilarga yozib, template literal orqali \"To'liq ism: ...\" chiqaring."]}
  },

  {type:'lesson', id:'js-8', title:"Obyektlar (object)", file:'08-obyekt.js',
    explain:[
      "<b>Obyekt</b> — kalit (key) va qiymat (value) juftliklari to'plami. Real dunyodagi narsalarni (odam, mahsulot, mashina) tasvirlash uchun juda qulay.",
      "Xususiyatga murojaat qilishning ikki usuli: <code>obj.property</code> (nuqta orqali) va <code>obj[\"property\"]</code> (kvadrat qavs orqali, dinamik nom kerak bo'lganda foydali).",
      "Obyekt ichida <b>metod</b> (funksiya) ham bo'lishi mumkin, u ichida <code>this</code> — o'sha obyektning o'ziga ishora qiladi."
    ],
    examples:[
      {lang:'js', title:"Obyekt yaratish", code:
"let student = {\n  ism: \"Laylo\",\n  yosh: 19,\n  fanlar: [\"Matematika\", \"Fizika\"],\n  salomlash: function () {\n    console.log(\"Salom, men \" + this.ism);\n  }\n};\n\nconsole.log(student.ism);\nconsole.log(student[\"yosh\"]);\nstudent.salomlash();", run:true}
    ],
    task:{text:"Mustaqil vazifa:", steps:["O'zingiz haqingizda <code>obyekt</code> yarating: ism, yosh, shahar, hobbylar (massiv) va <code>menHaqimda()</code> metodi bilan."]}
  },

  {type:'lesson', id:'js-9', title:"DOM — elementlarni tanlash va o'zgartirish", file:'09-dom.js',
    explain:[
      "<b>DOM</b> (Document Object Model) — HTML sahifaning JavaScript orqali boshqarish mumkin bo'lgan \"xaritasi\". Elementlarni tanlash uchun eng ko'p ishlatiladigan usullar: <code>document.getElementById()</code> va <code>document.querySelector()</code> (CSS selektor sintaksisi bilan).",
      "Tanlangan elementni o'zgartirish: <code>.innerHTML</code> (HTML kontentni o'zgartiradi), <code>.textContent</code> (faqat matn), <code>.style.property</code> (CSS stilini o'zgartiradi), <code>.classList.add/remove/toggle()</code> (class qo'shish/olib tashlash)."
    ],
    examples:[
      {lang:'html', title:"HTML (misol uchun)", code:
"<h1 id=\"sarlavha\">Salom</h1>\n<button onclick=\"ozgartir()\">Bosing</button>\n\n<script>\nfunction ozgartir() {\n  let el = document.getElementById(\"sarlavha\");\n  el.textContent = \"O'zgardi!\";\n  el.style.color = \"tomato\";\n}\n</script>", previewHtml:null},
    ],
    notes:[{type:'note', text:"Yuqoridagi misolni pastdagi \"Ko'rish\" oynasida sinab ko'rishingiz mumkin — tugmani bosing!"}],
    task:{text:"Mustaqil vazifa:", steps:["Bitta tugma va bitta <p> yasang.", "Tugma bosilganda <p> matnini va fon rangini JavaScript orqali o'zgartiring."]}
  },

  {type:'lesson', id:'js-10', title:"Eventlar (addEventListener)", file:'10-eventlar.js',
    explain:[
      "<b>Event</b> (hodisa) — foydalanuvchi harakati: <code>click</code>, <code>mouseenter</code>, <code>keydown</code>, <code>submit</code> va h.k. Zamonaviy va tavsiya etiladigan usul — <code>element.addEventListener(\"hodisa\", funksiya)</code>.",
      "Bu usulning afzalligi: bitta elementga bir nechta \"tinglovchi\" (listener) qo'shish mumkin, va HTML bilan JS kodini aralashtirmaslikka yordam beradi (HTML ichida <code>onclick=\"...\"</code> yozishdan ko'ra toza)."
    ],
    examples:[
      {lang:'html', title:"addEventListener misoli", code:
"<button id=\"btn\">Bosing meni</button>\n<p id=\"natija\">Hali bosilmagan</p>\n\n<script>\nconst btn = document.getElementById(\"btn\");\nconst natija = document.getElementById(\"natija\");\n\nbtn.addEventListener(\"click\", function () {\n  natija.textContent = \"Tugma bosildi!\";\n  natija.style.color = \"green\";\n});\n</script>", previewHtml:null}
    ],
    task:{text:"Mustaqil vazifa (JS bo'limi yakuniy loyihasi):", steps:[
      "\"Soqchi\" (counter) ilova yasang: +1 va -1 tugmalari bo'lsin.",
      "Har bosishda son ekranda yangilanib tursin (addEventListener yordamida).",
      "Son 0 dan kichik bo'lmasin (if shart bilan tekshiring)."
    ]}
  },

  {type:'quiz', id:'quiz-js-2', title:"Test #6 — JS chuqurroq", file:'test-6.html',
    questions:[
      {q:"Massivga oxiridan element qo'shadigan metod?", options:["shift()","pop()","push()","unshift()"], correct:2},
      {q:"Massivning har bir elementini o'zgartirib, yangi massiv qaytaruvchi metod?", options:["forEach()","map()","filter()","find()"], correct:1},
      {q:"HTML elementni id bo'yicha tanlash uchun?", options:["document.querySelector()","document.getElementById()","document.getElement()","document.selectById()"], correct:1},
      {q:"Zamonaviy usulda hodisa (event) qo'shish uchun qaysi metod ishlatiladi?", options:["onEvent()","addListener()","addEventListener()","onClick()"], correct:2},
      {q:"Obyekt ichida 'this' kalit so'zi nimani anglatadi?", options:["Global oynani","O'sha obyektning o'zini","Boshqa funksiyani","Hech narsani"], correct:1},
    ]
  },

  ] // end js items
},

/* ======================================================================= */
/* ============================ 4. GIT & GITHUB =========================== */
/* ======================================================================= */
{
  id:'git', name:'Git & GitHub', color:'#f97362', badge:'G',
  items:[

  {type:'lesson', id:'git-1', title:"Git nima va boshlang'ich buyruqlar", file:'01-git-boshlanish.sh',
    explain:[
      "<b>Git</b> — kodning versiyalarini boshqarish tizimi (version control). U yordamida kodning tarixini saqlash, xatolik bo'lsa orqaga qaytarish va jamoa bilan ishlash mumkin. <b>GitHub</b> — Git repozitoriylarini onlayn saqlaydigan platforma.",
      "Har bir loyiha uchun ishlash tartibi doim bir xil: o'zgartirish kiritish → <code>add</code> → <code>commit</code> → <code>push</code>."
    ],
    examples:[
      {lang:'js', title:"Asosiy buyruqlar (terminalda yoziladi)", code:
"git init                       // papkada Git ni ishga tushirish\ngit add .                      // barcha o'zgarishlarni tayyorlash\ngit commit -m \"birinchi commit\" // izoh bilan saqlash\ngit branch -M main             // asosiy branch nomini belgilash\ngit remote add origin URL      // GitHub repo bilan bog'lash\ngit push -u origin main        // GitHub'ga yuborish"}
    ],
    notes:[{type:'note', text:"Kundalik ishda faqat 3 ta buyruq kifoya: <code>git add .</code> → <code>git commit -m \"izoh\"</code> → <code>git push</code>."}],
    task:{text:"Mustaqil vazifa:", steps:["github.com'da akkaunt oching.", "Kompyuteringizga Git o'rnating (git-scm.com).", "1-loyihangizni (HTML sahifa) yangi repozitoriyga yuklang."]}
  },

  {type:'lesson', id:'git-2', title:"Branch (shoxcha) va jamoa bo'lib ishlash", file:'02-branch.sh',
    explain:[
      "<b>Branch</b> — asosiy koddan ajralib chiquvchi mustaqil \"shoxcha\". Har bir yangi funksiyani alohida branch'da yozish, keyin asosiy (<code>main</code>) branch'ga qo'shish (merge qilish) yaxshi amaliyot hisoblanadi.",
      "Jamoada ishlashda <code>git pull origin main</code> buyrug'ini ishni boshlashdan oldin bajarish shart — bu boshqalarning o'zgarishlarini kompyuteringizga tortib oladi."
    ],
    examples:[
      {lang:'js', title:"Branch buyruqlari", code:
"git branch                      // barcha branchlarni ko'rish\ngit checkout -b yangi-funksiya   // yangi branch yaratib, o'tish\ngit switch main                  // main branch'ga qaytish\ngit pull origin main             // ishni boshlashdan oldin"}
    ],
    task:{text:"Mustaqil vazifa:", steps:["Loyihangizda <code>feature-1</code> nomli yangi branch yarating.", "Unda kichik o'zgarish qiling va push qiling."]}
  },

  ]
},

/* ======================================================================= */
/* ========================== 5. KUTUBXONALAR ============================= */
/* ======================================================================= */
{
  id:'libs', name:'Kutubxonalar', color:'var(--lib)', badge:'L',
  items:[

  {type:'video', id:'lib-bootstrap', title:"Bootstrap — tayyor UI freymvork", file:'bootstrap.html',
    desc:"Bootstrap — dunyoda eng mashhur CSS freymvorklardan biri. U tayyor tugma, karta, navbar, forma kabi komponentlarni o'z-o'zingiz CSS yozmasdan ishlatish imkonini beradi. 12 ustunli grid tizimi va <code>sm/md/lg/xl</code> kabi responsive klasslar orqali sayt istalgan ekranga moslashadi.",
    searchQuery:"Bootstrap CSS darslar uzbek tilida",
    docs:"https://getbootstrap.com"
  },

  {type:'video', id:'lib-tailwind', title:"Tailwind CSS — utility-first freymvork", file:'tailwind.html',
    desc:"Tailwind — Bootstrap'dan farqli o'laroq, tayyor komponentlar emas, balki kichik \"utility\" klasslar (masalan <code>flex</code>, <code>p-4</code>, <code>text-center</code>) beradi va siz ulardan o'zingiz xohlagan dizaynni yig'asiz. Bugungi kunda eng ko'p talab qilinayotgan CSS kutubxonalaridan biri.",
    searchQuery:"Tailwind CSS darslar uzbek tilida",
    docs:"https://tailwindcss.com"
  },

  {type:'video', id:'lib-sass', title:"Sass/SCSS — CSS pre-protsessori", file:'sass.html',
    desc:"Sass — CSS ustiga qurilgan \"superset\" til bo'lib, o'zgaruvchilar, ichma-ich yozish (nesting), mixin va funksiyalar kabi imkoniyatlar beradi. Katta loyihalarda kodni tartibli va qayta ishlatiladigan qilib yozish uchun juda foydali.",
    searchQuery:"Sass SCSS darslar uzbek tilida",
    docs:"https://sass-lang.com"
  },

  ]
},

]; // end COURSE
