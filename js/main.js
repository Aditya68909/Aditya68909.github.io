// ── Helpers ───────────────────────────────────────────────────
function qs(sel, ctx = document) { return ctx.querySelector(sel); }
function qsa(sel, ctx = document) { return ctx.querySelectorAll(sel); }
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls)  e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}

// ── Navbar ────────────────────────────────────────────────────
function renderNavbar() {
  const brand = qs('.nav-brand-text');
  if (brand) {
    brand.innerHTML = `<strong>${SITE.brandName}</strong><span>${SITE.brandTagline}</span>`;
  }

  const list = qs('.nav-links');
  if (list) {
    list.innerHTML = NAV_LINKS.map(l =>
      `<a href="${l.href}"${l.cta ? ' class="nav-cta"' : ''}>${l.label}</a>`
    ).join('');
  }

  const drawer = qs('.nav-drawer');
  if (drawer) {
    drawer.innerHTML = NAV_LINKS.map(l =>
      `<a href="${l.href}" class="drawer-link${l.cta ? ' drawer-cta' : ''}">${l.label}</a>`
    ).join('');
  }
}

// ── Hero ──────────────────────────────────────────────────────
function renderHero() {
  // slides
  const wrapper = qs('.swiper-wrapper');
  if (wrapper) {
    wrapper.innerHTML = HERO.slides.map(s => `
      <div class="swiper-slide">
        <img src="${s.img}" alt="${s.alt}" />
        <div class="hero-overlay"></div>
      </div>`).join('');
  }

  const eyebrow = qs('.hero-eyebrow');
  if (eyebrow) eyebrow.textContent = HERO.eyebrow;

  const title = qs('.hero-title');
  if (title) {
    title.innerHTML = `${HERO.titleLine1}<em>${HERO.titleLine2}</em>`;
  }

  const sub = qs('.hero-sub');
  if (sub) {
    sub.innerHTML = HERO.subItems.map((item, i) =>
      i < HERO.subItems.length - 1 ? `${item} <span>&bull;</span> ` : item
    ).join('');
  }
}

// ── About ─────────────────────────────────────────────────────
function renderAbout() {
  const wrap = qs('.about-image-wrap');
  if (wrap) {
    wrap.innerHTML = `
      <img class="about-img-main" src="${ABOUT.mainImg.src}" alt="${ABOUT.mainImg.alt}" />
      <img class="about-img-accent" src="${ABOUT.accentImg.src}" alt="${ABOUT.accentImg.alt}" />
      <div class="about-img-badge">
        <strong>${ABOUT.badge.number}</strong>
        <span>${ABOUT.badge.text.replace('\n', '<br>')}</span>
      </div>`;
  }

  const content = qs('.about-content');
  if (content) {
    const statsHtml = ABOUT.stats.map(s => `
      <div class="stat-item">
        <div class="stat-number">${s.number}</div>
        <div class="stat-label">${s.label}</div>
      </div>`).join('');

    const featuresHtml = ABOUT.features.map(f => `
      <div class="about-feature">
        <div class="feature-icon"><i class="${f.icon}"></i></div>
        <div class="feature-text">
          <strong>${f.title}</strong>
          <p>${f.desc}</p>
        </div>
      </div>`).join('');

    content.innerHTML = `
      <div class="section-label">${ABOUT.label}</div>
      <h2 class="section-title">${ABOUT.headline}</h2>
      <p class="section-subtitle">${ABOUT.body}</p>
      <div class="about-stats">${statsHtml}</div>
      <div class="about-features">${featuresHtml}</div>
      <a href="#contact" class="btn-gold">
        <i class="fa-solid fa-arrow-right"></i> Get in Touch
      </a>`;
  }
}

// ── Services ──────────────────────────────────────────────────
function renderServices() {
  const header = qs('.services-header');
  if (header) {
    header.innerHTML = `
      <div class="section-label">${SERVICES.label}</div>
      <h2 class="section-title">${SERVICES.headline}</h2>
      <p class="section-subtitle">${SERVICES.subtitle}</p>`;
  }

  const grid = qs('.services-grid');
  if (grid) {
    grid.innerHTML = SERVICES.items.map((s, i) => `
      <div class="service-card" data-aos="fade-up" data-aos-delay="${i * 80}">
        <img src="${s.img}" alt="${s.alt}" />
        <div class="service-overlay"></div>
        <div class="service-body">
          <div class="service-icon"><i class="${s.icon}"></i></div>
          <div class="service-title">${s.title}</div>
          <div class="service-desc">${s.desc}</div>
          <a href="#contact" class="service-link">Enquire Now <i class="fa-solid fa-arrow-right" style="font-size:0.65rem"></i></a>
        </div>
      </div>`).join('');
  }
}

// ── Menu ──────────────────────────────────────────────────────
function renderMenu() {
  const labelEl = qs('#menu .section-label');
  if (labelEl) labelEl.textContent = MENU.label;

  const headlineEl = qs('#menu .section-title');
  if (headlineEl) headlineEl.innerHTML = MENU.headline;

  // tabs
  const tabsEl = qs('.menu-tabs');
  if (tabsEl) {
    tabsEl.innerHTML = MENU.categories.map((cat, i) =>
      `<button class="menu-tab${i === 0 ? ' active' : ''}" data-tab="${cat.id}">${cat.label}</button>`
    ).join('');
  }

  // panels
  const menuSection = qs('#menu .container');
  // remove old panels first (if any)
  qsa('.menu-panel', menuSection).forEach(p => p.remove());

  MENU.categories.forEach((cat, ci) => {
    const panel = el('div', `menu-panel${ci === 0 ? ' active' : ''}`);
    panel.id = `tab-${cat.id}`;

    const grid = el('div', 'menu-grid');
    cat.items.forEach((item, ii) => {
      grid.innerHTML += `
        <div class="menu-card" data-aos="fade-up" data-aos-delay="${ii * 80}">
          <div class="menu-card-img">
            <img src="${item.img}" alt="${item.alt}" />
          </div>
          <div class="menu-card-body">
            <span class="menu-tag">${item.tag}</span>
            <div class="menu-item-name">${item.name}</div>
            <div class="menu-divider"></div>
            <div class="menu-item-desc">${item.desc}</div>
          </div>
        </div>`;
    });

    panel.appendChild(grid);
    menuSection.appendChild(panel);
  });
}

// ── Contact ───────────────────────────────────────────────────
function renderContact() {
  const info = qs('.contact-info');
  if (info) {
    const socialsHtml = `
      <div class="contact-socials">
        <a href="${SITE.whatsapp}" class="social-btn" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="mailto:${SITE.email}" class="social-btn" aria-label="Email"><i class="fa-regular fa-envelope"></i></a>
        <a href="${SITE.instagram}" class="social-btn" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="${SITE.facebook}" class="social-btn" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
      </div>`;

    info.innerHTML = `
      <div class="section-label">${CONTACT.label}</div>
      <h2 class="section-title">${CONTACT.headline}</h2>
      <p class="section-subtitle">${CONTACT.subtitle}</p>
      <div class="contact-details">
        <div class="contact-item">
          <div class="contact-item-icon"><i class="fa-solid fa-phone"></i></div>
          <div class="contact-item-text">
            <label>Phone</label>
            <a href="${SITE.phoneTel}">${SITE.phone}</a>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-item-icon"><i class="fa-solid fa-envelope"></i></div>
          <div class="contact-item-text">
            <label>Email</label>
            <a href="mailto:${SITE.email}">${SITE.email}</a>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-item-icon"><i class="fa-solid fa-location-dot"></i></div>
          <div class="contact-item-text">
            <label>Address</label>
            <span>${SITE.address}</span>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-item-icon"><i class="fa-regular fa-clock"></i></div>
          <div class="contact-item-text">
            <label>Working Hours</label>
            <span>${SITE.hours}</span>
          </div>
        </div>
      </div>
      ${socialsHtml}`;
  }

  // event type options
  const select = qs('#feventtype');
  if (select) {
    select.innerHTML = '<option value="" disabled selected>Select event type</option>' +
      CONTACT.eventTypes.map(t => `<option>${t}</option>`).join('');
  }

  // map
  const map = qs('.map-wrap iframe');
  if (map) map.src = SITE.mapEmbed;

  // whatsapp float
  const waFloat = qs('.whatsapp-float');
  if (waFloat) waFloat.href = SITE.whatsapp;
}

// ── Footer ────────────────────────────────────────────────────
function renderFooter() {
  const brand = qs('.footer-brand-name');
  if (brand) brand.textContent = SITE.brandName;

  const tagline = qs('.footer-brand-tagline');
  if (tagline) tagline.textContent = SITE.brandTagline;

  const desc = qs('.footer-desc');
  if (desc) desc.textContent = FOOTER.desc;

  const footerSocials = qs('#footer .contact-socials');
  if (footerSocials) {
    footerSocials.innerHTML = `
      <a href="${SITE.whatsapp}" class="social-btn" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
      <a href="${SITE.instagram}" class="social-btn" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
      <a href="${SITE.facebook}" class="social-btn" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>`;
  }

  const navList = qs('.footer-nav-links');
  if (navList) {
    navList.innerHTML = FOOTER.navLinks.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('');
  }

  const svcList = qs('.footer-svc-links');
  if (svcList) {
    svcList.innerHTML = FOOTER.serviceLinks.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('');
  }

  // footer contact column
  const fcol = qs('.footer-contact-col');
  if (fcol) {
    fcol.innerHTML = `
      <div class="footer-contact-item">
        <i class="fa-solid fa-phone"></i>
        <a href="${SITE.phoneTel}">${SITE.phone}</a>
      </div>
      <div class="footer-contact-item">
        <i class="fa-solid fa-envelope"></i>
        <a href="mailto:${SITE.email}">${SITE.email}</a>
      </div>
      <div class="footer-contact-item">
        <i class="fa-solid fa-location-dot"></i>
        <span>${SITE.addressFull}</span>
      </div>
      <div class="footer-contact-item" style="margin-top:1rem;">
        <a href="#contact" class="btn-gold" style="font-size:0.75rem; padding: 0.7rem 1.4rem;">
          <i class="fa-regular fa-calendar-check"></i> Book Now
        </a>
      </div>`;
  }

  const copy = qs('.footer-copy');
  if (copy) {
    copy.innerHTML = `&copy; ${SITE.copyrightYear} <span>${SITE.brandName} Service</span> | All Rights Reserved`;
  }
}

// ── Interactions ──────────────────────────────────────────────
function initNavbar() {
  const navbar   = qs('#navbar');
  const backToTop = qs('#backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
      backToTop.classList.add('visible');
    } else {
      navbar.classList.remove('scrolled');
      backToTop.classList.remove('visible');
    }

    const sections = qsa('section[id]');
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    qsa('.nav-links a').forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  });
}

function initDrawer() {
  const navToggle     = qs('#navToggle');
  const navDrawer     = qs('#navDrawer');
  const drawerOverlay = qs('#drawerOverlay');

  function openDrawer()  { navToggle.classList.add('open'); navDrawer.classList.add('open'); drawerOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeDrawer() { navToggle.classList.remove('open'); navDrawer.classList.remove('open'); drawerOverlay.classList.remove('open'); document.body.style.overflow = ''; }

  navToggle.addEventListener('click', () => navDrawer.classList.contains('open') ? closeDrawer() : openDrawer());
  drawerOverlay.addEventListener('click', closeDrawer);
  qsa('.drawer-link').forEach(a => a.addEventListener('click', closeDrawer));
}

function initMenuTabs() {
  document.addEventListener('click', e => {
    const tab = e.target.closest('.menu-tab');
    if (!tab) return;
    qsa('.menu-tab').forEach(t => t.classList.remove('active'));
    qsa('.menu-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = qs('#tab-' + tab.dataset.tab);
    if (panel) { panel.classList.add('active'); AOS.refresh(); }
  });
}

function initHeroSwiper() {
  new Swiper('.swiper-hero', {
    loop: true,
    speed: 1100,
    autoplay: { delay: 5500, disableOnInteraction: false },
    effect: 'fade',
    fadeEffect: { crossFade: true },
    pagination: { el: '.swiper-hero-pagination', clickable: true },
  });
}

function initContactForm() {
  const form = qs('#contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();

    const name      = (form.querySelector('[name="name"]').value       || '').trim();
    const phone     = (form.querySelector('[name="phone"]').value      || '').trim();
    const eventType = (form.querySelector('[name="eventtype"]').value  || '').trim();
    const date      = (form.querySelector('[name="date"]').value       || '').trim();
    const message   = (form.querySelector('[name="message"]').value    || '').trim();

    const text = [
      'New Enquiry from website',
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Event Type: ${eventType}`,
      `Event Date: ${date}`,
      message ? `Message: ${message}` : null,
    ].filter(Boolean).join('\n');

    // Extract numeric phone from SITE.whatsapp url
    const waNumber = SITE.whatsapp.replace(/\D/g, '');
    const waUrl    = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

    // Visual feedback
    const btn = form.querySelector('.form-submit');
    btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Opening WhatsApp...';
    btn.style.background = 'linear-gradient(135deg, #2daf5e, #1d8048)';
    btn.disabled = true;

    window.open(waUrl, '_blank', 'noopener');

    setTimeout(() => {
      btn.innerHTML = '<i class="fa-regular fa-paper-plane"></i> Send Enquiry';
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}

// ── Boot ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Prevent browser scroll-restoration from landing mid-page
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  // 1. Render all sections from data
  renderNavbar();
  renderHero();
  renderAbout();
  renderServices();
  renderMenu();
  renderContact();
  renderFooter();

  // 2. Init libraries (after DOM is ready)
  AOS.init({ once: true, offset: 80, easing: 'ease-out-cubic' });
  initHeroSwiper();

  // 3. Wire interactions
  initNavbar();
  initDrawer();
  initMenuTabs();
  initContactForm();
});
