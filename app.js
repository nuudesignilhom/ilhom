(function () {
  var SITE = window.SITE, PROJECTS = window.PROJECTS, I18N = window.I18N;
  var page = document.body.getAttribute("data-page"); // home | projects | project
  var LANGS = ["uz", "ru"];

  /* ---------- language (kept across pages via localStorage + ?lang=) ---------- */
  function readLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (LANGS.indexOf(q) > -1) return q;
    try {
      var s = localStorage.getItem("lang");
      if (LANGS.indexOf(s) > -1) return s;
    } catch (e) {}
    return "uz";
  }
  var lang = readLang();
  function saveLang() {
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }
  function otherLang() { return lang === "uz" ? "ru" : "uz"; }
  function t(key) { return I18N[lang][key] || key; }
  function tr(obj) { return obj[lang] || obj.uz; }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function mailHref() { return "mailto:" + SITE.contact.email; }
  function isRealUrl(u) { return /^https?:\/\/\S+$/i.test(u || ""); }
  function shortUrl(u) { return String(u || "").replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, ""); }

  function imageHTML(p) {
    if (p.image) {
      return '<img src="' + esc(p.image) + '" alt="' + esc(tr(p.title)) + '" loading="lazy"' +
        (p.imagePosition ? ' style="object-position:' + esc(p.imagePosition) + '"' : '') + '>';
    }
    return '<div class="ph" role="img" aria-label="' + esc(t("imagePlaceholder")) + '">' +
      '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">' +
      '<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.6"/><path d="M4 18l5-5 4 4 3-3 4 4"/></svg>' +
      '<span>' + esc(t("imagePlaceholder")) + '</span></div>';
  }

  function cardHTML(p, i) {
    return '<a class="card" href="project.html?id=' + encodeURIComponent(p.id) + '" aria-label="' + esc(t("openProject") + ": " + tr(p.title)) + '">' +
      '<div class="card-media">' + imageHTML(p) + '</div>' +
      '<div class="card-body">' +
      '<p class="card-cat">' + esc(tr(p.category)) + '</p>' +
      '<h3 class="card-title">' + esc(tr(p.title)) + '</h3>' +
      '<p class="card-desc">' + esc(tr(p.description)) + '</p>' +
      '</div></a>';
  }

  function gridHTML(list) {
    return '<div class="grid">' + list.map(function (p, i) { return cardHTML(p, i); }).join("") + '</div>';
  }

  /* ---------- header / footer ---------- */
  function headerHTML() {
    var projectsHref = page === "home" ? "#projects" : "projects.html";
    return '<header class="nav-wrap"><nav class="nav" aria-label="Main">' +
      '<a class="nav-logo" href="index.html" aria-label="' + esc(t("navHome")) + '">' + esc(SITE.monogram) + '</a>' +
      '<ul class="nav-pill">' +
      '<li><a href="' + projectsHref + '" data-nav="projects">' + esc(t("navProjects")) + '</a></li>' +
      '<li><a href="index.html#about" data-nav="about">' + esc(t("navAbout")) + '</a></li>' +
      '<li><a href="index.html#faq" data-nav="faq">' + esc(t("navFaq")) + '</a></li>' +
      '<li><a href="index.html#contact" data-nav="contact">' + esc(t("navContact")) + '</a></li>' +
      '</ul>' +
      // One toggle: it shows the language you will switch TO (site in UZ -> "RU", site in RU -> "UZ").
      '<div class="lang">' +
      '<button type="button" data-lang="' + otherLang() + '" lang="' + otherLang() + '" aria-label="' + esc(t("langSwitch")) + '">' + otherLang().toUpperCase() + '</button>' +
      '</div></nav></header>';
  }

  function footerHTML() {
    return '<footer class="footer"><span>© ' + new Date().getFullYear() + ' ' + esc(SITE.name) + '</span><span>' + esc(t("footer")) + '</span></footer>';
  }

  /* ---------- page bodies ---------- */
  function aboutContactHTML() {
    var c = SITE.contact;
    return '' +
      '<section id="about" class="section">' +
      '<div class="section-top"><span class="eyebrow"><i>✦</i> ' + esc(t("labelAbout")) + '</span></div>' +
      '<h2 class="display">' + esc(t("aboutTitle")) + '</h2>' +
      '<p class="lead">' + esc(t("aboutText")) + '</p>' +
      '<div class="cta">' +
      '<h3 class="cta-title">' + esc(t("ctaTitle")) + '</h3>' +
      '<p class="cta-text">' + esc(t("ctaText")) + '</p>' +
      '<div class="btn-row">' +
      '<a class="btn btn-primary" href="' + esc(mailHref()) + '">' + esc(t("ctaEmail")) + ' <span aria-hidden="true">↗</span></a>' +
      '<a class="btn btn-outline" href="' + esc(c.telegram) + '" target="_blank" rel="noopener noreferrer">' + esc(t("ctaTelegram")) + ' <span aria-hidden="true">↗</span></a>' +
      '</div></div></section>' +

      faqHTML() +

      '<section id="contact" class="section">' +
      '<div class="section-top"><span class="eyebrow"><i>✦</i> ' + esc(t("labelContact")) + '</span></div>' +
      '<h2 class="display">' + esc(t("contactTitle")) + '</h2>' +
      '<ul class="contact-list">' +
      contactRow(t("email"), c.email, mailHref(), false) +
      contactRow(t("telegram"), c.telegramHandle || shortUrl(c.telegram), c.telegram, true) +
      contactRow(t("instagram"), c.instagramHandle || shortUrl(c.instagram), c.instagram, true) +
      // LinkedIn is only shown once a real https:// URL is set in js/data.js (the placeholder is never displayed or linked)
      (isRealUrl(c.linkedin) ? contactRow(t("linkedin"), shortUrl(c.linkedin), c.linkedin, true) : "") +
      '</ul></section>';
  }

  /* ---------- FAQ (accordion; one answer open at a time, all closed by default) ---------- */
  var openFaq = -1;

  function faqBlockHTML(b) {
    if (typeof b === "string") return '<p>' + esc(b) + '</p>';
    if (b && b.steps) {
      return '<ul class="faq-steps">' + b.steps.map(function (s) {
        return '<li><strong>' + esc(s.h) + '</strong> — ' + esc(s.t) + '</li>';
      }).join("") + '</ul>';
    }
    return "";
  }

  function faqHTML() {
    var items = I18N[lang].faq || [];
    return '<section id="faq" class="section">' +
      '<div class="faq-wrap">' +
      '<div class="faq-head">' +
      '<div class="section-top"><span class="eyebrow"><i>✦</i> ' + esc(t("faqLabel")) + '</span></div>' +
      '<h2 class="display">' + esc(t("faqTitle")) + '</h2>' +
      '<p class="faq-intro">' + esc(t("faqIntro")) + '</p>' +
      '</div>' +
      '<div class="faq-list">' +
      items.map(function (it, i) {
        var open = i === openFaq;
        return '<div class="faq-item' + (open ? ' open' : '') + '">' +
          '<h3 class="faq-q"><button type="button" id="faq-q-' + i + '" aria-expanded="' + open + '" aria-controls="faq-a-' + i + '">' +
          '<span>' + esc(it.q) + '</span><span class="faq-ico" aria-hidden="true"></span></button></h3>' +
          '<div class="faq-a" id="faq-a-' + i + '" role="region" aria-labelledby="faq-q-' + i + '">' +
          '<div class="faq-a-inner"><div class="faq-body">' + it.a.map(faqBlockHTML).join("") + '</div></div></div>' +
          '</div>';
      }).join("") +
      '</div></div></section>';
  }

  function bindFaq() {
    var btns = Array.prototype.slice.call(document.querySelectorAll(".faq-q button"));
    function setOpen(i) {
      openFaq = i;
      btns.forEach(function (b, k) {
        var on = k === i;
        b.setAttribute("aria-expanded", String(on));
        b.closest(".faq-item").classList.toggle("open", on);
      });
    }
    btns.forEach(function (b, i) {
      b.addEventListener("click", function () { setOpen(openFaq === i ? -1 : i); });
      b.addEventListener("keydown", function (e) {
        var n = btns.length, to = -1;
        if (e.key === "ArrowDown") to = (i + 1) % n;
        else if (e.key === "ArrowUp") to = (i - 1 + n) % n;
        else if (e.key === "Home") to = 0;
        else if (e.key === "End") to = n - 1;
        if (to > -1) { e.preventDefault(); btns[to].focus(); }
      });
    });
  }

  function contactRow(label, text, href, external) {
    return '<li><a class="contact-row" href="' + esc(href) + '"' +
      (external ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' +
      '<span class="contact-label">' + esc(label) + '</span>' +
      '<span class="contact-val">' + esc(text) + '</span>' +
      '<span class="contact-arrow" aria-hidden="true">↗</span></a></li>';
  }

  function homeHTML() {
    var preview = PROJECTS.slice(0, SITE.homePreviewCount);
    return '<main>' +
      '<section id="projects" class="section section-first">' +
      '<div class="section-top"><span class="eyebrow"><i>✦</i> ' + esc(t("labelProjects")) + '</span>' +
      '<a class="eyebrow link" href="#contact">' + esc(t("workWithMe")) + ' <span aria-hidden="true">↗</span></a></div>' +
      '<h1 class="hero">' + esc(t("heroTitle")) + '</h1>' +
      '<p class="hero-sub">' + esc(t("heroSub")) + '</p>' +
      gridHTML(preview) +
      '<div class="more"><a class="btn btn-primary" href="projects.html">' + esc(t("moreProjects")) + ' <span aria-hidden="true">→</span></a></div>' +
      '</section>' + aboutContactHTML() + '</main>';
  }

  function projectsHTML() {
    return '<main><section class="section section-first">' +
      '<div class="section-top"><a class="eyebrow link" href="index.html"><span aria-hidden="true">←</span> ' + esc(t("backHome")) + '</a>' +
      '<span class="eyebrow"><i>✦</i> ' + esc(t("labelProjects")) + '</span></div>' +
      '<h1 class="hero hero-sm">' + esc(t("projectsPageTitle")) + '</h1>' +
      gridHTML(PROJECTS) + '</section></main>';
  }

  /* ---------- case study (projects that define a gallery) ---------- */
  function pictureHTML(src, mobileSrc, alt, eager, ratio) {
    var img = '<img src="' + esc(src) + '" alt="' + esc(alt) + '" decoding="async"' + (eager ? "" : ' loading="lazy"') + (ratio ? ' style="aspect-ratio:' + esc(ratio) + '"' : '') + '>';
    return mobileSrc
      ? '<picture><source media="(max-width: 640px)" srcset="' + esc(mobileSrc) + '">' + img + '</picture>'
      : img;
  }

  function galleryItemHTML(g) {
    var cls = "gal-item" + (g.narrow ? " narrow" : "") + (g.natural ? " natural" : "") + (g.mobileSrc ? " has-m" : "");
    return '<figure class="' + cls + '">' +
      '<div class="gal-frame">' + pictureHTML(g.src, g.mobileSrc, tr(g.label) + " — " + tr(g.caption), false, g.ratio) + '</div>' +
      '<figcaption><span class="gal-label">' + esc(tr(g.label)) + '</span><span class="gal-cap">' + esc(tr(g.caption)) + '</span></figcaption>' +
      '</figure>';
  }

  function metaItem(label, value) {
    return '<div class="case-meta-item"><span class="case-meta-label">' + esc(label) + '</span><span class="case-meta-val">' + esc(value) + '</span></div>';
  }

  function caseStudyHTML(p, idx, prev, next) {
    var heroSrc = (p.hero && p.hero.src) || p.image;
    return '<main><section class="section section-first">' +
      '<div class="section-top"><a class="eyebrow link" href="projects.html"><span aria-hidden="true">←</span> ' + esc(t("backProjects")) + '</a>' +
      '</div>' +
      '<h1 class="hero hero-sm">' + esc(tr(p.title)) + '</h1>' +
      '<p class="hero-sub">' + esc(tr(p.summary || p.description)) + '</p>' +
      '<div class="case-meta">' +
      metaItem(t("caseCategory"), tr(p.category)) +
      metaItem(t("caseDirection"), p.direction ? tr(p.direction) : t("caseDirectionVal")) +
      (p.roles ? metaItem(t("caseRoles"), p.roles) : "") +
      (p.meta ? p.meta.map(function (m) { return metaItem(tr(m.label), tr(m.value)); }).join("") : "") +
      '</div>' +
      '<figure class="gal-item gal-hero' + (p.hero && p.hero.natural ? " natural" : "") + (p.hero && p.hero.mobileSrc ? " has-m" : "") + '"><div class="gal-frame">' +
      pictureHTML(heroSrc, p.hero && p.hero.mobileSrc, tr(p.title), true, p.hero && p.hero.ratio) + '</div></figure>' +
      '<div class="gallery">' + p.gallery.map(galleryItemHTML).join("") + '</div>' +
      '<div class="btn-row center">' +
      '<a class="btn btn-outline" href="project.html?id=' + encodeURIComponent(prev.id) + '"><span aria-hidden="true">←</span> ' + esc(t("prev")) + '</a>' +
      '<a class="btn btn-outline" href="project.html?id=' + encodeURIComponent(next.id) + '">' + esc(t("next")) + ' <span aria-hidden="true">→</span></a>' +
      '</div></section></main>';
  }

  function projectHTML() {
    var id = new URLSearchParams(location.search).get("id");
    var idx = -1;
    PROJECTS.forEach(function (p, i) { if (p.id === id) idx = i; });
    if (idx < 0) {
      return '<main><section class="section section-first">' +
        '<div class="section-top"><a class="eyebrow link" href="projects.html"><span aria-hidden="true">←</span> ' + esc(t("backProjects")) + '</a></div>' +
        '<h1 class="hero hero-sm">' + esc(t("notFound")) + '</h1></section></main>';
    }
    var p = PROJECTS[idx];
    var prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    var next = PROJECTS[(idx + 1) % PROJECTS.length];
    if (p.gallery) return caseStudyHTML(p, idx, prev, next);
    return '<main><section class="section section-first">' +
      '<div class="section-top"><a class="eyebrow link" href="projects.html"><span aria-hidden="true">←</span> ' + esc(t("backProjects")) + '</a>' +
      '</div>' +
      '<h1 class="hero hero-sm">' + esc(tr(p.title)) + '</h1>' +
      '<p class="hero-sub">' + esc(t("caseCategory")) + ': ' + esc(tr(p.category)) + '</p>' +
      '<div class="case-media">' + imageHTML(p) + '</div>' +
      '<p class="lead case-text">' + esc(tr(p.description)) + '<br>' + esc(t("caseSoon")) + '</p>' +
      '<div class="btn-row center">' +
      '<a class="btn btn-outline" href="project.html?id=' + encodeURIComponent(prev.id) + '"><span aria-hidden="true">←</span> ' + esc(t("prev")) + '</a>' +
      '<a class="btn btn-outline" href="project.html?id=' + encodeURIComponent(next.id) + '">' + esc(t("next")) + ' <span aria-hidden="true">→</span></a>' +
      '</div></section></main>';
  }

  /* ---------- render ---------- */
  var spy = null;
  function render() {
    document.documentElement.lang = lang;
    document.title = page === "projects" ? t("metaProjects") : t("metaTitle");
    var body = page === "home" ? homeHTML() : page === "projects" ? projectsHTML() : projectHTML();
    document.getElementById("app").innerHTML = headerHTML() + body + footerHTML();
    bind();
    setupActive();
  }

  function bind() {
    bindFaq();
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.addEventListener("click", function () {
        lang = b.getAttribute("data-lang");
        saveLang();
        render();
      });
    });
  }

  /* ---------- active nav state ---------- */
  function setActive(name) {
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      if (a.getAttribute("data-nav") === name) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }
  function setupActive() {
    if (spy) { spy.disconnect(); spy = null; }
    if (page !== "home") { setActive("projects"); return; }
    setActive("projects");
    var ids = ["projects", "about", "faq", "contact"];
    function update() {
      var y = window.scrollY + window.innerHeight * 0.35;
      var current = "projects";
      ids.forEach(function (id) {
        var el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = "contact";
      setActive(current);
    }
    window.removeEventListener("scroll", window.__spy);
    window.__spy = update;
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  saveLang();
  render();

  // honour #about / #contact when arriving from another page
  if (location.hash && page === "home") {
    var target = document.getElementById(location.hash.slice(1));
    if (target) setTimeout(function () { target.scrollIntoView(); }, 0);
  }
})();
