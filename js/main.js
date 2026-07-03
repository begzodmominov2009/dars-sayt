/* =========================================================================
   KOD.UZ — ASOSIY LOGIKA
   ========================================================================= */

/* ---------- Yordamchi: HTML escape va oddiy syntax highlight ---------- */
function escHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function highlight(raw, lang){
  let s = escHtml(raw);
  const store = [];
  const keep = (html)=>{ store.push(html); return '\u00A7' + (store.length-1) + '\u00A7'; };

  if(lang === 'html'){
    s = s.replace(/&lt;!--[\s\S]*?--&gt;/g, m=>keep(`<span class="tk-com">${m}</span>`));
    s = s.replace(/("[^"]*"|'[^']*')/g, m=>keep(`<span class="tk-str">${m}</span>`));
    s = s.replace(/(&lt;\/?)([a-zA-Z][\w-]*)/g, (m,a,b)=>`${a}<span class="tk-tag">${b}</span>`);
    s = s.replace(/([a-zA-Z-:]+)(=)(\u00A7\d+\u00A7)/g, (m,a,b,c)=>`<span class="tk-attr">${a}</span>${b}${c}`);
  } else if(lang === 'css'){
    s = s.replace(/\/\*[\s\S]*?\*\//g, m=>keep(`<span class="tk-com">${m}</span>`));
    s = s.replace(/("[^"]*"|'[^']*')/g, m=>keep(`<span class="tk-str">${m}</span>`));
    s = s.replace(/([a-zA-Z-]+)(\s*:)/g, (m,a,b)=>`<span class="tk-prop">${a}</span>${b}`);
  } else if(lang === 'js'){
    s = s.replace(/\/\/.*$/gm, m=>keep(`<span class="tk-com">${m}</span>`));
    s = s.replace(/(`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g, m=>keep(`<span class="tk-str">${m}</span>`));
    const kw = ['let','const','var','function','return','if','else','for','while','do','switch','case','break','continue','new','class','extends','this','typeof','instanceof','true','false','null','undefined','try','catch','finally','throw','async','await','of','in','static','default'];
    s = s.replace(new RegExp('\\b('+kw.join('|')+')\\b','g'), '<span class="tk-kw">$1</span>');
    s = s.replace(/\b(\d+(\.\d+)?)\b/g, '<span class="tk-num">$1</span>');
  }
  s = s.replace(/\u00A7(\d+)\u00A7/g, (m,i)=>store[+i]);
  return s;
}

/* ---------- Progress (localStorage) ---------- */
const PROGRESS_KEY = 'kod_uz_progress_v1';
function getProgress(){
  try{ return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; }
  catch(e){ return {}; }
}
function setDone(id, val){
  const p = getProgress();
  p[id] = val;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}
function isDone(id){ return !!getProgress()[id]; }

/* ---------- Flatten all items for prev/next & counts ---------- */
const FLAT = [];
COURSE.forEach(cat=>{
  cat.items.forEach(item=>{ FLAT.push({...item, catId:cat.id, catName:cat.name, catColor:cat.color}); });
});

function totalCount(){ return FLAT.filter(i=>i.type!=='video').length; }
function doneCount(){
  const p = getProgress();
  return FLAT.filter(i=> i.type!=='video' && p[i.id]).length;
}

/* ---------- Router (hash based) ---------- */
function currentId(){
  const h = location.hash.replace('#','');
  return h || null;
}
function goTo(id){ location.hash = id; }

/* ---------- SIDEBAR (Explorer) ---------- */
function renderExplorer(){
  const el = document.getElementById('explorer');
  el.innerHTML = '';
  const openState = JSON.parse(sessionStorage.getItem('kod_uz_open') || '{}');

  COURSE.forEach(cat=>{
    const isOpen = openState[cat.id] !== false; // default open
    const folder = document.createElement('div');
    folder.className = 'folder' + (isOpen ? ' open' : '');

    const head = document.createElement('div');
    head.className = 'folder-head';
    head.innerHTML = `<span class="chev">▶</span>
      <span class="folder-dot" style="background:${cat.color}"></span>
      <span>${cat.name}</span>
      <span class="folder-count">${cat.items.filter(i=>i.type!=='video').length}</span>`;
    head.addEventListener('click', ()=>{
      folder.classList.toggle('open');
      openState[cat.id] = folder.classList.contains('open');
      sessionStorage.setItem('kod_uz_open', JSON.stringify(openState));
    });
    folder.appendChild(head);

    const list = document.createElement('div');
    list.className = 'file-list';
    cat.items.forEach(item=>{
      const fi = document.createElement('div');
      const done = isDone(item.id);
      fi.className = 'file-item' + (done ? ' done' : '') + (item.type==='quiz' ? ' quiz-file' : '');
      if(currentId() === item.id) fi.classList.add('active');
      fi.dataset.id = item.id;
      const icon = item.type === 'quiz' ? '🧪' : item.type === 'video' ? '▶' : '•';
      fi.innerHTML = `<span class="fdot"></span><span>${item.file}</span>`;
      fi.addEventListener('click', ()=>{ goTo(item.id); closeSidebarMobile(); });
      list.appendChild(fi);
    });
    folder.appendChild(list);
    el.appendChild(folder);
  });
}

function highlightActiveFile(){
  document.querySelectorAll('.file-item').forEach(f=>{
    f.classList.toggle('active', f.dataset.id === currentId());
  });
}

/* ---------- Top breadcrumb tabs ---------- */
function renderTopTabs(item){
  const el = document.getElementById('topbarTabs');
  if(!item){ el.innerHTML=''; return; }
  el.innerHTML = `<span class="crumb">${item.catName}<span class="sep">/</span><b>${item.file || item.title}</b></span>`;
}

function updateProgressPill(){
  const t = totalCount(), d = doneCount();
  const pct = t ? Math.round((d/t)*100) : 0;
  document.getElementById('progressPill').textContent = `${pct}% tugallandi (${d}/${t})`;
}

/* ---------- Example renderer (live preview / runnable) ---------- */
let exCounter = 0;
function renderExample(ex){
  exCounter++;
  const uid = 'ex' + exCounter;
  const langLabel = ex.lang.toUpperCase();
  let html = `<div class="win">
    <div class="win-bar">
      <span class="win-dot" style="background:#f38ba8"></span>
      <span class="win-dot" style="background:#f9e2af"></span>
      <span class="win-dot" style="background:#a6e3a1"></span>
      <span class="win-title">${ex.title || 'misol'}</span>
      <span class="win-lang">${langLabel}</span>
    </div>
    <pre><code>${highlight(ex.code, ex.lang)}</code></pre>
  </div>`;

  if(ex.lang === 'html' && ex.previewHtml !== null){
    const srcdoc = ex.code.replace(/"/g,'&quot;');
    html += `<div class="browser">
      <div class="browser-bar">
        <span class="win-dot" style="background:#f38ba8"></span>
        <span class="win-dot" style="background:#f9e2af"></span>
        <span class="win-dot" style="background:#a6e3a1"></span>
        <span class="browser-url">natija.html</span>
      </div>
      <iframe srcdoc="${srcdoc}" sandbox="allow-scripts"></iframe>
    </div>`;
  } else if(ex.lang === 'css' && ex.previewHtml){
    const combined = `<html><head><style>body{margin:0;padding:16px;font-family:sans-serif;color:#222;}${ex.code}</style></head><body>${ex.previewHtml}</body></html>`;
    const srcdoc = combined.replace(/"/g,'&quot;');
    html += `<div class="browser">
      <div class="browser-bar">
        <span class="win-dot" style="background:#f38ba8"></span>
        <span class="win-dot" style="background:#f9e2af"></span>
        <span class="win-dot" style="background:#a6e3a1"></span>
        <span class="browser-url">natija.html</span>
      </div>
      <iframe srcdoc="${srcdoc}"></iframe>
    </div>`;
  } else if(ex.lang === 'js' && ex.run){
    html += `<div class="win" style="margin-top:-16px;">
      <div class="run-row">
        <button class="run-btn" data-run="${uid}">▶ Ishga tushirish</button>
        <span style="font-size:11.5px;color:var(--text-dimmer)">console.log natijasi pastda chiqadi</span>
      </div>
      <div class="terminal" id="term-${uid}"></div>
    </div>`;
  }

  return {html, uid, code: ex.code, runnable: ex.lang==='js' && ex.run};
}

function attachRunners(examples){
  examples.forEach(({uid, code, runnable})=>{
    if(!runnable) return;
    const btn = document.querySelector(`[data-run="${uid}"]`);
    const term = document.getElementById(`term-${uid}`);
    btn.addEventListener('click', ()=>{
      const logs = [];
      const fakeConsole = {
        log: (...args)=> logs.push(args.map(a=> typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')),
        error: (...args)=> logs.push('ERR: ' + args.join(' '))
      };
      try{
        const fn = new Function('console', code);
        fn(fakeConsole);
        term.innerHTML = logs.length
          ? logs.map(l=>`<span class="prompt">&gt;</span> ${escHtml(l)}`).join('\n')
          : '<span class="prompt">&gt;</span> (natija yo\'q)';
      }catch(err){
        term.innerHTML = `<span class="err">Xatolik: ${escHtml(err.message)}</span>`;
      }
    });
  });
}

/* ---------- Lesson page ---------- */
function renderLesson(item, idx){
  const exHtmlParts = [];
  const runnables = [];
  (item.examples || []).forEach(ex=>{
    const r = renderExample(ex);
    exHtmlParts.push(r.html);
    runnables.push(r);
  });

  const notesHtml = (item.notes || []).map(n=>`<div class="${n.type}">${n.text}</div>`).join('');

  const taskHtml = item.task ? `
    <div class="task">
      <div class="task-head">📝 ${item.task.text}</div>
      <ol>${item.task.steps.map(s=>`<li>${s}</li>`).join('')}</ol>
    </div>` : '';

  const done = isDone(item.id);

  const html = `
    <div class="lesson-eyebrow">
      <span class="pill" style="background:${item.catColor}22;color:${item.catColor};border:1px solid ${item.catColor}55">${item.catName}</span>
      <span>${item.file}</span>
    </div>
    <h1 class="lesson-title">${item.title}</h1>
    <div class="lesson-body">
      ${item.explain.map(p=>`<p>${p}</p>`).join('')}
      ${exHtmlParts.join('')}
      ${notesHtml}
      ${taskHtml}
    </div>
    <button class="mark-done ${done?'done':''}" id="markDoneBtn">
      ${done ? '✓ Tugallangan' : '○ Tugallandim deb belgilash'}
    </button>
    ${renderPrevNext(idx)}
  `;

  document.getElementById('content').innerHTML = html;
  attachRunners(runnables);

  document.getElementById('markDoneBtn').addEventListener('click', function(){
    const now = !isDone(item.id);
    setDone(item.id, now);
    this.classList.toggle('done', now);
    this.textContent = now ? '✓ Tugallangan' : '○ Tugallandim deb belgilash';
    renderExplorer();
    updateProgressPill();
  });

  attachPrevNext(idx);
}

/* ---------- Video page ---------- */
function renderVideo(item, idx){
  const q = encodeURIComponent(item.searchQuery);
  const html = `
    <div class="lesson-eyebrow">
      <span class="pill" style="background:${item.catColor}22;color:${item.catColor};border:1px solid ${item.catColor}55">${item.catName}</span>
      <span>${item.file}</span>
    </div>
    <h1 class="lesson-title">${item.title}</h1>
    <div class="lesson-body">
      <p>${item.desc}</p>
      <div class="video-box">
        <div class="vi">🎬</div>
        <div>
          <p style="margin:0 0 4px;color:#fff;font-weight:700;">O'zbek tilidagi video darslar</p>
          <p style="margin:0 0 8px;">Bu mavzu chuqur va amaliy bo'lgani uchun, uni video orqali ko'rgan holda o'rganish tavsiya etiladi.</p>
          <a class="vlink" href="https://www.youtube.com/results?search_query=${q}" target="_blank">▶ YouTube'dan qidirish</a>
          <a class="vlink" style="background:var(--css);margin-left:8px;" href="${item.docs}" target="_blank">📘 Rasmiy hujjat</a>
        </div>
      </div>
    </div>
    ${renderPrevNext(idx)}
  `;
  document.getElementById('content').innerHTML = html;
  attachPrevNext(idx);
}

/* ---------- Quiz page ---------- */
function renderQuiz(item, idx){
  const html = `
    <div class="lesson-eyebrow">
      <span class="pill" style="background:${item.catColor}22;color:${item.catColor};border:1px solid ${item.catColor}55">${item.catName} · TEST</span>
      <span>${item.file}</span>
    </div>
    <h1 class="lesson-title">🧪 ${item.title}</h1>
    <div class="lesson-body">
      <p>Quyidagi ${item.questions.length} ta savolga javob bering. Har biri uchun to'g'ri variantni belgilang, so'ng <b>"Tekshirish"</b> tugmasini bosing.</p>
      <form id="quizForm">
        ${item.questions.map((q,qi)=>`
          <div class="quiz-q" data-qi="${qi}">
            <h4>${qi+1}. ${q.q}</h4>
            ${q.options.map((opt,oi)=>`
              <label class="quiz-opt" data-oi="${oi}">
                <input type="radio" name="q${qi}" value="${oi}" />
                <span>${opt}</span>
              </label>
            `).join('')}
          </div>
        `).join('')}
        <button type="submit" class="quiz-submit">Tekshirish</button>
      </form>
      <div id="quizResult"></div>
    </div>
    ${renderPrevNext(idx)}
  `;
  document.getElementById('content').innerHTML = html;

  document.getElementById('quizForm').addEventListener('submit', function(e){
    e.preventDefault();
    let correctCount = 0;
    item.questions.forEach((q,qi)=>{
      const selected = this.querySelector(`input[name="q${qi}"]:checked`);
      const qBox = this.querySelector(`.quiz-q[data-qi="${qi}"]`);
      const opts = qBox.querySelectorAll('.quiz-opt');
      opts.forEach((optEl, oi)=>{
        optEl.classList.remove('correct','wrong');
        if(oi === q.correct) optEl.classList.add('correct');
        else if(selected && +selected.value === oi) optEl.classList.add('wrong');
      });
      if(selected && +selected.value === q.correct) correctCount++;
    });
    const pct = Math.round((correctCount/item.questions.length)*100);
    const pass = pct >= 60;
    const resultEl = document.getElementById('quizResult');
    resultEl.innerHTML = `<div class="quiz-result ${pass?'pass':'fail'}">
      ${pass ? '🎉' : '💪'} Natija: ${correctCount}/${item.questions.length} to'g'ri (${pct}%)
      ${pass ? "— Ajoyib, davom eting!" : "— Mavzularni qayta ko'rib chiqing va yana urinib ko'ring."}
    </div>`;
    if(pass){
      setDone(item.id, true);
      renderExplorer();
      updateProgressPill();
    }
    resultEl.scrollIntoView({behavior:'smooth', block:'center'});
  });

  attachPrevNext(idx);
}

/* ---------- Prev/Next navigation ---------- */
function renderPrevNext(idx){
  const prev = FLAT[idx-1];
  const next = FLAT[idx+1];
  return `<div class="lesson-nav">
    <button class="nav-btn" id="prevBtn" ${!prev?'disabled':''}>
      <small>◀ Oldingi</small>${prev ? prev.title : '—'}
    </button>
    <button class="nav-btn next" id="nextBtn" ${!next?'disabled':''}>
      <small>Keyingi ▶</small>${next ? next.title : '—'}
    </button>
  </div>`;
}
function attachPrevNext(idx){
  const prev = FLAT[idx-1], next = FLAT[idx+1];
  const pBtn = document.getElementById('prevBtn');
  const nBtn = document.getElementById('nextBtn');
  if(prev) pBtn.addEventListener('click', ()=> goTo(prev.id));
  if(next) nBtn.addEventListener('click', ()=> goTo(next.id));
  window.scrollTo({top:0, behavior:'instant'});
}

/* ---------- Home page ---------- */
function renderHome(){
  renderTopTabs(null);
  const cards = COURSE.map(cat=>{
    const lessons = cat.items.filter(i=>i.type!=='video');
    const total = lessons.length;
    const done = lessons.filter(i=>isDone(i.id)).length;
    const pct = total ? Math.round((done/total)*100) : 0;
    return `<div class="home-card" data-cat="${cat.id}">
      <div class="hc-top">
        <div class="hc-icon" style="background:${cat.color}">${cat.badge}</div>
        <span style="font-size:11px;color:var(--text-dimmer)">${done}/${total}</span>
      </div>
      <h3>${cat.name}</h3>
      <p>${total} ta fayl</p>
      <div class="hc-bar"><div style="width:${pct}%;background:${cat.color}"></div></div>
    </div>`;
  }).join('');

  const html = `
    <div class="home-hero">
      <div class="lesson-eyebrow"><span class="pill" style="background:#a6e3a122;color:var(--ok);border:1px solid #a6e3a155">index.html</span></div>
      <h1>Frontend darslikka xush kelibsiz 👋</h1>
      <p class="sub">HTML, CSS va JavaScript'ni noldan, real kod misollari, jonli natijalar va testlar orqali o'rganing. Chap tomondagi <b>EXPLORER</b> panelidan istalgan faylni tanlashingiz mumkin — xuddi kod muharririda ishlagandek.</p>

      <div class="terminal-block">
<span class="l">$</span> <span class="c">o'quvchi</span> --status<br/>
Jami darslar: ${totalCount()}<br/>
Tugallangan: ${doneCount()}<br/>
Progress: ${totalCount()? Math.round((doneCount()/totalCount())*100):0}%
      </div>

      <div class="home-grid">${cards}</div>
    </div>
  `;
  document.getElementById('content').innerHTML = html;
  document.querySelectorAll('.home-card').forEach(c=>{
    c.addEventListener('click', ()=>{
      const cat = COURSE.find(x=>x.id === c.dataset.cat);
      const first = cat.items[0];
      goTo(first.id);
    });
  });
}

/* ---------- Main router ---------- */
function render(){
  const id = currentId();
  highlightActiveFile();

  if(!id){ renderHome(); return; }

  const idx = FLAT.findIndex(i=>i.id === id);
  const item = FLAT[idx];
  if(!item){ renderHome(); return; }

  renderTopTabs(item);

  if(item.type === 'lesson') renderLesson(item, idx);
  else if(item.type === 'quiz') renderQuiz(item, idx);
  else if(item.type === 'video') renderVideo(item, idx);

  updateProgressPill();
  highlightActiveFile();
}

/* ---------- Mobile sidebar ---------- */
function closeSidebarMobile(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('show');
}
document.getElementById('menuBtn').addEventListener('click', ()=>{
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('show');
});
document.getElementById('sidebarOverlay').addEventListener('click', closeSidebarMobile);

document.getElementById('resetProgress').addEventListener('click', ()=>{
  if(confirm("Butun progressni tozalashni tasdiqlaysizmi?")){
    localStorage.removeItem(PROGRESS_KEY);
    renderExplorer();
    render();
  }
});

/* ---------- Init ---------- */
window.addEventListener('hashchange', render);
renderExplorer();
render();
