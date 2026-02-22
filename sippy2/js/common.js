/* js/common.js — Navbar, Footer, Chatbot, Scroll Reveal, Toast */

// ===== GLOBAL BASE PATH (used by navbar, footer, chatbot) =====
const BASE_PATH = document.querySelector('meta[name="base"]')?.content || '';

// ===== INJECT NAVBAR =====
function injectNav(activePage) {
  const pages = { home: 'index.html', product: 'pages/product.html', gallery: 'pages/gallery.html', contact: 'pages/contact.html' };
  const base = BASE_PATH;
  const nav = document.createElement('nav');
  nav.id = 'nav';
  nav.innerHTML = `
    <div class="nav-wrap">
      <a href="${base}index.html" class="nav-logo">
        <img src="${base}images/sippy-logo.png" alt="Sippy" class="nav-logo-img" />
        Sippy<span>.</span>
      </a>
      <ul class="nav-links">
        <li><a href="${base}index.html" class="${activePage==='home'?'active':''}">Home</a></li>
        <li><a href="${base}pages/product.html" class="${activePage==='product'?'active':''}">Product</a></li>
        <li><a href="${base}pages/gallery.html" class="${activePage==='gallery'?'active':''}">Gallery</a></li>
        <li><a href="${base}pages/contact.html" class="${activePage==='contact'?'active':''}">Contact</a></li>
      </ul>
      <a href="${base}pages/checkout.html" class="btn btn-primary btn-sm nav-cta">Buy Now — ₹5,999</a>
      <button class="nav-burger" id="navBurger">☰</button>
    </div>
    <div class="nav-mobile" id="navMobile">
      <a href="${base}index.html">Home</a>
      <a href="${base}pages/product.html">Product</a>
      <a href="${base}pages/gallery.html">Gallery</a>
      <a href="${base}pages/contact.html">Contact</a>
      <a href="${base}pages/checkout.html" style="color:var(--gold);font-weight:700;">Buy Now — ₹5,999</a>
    </div>
  `;
  document.body.prepend(nav);
  document.getElementById('navBurger').addEventListener('click', () => {
    document.getElementById('navMobile').classList.toggle('open');
  });
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ===== INJECT FOOTER =====
function injectFooter() {
  const base = BASE_PATH;
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">
            <img src="${base}images/sippy-logo.png" alt="Sippy" class="footer-logo-img" />
            Sippy<span>.</span>
          </div>
          <p class="footer-tagline">The smart rechargeable portable kettle. Hot water wherever you are.</p>
          <div class="footer-social">
            <a href="https://wa.me/918985656181" target="_blank" title="WhatsApp">💬</a>
            <a href="mailto:smartkettlestore@gmail.com" title="Email">📧</a>
            <a href="tel:+918985656181" title="Call">📞</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><a href="${base}index.html">Home</a></li>
            <li><a href="${base}pages/product.html">Product</a></li>
            <li><a href="${base}pages/gallery.html">Gallery</a></li>
            <li><a href="${base}pages/checkout.html">Order Now</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="${base}pages/contact.html">Contact Us</a></li>
            <li><a href="${base}pages/faq.html">FAQ</a></li>
            <li><a href="https://wa.me/918985656181" target="_blank">WhatsApp</a></li>
            <li><a href="mailto:smartkettlestore@gmail.com">Email Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:smartkettlestore@gmail.com">smartkettlestore@gmail.com</a></li>
            <li><a href="tel:+918985656181">+91 89856 56181</a></li>
            <li><a href="https://wa.me/918985656181" target="_blank">WhatsApp Us</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">© 2025 Sippy. All rights reserved. Made with ❤️ in India.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Shipping Policy</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}

// ===== INJECT CHATBOT =====
function injectChatbot() {
  const base = BASE_PATH;
  const fab = document.createElement('button');
  fab.className = 'chat-fab'; fab.id = 'chatFab'; fab.innerHTML = '💬'; fab.title = 'Chat with us';
  document.body.appendChild(fab);

  const win = document.createElement('div');
  win.className = 'chat-window'; win.id = 'chatWin';
  win.innerHTML = `
    <div class="chat-head">
      <div class="chat-av"><img src="${base}images/sippy-logo.png" alt="Sippy" style="width:32px;height:32px;object-fit:contain;border-radius:50%;" /></div>
      <div><div class="chat-name">Sippy Assistant</div><div class="chat-online">● Online now</div></div>
      <button class="chat-close" id="chatClose">✕</button>
    </div>
    <div class="chat-msgs" id="chatMsgs">
      <div class="bot-msg">Hi! 👋 Welcome to Sippy. Ask me anything about our smart portable kettle!</div>
      <div class="qr-wrap" id="chatQR">
        <button class="qr-btn" onclick="qr('What is Sippy?')">What is Sippy?</button>
        <button class="qr-btn" onclick="qr('Price?')">Price?</button>
        <button class="qr-btn" onclick="qr('How to order?')">How to order?</button>
        <button class="qr-btn" onclick="qr('Shipping?')">Shipping?</button>
        <button class="qr-btn" onclick="qr('Temperature range?')">Temperature?</button>
        <button class="qr-btn" onclick="qr('What material is Sippy made of?')">Material?</button>
        <button class="qr-btn" onclick="qr('Return policy?')">Returns?</button>
        <button class="qr-btn" onclick="qr('Contact support')">Contact</button>
      </div>
    </div>
    <div class="chat-input-row">
      <input type="text" id="chatIn" placeholder="Type a message…" />
      <button class="chat-send" id="chatSend">➤</button>
    </div>
  `;
  document.body.appendChild(win);

  fab.addEventListener('click', () => win.classList.toggle('open'));
  document.getElementById('chatClose').addEventListener('click', () => win.classList.remove('open'));
  document.getElementById('chatSend').addEventListener('click', sendChat);
  document.getElementById('chatIn').addEventListener('keydown', e => { if (e.key === 'Enter') sendChat(); });
}

const CHAT_KB = [
  { keys: ['what is sippy', 'about sippy', 'tell me about'], reply: 'Sippy is India\'s smartest rechargeable portable kettle 🫖 It heats 300mL of water wirelessly — no power socket needed! Made with 316 medical-grade stainless steel, LED temperature control (45°C–100°C), and a cool-touch ABS outer shell. Perfect for travel, office, home & outdoors.' },
  { keys: ['price', 'cost', 'how much', '₹', 'rs ', 'rupee'], reply: 'Sippy is priced at just ₹5,999 with FREE shipping all across India! 🎉 All taxes are included in this price — no hidden charges.' },
  { keys: ['how to order', 'buy', 'purchase', 'order now'], reply: 'Click "Buy Now" in the top menu or visit our Checkout page. Fill in your delivery details and pay securely via Razorpay (UPI, Cards, Net Banking, Wallets & EMI). Super easy — takes under 2 minutes! 🛒' },
  { keys: ['shipping', 'delivery', 'dispatch', 'days', 'when will'], reply: 'FREE shipping pan-India! 🚚 Orders are dispatched within 1–2 business days and delivered in 4–7 working days. You\'ll get SMS tracking updates after dispatch.' },
  { keys: ['material', 'steel', 'stainless', 'safe', 'bpa', 'plastic', 'construction'], reply: 'Sippy uses 316 Medical-Grade Stainless Steel inside — the same grade used in surgical instruments! 🛡️ The outer shell is food-safe ABS plastic. Your water NEVER touches plastic. Between them is a thermal insulation layer that keeps water hot longer.' },
  { keys: ['temperature', 'temp', 'heat', 'boil', 'degree', '°c', '45', '100'], reply: 'Sippy heats from 45°C to 100°C (full boil) 🌡️ The LED display shows the live temperature in real time. Perfect for:\n• Green tea: 70°C\n• Coffee / espresso: 95°C\n• Instant noodles: 100°C\n• Baby formula: 60°C' },
  { keys: ['capacity', 'volume', 'ml', 'litre', 'liter', '300', 'how much water'], reply: 'Sippy holds 300mL — the perfect size for one full cup of tea, coffee, or instant noodles! ☕ Compact enough to carry anywhere.' },
  { keys: ['wireless', 'rechargeable', 'battery', 'plug', 'socket', 'charge'], reply: 'Yes! Sippy is 100% wireless and rechargeable ⚡ No power socket needed. Charge it like your phone, then heat water anywhere — hotel rooms, offices, hiking trails, wherever you are!' },
  { keys: ['return', 'refund', 'guarantee', 'warranty', 'exchange'], reply: 'We offer a 30-day satisfaction guarantee 💯 Not happy with Sippy? Contact us within 30 days and we\'ll arrange a return or refund. No questions asked! Email: smartkettlestore@gmail.com' },
  { keys: ['payment', 'upi', 'card', 'razorpay', 'emi', 'net banking', 'wallet'], reply: 'We accept all major payment methods via Razorpay 💳\n• UPI (PhonePe, GPay, Paytm)\n• Credit & Debit Cards\n• Net Banking\n• Wallets\n• EMI options\n\nAll payments are 100% secure and encrypted.' },
  { keys: ['track', 'tracking', 'status', 'where is my order'], reply: 'After your order is dispatched (1–2 business days), you\'ll receive an SMS with your tracking details. You can also email us at smartkettlestore@gmail.com or WhatsApp us for a quick update! 📦' },
  { keys: ['travell', 'travel', 'hotel', 'trip', 'portable', 'outdoor', 'camp', 'hike'], reply: 'Sippy is made for travellers! ✈️ No need to use dirty hotel kettles. Sippy is yours — compact, wireless, always clean. Works perfectly in hotel rooms, on hikes, camping trips, and road trips!' },
  { keys: ['student', 'hostel', 'dorm', 'college'], reply: 'Sippy is perfect for students! 🎓 Heat instant noodles, brew study-fuel coffee, or make late-night tea — all without needing a kitchen. Fits on any desk or in your bag.' },
  { keys: ['baby', 'formula', 'infant', 'parent', 'kids'], reply: 'Sippy is great for new parents! 👶 Heat baby formula to the precise safe temperature (around 60°C) without guessing. The LED display ensures accuracy and peace of mind at 3am.' },
  { keys: ['wide mouth', 'clean', 'wash', 'hygiene'], reply: 'Sippy features a wide-mouth design for easy filling and cleaning 🧼 The polished 316 stainless steel interior resists stains and odours permanently — stays fresh cup after cup.' },
  { keys: ['handle', 'hold', 'ergon', 'carry', 'grip'], reply: 'Sippy has an ergonomic easy-carry handle 👋 Compact form, beautiful cream/ivory finish. Fits comfortably in your hand and in any bag. The cool-touch ABS outer shell is safe to hold even while boiling inside.' },
  { keys: ['colour', 'color', 'look', 'design', 'cream', 'ivory', 'white'], reply: 'Sippy comes in a beautiful Cream / Ivory finish 🤍 Sleek, minimal, and premium-looking. The design is compact enough for any bag or desk.' },
  { keys: ['contact support', 'help', 'support', 'reach', 'talk to'], reply: 'Reach our support team anytime:\n📧 smartkettlestore@gmail.com\n📞 +91 8985656181\n💬 wa.me/918985656181\n\nWe reply within 4–6 hours (Mon–Sat, 9am–7pm IST).' },
  { keys: ['whatsapp', 'wa', 'chat on'], reply: 'Chat with us on WhatsApp for quick support! 💬\n👉 wa.me/918985656181\nWe\'re available Mon–Sat, 9am–7pm IST.' },
  { keys: ['made in', 'india', 'indian', 'country'], reply: 'Sippy is proudly made for India 🇮🇳 Designed for Indian lifestyles, priced affordably, with free pan-India delivery!' },
];

function getBotReply(msg) {
  const low = msg.toLowerCase();
  for (const entry of CHAT_KB) {
    if (entry.keys.some(k => low.includes(k))) return entry.reply;
  }
  return 'Great question! Let me help you:\n\n🫖 Sippy is a wireless portable kettle | ₹5,999 | FREE shipping\n🌡️ Heats 45°C–100°C | 300mL | 316 Steel\n\nFor more details:\n📧 smartkettlestore@gmail.com\n📞 +91 8985656181\n💬 wa.me/918985656181';
}

function addMsg(text, who) {
  const msgs = document.getElementById('chatMsgs');
  const d = document.createElement('div');
  d.className = who === 'user' ? 'user-msg' : 'bot-msg';
  d.textContent = text;
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
}

function qr(text) {
  const qrEl = document.getElementById('chatQR');
  if (qrEl) qrEl.remove();
  addMsg(text, 'user');
  setTimeout(() => addMsg(getBotReply(text), 'bot'), 350);
}

function sendChat() {
  const inp = document.getElementById('chatIn');
  const txt = inp.value.trim();
  if (!txt) return;
  const qrEl = document.getElementById('chatQR');
  if (qrEl) qrEl.remove();
  addMsg(txt, 'user');
  inp.value = '';
  setTimeout(() => addMsg(getBotReply(txt), 'bot'), 350);
}

// ===== SCROLL REVEAL =====
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = e.target.dataset.delay ? parseInt(e.target.dataset.delay) : 0;
        setTimeout(() => e.target.classList.add('in'), delay);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => io.observe(el));
}

// ===== TOAST =====
function showToast(msg, type = 'success') {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = `toast show ${type}`;
  clearTimeout(t._to);
  t._to = setTimeout(() => { t.classList.remove('show'); }, 3500);
}

// ===== MARQUEE INJECT =====
function injectMarquee(items) {
  const bar = document.createElement('div');
  bar.className = 'marquee-bar';
  const dbl = [...items, ...items].map((t, i) => `<span>${t}</span>${i % items.length !== items.length - 1 ? '<span class="dot">✦</span>' : ''}`).join('');
  bar.innerHTML = `<div class="marquee-track">${dbl}${dbl}</div>`;
  return bar;
}

// ===== AUTO-INIT ON DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  injectChatbot();
  injectFooter();
});
