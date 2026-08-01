import { ElectricPortal } from "./ElectricPortal";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Portal home">
          <span aria-hidden="true">&gt;_</span>
          <strong>PORTAL</strong>
        </a>
        <div className="header-meta">
          <span>MAC + IPHONE</span>
          <a href="/portal/security/">SECURITY</a>
          <a href="#inside">SEE INSIDE</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="live-dot" />
            Native terminal. Zero configuration.
          </p>
          <h1>
            <span>Give your</span>
            <span>Mac a</span>
            <span className="gradient-text">portal.</span>
          </h1>
          <p className="lede">
            Portal is a delightful, opinionated terminal app for Mac and
            iPhone. Your Macs appear automatically through iCloud—no Portal
            account, no setup, no configuration. Just open the app.
          </p>
          <a className="primary-action" href="#inside">
            Enter Portal
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="portal-stage" aria-hidden="true">
          <div className="portal-aura" />
          <img className="portal-core" src="/portal/portal-icon.png" alt="" />
          <ElectricPortal className="portal-electric" />
          <div className="portal-flare" />
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>001</span>
          <i />
          <span>PORTAL / TERMINAL</span>
        </div>
      </section>

      <section className="statement" id="inside">
        <p className="section-kicker">01 / Persistent by default</p>
        <h2>
          Portal into
          <br />
          <span>your terminal.</span>
        </h2>
        <p className="statement-copy">
          Sessions stay put until you <code>exit</code>. Close the tab, quit
          Portal, or switch devices. Jump straight back in whenever the host
          Mac is awake.
          <small>
            Your iCloud account connects your devices. No Portal account. No
            SSH. End-to-end encrypted.
          </small>
        </p>
      </section>

      <section className="product-shot">
        <div className="shot-frame">
          <div className="shot-bar">
            <span>PORTAL / AVAILABLE SESSIONS</span>
            <span>REJOIN ANYWHERE</span>
          </div>
          <video
            src="/portal/portal-terminal-natural-loop.webm"
            poster="/portal/portal-terminal-natural-loop.jpg"
            aria-label="Portal showing terminal sessions ready to rejoin"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <p className="shot-caption">
          <span>01</span>
          Sessions stay put until you end them.
        </p>
      </section>

      <section className="sync">
        <div className="sync-copy">
          <p className="section-kicker">02 / Live everywhere</p>
          <h2>
            One session.
            <br />
            Every screen.
          </h2>
          <p>
            Type on your Mac. Watch it appear on your iPhone. Use both at once,
            alongside every other Mac and iPhone you own.
          </p>
        </div>
        <div
          className="device-stage"
          role="img"
          aria-label="A command typed on a Mac appearing live on an iPhone"
        >
          <div className="mac-device">
            <div className="device-bar">
              <i />
              <i />
              <i />
              <span>portal — zsh</span>
            </div>
            <div className="device-terminal">
              <p>
                <span className="prompt">❯</span>{" "}
                <span className="typed-command">npm run ship</span>
              </p>
              <p className="terminal-output">✓ release published</p>
            </div>
          </div>
          <div className="connection-beam">
            <i />
            <i />
            <i />
          </div>
          <div className="phone-device">
            <div className="phone-island" />
            <span className="phone-label">PORTAL · LIVE</span>
            <div className="device-terminal">
              <p>
                <span className="prompt">❯</span>{" "}
                <span className="typed-command">npm run ship</span>
              </p>
              <p className="terminal-output">✓ release published</p>
            </div>
          </div>
        </div>
      </section>

      <section className="no-rituals">
        <p className="section-kicker">03 / Zero ceremony</p>
        <h2>Just works.</h2>
        <p className="rituals-copy">
          No servers to configure. No sessions to babysit. No networking
          archaeology.
        </p>
        <div className="rituals" aria-label="Tools Portal does not require">
          {["ssh", "mosh", "screen", "tmux"].map((tool) => (
            <code key={tool}>{tool}</code>
          ))}
        </div>
      </section>

      <section className="autocomplete">
        <div className="completion-demo" aria-hidden="true">
          <div className="completion-input">
            <span>❯</span>
            <strong>git che</strong>
            <i />
          </div>
          <div className="completion-menu">
            <p className="selected">
              <strong>checkout</strong>
              <span>Switch branches or restore files</span>
            </p>
            <p>
              <strong>cherry-pick</strong>
              <span>Apply changes from a commit</span>
            </p>
            <p>
              <strong>check-ignore</strong>
              <span>Debug gitignore files</span>
            </p>
          </div>
        </div>
        <div className="autocomplete-copy">
          <p className="section-kicker">04 / Autocomplete, completed</p>
          <h2>Every CLI. Already fluent.</h2>
          <p>
            State-of-the-art completions without hunting for completion files
            or configuring Oh My Zsh. Fast on your Mac. Just as instant when
            you portal in from iPhone.
          </p>
        </div>
      </section>

      <section className="beauty">
        <div className="beauty-copy">
          <p className="section-kicker">05 / Native to the core</p>
          <h2>
            Powerful can
            <br />
            be beautiful.
          </h2>
          <p>
            Proper macOS blur, vibrancy, and translucency. The terminal finally
            belongs beside your best apps.
          </p>
        </div>
        <div className="beauty-shot">
          <img
            src="/portal/session-blocks.webp"
            alt="Portal’s translucent macOS interface over a colorful desktop"
          />
        </div>
      </section>

      <section className="craft">
        <div className="craft-copy">
          <p className="section-kicker">06 / Native by experience</p>
          <h2>
            Built by Mac
            <br />
            and iPhone builders.
          </h2>
          <p>
            Portal comes from the creator of Homebrew and longtime Mac and
            iPhone app builders. We built the details we expect when we sit
            down at a Mac or pick up a phone.
          </p>
        </div>
        <ul className="craft-details">
          <li>
            <span aria-hidden="true">⌘⇧T</span>
            <div>
              <h3>Closed tabs come back.</h3>
              <p>
                Close one with ⌘W. Reopen it with ⌘⇧T, even after relaunching
                Portal.
              </p>
            </div>
          </li>
          <li>
            <span aria-hidden="true">⌘F</span>
            <div>
              <h3>The Edit menu works.</h3>
              <p>
                Cut, copy, paste, select all, and history search use the Mac
                shortcuts already in your hands.
              </p>
            </div>
          </li>
          <li>
            <span aria-hidden="true">iOS</span>
            <div>
              <h3>The keyboard makes room.</h3>
              <p>
                Show or dismiss it without leaving your session. Completions
                appear as you type.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="linux">
        <span>07 / NEXT DESTINATION</span>
        <h2>Linux is through the next portal.</h2>
        <p>Coming soon.</p>
        <a className="primary-action" href="#top">
          Back to the portal
          <span aria-hidden="true">↑</span>
        </a>
      </section>

      <footer>
        <a className="brand" href="#top">
          <span aria-hidden="true">&gt;_</span>
          <strong>PORTAL</strong>
        </a>
        <p>
          <a href="/portal/security/">SECURITY</a>
        </p>
        <p>© 2026</p>
      </footer>
    </main>
  );
}
