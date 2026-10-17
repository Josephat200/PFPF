const componentMarkup = {
  navbar: `<header class="site-header"><div class="container nav-inner"><a class="brand" href="/index.html"><span class="brand-mark">✦</span> josphat<span class="brand-mark">.</span>labs</a><nav class="nav-links" aria-label="Main navigation"><a href="/index.html">Home</a><a href="/pages/about.html">About</a><a href="/pages/services.html">Services</a><a href="/pages/projects.html">Work</a><a href="/pages/blog.html">Journal</a></nav><div class="nav-actions"><button class="theme-toggle" type="button" aria-label="Toggle theme">☼</button><a class="button button-primary" href="/pages/contact.html">Let’s talk <span>↗</span></a><button class="menu-toggle" type="button" aria-label="Open menu">☰</button></div></div></header>`,
  footer: `<footer class="site-footer"><div class="container footer-inner"><div><a class="brand" href="/index.html"><span class="brand-mark">✦</span> josphat<span class="brand-mark">.</span>labs</a><p>Building useful things with code, curiosity, and care.</p></div><div><p>© 2026 Josphat Omondi</p><p><a href="https://github.com/Josephat200" rel="noreferrer">GitHub ↗</a> · <a href="mailto:omondijosephat2005@gmail.com">Email ↗</a></p></div></div></footer>`
};

export function loadComponents() {
  document.querySelectorAll("[data-component]").forEach((element) => {
    const markup = componentMarkup[element.dataset.component];
    if (markup) element.outerHTML = markup;
  });
}