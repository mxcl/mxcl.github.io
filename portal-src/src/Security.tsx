const paths = [
  {
    label: "Local session",
    route: "Portal → private Unix socket → session daemon",
    boundary: "Never leaves the Mac",
  },
  {
    label: "Mac ↔ iPhone",
    route: "Device → encrypted envelope → Portal relay → device",
    boundary: "Leaves the local network",
  },
  {
    label: "SSH host",
    route: "Portal → system SSH client → configured host",
    boundary: "Follows the host’s network route",
  },
];

export default function Security() {
  return (
    <main className="security-page">
      <header className="security-header">
        <a className="brand" href="/portal/" aria-label="Portal home">
          <span aria-hidden="true">&gt;_</span>
          <strong>PORTAL</strong>
        </a>
        <a href="/portal/">BACK TO PORTAL</a>
      </header>

      <article className="security-article">
        <div className="security-hero">
          <p className="section-kicker">Security model / July 2026</p>
          <h1>What leaves your Mac.</h1>
          <p className="security-lede">
            Portal keeps local terminal sessions local. Remote access is
            opt-in, outbound-only, and end-to-end encrypted before terminal
            data reaches the relay.
          </p>
        </div>

        <section className="network-paths" aria-labelledby="network-paths-title">
          <div>
            <p className="section-kicker">01 / Network boundaries</p>
            <h2 id="network-paths-title">Three paths. Three boundaries.</h2>
          </div>
          <ol>
            {paths.map((path) => (
              <li key={path.label}>
                <strong>{path.label}</strong>
                <span>{path.route}</span>
                <em>{path.boundary}</em>
              </li>
            ))}
          </ol>
          <p>
            A normal local session uses a per-user Unix domain socket with
            owner-only permissions. Portal opens no TCP port and advertises no
            terminal service on your LAN.
          </p>
          <p>
            When remote access is enabled, the Mac opens an outbound secure
            WebSocket to Portal’s relay and uploads an encrypted session
            catalog over HTTPS. The iPhone uses the same relay. This happens
            even when both devices are on the same Wi-Fi: Portal does not
            attempt local peer-to-peer routing.
          </p>
          <p>
            Separately, a configured SSH session uses macOS&apos;s system SSH
            client and its existing host-key and key-agent trust. That traffic
            reaches the host directly; it is not sent through Portal’s relay.
          </p>
        </section>

        <section aria-labelledby="encryption-title">
          <p className="section-kicker">02 / Keys and encryption</p>
          <h2 id="encryption-title">The relay delivers ciphertext.</h2>
          <p>
            Portal creates a random 256-bit account root key on-device and
            stores it as a synchronizable iCloud Keychain item. Devices signed
            into the same Apple account use that shared key to derive separate
            keys and opaque identifiers for relay routing, relay
            authorization, live terminal traffic, and the session catalog.
          </p>
          <p>
            Terminal messages and catalog snapshots are sealed with
            AES-256-GCM and purpose-bound authenticated data before upload.
            TLS protects the connection in transit as an additional layer, but
            the relay never receives the encryption key or plaintext terminal
            contents.
          </p>
        </section>

        <section aria-labelledby="relay-title">
          <p className="section-kicker">03 / Relay knowledge</p>
          <h2 id="relay-title">What the service can—and cannot—see.</h2>
          <div className="security-columns">
            <div>
              <h3>The relay can see</h3>
              <ul>
                <li>Connection addresses, timing, and message sizes</li>
                <li>An opaque room identifier and the number of live peers</li>
                <li>An encrypted session-catalog blob</li>
              </ul>
            </div>
            <div>
              <h3>The relay cannot see</h3>
              <ul>
                <li>Commands, keystrokes, output, paths, or session names</li>
                <li>The account root key or purpose-derived encryption keys</li>
                <li>Data needed to forge a new authenticated command</li>
              </ul>
            </div>
          </div>
          <p>
            The relay has two storage classes, and neither contains plaintext:
          </p>
          <dl className="relay-storage">
            <div>
              <dt>Temporary / memory only</dt>
              <dd>
                Each encrypted terminal frame exists only long enough to be
                broadcast to the other connected peers. Peer identifiers exist
                while their sockets are connected; opaque room and
                authorization state may remain until the relay process restarts.
              </dd>
            </div>
            <div>
              <dt>Durable / stored on disk</dt>
              <dd>
                One encrypted session-catalog blob per opaque room. Each update
                atomically replaces the previous blob—there is no catalog
                history. A blob inactive for 30 days is deleted on its next
                read; production billing cleanup may delete it sooner after a
                subscription expires.
              </dd>
            </div>
            <div>
              <dt>Never stored by the relay</dt>
              <dd>
                Plaintext commands, keystrokes, output, paths, session names,
                the account root key, and derived encryption keys. The relay
                implementation does not persist or log live terminal frames.
              </dd>
            </div>
          </dl>
          <p>
            Portal defines no permanent relay record: the catalog is retained
            only for device discovery and is subject to deletion. Hosting and
            network providers may keep ordinary connection metadata under
            their own operational policies; that metadata is outside Portal’s
            end-to-end encryption boundary.
          </p>
        </section>

        <section aria-labelledby="control-title">
          <p className="section-kicker">04 / Control and failure modes</p>
          <h2 id="control-title">Encryption is not availability.</h2>
          <p>
            A compromised relay can delay, drop, duplicate, reorder, or replay
            ciphertext and can deny service. Sequence numbers are inside the
            authenticated message; clients reject duplicate or stale terminal
            events and reconnect for a fresh canonical snapshot after a gap.
          </p>
          <p>
            The Mac initiates every relay connection, so the service cannot
            open an inbound connection to it. Phone-role clients may send
            terminal input but cannot change PTY geometry. On iPhone, attaching
            to a session requires device-owner authentication.
          </p>
        </section>

        <section className="security-limits" aria-labelledby="limits-title">
          <p className="section-kicker">05 / Trust and limitations</p>
          <h2 id="limits-title">The honest boundary.</h2>
          <ul>
            <li>
              A device that can read the synchronized root key can control Macs
              on which remote access is enabled. Apple-account recovery and
              device security are therefore part of Portal’s trust boundary.
            </li>
            <li>
              The current model has no per-device revocation, emergency
              account-wide kill switch, or forward secrecy after a later root
              key compromise. End affected sessions from a trusted Mac if a
              device is lost.
            </li>
            <li>
              Traffic analysis and denial of service are not prevented.
              Subscription checks authorize access but are not a cryptographic
              trust root.
            </li>
            <li>
              Commands and completion generators run as the signed-in user on
              the host Mac. Portal encrypts their transport; it does not
              sandbox them or prevent those processes from using the network.
            </li>
          </ul>
        </section>

        <aside>
          <strong>In one sentence</strong>
          <p>
            Nothing leaves the Mac for local sessions; cross-device terminal
            data leaves only after end-to-end encryption, while metadata and
            availability remain visible to—or controllable by—the relay.
          </p>
        </aside>
      </article>

      <footer>
        <a className="brand" href="/portal/">
          <span aria-hidden="true">&gt;_</span>
          <strong>PORTAL</strong>
        </a>
        <p>SECURITY MODEL</p>
        <p>© 2026</p>
      </footer>
    </main>
  );
}
