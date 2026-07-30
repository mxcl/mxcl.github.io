# Max Howell build history: speed, taste, and robustness

Research date: 2026-07-30

Purpose: source the `/build/` offer with defensible evidence that Max Howell has
repeatedly built software with unusually high product taste, platform fluency,
and engineering durability, and that he now uses agents as implementation
leverage without outsourcing judgment.

Source policy: primary sources only. This dossier uses official project sites,
official project repositories and APIs, first-person interview transcripts,
company announcements, Apple/App Store material, and the official Webby Awards
record. Point-in-time counts are labelled with the research date.

## Executive finding

The strongest version of this offer is not “AI makes apps in five days.” It is:

> Agents make the five-day clock possible. Max supplies the scope, architecture,
> taste, edge-case discipline, and final accountability that the model cannot.

The evidence supports all parts of that distinction:

- **Scale:** Homebrew is officially described as installed on “tens of millions
  of devices.” Its public analytics logged more than 768 million command events
  in the most recent 365-day window. ([Homebrew Turns 15](https://mikemcquaid.com/interviews/homebrew-turns-15/),
  [official command analytics](https://formulae.brew.sh/api/analytics/brew-command-run/365d.json))
- **Durable product judgment:** Homebrew’s later project leader credits Max’s
  Taps design with turning Homebrew from a project into an ecosystem and says
  its continuing bias against unnecessary complexity came from Max’s original
  design. ([Homebrew Turns 15, 23:24–27:28](https://mikemcquaid.com/interviews/homebrew-turns-15/))
- **Platform taste:** Max says that feeling native to the platform has “always
  been a priority” and values Mac software’s high quality bar and
  detail-oriented developers. At Apple, “surprise and delight” was hammered
  into the work, and he agrees with it. ([Uses This](https://usesthis.com/interviews/max.howell/),
  [Changelog #232](https://changelog.com/podcast/232))
- **Apple depth:** Max worked at Apple on Swift Package Manager; the official
  repository attributes 422 commits to `mxcl`. PromiseKit spans Apple’s
  platform family and has a substantial test suite, 83 GitHub releases, more
  than 14,000 stars, and continued activity through 2026. ([Swift Package
  Manager commits](https://github.com/swiftlang/swift-package-manager/commits/main/?author=mxcl),
  [PromiseKit](https://github.com/mxcl/PromiseKit))
- **Cross-platform delivery:** Max says he built TweetDeck’s Android app and
  rebuilt its iPhone app; TweetDeck’s official announcement hired him for
  “mobile. And lots of it” after he led Last.fm’s desktop and mobile clients.
  Android TweetDeck became a 2011 Webby nominee. ([Changelog #232](https://changelog.com/podcast/232),
  [TweetDeck announcement](https://blog.x.com/en_us/a/2010/tweetdeck-to-the-max),
  [Webby nominee announcement](https://www.webbyawards.com/press/press-releases/15th-annual-webby-awards-nominees-unveiled/))
- **Actual agent-assisted execution:** Package Manager Manager’s public Git
  history contains 27 focused commits in its first five days. Twelve are
  attributed to Max and fifteen to `Codex (GPT 5)`, covering testability,
  concurrency, progressive loading, stable interface state, native Mac chrome,
  resizing, and two additional package ecosystems. ([PMM history](https://github.com/mxcl/package-manager-manager/commits/main/?since=2026-06-26&until=2026-06-30))
- **Current robustness:** Automic Vault’s public CI runs the full Rust test suite
  with all targets and features locked, plus its Swift tests. Its product deals
  explicitly with signed launchers, Keychain-backed secrets, execution policy,
  approvals, and local audit trails. ([CI workflow](https://github.com/automic-vault/automic-vault/blob/main/.github/workflows/ci.yml),
  [security model](https://www.automicvault.com/security/))

The public record therefore supports a page whose promise is fast, bounded
delivery with experienced direction. It does not support “press a button and AI
does everything,” nor should it.

## Best page-ready claims

### Strongest hero proof

> Five days. A real app. Built at agent speed, directed by the person who
> designed software now running on tens of millions of devices.

Sources: Homebrew’s project leader says Homebrew was in use on tens of millions
of devices at its fifteenth anniversary; the interview identifies Max as the
original creator. ([Homebrew Turns 15](https://mikemcquaid.com/interviews/homebrew-turns-15/))

### Strongest robustness proof

> Fast does not have to mean flimsy. Homebrew’s original design survived fifteen
> years, multiple processor transitions, a worldwide contributor community, and
> hundreds of millions of operations a year.

Qualification: the duration, device scale, and annual event count are directly
supported. Current Homebrew reliability belongs to today’s maintainer community,
not solely to Max. The claim should credit Max’s original design without taking
credit for every present safeguard. ([Homebrew Turns 15](https://mikemcquaid.com/interviews/homebrew-turns-15/),
  [Homebrew analytics](https://formulae.brew.sh/analytics/))

### Strongest “better than AI alone” formulation

> AI can produce software quickly. I use it to produce software quickly without
> surrendering judgment.

Or:

> The agents supply implementation bandwidth. I decide what deserves to exist,
> how it should feel, where it will break, and whether it is ready to put my name
> on.

This is a positioning statement, not a measured benchmark, but the division of
labor is visible in Package Manager Manager’s public history. Max’s first commits
shape the product and make its scanner testable; subsequent Codex-authored work
implements concurrency, interface stability, platform details, and package
coverage in small reviewable commits. ([PMM commits](https://github.com/mxcl/package-manager-manager/commits/main/?since=2026-06-26&until=2026-06-30))

### Strongest taste proof

> Native is not a visual style pasted on at the end. Max has spent two decades
> building software around the conventions, constraints, and tiny affordances of
> the platform it lives on.

Evidence:

- Max said in 2019 that feeling like an app of the platform “has always been a
  priority” and praised Mac software’s quality bar and detail-oriented builders.
  ([Uses This](https://usesthis.com/interviews/max.howell/))
- The official TweetDeck announcement described Max as design-skilled, attentive
  to detail, and possessing a good eye for aesthetics. It hired him specifically
  for mobile work after his Last.fm client leadership. ([TweetDeck to the Max](https://blog.x.com/en_us/a/2010/tweetdeck-to-the-max))
- Max worked on Apple’s Swift Package Manager and says Apple hammered “surprise
  and delight” into its teams. ([Changelog #232](https://changelog.com/podcast/232))

### Strongest scope language

> A sharply defined first version, not five days of vague progress.

> At the end of day five you have software you can use, test, show, and decide
> what to do with next.

The page should avoid both “prototype” and “any app.” “Prototype” undersells the
attention to real behavior; “any app” turns a bounded service into an impossible
guarantee.

## Case study 1: Homebrew

### Confirmed role

Max created Homebrew and wrote its original code. Both the current Homebrew
anniversary retrospective and Max’s first-person interviews identify him as the
creator. ([Homebrew Turns 15](https://mikemcquaid.com/interviews/homebrew-turns-15/),
  [Changelog #232](https://changelog.com/podcast/232))

### Defensible scale

Mike McQuaid, Homebrew Project Leader, wrote in May 2024 that Homebrew was in use
on “tens of millions of devices.” This is the best public device-scale claim.
([Homebrew Turns 15](https://mikemcquaid.com/interviews/homebrew-turns-15/))

For the 365-day period ending 2026-07-30, Homebrew’s official aggregate analytics
reported:

| Official event stream | Count |
| --- | ---: |
| Homebrew command events | 768,377,968 |
| `install` command events | 78,970,789 |
| Formula-install events | 278,423,879 |
| Cask-install events | 24,623,049 |

Sources: [command events](https://formulae.brew.sh/api/analytics/brew-command-run/365d.json),
[install events](https://formulae.brew.sh/api/analytics/install/365d.json),
[formula and cask analytics index](https://formulae.brew.sh/analytics/).

These are events, not unique users or people. Do not convert them into a user
count.

For historical context, Homebrew’s official 2019 Mozilla grant nomination said
it had approximately 1.24 million macOS instances active in the previous month
and recorded roughly 166 million installation events in the preceding year.
([Homebrew MOSS nomination](https://docs.brew.sh/governance/2019-moss-track-iii-grant-nomination))

### What Max intentionally designed

In the 2016 Changelog interview, Max explains that he designed Homebrew from the
start to make contribution simple:

- Commands let people inspect, edit, and contribute formulae.
- Git itself was the update mechanism.
- Formulae were deliberately readable so a user could understand one and make
  another.
- The design anticipated that Max would not write every formula himself.

This is not only open-source philosophy. It is robust product architecture: the
system was designed around understandable artifacts and distributed ownership.
([Changelog #232, around 18:00–19:00](https://changelog.com/podcast/232))

The 2024 retrospective adds two strong forms of long-term validation:

- Mike McQuaid credits Max’s Taps design with turning Homebrew “from just a
  project” into an ecosystem because organizations and projects could own their
  package sources. ([23:24–24:33](https://mikemcquaid.com/interviews/homebrew-turns-15/))
- Mike says Homebrew’s effort to avoid unnecessary complexity came from Max’s
  initial design. Max explains the principle directly: complexity can destroy
  productivity and the ability to iterate. ([25:32–27:28](https://mikemcquaid.com/interviews/homebrew-turns-15/))

That supports this concise claim:

> Homebrew did not survive fifteen years by accident. Its original architecture
> was simple enough to understand, extend, and hand to a community.

### What belongs to the current community

Current Homebrew engineering is a useful proof of the load and operating
pressure the original system grew to handle, but not of work Max personally does
today.

The official maintainer guide requires pull requests to pass automated checks
which can include macOS and Linux unit/integration tests, typing, style, audits,
vendored dependency validation, documentation builds, package builds, and
coverage. ([Homebrew/brew Maintainer Guide](https://docs.brew.sh/Homebrew-brew-Maintainer-Guide))

The current supply-chain model includes sandboxed builds and tests, ephemeral CI
runners, checksummed artifacts, and sanitised environments. ([Homebrew Supply
Chain Security](https://docs.brew.sh/Supply-Chain-Security))

Use these to describe what Homebrew has become. Do not imply Max personally
authored every current test, workflow, or security control.

## Case study 2: Package Manager Manager

### Confirmed role and product

The public repository is owned by `mxcl`, and the product site links directly to
that source. The app is a native macOS inventory and management surface for
Homebrew, mise, Skills, npm/npx, uv/uvx, Cargo, and rustup, including other Macs
reachable over SSH. ([official product site](https://mxcl.dev/package-manager-manager/),
  [repository](https://github.com/mxcl/package-manager-manager))

It exposes the kind of details that distinguish a production-minded tool from a
mockup:

- installed and latest versions;
- install, binary, configuration, source, documentation, and homepage paths;
- native update and uninstall actions;
- remote management through users’ existing SSH configuration and keys;
- release notes beside the installed version;
- explicit caveats when actions are not yet safe and obvious.

([official product site](https://mxcl.dev/package-manager-manager/))

### Public proof of the five-day agent workflow

The repository’s first commit is dated 2026-06-26. In the first five calendar
days, through 2026-06-30, its public history contains 27 commits:

- 12 attributed to Max Howell;
- 15 attributed to `Codex (GPT 5)` with `codex@openai.com` and signed-off-by
  trailers.

The work is unusually useful as a public demonstration of the offer because the
commit subjects show both speed and taste:

1. Max establishes the app baseline and immediately makes the package scanner
   testable.
2. Max iterates on sidebar categories, hit targets, loading behavior, and the
   product’s information architecture.
3. Codex then loads cached data before refresh, streams manager batches,
   preserves main-thread responsiveness, keeps rows stable while loading, moves
   search into the sidebar, matches macOS Tahoe chrome, extends content into the
   title bar, positions traffic lights, hardens resize behavior, and adds uv/uvx
   scanning.

([five-day commit window](https://github.com/mxcl/package-manager-manager/commits/main/?since=2026-06-26&until=2026-06-30),
  [first commit](https://github.com/mxcl/package-manager-manager/commit/11bee678),
  [first Codex-attributed commit](https://github.com/mxcl/package-manager-manager/commit/0bd882167d4a39a5c50a7235dc840a48abedac54))

This is the most persuasive evidence for the service’s actual method:

> The agent does not replace Max’s product judgment. It turns that judgment into
> reviewed implementation at much higher bandwidth.

### Release and test depth

The first public DMG release was published on 2026-07-06, ten calendar days after
the first commit. The repository had produced 20 release artifacts through
version 0.16.0 by 2026-07-28. ([GitHub releases](https://github.com/mxcl/package-manager-manager/releases))

As inspected on 2026-07-30, the public repository had:

- 547 commits;
- 24 Swift test files;
- roughly 15,000 lines across tracked Swift source and tests;
- test coverage of view models, scanners, persistence, command execution,
  installing, updating, uninstalling, remote SSH behavior, update presentation,
  image behavior, feeds, and menu-bar behavior.

These counts are point-in-time observations from the public Git tree. The stable
claim is qualitative: PMM has dedicated test targets across core logic, the Mac
app, and the menu-bar helper. ([Package.swift](https://github.com/mxcl/package-manager-manager/blob/main/Package.swift),
  [Tests](https://github.com/mxcl/package-manager-manager/tree/main/Tests))

### What this case study does and does not prove

It proves an actual Max-plus-agent development pattern and a dense first five
days of focused work. It does **not** prove that the entire released product was
completed and shipped in five days; the first public release was ten calendar
days after the initial commit. Present it as “what five focused days can create,”
not as a false release-date claim.

## Case study 3: PromiseKit

### Confirmed role and adoption

PromiseKit is Max’s Swift and Objective-C promises library. The repository is
owned by `mxcl`; its copyright and documentation name Max. ([PromiseKit repository](https://github.com/mxcl/PromiseKit),
  [PromiseKit documentation](https://mxcl.dev/PromiseKit/reference/v7/))

Point-in-time GitHub data on 2026-07-30:

| Signal | Count/status |
| --- | ---: |
| Stars | 14,231 |
| Forks | 1,456 |
| Commits on `master` | 1,552 |
| Contributors returned by GitHub API | 169 |
| GitHub releases | 83 |
| Latest release | 8.2.0, published 2025-01-16 |
| Latest repository activity | 2026-06-03 |

Sources: [GitHub repository API](https://api.github.com/repos/mxcl/PromiseKit),
[releases](https://github.com/mxcl/PromiseKit/releases), and [contributors](https://github.com/mxcl/PromiseKit/graphs/contributors).

Counts move. Prefer “more than 14,000 stars” and “more than 80 releases” in page
copy if exact figures are needed at all.

### Robustness and platform breadth

The repository contains distinct suites for Promise core behavior,
Objective-C/Swift bridging, Objective-C core behavior, deprecations, JavaScript
Promises/A+ compatibility, concurrency, regressions, stress behavior, resolver
behavior, race behavior, and “Zalgo” scheduling edge cases. It has dedicated CI,
podspec CI, continuous delivery, and publishing workflows. ([Tests](https://github.com/mxcl/PromiseKit/tree/master/Tests),
  [workflows](https://github.com/mxcl/PromiseKit/tree/master/.github/workflows))

PromiseKit’s own documentation describes specializations across iOS, macOS,
tvOS, and watchOS, and its historical installation matrix covers Swift Package
Manager, CocoaPods, and Carthage as well as Objective-C compatibility.
([PromiseKit v7 docs](https://mxcl.dev/PromiseKit/reference/v7/),
  [repository README](https://github.com/mxcl/PromiseKit))

Safe page-ready formulation:

> PromiseKit carried one asynchronous abstraction across Apple’s platform
> family, two languages, multiple package managers, years of breaking Swift and
> Xcode releases, and a test suite built for races and awkward edges.

PromiseKit’s docs call it a top-100 CocoaPod used in popular apps. That is a
first-party project claim, not an independently measured current ranking. Treat
it as supporting color rather than the central proof.

## Case study 4: Automic Vault

### Confirmed role and product

Automic Vault’s official About page says it is built and maintained by Max
Howell. Its public source is under the `automic-vault` organization, and the
product is Apache-2.0 licensed. ([About](https://www.automicvault.com/about/),
  [source](https://github.com/automic-vault/automic-vault))

This is a current, native macOS security product combining a Rust core, Swift UI
and menu helper, shell integration, Keychain-backed secret handling, signed
launcher identification, policy enforcement, approval gates, and a local audit
trail. ([official site](https://www.automicvault.com/),
  [security model](https://www.automicvault.com/security/))

Its product-level robustness is visible in the jobs it takes responsibility for:

- raw secrets are kept out of agent-readable files and model context;
- policy distinguishes the tool, signed launcher, command, working directory,
  and requested key;
- every secret use records the launcher, requested key, working directory,
  decision, and approval path;
- dangerous actions can remain gated even when safe reads are allowed;
- controls sit beneath individual agent harnesses.

([Automic Vault](https://www.automicvault.com/))

### Test and release discipline

The public CI workflow runs on pushes and pull requests and requires:

- `cargo fmt --all -- --check`;
- `cargo test --all-targets --all-features --locked`;
- Swift package tests with automatic dependency resolution disabled.

([CI workflow](https://github.com/automic-vault/automic-vault/blob/main/.github/workflows/ci.yml))

The public tree includes focused tests for doctor, harden, inject, scan,
deployment, release workflows, blessed scripts, GraphQL requests, and dashboard
snapshots. ([repository test tree](https://github.com/automic-vault/automic-vault/tree/main/tests),
  [Swift tests](https://github.com/automic-vault/automic-vault/tree/main/src/menu-helper/Tests))

This is strong present-day evidence that “agent speed” does not mean omitting
security-sensitive tests.

## Case study 5: Canopy

### Confirmed association

Max’s own historical timeline lists Canopy as his 2018 app. The product site’s
terms, privacy policy, support address, and ownership language identify Max as
the operator, but public material reviewed here does not state that he was its
sole engineer or designer. Describe it as “Max’s Canopy app,” not “single-handedly
built by Max,” unless he confirms that detail. ([Max’s project timeline](https://mxcl.dev/mxcl/),
  [Canopy](https://mxcl.dev/canopy/))

### Product detail and robustness

Canopy shipped a coherent GitHub notification system for macOS and iOS. The
product site documents:

- real-time pull-request and issue notifications;
- prompting users to open a pull request after detecting a pushed branch;
- per-repository notification configuration;
- subscriptions shared between macOS and iOS;
- private-repository access boundaries;
- an option for companies to run the server-side binary themselves;
- precise data-retention disclosures and deletion support.

([Canopy product and policy page](https://mxcl.dev/canopy/))

This is useful proof that detail extends beyond screenshots: product behavior,
private-data boundaries, deployment needs, and the unhappy path were written
down.

The old App Store URL currently returns no lookup record, so avoid implying that
Canopy remains for sale or supported today.

## Case study 6: Supermassive Book Hole

### Confirmed association, not sole authorship

Max’s current projects page includes Supermassive Book Hole among active
projects, and the service has public profiles for `max-howell` and `mxcl`.
However, the public product site does not identify an individual author. The
defensible wording is “a current project from Max’s public portfolio” until Max
confirms his exact role. ([Max’s projects](https://mxcl.dev/projects/),
  [Supermassive Book Hole](https://supermassivebookhole.com/))

### Product detail

The official machine-readable product page documents:

- shelves mixing books, movies, games, albums, singles, and board games;
- personal notes;
- public profiles and friend activity;
- a BYOClaw gateway for owner-authorized agents;
- dedicated Markdown alternates for human and agent access.

([official Markdown product page](https://supermassivebookhole.com/index.md))

This can demonstrate consumer-product warmth and a thoughtful human-plus-agent
surface, but the page should not use it as sole-authorship proof without Max’s
confirmation.

## Apple ecosystem record

### Swift Package Manager at Apple

Max worked at Apple for a year on Swift Package Manager. He says he brought
experience from Homebrew, CocoaPods, and Carthage and argued for package
manifests written in Swift. He is explicit that he did not decide to open-source
the package manager. ([Changelog #232, 52:08 onward](https://changelog.com/podcast/232))

The official Swift Package Manager repository’s API attributes 422 commits to
the `mxcl` GitHub identity. This is a much stronger engineering-role signal than
a job title alone. ([official commit history](https://github.com/swiftlang/swift-package-manager/commits/main/?author=mxcl))

Safe claim:

> Max worked inside Apple on Swift Package Manager and contributed hundreds of
> commits to the package manager that ships with Swift.

Do not claim he created Swift Package Manager or made its open-source decision.

### PromiseKit and the surrounding Swift toolchain

In addition to PromiseKit, Max’s public Swift projects include:

- `swift-sh`, which imports third-party Swift dependencies directly into scripts
  and supports editing, CI, caching, and package ejection;
- Path.swift, whose official description is “Delightful, robust, cross-platform
  and chainable file-pathing functions”;
- Chalk, AppUpdater, Cake, Version, and LegibleError.

([swift-sh](https://github.com/mxcl/swift-sh),
  [Path.swift](https://github.com/mxcl/Path.swift),
  [Max’s public repositories](https://github.com/mxcl?tab=repositories))

These projects support Apple-platform depth and a long record of attending to
developer experience. They should be supporting texture, not a wall of logos.

## Consumer and cross-platform record

### Last.fm

TweetDeck’s official 2010 hiring announcement says Max came from Last.fm, where
he led development of its desktop and mobile clients. Max’s 2016 interview says
the client team shipped across Linux, Mac, Windows, Android, iPhone, and briefly
BlackBerry. ([TweetDeck announcement](https://blog.x.com/en_us/a/2010/tweetdeck-to-the-max),
  [Changelog #232](https://changelog.com/podcast/232))

Last.fm’s own blog shows Max publishing Boffin in 2009, a product experiment that
combined Last.fm’s music knowledge with a user’s local library. The post and its
comments show him discussing scrobbling, local playback, packaging, support,
and future integration into the official desktop client. ([Last.fm Boffin announcement](https://blog.last.fm/2009/03/11/introducing-boffin-lastfms-music-knowledge-meets-your-local-mp3-collection))

### TweetDeck

Max states directly that he built TweetDeck’s Android app and redid its iPhone
app before Twitter acquired the company. ([Changelog #232](https://changelog.com/podcast/232))

TweetDeck’s official hiring post says Max would work on mobile and describes him
as design-skilled, attentive to detail, and aesthetically strong. ([TweetDeck to
the Max](https://blog.x.com/en_us/a/2010/tweetdeck-to-the-max))

The official Webby Awards nominee announcement lists Android TweetDeck among the
five nominees for Best Mobile Social on handheld devices in 2011. It was a
**nominee**, not a winner. ([15th Annual Webby Awards nominees](https://www.webbyawards.com/press/press-releases/15th-annual-webby-awards-nominees-unveiled/))

This makes “almost won a Webby” conversationally understandable, but the precise
claim is better:

> The Android TweetDeck app Max built was nominated for a 2011 Webby.

### Candor / MyHealthily

Candor USA’s company-supplied 2019 announcement says Max joined as Chief Product
Officer to lead the direction and further development of its digital enterprise,
which included an iOS health-coverage product. Max said the goal was the creation
of “delightful digital products” that clarified the cost of care and helped
multiple sides of the insurance market. ([Candor announcement](https://www.prnewswire.com/news-releases/candor-usa-welcomes-max-howell-as-chief-product-officer-300818054.html))

This supports product leadership and a first-person commitment to delight. It
does not establish that Max personally wrote or designed the entire Candor app.

### Other historical app icons

Max’s old personal site displays icons for MyHealthily, Candor, Poncho, MixMsg,
Apple, #Homescreen, Popular Pays, Jamernot, AllSnow, Zite, TweetDeck, Last.fm,
and Amarok under “Career.” ([historical personal page](https://mxcl.dev/mxcl/))

An icon wall establishes career association, not role or authorship. Do not use
those companies as client logos with implied endorsement unless Max supplies the
exact role and permission.

## First-person principles worth using

### Start with the desired experience

Max says he still begins projects with the README rather than code, writing the
desired API and examples first and building implementation around that. For
Homebrew, he asked how he wanted it to feel before writing the code.
([Homebrew Turns 15, 19:50–20:54](https://mikemcquaid.com/interviews/homebrew-turns-15/))

Page-ready translation:

> The first day is not an agent free-for-all. We define what the product must do
> and how it should feel, then build toward that contract.

### Avoid complexity that slows iteration

Max says complexity can destroy productivity and the ability to iterate. He
designed Homebrew around familiar Unix tools and introduced new machinery only
where necessary. Mike McQuaid says that principle came from Max’s original
design and influenced his own work inside and outside Homebrew.
([Homebrew Turns 15, 25:32–27:28](https://mikemcquaid.com/interviews/homebrew-turns-15/))

Page-ready translation:

> Five days forces clean choices. The app gets the smallest architecture that
> can carry the real product, not a miniature enterprise stack.

### Platform fidelity is a priority

Max says feeling like the platform has always been a priority and values the
high bar set by detail-oriented Mac developers. ([Uses This](https://usesthis.com/interviews/max.howell/))

Page-ready translation:

> On Apple platforms, the result should feel like it belongs there: typography,
> navigation, keyboard behavior, focus, motion, system materials, failure states,
> and all.

### Delight is not separate from engineering

Max says Apple “hammer[ed] into you” the importance of surprise and delight and
that he agrees with it. His Candor announcement likewise frames the work as
creating delightful digital products around a complex, consequential problem.
([Changelog #232](https://changelog.com/podcast/232),
  [Candor announcement](https://www.prnewswire.com/news-releases/candor-usa-welcomes-max-howell-as-chief-product-officer-300818054.html))

### Robustness includes boring states

The public project evidence shows this principle more strongly than a direct
quote:

- PMM commits address main-thread work, progressive loading, stable rows,
  caching, resize behavior, testability, and unsupported-action caveats.
- PromiseKit tests race, stress, scheduling, regression, and language-bridging
  behavior.
- Automic Vault tests release workflows, deployment, hardening, injection, and
  scanning while using locked dependency resolution in CI.
- Canopy documents privacy, private-repository behavior, missed-notification
  caveats, self-hosting, and deletion.

This supports:

> Loading, empty, failed, slow, denied, offline, and interrupted are product
> states too.

## Timeline

### 2004–2006: KDE, Filelight, and Amarok

- Max’s first substantial open-source work included Filelight and Amarok.
- He describes Filelight as a concentric disk-usage visualization and Amarok as
  a popular Linux music player that surfaced contextual artist information such
  as Wikipedia while listening.
- Role: Filelight creator; Amarok team contributor, according to Max’s
  first-person account. ([Changelog #232](https://changelog.com/podcast/232))

### 2007–2009: Last.fm client products

- TweetDeck’s official announcement says Max led Last.fm’s desktop and mobile
  client development.
- Last.fm’s official blog records Max releasing Boffin in March 2009.
  ([TweetDeck announcement](https://blog.x.com/en_us/a/2010/tweetdeck-to-the-max),
  [Boffin](https://blog.last.fm/2009/03/11/introducing-boffin-lastfms-music-knowledge-meets-your-local-mp3-collection))

### 2009: Homebrew

- Max creates Homebrew, starting with the README and desired user experience.
- It grows into software now installed on tens of millions of devices.
  ([Homebrew Turns 15](https://mikemcquaid.com/interviews/homebrew-turns-15/))

### 2010–2011: TweetDeck mobile

- TweetDeck hires Max for mobile work.
- Max builds the Android app and rebuilds the iPhone app.
- Android TweetDeck becomes a 2011 Webby nominee for mobile social.
  ([TweetDeck announcement](https://blog.x.com/en_us/a/2010/tweetdeck-to-the-max),
  [Changelog #232](https://changelog.com/podcast/232),
  [Webby](https://www.webbyawards.com/press/press-releases/15th-annual-webby-awards-nominees-unveiled/))

### 2014 onward: PromiseKit

- PromiseKit begins in April 2014.
- It grows across Swift and Objective-C, multiple Apple platforms, multiple
  package managers, and more than 80 releases.
  ([GitHub](https://github.com/mxcl/PromiseKit))

### 2014–2015: Apple and Swift Package Manager

- Max works at Apple on Swift Package Manager.
- The official repository attributes hundreds of commits to his GitHub identity.
  ([Changelog #232](https://changelog.com/podcast/232),
  [SwiftPM commits](https://github.com/swiftlang/swift-package-manager/commits/main/?author=mxcl))

### 2016: MixMsg and independent Apple work

- Max discusses shipping MixMsg, an iMessage collaborative mixtape app, shortly
  after leaving Apple. He describes it as something the team “whipped up” when
  messaging apps launched.
- Role: Max says the team had a designer and his own role is partly unclear in
  the transcript; do not imply sole authorship.
  ([Changelog #232](https://changelog.com/podcast/232))

### 2018: Canopy

- Max’s public timeline lists Canopy, a macOS/iOS GitHub notification product.
- The official site documents workflow automation, private-data handling,
  server behavior, support, and edge cases.
  ([Max’s timeline](https://mxcl.dev/mxcl/), [Canopy](https://mxcl.dev/canopy/))

### 2019: Swift developer-experience tools and Candor

- Public Swift tools include Path.swift, swift-sh, Chalk, Cake, AppUpdater,
  Version, and LegibleError.
- Candor announces Max as Chief Product Officer leading its digital product
  direction and further development.
  ([GitHub](https://github.com/mxcl?tab=repositories),
  [Candor](https://www.prnewswire.com/news-releases/candor-usa-welcomes-max-howell-as-chief-product-officer-300818054.html))

### 2026: agent-assisted native and web products

- Package Manager Manager’s public history demonstrates Max and Codex building
  in a shared, granular commit stream.
- Automic Vault combines a native macOS control surface with a Rust security core
  and explicit test/release discipline.
- Supermassive Book Hole combines consumer media shelves, social taste, and an
  owner-authorized agent interface.
  ([PMM](https://github.com/mxcl/package-manager-manager),
  [Automic Vault](https://github.com/automic-vault/automic-vault),
  [Supermassive Book Hole](https://supermassivebookhole.com/index.md))

## Recommended page narrative

### 1. Lead with the outcome, not the mechanism

The visitor wants a great app quickly. “Agents” explains the speed but is not the
thing being purchased.

Recommended hierarchy:

1. A sharply defined, real app in five days.
2. Taste and robustness are included, not postponed.
3. Max directs experienced product and engineering judgment.
4. Agents provide the implementation bandwidth.

### 2. Make Homebrew proof of judgment under pressure

Homebrew should not appear merely as a famous logo. Tie it to the service:

- tens of millions of devices;
- hundreds of millions of current annual events;
- architecture that remained understandable and extensible;
- a product designed for contribution and handoff;
- complexity deliberately suppressed to preserve iteration.

### 3. Make PMM proof of the actual five-day method

This should be the contemporary centerpiece because its public history shows
exactly what the offer claims: Max and an agent working in tight, reviewable,
high-attention increments across architecture, testing, concurrency, native
chrome, loading behavior, resizing, and functionality.

Suggested framing:

> Package Manager Manager’s first five days produced 27 focused commits. The
> history shows the work changing hands between Max and Codex, but never losing
> the product’s point of view.

Then show representative commit subjects rather than a generic “AI-powered”
badge.

### 4. Use PromiseKit and Automic Vault as robustness receipts

- PromiseKit: races, stress, scheduling, language bridging, compatibility over
  many Apple toolchain changes.
- Automic Vault: a security-sensitive product whose CI locks dependencies and
  tests the full Rust and Swift surfaces.

### 5. Use Canopy and Supermassive Book Hole as evidence of range

- Canopy: workflow fit, platform integration, privacy and operational detail.
- Supermassive Book Hole: warmth, consumer taste, social interaction, and a
  human-owned agent interface.

### 6. Keep TweetDeck off the landing page if desired

It is still excellent supporting evidence for Android and cross-platform range,
and the official Webby nomination makes the claim precise. It need not crowd the
main page if the preferred positioning is Apple-first.

## Claims to avoid or qualify

### “Homebrew works for 50 million people”

No primary source reviewed supports the exact figure or the unit “people.” The
best primary claim is “in use on tens of millions of devices.” Current analytics
support hundreds of millions of yearly events, not unique users.

Use:

> Homebrew runs on tens of millions of devices and handles hundreds of millions
> of operations a year.

### “I made current Homebrew this reliable”

Max made the original system and architecture. Today’s reliability is maintained
by a long-running community. Attribute the original design and the resulting
durability without claiming current operational ownership.

### “I can build any app in five days”

The offer needs a bounded product. Use “sharply defined app,” “focused first
version,” or “a finishable product loop.”

### “The full app is production-complete in five days”

That depends on scope, external reviews, data migration, compliance, and other
constraints. PMM’s first release came ten calendar days after its first commit,
though its first five days were highly productive.

### “Better than anything AI alone can make”

This is rhetorically strong but literally universal and unprovable. Preserve the
contrast as judgment:

> Better than a model left alone, because the model is not left alone.

Or:

> Agent speed, human standards.

### “PromiseKit is used by [named major app]”

Do not name users without an official customer/adopter source. The project’s own
docs say it is used in popular apps, but do not provide a reliable current list.

### “Canopy and Supermassive Book Hole were solely built by Max”

Public material confirms Max’s association but not sole authorship. Ask him.

### “Max created Swift Package Manager”

False/unsupported. He worked at Apple on it and contributed hundreds of commits.
He explicitly says he did not make the open-sourcing decision.

### “TweetDeck for Android won a Webby”

It was a nominee. Precise wording: “nominated for a 2011 Webby.”

### Unqualified client-logo claims

Max’s historical site contains a career icon wall, but an icon does not specify
employment, contract scope, authorship, or endorsement. Do not convert the wall
into “clients” without his confirmation.

## Focused questions for Max

1. What exactly is delivered at the end of day five: signed build, source,
   TestFlight build, hosted deployment, App Store submission, handoff notes, or a
   subset depending on platform?
2. Is the offer one person plus your agents for five consecutive days, and how
   much client availability do you require during that period?
3. Which parts of Package Manager Manager existed by the end of day five, and
   were all fifteen Codex-attributed commits produced through your current agent
   workflow?
4. What were your exact roles on Canopy and Supermassive Book Hole? Were you sole
   builder, product lead, designer/engineer, or part of a team?
5. Which current app best demonstrates a five-day build from blank repo to usable
   result? A public commit window would make the promise exceptionally credible.
6. Is the intended result “App Store ready,” “ready to submit,” or “a working
   signed build”? Apple review itself cannot be guaranteed in five days.
7. What work is deliberately excluded: regulated data, complex migrations,
   custom model training, hardware integrations, multi-party admin systems,
   payments, or anything else?
8. Does the engagement include a post-build warranty or bug-fix window? A short,
   explicit robustness guarantee could remove a major buyer objection.
9. Do you want to promise a fixed fee, and what inputs determine it?
10. May the page say you “led Last.fm’s desktop and mobile client development,”
    as TweetDeck’s official announcement does?
11. May the page show actual PMM commit subjects and author transitions as proof
    of the human-agent workflow?
12. Do you have a private or first-person source for “50 million people,” or
    should the page use the stronger defensible formulation “tens of millions of
    devices”?

## Primary source index

### Homebrew

- [Homebrew Turns 15](https://mikemcquaid.com/interviews/homebrew-turns-15/)
- [Changelog #232: Homebrew and Swift with Max Howell](https://changelog.com/podcast/232)
- [Official analytics index](https://formulae.brew.sh/analytics/)
- [Official command events, 365 days](https://formulae.brew.sh/api/analytics/brew-command-run/365d.json)
- [Official install events, 365 days](https://formulae.brew.sh/api/analytics/install/365d.json)
- [Official 2019 MOSS nomination](https://docs.brew.sh/governance/2019-moss-track-iii-grant-nomination)
- [Homebrew/brew Maintainer Guide](https://docs.brew.sh/Homebrew-brew-Maintainer-Guide)
- [Homebrew Supply Chain Security](https://docs.brew.sh/Supply-Chain-Security)

### Apple and Swift

- [Swift Package Manager commits by mxcl](https://github.com/swiftlang/swift-package-manager/commits/main/?author=mxcl)
- [PromiseKit repository](https://github.com/mxcl/PromiseKit)
- [PromiseKit test suites](https://github.com/mxcl/PromiseKit/tree/master/Tests)
- [PromiseKit documentation](https://mxcl.dev/PromiseKit/reference/v7/)
- [Uses This: Max Howell](https://usesthis.com/interviews/max.howell/)
- [swift-sh](https://github.com/mxcl/swift-sh)
- [Path.swift](https://github.com/mxcl/Path.swift)

### Current products

- [Package Manager Manager site](https://mxcl.dev/package-manager-manager/)
- [Package Manager Manager source](https://github.com/mxcl/package-manager-manager)
- [PMM first five days](https://github.com/mxcl/package-manager-manager/commits/main/?since=2026-06-26&until=2026-06-30)
- [Automic Vault](https://www.automicvault.com/)
- [Automic Vault security model](https://www.automicvault.com/security/)
- [Automic Vault source](https://github.com/automic-vault/automic-vault)
- [Automic Vault CI](https://github.com/automic-vault/automic-vault/blob/main/.github/workflows/ci.yml)
- [Canopy](https://mxcl.dev/canopy/)
- [Supermassive Book Hole machine-readable overview](https://supermassivebookhole.com/index.md)

### Career and consumer products

- [TweetDeck to the Max](https://blog.x.com/en_us/a/2010/tweetdeck-to-the-max)
- [Official 2011 Webby nominee announcement](https://www.webbyawards.com/press/press-releases/15th-annual-webby-awards-nominees-unveiled/)
- [Last.fm Boffin announcement](https://blog.last.fm/2009/03/11/introducing-boffin-lastfms-music-knowledge-meets-your-local-mp3-collection)
- [Candor USA company announcement](https://www.prnewswire.com/news-releases/candor-usa-welcomes-max-howell-as-chief-product-officer-300818054.html)
- [Max’s historical public timeline](https://mxcl.dev/mxcl/)
