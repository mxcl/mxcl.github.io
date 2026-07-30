# Max Howell's naming history

Research date: 2026-07-30  
Purpose: source material for the product-naming service page at `mxcl.dev/naming/`

## Executive finding

Max Howell's strongest naming credential is not that he happened to choose the
word **Homebrew**. It is that he designed a complete verbal model before he
wrote the product, used that model to make an unfamiliar system easier to
understand, and later added **Taps**, a name for the extension mechanism that
helped turn the product into an ecosystem.

That is unusually well documented. Homebrew's first commit contains only a
README. The commit is by Max and is titled “I'll start with a rare Belgian
yeast and Sussex hops.” The README already contains **Homebrew**, `brew`,
**Brewery**, **Cellar**, **kegs**, and **formulae**. In a 2024 retrospective,
Max says he still starts projects with a README, describes deciding how the
product should feel before coding, and says he created the naming theme so
people could see “analogies and metaphors” throughout the system. Mike McQuaid
then attributes **Taps** to Max and describes Taps as the change that let
Homebrew become an ecosystem. The repository independently records Max's 2012
commit adding `brew tap` and `brew untap`.

This supports a much stronger service position than “I am good at coming up
with names”:

> I name the thing, then give the whole product a language people can use.

The wider record shows several repeatable naming modes:

1. **A metaphor that becomes a product model:** Homebrew, Cellar, keg,
   formula, Tap; later tea, pantry, cellar, keg, bottle.
2. **A familiar ecosystem pattern:** PromiseKit, Path.swift, YOLOKit.
3. **A coined word that becomes an API or family:** ChuzzleKit and `chuzzle`;
   Automic Vault and its isotope vocabulary; the recent Claw family.
4. **A literal name with one memorable twist:** Package Manager Manager,
   LegibleError, Next Book After, Clawlicious.
5. **A deliberately excessive name that is hard to forget:** Supermassive
   Book Hole, OMGHTTPURLRQ, SuperGoodDeleteWiggle,
   `initWith...FuckIt`.
6. **A broad physical metaphor that leaves room to grow:** Workbench, Canopy,
   Cake.
7. **A name chosen for strategic continuity:** tea inherits Homebrew's drink
   metaphor; Filelight combines utility with a visual direction; Podium names
   the social act at the center of an unlaunched product concept.

## Source policy and confidence

This note prefers project-owned sources: source history, repository READMEs,
official documentation, official sites, and interviews in which Max is a
participant. GitHub star counts are a dated adoption signal, not a quality
score.

Project ownership or an early commit does **not**, by itself, prove sole naming
authorship. The current brief directly confirms that Max presents **Homebrew**,
**Automic Vault**, **Supermassive Book Hole**, **PromiseKit**, **Filelight**,
**tea**, and **Podium** as his naming work. Other entries below are labelled
where public evidence establishes only creation, ownership, or close
association.

## The anchor case: Homebrew

### The name preceded the code

- Max's first Homebrew commit, dated 2009-05-21, contains only `README`.
- Its title is a brewing joke: “I'll start with a rare Belgian yeast and
  Sussex hops.”
- The README defines a package manager through a coherent physical model:
  packages are **brewed** in versioned **kegs** under
  `/Brewery/Cellar/...`; it names the tool `brew` and calls package
  definitions **formulae**.
- The next commit, also by Max that day, adds the actual tree and a `Formula/`
  directory.

Sources:

- [The first Homebrew commit](https://github.com/Homebrew/brew/commit/29d85578e75170a6c0eaebda4d701b46f1acf446)
- [The first README at that commit](https://github.com/Homebrew/brew/blob/29d85578e75170a6c0eaebda4d701b46f1acf446/README)
- [The second commit, adding the code and Formula tree](https://github.com/Homebrew/brew/commit/84c5c3e5c301382ede5b1f04c7440ee9055589af)

### Max explicitly describes naming as product design

In the Homebrew fifteenth-anniversary interview, Max says:

- he does not start a project with code; he starts with the README;
- before implementation he asks how the product should feel;
- package-manager terminology was difficult and unclear;
- he designed a theme so analogy would help people understand, use, and
  contribute to the system;
- themed names were not just “for the funsies”; he intended them to be useful.

This is first-person evidence for a naming method: **design the language before
the implementation, and use it to reduce the user's conceptual burden**.

Source: [Homebrew Turns 15 — interview and transcript](https://mikemcquaid.com/interviews/homebrew-turns-15/), especially 19:50–23:00.

### The original naming process, in Max's own account

A 2016 Changelog interview contains the most detailed public account found in
this pass:

- Max says names matter in code as well as marketing. When a responsibility is
  clear and well named, explanatory comments become less necessary.
- He says a generic name such as “Package Manager X” would not inspire people
  to talk about the project.
- His stated objective was: “I want the name to then lead to other names.”
- A Last.fm co-worker suggested a beer theme. Max chose **Homebrew** because he
  wanted the system to feel like a platform where people could create and
  customize their own packages—not because of an Apple “homebrew” connotation.
- He considered **recipe** for package definitions, then selected **formula**
  because it was more distinctive.
- After the theme suggestion, Homebrew took a couple of days to choose and most
  of the surrounding names followed within roughly a week.
- Max says he sometimes cannot start building until the name makes the product
  clear in his own head.
- He also argues that a name should provide a mnemonic for the product's
  purpose, rather than being random distinctiveness.
- He says the keg/formula/rack/Cellar model helped him design Homebrew, not just
  market it, and notes that he later added Taps.

This source is extraordinarily useful for the service page because it joins
four claims that naming agencies often separate: architecture, comprehension,
memorability, and talk value. In Max's account, the same system did all four.

Source: [Homebrew and Swift — Changelog Interviews #232](https://changelog.com/podcast/232), especially 20:04–29:30.

### Taps made the language—and the product—expand

- Max's 2012 commit introduces `brew tap` and `brew untap`, the `Taps`
  directory, and the language of tapped repositories and formulae.
- In the anniversary interview, Mike McQuaid calls Taps one of Max's major
  creations and says the feature changed Homebrew from a project into an
  ecosystem by making third-party repositories a native concept.
- Current Homebrew documentation still defines a Tap as a directory, usually
  a Git repository, containing formulae, casks, or external commands.

Sources:

- [Max's `brew tap` / `brew untap` commit](https://github.com/Homebrew/brew/commit/0c7e7ae437900952b9f43f8a94e8b1aa57f3015f)
- [Current Homebrew Taps documentation](https://docs.brew.sh/Taps)
- [Current Homebrew terminology](https://docs.brew.sh/Formula-Cookbook#homebrew-terminology)
- [Homebrew Turns 15 transcript](https://mikemcquaid.com/interviews/homebrew-turns-15/), especially 23:24–24:27.

### The vocabulary lasted

Current official documentation still uses **formula**, **keg**, **rack**,
**Cellar**, **Tap**, **bottle**, and related forms as precise domain terms.
That longevity is evidence that the original metaphor was not decorative copy;
it became operating vocabulary.

The interview page states that Homebrew was in use on tens of millions of
devices at its fifteenth anniversary. That makes this more than an attractive
taxonomy: it is a language that reached a very large user base.

Sources:

- [Homebrew Formula Cookbook and terminology](https://docs.brew.sh/Formula-Cookbook)
- [Homebrew manpage](https://docs.brew.sh/Manpage)
- [Homebrew Turns 15](https://mikemcquaid.com/interviews/homebrew-turns-15/)

### Important correction: do not claim Cask as Max's name

The current naming page groups `cask` with Max's Homebrew language. The public
record does not support that attribution. In the anniversary transcript, Mike
describes **Cask** as a concept created in a separate Homebrew Tap and later
merged into Homebrew. Max then says he never liked the name. It is safe to say
that Cask belongs to the modern Homebrew vocabulary; it is not safe to present
it as an example Max coined.

Source: [Homebrew Turns 15 transcript](https://mikemcquaid.com/interviews/homebrew-turns-15/), especially 29:41–32:24.

## Confirmed examples from the current brief

### PromiseKit — use the language users already know

**Confirmed by:** the current brief; Max's authorship of the first substantive
commit and the repository.

The name combines the exact abstraction, **Promise**, with Apple's familiar
framework suffix, **Kit**. The result is intentionally unsurprising: it tells
Apple-platform developers both what the framework does and where it belongs.
This is a useful counterexample to the belief that every good name must be
novel.

The source history adds personality. Max's first substantive commit, dated
2014-04-04, is titled “I PromiseKit, cross my heart and hope to die.” Its
README positions the project not merely as an implementation, but as a set of
helpers for making asynchronous iOS development delightful. The repository now
describes PromiseKit as a top-100 CocoaPod used in popular apps, and GitHub's
API reported about 14.2k stars on the research date.

Apple's own framework names—including UIKit, MapKit, and StoreKit—corroborate
the platform pattern that the brief says PromiseKit intentionally reused.

Sources:

- [PromiseKit's first substantive commit](https://github.com/mxcl/PromiseKit/commit/acc15c9548e5c4e2cf65c78d054a68944802ca79)
- [PromiseKit README](https://github.com/mxcl/PromiseKit)
- [GitHub repository API](https://api.github.com/repos/mxcl/PromiseKit)
- [Apple UIKit documentation](https://developer.apple.com/documentation/uikit)
- [Apple MapKit documentation](https://developer.apple.com/documentation/mapkit)
- [Apple StoreKit documentation](https://developer.apple.com/documentation/storekit)

**Page-ready lesson:** Sometimes the best name invents a world. Sometimes it
borrows the right grammar so the product feels native on day one.

### Automic Vault — an ownable name with room for a system

**Confirmed by:** the current brief and a direct clarification from Max on
July 30, 2026; the official product and repository are first-person Max work.

**Etymology:** Max began with **Atomic Vault** because it carried the imagery
of a safe place against the worst possible attack. He changed one letter to
make the name ownable. **Automic** can then be read as a novel abbreviation of
either **automations** or **automatons** while retaining the atomic imagery.

The product describes itself as a secrets manager and security layer for tools
used by developers and agents. The compact `av` command works naturally, while
**Vault** provides an immediate security category cue.

The product has already developed a surrounding vocabulary: tools are
**hardened**, scripts are **blessed**, access is controlled through **gates**,
and tool-specific integrations live under **isotopes**. Its Homebrew Tap is
named `homebrew-isotopes`. This is exactly the kind of evidence a naming page
should show: the name gives future features somewhere coherent to go.

Sources:

- Max Howell, direct clarification in this project conversation, July 30, 2026
- [Official Automic Vault site](https://www.automicvault.com/)
- [Official Automic Vault repository and README](https://github.com/automic-vault/automic-vault)
- [Official Homebrew Isotopes Tap](https://github.com/automic-vault/homebrew-isotopes)
- [GitHub repository API](https://api.github.com/repos/automic-vault/automic-vault)

**Page-ready lesson:** One changed letter can preserve a powerful metaphor,
create an ownable word, and introduce multiple relevant readings. The result
can still support a usable verbal world: vault, gates, harden, bless, isotopes.

### Supermassive Book Hole — the product explanation becomes the joke

**Confirmed by:** the current brief, its official public site, and a direct
clarification from Max on July 30, 2026.

**Etymology:** The name came to Max in the shower. He saw the pun on
**Supermassive Black Hole**, followed by the product metaphor: “sucking books
into a place where you can find loadsa info on them.”

The official description is a personal shelf for books, movies, games, and
albums. The name turns “a place that consumes your media” into an immediate
image. It is excessive on purpose, carries its own visual direction, and is
difficult to confuse with a generic reading tracker.

Sources:

- Max Howell, direct clarification in this project conversation, July 30, 2026
- [Official Supermassive Book Hole site](https://supermassivebookhole.com/)

**Page-ready lesson:** A good pun can do practical product work. This one
explains what the product does, supplies its visual identity, and gives people
a name they want to repeat.

## Strong associated examples

These examples are strongly associated with Max through repository ownership,
first commits, or first-person product pages. Unless stated otherwise, public
evidence does not independently establish sole naming authorship.

### Filelight — a functional name that supplies its own imagery

Filelight is KDE's disk-usage visualization app. Max says the name came from
thinking about **flashlight** and **firelight**. The combination carries both
function and art direction: it suggests revealing what is hidden while giving
the product an immediate visual metaphor based on light.

The official KDE description confirms that the app visualizes disk usage with
concentric rings and helps users free space. The origin story comes directly
from Max.

Sources:

- Max Howell, direct clarification in this project conversation, July 30, 2026
- [Official Filelight page](https://apps.kde.org/filelight/)

**Page-ready lesson:** A name can do more than describe the utility. It can
give the interface and identity a visual material to work with.

### tea — another metaphorical package ecosystem

The public repository now called `pkgx` began as `tea`, with its first
substantive commit by Max in 2022. The commit title—“Steep leaves for 7 years,
add `deno`, stir, enjoy”—immediately activates the metaphor.

The original README describes a developer tool called **tea** and uses
**kegs**, **Cellar**, **pantry**, and **bottles** in its implementation and
source structure. It is both a continuation of the Homebrew instinct and a
distinct system: a short command, a universally understood object, and a
vocabulary that makes technical machinery more tangible.

Max says **tea** was intended as Homebrew's successor and that its important
job was to reference its predecessor. You brew tea, it is another drink, and
tea can suggest what a person matures into after drinking too much beer. Max
does not consider it one of his best names, but that honesty strengthens the
strategic lesson: continuity and recognition can matter more than isolated
cleverness.

The repository later became `pkgx`; Max's 2023 rename commit is simply titled
“pkgx.” The current repository describes pkgx as “Run Anything” and had about
9.9k GitHub stars on the research date. The public history confirms Max's
technical authorship and the language. Max directly confirms that he chose
**tea**; the reason for the later `pkgx` rename remains undocumented here.

Sources:

- [First substantive tea commit](https://github.com/pkgxdev/pkgx/commit/625065440f87eb9c40724350a59712f34ed40336)
- [The original tea README at that commit](https://github.com/pkgxdev/pkgx/blob/625065440f87eb9c40724350a59712f34ed40336/README.md)
- [The `pkgx` rename commit](https://github.com/pkgxdev/pkgx/commit/683319bbb0deeb34687f7cf7190fefd66ee03237)
- [Current pkgx repository](https://github.com/pkgxdev/pkgx)
- [GitHub repository API](https://api.github.com/repos/pkgxdev/pkgx)
- Max Howell, direct clarification in this project conversation, July 30, 2026

### Podium — name the act, not the machinery

**Podium** was an unlaunched startup concept for agent-enabled developers to
show their work to a feed of people eager to respond, with an AI-enabled loop
for consuming that feedback and improving the work.

The name avoids describing agents, feeds, or feedback infrastructure. It names
the human act at the center of the product: presenting work in public, being
seen, and inviting response. Because the concept was not launched, it should
always be labelled as an unlaunched concept rather than a shipped product.

Source: Max Howell, direct clarification in this project conversation, July
30, 2026

**Page-ready lesson:** When the machinery is likely to change, name the durable
behavior the product exists to enable.

### Chalk — familiarity can be the strategy

Max's Swift **Chalk** README contains one of the clearest public statements of
his naming philosophy outside Homebrew. It says the project deliberately uses
the same name as the famous Node terminal-color package because naming
connections help open source users form the right mental connection.

This makes Chalk a particularly useful companion to PromiseKit: the goal was
not an unused word. The goal was instant category recognition.

Source: [Chalk README, “Name” section](https://github.com/mxcl/Chalk#name)

### Package Manager Manager — the recursive joke is the explanation

The official description asks: “How many Packages would a Package Manager
manage if a Package Manager could manage Package Managers?” The app inventories
package managers and their packages, so the repetition is not ornament; it
states the exact relationship the product manages. The interface also compacts
the long name into the typographic mark `pkg⋅mgr²`.

Max authored the initial public commit and owns the official repository. The
repository had 25 stars shortly after release on the research date. Ask Max to
confirm that he personally coined both the long form and `pkg⋅mgr²` mark.

Sources:

- [Package Manager Manager repository](https://github.com/mxcl/package-manager-manager)
- [Initial app commit](https://github.com/mxcl/package-manager-manager/commit/11bee67874b943ecbcced131da0b7ed41819a7e7)
- [GitHub repository API](https://api.github.com/repos/mxcl/package-manager-manager)

### The Claw family — shared language makes separate products feel related

Several recent public Max projects use **Claw** as a reusable ecosystem term:

- **BYOClaw** expands cleanly to **Bring Your Own Claw** and names a
  specification through which a person gives an agent temporary API access.
  Its README explicitly names Max as creator and maintainer.
- **Clawlicious** is a bookmark product whose repository description is “Feed
  your claw tasty links.” The name is playful, while the sentence explains the
  product.
- **Colossal Claw Adventure** uses alliteration and scale for a massively
  branching story made by humans and their agents.

Together, the names show another recurring strength: a shared root can make a
portfolio legible without making every product sound the same.

Sources:

- [BYOClaw repository and creator statement](https://github.com/mxcl/byoclaw)
- [Clawlicious repository](https://github.com/mxcl/clawlicious)
- [Colossal Claw Adventure repository](https://github.com/mxcl/colossal-claw-adventure)

### Canopy — name, benefit, and tagline occupy the same image

Max's public page describes **Canopy** as a GitHub-notification app and leads
with “Stay on top of development.” The canopy/top relationship makes the
benefit line feel native to the name. The site's Git history shows Max adding
the Canopy page in 2019 and later reviving the product.

Sources:

- [Canopy product page](https://mxcl.dev/canopy/)
- [Commit adding the Canopy page](https://github.com/mxcl/mxcl.github.io/commit/41a2d5864d9a91daf406a35fe6b6915ac6157684)

### Workbench — a name chosen for future scope

The public README calls Workbench a dotfile-sync app but answers “What's with
the name?” by saying Max has broader future plans for the tool. That is direct
evidence of naming for optionality: the initial feature is narrow, while the
name preserves a larger product surface.

Source: [Workbench README, “What's with the name?”](https://github.com/mxcl/Workbench#whats-with-the-name)

### Cake — a metaphor that keeps paying rent

Cake is an app for making Swift modules easier. Its public copy calls it a
“delicious” supplement, says Cake makes modules “a breeze,” uses a
`Cakefile.swift`, and notes that Cake is built with Cake. The name is broad and
friendly, then repeated through product language rather than explained once
and abandoned.

Source: [Cake repository and README](https://github.com/mxcl/Cake)

### YOLOKit — productive tension between name and product

YOLOKit's README opens with frustration at excessive array-parsing code and a
one-word release: “YOLO.” It then stresses that the library is modular,
thorough, tested, and carefully considered. The apparently reckless name makes
an exact opposite—careful library design—more memorable. The repository had
662 GitHub stars on the research date.

Sources:

- [YOLOKit repository and README](https://github.com/mxcl/YOLOKit)
- [GitHub repository API](https://api.github.com/repos/mxcl/YOLOKit)

### ChuzzleKit — coin a word, then make it executable

ChuzzleKit coins **chuzzle** for an operation that returns `nil` for falsy
objects and removes falsy parts from other values. The README can then use the
word as a verb—objects “chuzzle” to a result—and the API exposes `.chuzzle`.
This is a compact example of a name creating the terminology the product needs.

Source: [ChuzzleKit repository and README](https://github.com/mxcl/ChuzzleKit)

### OMGHTTPURLRQ — turn platform pain into a pronounceable reaction

The name embeds Apple's `NSURLRequest` type inside **OMG** and a vowel-stripped
**URLRQ**. The README's description—extensions Apple left out—makes the tone
feel earned. This is not conventional enterprise naming; it is a memorable
developer in-joke attached to an awkward platform problem. The repository had
337 GitHub stars on the research date.

Sources:

- [OMGHTTPURLRQ repository and README](https://github.com/mxcl/OMGHTTPURLRQ)
- [GitHub repository API](https://api.github.com/repos/mxcl/OMGHTTPURLRQ)

### Clear functional names

Several public names state the benefit or category with very little decoding:

- **Path.swift** — subject plus platform/language, in the platform's own file
  naming idiom. The repository had 961 stars on the research date.
- **LegibleError** — names the defect and the promised improvement.
- **AppUpdater** — literal utility name.
- **Version** — deliberately fundamental category name for a semantic-version
  microframework.
- **StreamReader** — direct technical role.

Sources:

- [Path.swift](https://github.com/mxcl/Path.swift)
- [LegibleError](https://github.com/mxcl/LegibleError)
- [AppUpdater](https://github.com/mxcl/AppUpdater)
- [Version](https://github.com/mxcl/Version)
- [StreamReader](https://github.com/mxcl/StreamReader)

### Deliberately over-specified names

Max's public repositories also contain a recurring comic mode in which the
name is nearly a complete review of the thing:

- **SuperGoodDeleteWiggle** — an almost-Springboard-quality delete wiggle.
- **`initWith...FuckIt`** — terse Objective-C constructors, with the attitude
  carried through its README.
- **Game Studio Simulator** — a direct category name whose repetition hints
  that the app simulates the whole studio, not merely game code generation.
- **git-cryobank** — archives Git repositories, turning cold storage into a
  memorable physical metaphor.
- **cig** — “Can I go?”, a command that checks whether repositories are clean
  and pushed before the developer leaves.
- **yoink** — a binary-fetching tool named as the action it performs.
- **brewx** and **cargox** — `npx`-style execution names mapped directly onto
  the Homebrew and Cargo ecosystems.

Sources:

- [SuperGoodDeleteWiggle](https://github.com/mxcl/SuperGoodDeleteWiggle)
- [`initWith...FuckIt`](https://github.com/mxcl/initWith...FuckIt)
- [Game Studio Simulator](https://github.com/mxcl/game-studio-simulator)
- [git-cryobank](https://github.com/mxcl/git-cryobank)
- [cig](https://github.com/mxcl/cig)
- [yoink](https://github.com/mxcl/yoink)
- [brewx](https://github.com/mxcl/brewx)
- [cargox](https://github.com/mxcl/cargox)

## Chronological public corpus

This is a broad, non-fork GitHub corpus rather than a list of names whose sole
authorship has been proven. It is useful for detecting patterns and for asking
Max what deserves promotion to the portfolio.

| Period | Public names associated with Max | Observable mode |
|---|---|---|
| 2009–2011 | Homebrew, `brew`, Brewery, Cellar, keg, formula; roofparty; scrobsub; Audioscrobbler.app; YOLOKit | Themed systems, compact commands, platform-form names |
| 2012–2015 | Tap/untap; MBAppStoreRater; ChuzzleKit; PromiseKit; OMGHTTPURLRQ; SuperGoodDeleteWiggle; `initWith...FuckIt`; Kissogram; SelfieAssist | Coined verbs, Apple-style Kits, developer jokes, ultra-literal utilities |
| 2018–2019 | Workbench; Cake; Path.swift; LegibleError; Chalk; AppUpdater; Version; StreamReader; Canopy | Broad physical metaphors, platform-native grammar, plain-language benefits |
| 2021–2023 | `swift-sh`; `xcodebuild`; tea; pantry/cellar/keg/bottle; pkgx; brewkit; mash | Commands that read like what users type; renewed system vocabularies |
| 2025–2026 | Automic Vault; isotope/harden/bless/gate; Package Manager Manager / `pkg⋅mgr²`; Supermassive Book Hole; BYOClaw; Clawlicious; Colossal Claw Adventure; Game Studio Simulator; yoink; brewx; cargox; git-cryobank; cig | Ownable compounds, product families, recursive jokes, conversational commands |

Primary corpus source: [GitHub's public repositories API for `mxcl`](https://api.github.com/users/mxcl/repos?per_page=100&type=owner&sort=created).

## Naming taxonomy for the service page

The strongest presentation is not a flat gallery of clever names. It is a set
of naming jobs Max has repeatedly solved.

### 1. Make a difficult system explain itself

Use Homebrew as the dominant proof. Show the original language and explain
that the metaphor was designed before the code to lower the conceptual burden.

Examples: Homebrew, Cellar, keg, formula, Tap; tea, pantry, bottle.

### 2. Make a new thing feel native

Use PromiseKit and Chalk. Explain that familiarity can be more valuable than
novelty when users already possess the right mental model.

Examples: PromiseKit, Chalk, Path.swift.

### 3. Give the product somewhere to go

Use Automic Vault and the vocabulary it unlocked. Workbench and Cake are useful
secondary evidence.

Examples: Automic Vault → `av`, harden, bless, gates, isotopes; Cake →
Cakefile/delicious; Workbench → deliberately broad future scope.

### 4. Make the explanation itself memorable

Use Supermassive Book Hole and Package Manager Manager. Both are long; neither
is generic. Their structure tells the story.

Examples: Supermassive Book Hole, Package Manager Manager, Clawlicious,
LegibleError.

### 6. Give the product a visual or social center

Use Filelight and Podium to show that naming can provide art direction or name
the core act rather than the implementation.

Examples: Filelight → flashlight/firelight; Podium → presenting work and
receiving public response.

### 5. Let tone do positioning work

Use one or two of the developer-library names to show that naming can signal the
relationship a product wants with its users.

Examples: YOLOKit, OMGHTTPURLRQ, SuperGoodDeleteWiggle,
`initWith...FuckIt`.

## Page-ready claims

### High-confidence, externally sourced

- **Homebrew's first commit was a README, not code. The language came first.**
- **That first README already had Homebrew, brew, Brewery, Cellar, kegs, and
  formulae.**
- **Max says he designed the theme to make a hard system understandable through
  analogy and metaphor.**
- **Max says Homebrew was chosen to lead naturally to the other names in the
  product; most of that vocabulary followed within about a week.**
- **He considered recipe, chose formula because it was more distinctive, and
  says the naming model helped him design the system.**
- **Max later created Taps; Homebrew's long-time project lead describes Taps as
  the feature that turned Homebrew into an ecosystem.**
- **The vocabulary survived for fifteen-plus years and is still the official
  language of Homebrew.**
- **PromiseKit's first substantive commit was Max's, and the framework became a
  top-100 CocoaPod with about 14k GitHub stars.**
- **Chalk explicitly reused an established package name so developers would
  inherit the right mental connection.**

### Confirmed directly by Max

- Max named Automic Vault by evolving **Atomic Vault** into a word that also
  evokes automations and automatons.
- Max named PromiseKit to position promises as fundamental and to echo Apple's
  framework naming grammar.
- Max named Supermassive Book Hole after the Black Hole pun and product
  metaphor came to him in the shower.
- Max named Filelight while thinking about flashlight and firelight, choosing
  a metaphor that could supply the product's imagery.
- Max named tea as a successor to Homebrew, prioritizing continuity with its
  predecessor over pure novelty.
- Max named Podium for an unlaunched agent-enabled developer showcase and
  feedback-loop concept.

### Strong inferences that should be reviewed by Max before publication

- The isotope vocabulary was part of choosing Automic Vault rather than a
  system developed after the name.
- Canopy was chosen to support “stay on top of development.”
- Max personally coined pkgx, Package Manager Manager, `pkg⋅mgr²`, and all
  three Claw-family names.

## Suggested core narrative

> Homebrew did not get its language after it worked. The language came first.
> Its first commit was a README: Homebrew, brew, Brewery, Cellar, kegs,
> formulae. I designed the metaphor so people could understand a package
> manager before they understood package managers. Later I added Taps—the name
> and mechanism that let it become an ecosystem. That is what I do here. I do
> not just find a word that clears a domain search. I give the product a name,
> a position, and a language its users can carry forward.

This narrative is more compelling than leading with four equally weighted case
studies. Homebrew should be the proof-heavy anchor; the other names should
demonstrate range.

## Claims to avoid or qualify

- Do not list **Cask** as a Max-coined Homebrew term.
- Do not imply GitHub ownership proves sole naming authorship.
- Do not over-rely on star counts. They establish reach, not that a name caused
  adoption.
- Do not say a name is legally clear, globally available, or trademark-safe
  without describing an actual clearance process.
- Do not promise a verbal identity system, domains, trademark screening, or a
  large candidate list unless those are genuinely included in the flat-fee
  service.

## Focused questions for Max

1. **Authorship:** Which of these did you personally name, co-name, or merely
   build: pkgx, Canopy, Cake, Workbench, Package Manager Manager and
   `pkg⋅mgr²`, BYOClaw, Clawlicious, Colossal Claw Adventure, PincerSpace, Next
   Book After, Dine Darling, Stage of Play, and Chorale?
2. **Automic vocabulary:** Did the isotope vocabulary follow Automic, or was
   it part of choosing it?
3. **PromiseKit:** Can the page state in first person that `Kit` was chosen to
   make the framework feel native to Apple's ecosystem and that “Promise” was
   deliberately fundamental rather than distinctive?
4. **Homebrew:** Are there any other terms Max specifically remembers coining
   beyond the first-README set and Taps? Who coined bottle, rack, and Cellar's
   later extensions? (Cask is already established as not Max's.)
5. **Commissioned proof:** Has Max named products he did not also build? If so,
   those examples are especially valuable because they prove a standalone
   naming service rather than naming as a side effect of product creation.
6. **What the flat fee buys:** Is the deliverable one decisive recommendation,
   a small shortlist, a product vocabulary, domain research, or some
   combination? What does Max explicitly refuse to do?

## Source index

### Homebrew

- https://github.com/Homebrew/brew/commit/29d85578e75170a6c0eaebda4d701b46f1acf446
- https://github.com/Homebrew/brew/blob/29d85578e75170a6c0eaebda4d701b46f1acf446/README
- https://github.com/Homebrew/brew/commit/84c5c3e5c301382ede5b1f04c7440ee9055589af
- https://github.com/Homebrew/brew/commit/0c7e7ae437900952b9f43f8a94e8b1aa57f3015f
- https://docs.brew.sh/Formula-Cookbook
- https://docs.brew.sh/Taps
- https://docs.brew.sh/Manpage
- https://changelog.com/podcast/232
- https://mikemcquaid.com/interviews/homebrew-turns-15/

### PromiseKit and Apple naming grammar

- https://github.com/mxcl/PromiseKit
- https://github.com/mxcl/PromiseKit/commit/acc15c9548e5c4e2cf65c78d054a68944802ca79
- https://api.github.com/repos/mxcl/PromiseKit
- https://developer.apple.com/documentation/uikit
- https://developer.apple.com/documentation/mapkit
- https://developer.apple.com/documentation/storekit

### Current named products

- https://www.automicvault.com/
- https://github.com/automic-vault/automic-vault
- https://github.com/automic-vault/homebrew-isotopes
- https://supermassivebookhole.com/
- https://github.com/mxcl/package-manager-manager
- https://github.com/mxcl/byoclaw
- https://github.com/mxcl/clawlicious
- https://github.com/mxcl/colossal-claw-adventure
- https://github.com/mxcl/game-studio-simulator
- https://mxcl.dev/canopy/

### Earlier and supporting corpus

- https://github.com/pkgxdev/pkgx
- https://github.com/mxcl/Chalk
- https://github.com/mxcl/Workbench
- https://github.com/mxcl/Cake
- https://github.com/mxcl/YOLOKit
- https://github.com/mxcl/ChuzzleKit
- https://github.com/mxcl/OMGHTTPURLRQ
- https://github.com/mxcl/Path.swift
- https://github.com/mxcl/LegibleError
- https://api.github.com/users/mxcl/repos?per_page=100&type=owner&sort=created
