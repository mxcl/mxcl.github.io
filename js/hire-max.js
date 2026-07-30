(() => {
  const banner = document.createElement('aside');
  banner.className = 'mxcl-hire-cta';
  banner.setAttribute('aria-label', 'Hire Max Howell');

  const text = document.createElement('p');
  text.append('Want stuff like this built? ');

  const link = document.createElement('a');
  link.href = '/build/';
  link.textContent = 'Hire Max.';
  text.append(link);
  banner.append(text);

  const styles = document.createElement('style');
  styles.textContent = `
    .mxcl-hire-cta {
      all: initial;
      box-sizing: border-box;
      display: block;
      width: min(100% - 32px, 1320px);
      margin: 72px auto 24px;
      border: 1px solid currentColor;
      background: #f2efe7;
      color: #101310;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .mxcl-hire-cta p {
      all: initial;
      box-sizing: border-box;
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 24px;
      padding: clamp(24px, 5vw, 64px);
      color: inherit;
      font: 700 clamp(2rem, 5vw, 5rem)/.95 "Helvetica Neue", Helvetica, Arial, sans-serif;
      letter-spacing: -.06em;
    }
    .mxcl-hire-cta a {
      all: initial;
      flex: 0 0 auto;
      color: #095f35;
      cursor: pointer;
      font: 600 clamp(.78rem, 1vw, .9rem)/1 "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;
      letter-spacing: 0;
      text-decoration: underline;
      text-underline-offset: 6px;
      text-transform: uppercase;
    }
    .mxcl-hire-cta a:focus-visible { outline: 3px solid #137a49; outline-offset: 5px; }
    @media (max-width: 640px) {
      .mxcl-hire-cta p { align-items: flex-start; flex-direction: column; }
    }
    @media (prefers-color-scheme: dark) {
      .mxcl-hire-cta { background: #111411; color: #e9e7df; }
      .mxcl-hire-cta a { color: #7bc99d; }
    }
  `;

  document.head.append(styles);
  const footer = document.querySelector('footer');
  if (footer) footer.before(banner);
  else document.body.append(banner);
})();
