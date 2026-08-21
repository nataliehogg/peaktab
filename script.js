'use strict';

// ============================================================
// CONFIGURATION — add your Unsplash Access Key here.
// Get one free at: https://unsplash.com/developers
// Without a key the background falls back to a gradient.
// ============================================================
const UNSPLASH_ACCESS_KEY = 'cXAiHOTB8pYKNXODphDHejGyBWxw1t4aBXYX6Qe5mkw';
const NAME_KEY = 'nb_name';

function getName() {
  return localStorage.getItem(NAME_KEY) || '';
}

// ============================================================
// QUOTES — shown one per day, cycles through the list
// ============================================================
const QUOTES = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "It does not matter how slowly you go, as long as you do not stop.", author: "Confucius" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "An unexamined life is not worth living.", author: "Socrates" },
  { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
  { text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
  { text: "Don't judge each day by the harvest you reap, but by the seeds that you plant.", author: "Robert Louis Stevenson" },
  { text: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.", author: "Helen Keller" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "Do not go where the path may lead; go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { text: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
  { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
  { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Darkness cannot drive out darkness; only light can do that.", author: "Martin Luther King Jr." },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "The most wasted of all days is one without laughter.", author: "E.E. Cummings" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "What we think, we become.", author: "Buddha" },
  { text: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "If you're going through hell, keep going.", author: "Winston Churchill" },
  { text: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
  { text: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
  { text: "We know what we are, but know not what we may be.", author: "William Shakespeare" },
  { text: "The mountains are calling and I must go.", author: "John Muir" },
  { text: "The clearest way into the Universe is through a forest wilderness.", author: "John Muir" },
  { text: "In every walk with nature, one receives far more than he seeks.", author: "John Muir" },
  { text: "Of all the paths you take in life, make sure a few of them are dirt.", author: "John Muir" },
  { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
  { text: "There is pleasure in the pathless woods.", author: "Lord Byron" },
  { text: "Nature always wears the colors of the spirit.", author: "Ralph Waldo Emerson" },
  { text: "Adopt the pace of nature: her secret is patience.", author: "Ralph Waldo Emerson" },
  { text: "Look deep into nature, and then you will understand everything better.", author: "Albert Einstein" },
  { text: "The earth has music for those who listen.", author: "George Santayana" },
  { text: "I went to the woods because I wished to live deliberately.", author: "Henry David Thoreau" },
  { text: "It's not what you look at that matters, it's what you see.", author: "Henry David Thoreau" },
  { text: "Heaven is under our feet as well as over our heads.", author: "Henry David Thoreau" },
  { text: "It is not the mountain we conquer but ourselves.", author: "Edmund Hillary" },
  { text: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.", author: "Marcel Proust" },
  { text: "Two roads diverged in a wood, and I took the one less traveled by.", author: "Robert Frost" },
  { text: "We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time.", author: "T.S. Eliot" },
  { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "W.B. Yeats" },
  { text: "Kites rise highest against the wind, not with it.", author: "Winston Churchill" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "If you want to go fast, go alone. If you want to go far, go together.", author: "African Proverb" },
  { text: "The secret of change is to focus all of your energy not on fighting the old, but on building the new.", author: "Socrates" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
  { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
  { text: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
  { text: "The greatest wealth is to live content with little.", author: "Plato" },
  { text: "Logic will get you from A to B. Imagination will take you everywhere.", author: "Albert Einstein" },
  { text: "A mind that is stretched by a new experience can never go back to its old dimensions.", author: "Oliver Wendell Holmes" },
  { text: "Life is short, and it's up to you to make it sweet.", author: "Sarah Louise Delany" },
  { text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
  { text: "I am not afraid of storms, for I am learning how to sail my ship.", author: "Louisa May Alcott" },
  { text: "The purpose of life is to live it, to taste experience to the utmost.", author: "Eleanor Roosevelt" },
  { text: "What you do speaks so loudly that I cannot hear what you say.", author: "Ralph Waldo Emerson" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "We do not inherit the earth from our ancestors; we borrow it from our children.", author: "Native American Proverb" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "The most common way people give up their power is by thinking they don't have any.", author: "Alice Walker" },
  { text: "Not I, nor anyone else can travel that road for you.", author: "Walt Whitman" },
  { text: "Keep close to Nature's heart and break clear away once in a while, climb a mountain or spend a week in the woods.", author: "John Muir" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", author: "Maya Angelou" },
  { text: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
  { text: "Nothing is impossible. The word itself says 'I'm possible'.", author: "Audrey Hepburn" },
  { text: "Try to be a rainbow in someone's cloud.", author: "Maya Angelou" },
  { text: "You become what you believe.", author: "Oprah Winfrey" },
  { text: "Life itself is the most wonderful fairy tale.", author: "Hans Christian Andersen" },
  { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
  { text: "Creativity is intelligence having fun.", author: "Albert Einstein" },
  { text: "The world is full of magical things patiently waiting for our wits to grow sharper.", author: "Bertrand Russell" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "When it is dark enough, you can see the stars.", author: "Ralph Waldo Emerson" },
];

// ============================================================
// HELPERS
// ============================================================

function todayKey() {
  // "YYYY-MM-DD" in local time
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// Simple deterministic hash so the same date always maps to the same quote
function dateHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

// ============================================================
// BACKGROUND IMAGE — IndexedDB blob cache + pre-fetch + history
//
// Cache layout, all in the 'images' store:
//   "YYYY-MM-DD"       → the deterministic photo of the day
//   "hist:YYYY-MM-DD"  → array of extra photos skipped to that day
// Records are { blob, meta }; bare Blobs from older versions are
// still readable via normalizeRecord().
// ============================================================

const BG_QUERIES = ['mountains', 'pine forest', 'misty forest', 'rainier', 'pacific northwest', 'waterfall', 'old growth forest', 'evergreen forest', 'mountain lake', 'fog forest', 'ferns', 'nature', 'starry sky', 'trees', 'landscape', 'dolomites', 'alps', 'alpine meadow'];

// Unsplash API guidelines require attribution links carry a UTM tag.
const UTM = 'utm_source=peaktab&utm_medium=referral';

const HAS_KEY = Boolean(UNSPLASH_ACCESS_KEY) && UNSPLASH_ACCESS_KEY !== 'YOUR_UNSPLASH_ACCESS_KEY_HERE';

// Photos kept per day before the oldest skipped ones are dropped.
const MAX_HISTORY = 20;

const bgState = {
  db:        null,
  items:     [],   // [{ blob, meta }] — items[0] is always the photo of the day
  index:     0,
  objectUrl: null,
  busy:      false,
};

function tomorrowKey() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function openImageDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('newtab_bg', 1);
    req.onupgradeneeded = e => e.target.result.createObjectStore('images');
    req.onsuccess = e => resolve(e.target.result);
    req.onerror = () => reject(req.error);
  });
}

function dbGet(db, key) {
  return new Promise((resolve, reject) => {
    const req = db.transaction('images', 'readonly').objectStore('images').get(key);
    req.onsuccess = () => resolve(req.result ?? null);
    req.onerror = () => reject(req.error);
  });
}

function dbSet(db, key, value) {
  return new Promise((resolve, reject) => {
    const req = db.transaction('images', 'readwrite').objectStore('images').put(value, key);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

function dbPurgeOld(db, keepKeys) {
  const tx = db.transaction('images', 'readwrite');
  const store = tx.objectStore('images');
  const req = store.getAllKeys();
  req.onsuccess = () => {
    for (const key of req.result) {
      if (!keepKeys.includes(key)) store.delete(key);
    }
  };
}

function historyKey(dateKey) {
  return `hist:${dateKey}`;
}

// The photo of the day is deterministic; skipped-to photos are not.
function queryForDate(dateKey) {
  return BG_QUERIES[dateHash(dateKey) % BG_QUERIES.length];
}

function randomQuery() {
  return BG_QUERIES[Math.floor(Math.random() * BG_QUERIES.length)];
}

function extractMeta(data) {
  return {
    author: data.user?.name || '',
    // Links to the photo's own Unsplash page, which names the location.
    link:   data.links?.html ? `${data.links.html}?${UTM}` : '',
  };
}

// Records used to be stored as bare Blobs, before metadata was kept.
function normalizeRecord(rec) {
  if (!rec) return null;
  return rec instanceof Blob ? { blob: rec, meta: null } : rec;
}

async function fetchImageRecord(query) {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`
  );
  if (!res.ok) throw new Error(`Unsplash ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const physicalW = Math.min(Math.ceil(screen.width * (window.devicePixelRatio || 1)), 6000);
  const url = `${data.urls.raw}&w=${physicalW}&q=95&auto=format`;
  const blob = await fetch(url).then(r => r.blob());
  return { blob, meta: extractMeta(data) };
}

async function prefetchTomorrow(db) {
  if (!HAS_KEY) return;
  const key = tomorrowKey();
  try {
    if (await dbGet(db, key)) return; // already cached
    await dbSet(db, key, await fetchImageRecord(queryForDate(key)));
  } catch { /* non-fatal */ }
}

// ── Which photo of the day's set is showing (survives new tabs) ──

const BG_INDEX_KEY = 'nb_bg_index';

function savedIndex(dateKey) {
  try {
    const saved = JSON.parse(localStorage.getItem(BG_INDEX_KEY) || '{}');
    return saved.date === dateKey ? (saved.index || 0) : 0;
  } catch {
    return 0;
  }
}

function saveIndex(dateKey, index) {
  localStorage.setItem(BG_INDEX_KEY, JSON.stringify({ date: dateKey, index }));
}

// ── Caption + navigation ─────────────────────────────────────

function renderPhotoInfo(meta) {
  const authorEl = document.getElementById('photo-author');

  // Photos cached by older versions carry no metadata; the arrows still work.
  if (meta?.author) {
    authorEl.textContent = meta.author;
    authorEl.hidden      = false;
    if (meta.link) {
      authorEl.href = meta.link;
    } else {
      authorEl.removeAttribute('href');
    }
  } else {
    authorEl.textContent = '';
    authorEl.hidden      = true;
  }
}

function updateNavButtons() {
  const atEnd = bgState.index >= bgState.items.length - 1;
  document.getElementById('photo-prev').disabled = bgState.busy || bgState.index <= 0;
  document.getElementById('photo-next').disabled = bgState.busy || (atEnd && !HAS_KEY);
}

function showIndex(i) {
  const rec = bgState.items[i];
  if (!rec) return;

  bgState.index = i;

  const previousUrl = bgState.objectUrl;
  bgState.objectUrl = URL.createObjectURL(rec.blob);
  document.getElementById('bg-img').style.backgroundImage = `url(${bgState.objectUrl})`;
  if (previousUrl) URL.revokeObjectURL(previousUrl);

  renderPhotoInfo(rec.meta);
  document.getElementById('photo-info').classList.remove('hidden');
  saveIndex(todayKey(), i);
  updateNavButtons();
}

async function persistExtras() {
  try {
    await dbSet(bgState.db, historyKey(todayKey()), bgState.items.slice(1));
  } catch { /* non-fatal */ }
}

function prevPhoto() {
  if (bgState.busy || bgState.index <= 0) return;
  showIndex(bgState.index - 1);
}

async function nextPhoto() {
  if (bgState.busy) return;

  // Already have one further along — just step forward.
  if (bgState.index < bgState.items.length - 1) {
    showIndex(bgState.index + 1);
    return;
  }

  if (!HAS_KEY) return;

  bgState.busy = true;
  document.getElementById('photo-info').classList.add('loading');
  updateNavButtons();

  try {
    const rec = await fetchImageRecord(randomQuery());
    bgState.items.push(rec);
    // Keep the photo of the day at [0]; drop the oldest skipped ones.
    if (bgState.items.length > MAX_HISTORY) {
      bgState.items.splice(1, bgState.items.length - MAX_HISTORY);
    }
    await persistExtras();
    showIndex(bgState.items.length - 1);
  } catch (err) {
    console.error('[newtab] could not load the next photo:', err);
  } finally {
    bgState.busy = false;
    document.getElementById('photo-info').classList.remove('loading');
    updateNavButtons();
  }
}

async function loadBackground() {
  try {
    bgState.db = await openImageDB();
  } catch (err) {
    console.error('[newtab] IndexedDB unavailable:', err);
    return;
  }

  const today = todayKey();
  dbPurgeOld(bgState.db, [today, tomorrowKey(), historyKey(today)]);

  let base = normalizeRecord(await dbGet(bgState.db, today));

  if (!base) {
    if (!HAS_KEY) return;
    try {
      base = await fetchImageRecord(queryForDate(today));
      await dbSet(bgState.db, today, base);
    } catch (err) {
      console.error('[newtab] Unsplash load failed:', err);
      return;
    }
  }

  const extras = (await dbGet(bgState.db, historyKey(today))) || [];
  bgState.items = [base, ...extras.map(normalizeRecord).filter(Boolean)];

  showIndex(Math.min(savedIndex(today), bgState.items.length - 1));

  prefetchTomorrow(bgState.db);
}

// ============================================================
// TIME + GREETING
// ============================================================

function updateTime() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('time-display').textContent = `${h}:${m}`;

  const hour = now.getHours();
  let greeting;
  if (hour < 5)       greeting = 'Good night';
  else if (hour < 12) greeting = 'Good morning';
  else if (hour < 17) greeting = 'Good afternoon';
  else                greeting = 'Good evening';
  document.getElementById('greeting').textContent = `${greeting}, ${getName()}`;
}

// ============================================================
// QUOTE
// ============================================================

function loadQuote() {
  const idx = dateHash(todayKey()) % QUOTES.length;
  const { text, author } = QUOTES[idx];
  document.getElementById('quote-text').textContent = `"${text}"`;
  document.getElementById('quote-author').textContent = `— ${author}`;
}

// ============================================================
// FOCUS MODE TOGGLE
// ============================================================

let focusMode = false;

// Both icons live in the markup and are swapped by visibility, the same way
// the play/pause icons are — no markup is built from strings at runtime.
// The close icon starts hidden via style.css, not a style attribute; see the
// note there about the extension CSP.
document.getElementById('focus-toggle').addEventListener('click', () => {
  focusMode = !focusMode;
  document.body.classList.toggle('focus-mode', focusMode);
  document.getElementById('icon-mountain').style.display = focusMode ? 'none' : 'inline';
  document.getElementById('icon-close').style.display    = focusMode ? 'inline' : 'none';
});

// ============================================================
// POMODORO TIMER
// ============================================================

const WORK_SECONDS  = 25 * 60;
const BREAK_SECONDS =  5 * 60;

const timer = {
  phase:      'work', // 'work' | 'break'
  remaining:  WORK_SECONDS,
  running:    false,
  intervalId: null,
};

function formatTime(s) {
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}

function setPlayPauseIcon(running) {
  document.getElementById('icon-play').style.display  = running ? 'none' : 'inline';
  document.getElementById('icon-pause').style.display = running ? 'inline' : 'none';
}

function setPhaseUI(phase) {
  document.getElementById('timer-display').dataset.phase = phase;
}

function renderTimer() {
  document.getElementById('timer-display').textContent = formatTime(timer.remaining);
  setPhaseUI(timer.phase);
}

function tick() {
  if (timer.remaining > 0) {
    timer.remaining--;
    renderTimer();
  } else {
    phaseComplete();
  }
}

function phaseComplete() {
  clearInterval(timer.intervalId);

  if (timer.phase === 'work') {
    incrementStreak();
    timer.phase     = 'break';
    timer.remaining = BREAK_SECONDS;
  } else {
    timer.phase     = 'work';
    timer.remaining = WORK_SECONDS;
  }

  renderTimer();
  timer.intervalId = setInterval(tick, 1000);
  timer.running = true;
  setPlayPauseIcon(true);
}

document.getElementById('start-pause-btn').addEventListener('click', () => {
  if (timer.running) {
    clearInterval(timer.intervalId);
    timer.running = false;
    setPlayPauseIcon(false);
  } else {
    timer.intervalId = setInterval(tick, 1000);
    timer.running = true;
    setPlayPauseIcon(true);
  }
});

document.getElementById('reset-btn').addEventListener('click', () => {
  clearInterval(timer.intervalId);
  timer.running   = false;
  timer.phase     = 'work';
  timer.remaining = WORK_SECONDS;
  renderTimer();
  setPlayPauseIcon(false);
});

// ============================================================
// STREAK (saved per calendar day)
// ============================================================

function getStreaks() {
  return JSON.parse(localStorage.getItem('nb_streaks') || '{}');
}

function getTodayCount() {
  return getStreaks()[todayKey()] || 0;
}

function incrementStreak() {
  const streaks = getStreaks();
  const today   = todayKey();
  streaks[today] = (streaks[today] || 0) + 1;
  localStorage.setItem('nb_streaks', JSON.stringify(streaks));
  renderDots();
}

function makeDots(count) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const d = document.createElement('div');
    d.className = 'dot';
    frag.appendChild(d);
  }
  return frag;
}

function renderDots() {
  const count = getTodayCount();

  // Focus panel
  const container = document.getElementById('streak-dots');
  const label     = document.getElementById('streak-count');
  container.replaceChildren(makeDots(count));
  label.textContent = count > 0 ? `${count} pomodoro${count === 1 ? '' : 's'} today` : '';

  // Main page
  const main = document.getElementById('streak-main');
  main.replaceChildren();
  if (count === 0) {
    const empty = document.createElement('div');
    empty.className = 'dot-empty';
    main.appendChild(empty);
  } else {
    main.appendChild(makeDots(count));
  }
}

// ============================================================
// CALENDAR POPUP
// ============================================================

function makeCalDay(day, count, isToday, isMuted, isFuture) {
  const cell = document.createElement('div');
  cell.className = ['cal-day', isToday && 'today', isMuted && 'muted', isFuture && 'future']
    .filter(Boolean).join(' ');

  const num = document.createElement('span');
  num.className = 'cal-num';
  num.textContent = day;
  cell.appendChild(num);

  const dotsRow = document.createElement('div');
  dotsRow.className = 'cal-dots-row';
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('div');
    dot.className = 'cal-dot';
    dotsRow.appendChild(dot);
  }
  cell.appendChild(dotsRow);

  return cell;
}

function buildCalendar() {
  const streaks = getStreaks();
  const now     = new Date();
  const year    = now.getFullYear();
  const month   = now.getMonth();

  const MONTHS = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];

  const daysInMonth     = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const firstDow        = (new Date(year, month, 1).getDay() + 6) % 7;

  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear  = month === 0 ? year - 1 : year;

  const frag = document.createDocumentFragment();

  const title = document.createElement('div');
  title.id = 'cal-title';
  title.textContent = `${MONTHS[month]} ${year}`;
  frag.appendChild(title);

  const grid = document.createElement('div');
  grid.id = 'cal-grid';

  for (const d of ['M','T','W','T','F','S','S']) {
    const hdr = document.createElement('div');
    hdr.className = 'cal-hdr';
    hdr.textContent = d;
    grid.appendChild(hdr);
  }

  for (let i = firstDow - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    const key = `${prevYear}-${String(prevMonth + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    grid.appendChild(makeCalDay(day, streaks[key] || 0, false, true, false));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const key      = `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const isToday  = day === now.getDate();
    const isFuture = day > now.getDate();
    grid.appendChild(makeCalDay(day, streaks[key] || 0, isToday, false, isFuture));
  }

  frag.appendChild(grid);
  return frag;
}

function openCalendar() {
  document.getElementById('calendar-inner').replaceChildren(buildCalendar());
  document.getElementById('calendar-popup').classList.remove('hidden');
  document.getElementById('calendar-backdrop').classList.remove('hidden');
}

function closeCalendar() {
  document.getElementById('calendar-popup').classList.add('hidden');
  document.getElementById('calendar-backdrop').classList.add('hidden');
}

document.getElementById('streak-main').addEventListener('click', openCalendar);
document.getElementById('streak-main').addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') openCalendar();
});
document.getElementById('calendar-backdrop').addEventListener('click', closeCalendar);

// ============================================================
// NAME PROMPT (first run)
// ============================================================

function initName() {
  if (getName()) return;

  const prompt = document.getElementById('name-prompt');
  const input  = document.getElementById('name-input');
  document.body.classList.add('awaiting-name');
  prompt.classList.remove('hidden');
  input.focus();

  function saveName() {
    const name = input.value.trim();
    if (!name) return;
    localStorage.setItem(NAME_KEY, name);
    prompt.classList.add('hidden');
    document.body.classList.remove('awaiting-name');
    updateTime();
  }

  input.addEventListener('keydown', e => { if (e.key === 'Enter') saveName(); });
}

// ============================================================
// INIT
// ============================================================

const _fontLink = document.createElement('link');
_fontLink.rel = 'stylesheet';
_fontLink.href = 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,700;1,400&display=swap';
document.head.appendChild(_fontLink);

document.getElementById('photo-prev').addEventListener('click', prevPhoto);
document.getElementById('photo-next').addEventListener('click', nextPhoto);

loadBackground();
loadQuote();
updateTime();
setInterval(updateTime, 1000);
renderTimer();
setPlayPauseIcon(false);
renderDots();
initName();
