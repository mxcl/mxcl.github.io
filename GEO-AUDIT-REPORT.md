# GEO Audit Report: mxcl.dev

**Audit date:** 2026-05-21  
**Audited URL:** https://mxcl.dev/  
**Repository:** `/Users/mxcl/src/mxcl.dev`  
**Business type:** Personal expert brand / AI consulting services  
**Core pages analyzed:** 7

## Executive Summary

**Current repo GEO score: 74/100 (Good, not yet excellent)**  
**Live deployed GEO score: 58/100 (Poor to fair, because current fixes are not deployed)**

The current local site is substantially stronger than the live deployment. The repository now has `llms.txt`, sitemap `lastmod` values, homepage `Person` and `WebSite` schema, service-page FAQ schema, service schema, breadcrumb schema, and source-backed identity sections. The live GitHub Pages deployment still serves an older build: `https://mxcl.dev/llms.txt` returns `404`, the live sitemap has no `<lastmod>` values, and the live homepage, projects page, and enterprise architecture page lack JSON-LD.

The strategic GEO position is strong: Max Howell is externally corroborated as the creator of Homebrew by Wikipedia, Wikidata, GitHub-linked profiles, Patreon, and podcast/interview pages. The main remaining gap is current-topic authority. AI systems can easily verify "Max Howell created Homebrew"; they have much less third-party evidence for "Max Howell is a production AI systems consultant." The site should turn that current positioning into dated, source-backed, quotable pages.

## Score Breakdown

| Category | Current repo | Live site | Weight | Notes |
|---|---:|---:|---:|---|
| AI citability and visibility | 70 | 46 | 25% | Repo has better answer blocks and FAQs; live still lacks `llms.txt`. |
| Brand authority signals | 74 | 70 | 20% | Strong Homebrew authority; weaker current AI consulting corroboration. |
| Content quality and E-E-A-T | 66 | 55 | 20% | Practitioner voice is strong, but pages need proof, dates, examples, and outcomes. |
| Technical foundations | 78 | 72 | 15% | Static HTML is crawlable and fast; HTTP still returns `200` instead of redirecting. |
| Structured data | 86 | 52 | 10% | Repo schema coverage is good; live schema is incomplete. |
| Platform optimization | 66 | 38 | 10% | Repo has `llms.txt` and entity graph; live does not. |
| **Composite GEO score** | **74** | **58** | **100%** | Deploying current repo is the first high-impact action. |

## Deployment Gap

Live checks on 2026-05-21:

| URL | Live result | Current repo result |
|---|---|---|
| `https://mxcl.dev/llms.txt` | `404` | Present, 1,604 bytes |
| `https://mxcl.dev/sitemap.xml` | No `<lastmod>` entries | 7 URLs with `2026-05-16` `<lastmod>` |
| `https://mxcl.dev/` | No JSON-LD | `Person` and `WebSite` JSON-LD |
| `https://mxcl.dev/enterprise-agent-architecture/` | No JSON-LD | `Service`, `FAQPage`, `BreadcrumbList` |
| `https://mxcl.dev/projects/` | No JSON-LD | `CollectionPage`, `ItemList`, `BreadcrumbList` |

**Priority:** deploy the current repository before making more content changes. That alone likely moves the live GEO score from roughly 58 to the low or mid 70s.

## High Priority Issues

1. **Current GEO fixes are not deployed**

   The live site is missing the strongest current repo improvements. AI crawlers and search engines see the old version until this is published.

2. **HTTP does not redirect to HTTPS**

   `http://mxcl.dev/` returns `200 OK` instead of redirecting to `https://mxcl.dev/`. This creates an insecure duplicate URL surface. If GitHub Pages cannot enforce this reliably for the custom domain, put the site behind Cloudflare or another edge layer and force HTTPS there.

3. **Current AI consulting authority is mostly first-party**

   External sources strongly support the Homebrew identity. They do not yet strongly corroborate the current AI consulting positioning. Add source-backed proof of current work: talks, essays, case studies, podcast appearances, client-safe examples, public demos, or published technical guides.

4. **No dated editorial or technical content hub**

   The site has service pages, but few durable answer assets that AI systems can cite for queries around agent architecture, evals, secure agent execution, rollout gates, tool boundaries, or production AI implementation.

5. **Security headers are sparse**

   Successful pages return no visible HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, or CSP headers. This is not a GEO blocker, but it weakens technical trust signals. GitHub Pages limits header control, so edge configuration may be required.

## Medium Priority Issues

1. **Service pages are still relatively short**

   Current local word counts:

   | Page | Words |
   |---|---:|
   | `/hire-me/` | 491 |
   | `/ai-implementation-consultant/` | 418 |
   | `/fractional-head-of-ai/` | 398 |
   | `/enterprise-agent-architecture/` | 367 |
   | `/homebrew/` | 335 |
   | `/projects/` | 271 |
   | `/` | 455 |

   These are enough to establish relevance, but not enough to dominate AI answers. Build each service page toward 900-1,500 words with definitions, use cases, deliverables, anti-patterns, examples, and proof.

2. **Homepage H1 underuses the strongest entity phrase**

   The homepage title and body identify Max Howell, but the H1 is "Security. Simplicity. Systems that think." That is brandful, but weaker for entity extraction than a direct first-viewport phrase like "Max Howell builds production AI systems." Consider keeping the current line as supporting copy while making the primary H1 entity-led.

3. **FAQ coverage exists, but answer depth is thin**

   The repo has FAQ schema and visible FAQ headings on service pages. Expand answers so each can stand alone as a 60-120 word answer block with clear definitions, constraints, and outcomes.

4. **Projects page has little AI-readable context**

   `/projects/` has `CollectionPage` and `ItemList` schema, but each project would benefit from consistent fields: what it is, who it is for, current status, canonical URL, and relationship to Max Howell's current AI work.

5. **No visible freshness dates on pages**

   Sitemap `lastmod` helps crawlers, but visible page-level "Updated May 2026" signals help humans and answer engines evaluate freshness. Add this sparingly to service and guide pages.

## Strengths

- Static HTML is easy for non-JavaScript crawlers and AI crawlers to parse.
- `robots.txt` allows all crawlers and points to the sitemap.
- Canonical URLs exist on core pages.
- The current repo includes a useful `llms.txt` with canonical pages, services, identity links, and contact information.
- Current repo schema coverage is strong across the 7 core pages.
- The site has a coherent entity anchor: Max Howell, also known as mxcl, creator of Homebrew.
- External authority is unusually good for an individual consultant because Homebrew is independently documented.

## Structured Data Audit

Current repo schema coverage:

| Page | JSON-LD types |
|---|---|
| `/` | `Person`, `WebSite` |
| `/hire-me/` | `Person`, `OfferCatalog`, `FAQPage`, `BreadcrumbList` |
| `/ai-implementation-consultant/` | `Service`, `FAQPage`, `BreadcrumbList` |
| `/fractional-head-of-ai/` | `Service`, `FAQPage`, `BreadcrumbList` |
| `/enterprise-agent-architecture/` | `Service`, `FAQPage`, `BreadcrumbList` |
| `/projects/` | `CollectionPage`, `ItemList`, `BreadcrumbList` |
| `/homebrew/` | `Person`, `BreadcrumbList` |

Recommended improvements:

- Keep `https://mxcl.dev/#max-howell` as the canonical `Person` `@id` everywhere.
- Add `provider` or `brand` links from each `Service` back to `https://mxcl.dev/#max-howell`.
- Add `mainEntityOfPage` to the homepage `Person`.
- Add `subjectOf` links for the strongest external references: Homebrew Wikipedia, Wikidata, Harper interview, Sourcegraph podcast, Stack Overflow interview, Changelog profile.
- Add `dateModified` to pages if the visible page also shows a matching updated date.

## AI Crawler and Discovery Audit

Current repo:

- `robots.txt`: allows all user agents.
- `sitemap.xml`: lists 7 canonical pages with `lastmod`.
- `llms.txt`: present and useful.
- Core content: available in raw HTML.

Live site:

- `robots.txt`: allows all user agents.
- `sitemap.xml`: available, but stale and missing `lastmod`.
- `llms.txt`: `404`.
- Core content: available in raw HTML.

Recommended `robots.txt` remains simple:

```txt
User-agent: *
Allow: /

Sitemap: https://mxcl.dev/sitemap.xml
```

## Brand Authority Signals

Strong third-party corroboration found:

- [Homebrew Wikipedia page](https://en.wikipedia.org/wiki/Homebrew_%28package_manager%29) identifies Max Howell as the author/original writer of Homebrew.
- [Max Howell on Wikidata](https://www.wikidata.org/wiki/Q64850138) connects Max Howell to Homebrew, mxcl.dev, GitHub, Hacker News, LinkedIn, Medium, Patreon, and X/Twitter identifiers.
- [GitHub profile](https://github.com/mxcl) and [Gist profile](https://gist.github.com/mxcl) reinforce the `mxcl` identity.
- [Patreon profile](https://www.patreon.com/mxcl/about) links Max Howell, Homebrew, mxcl.dev, GitHub, Twitter, and Medium.
- [Harper interview](https://www.harpersystems.dev/post/s3-e08-whats-the-creator-of-homebrew-up-to-now-w-max-howell) frames Max Howell as creator of Homebrew and discusses later open-source work.
- [Sourcegraph podcast listing via Muck Rack](https://muckrack.com/podcast/the-sourcegraph-podcast/episodes/max-howell-creator-of-homebrew-and-founder-of-tea/) references Max Howell as creator of Homebrew and founder of tea.

GEO interpretation: the entity is real and well corroborated. The site should reuse the same exact wording across the homepage, `llms.txt`, schema, LinkedIn, GitHub profile, podcast bios, and future interviews:

```text
Max Howell, also known as mxcl, created Homebrew and now helps teams build production AI systems with clearer boundaries, evals, fallback paths, release discipline, and secure agent execution.
```

## Platform Optimization

### Google AI Overviews

Current readiness: medium.

Needed:

- More answer-first content on service pages.
- Visible updated dates.
- More source-backed claims.
- Deeper topical guide pages.
- Stronger internal links from Homebrew proof to current AI work.

### ChatGPT Search

Current readiness: good in repo, weak live.

Needed:

- Deploy `llms.txt`.
- Deploy homepage `Person` and `WebSite` schema.
- Keep the entity description consistent.
- Add source-backed topical pages with direct, quotable explanations.

### Perplexity

Current readiness: medium.

Needed:

- More cited claims.
- Comparison tables.
- Concise answer blocks.
- External proof for current AI consulting work.

### Gemini

Current readiness: medium.

Needed:

- Deploy structured data.
- Add visible author/entity details.
- Add more conventional topical depth to service pages.

### Bing Copilot

Current readiness: medium.

Needed:

- Consider IndexNow after deployment.
- Strengthen schema and freshness signals.
- Ensure HTTPS canonicalization.

## Recommended Action Plan

### Immediate

- [ ] Deploy current repo so `llms.txt`, schema, sitemap `lastmod`, and updated pages are live.
- [ ] Verify `https://mxcl.dev/llms.txt` returns `200`.
- [ ] Verify live homepage contains `Person` and `WebSite` JSON-LD.
- [ ] Enforce HTTP to HTTPS redirects.
- [ ] Re-run this audit against the live site after deployment.

### This Week

- [ ] Add `provider` references from service schema to `https://mxcl.dev/#max-howell`.
- [ ] Add `subjectOf` links in homepage schema for the strongest external references.
- [ ] Add visible "Updated May 2026" dates to core service pages.
- [ ] Expand each FAQ answer to a quote-ready paragraph.
- [ ] Add a short "Evidence" or "Proof" block to each service page linking Homebrew authority to current production-system work.

### 30 Days

- [ ] Publish 3-5 technical guide pages:
  - "How to put evals around an AI agent before launch"
  - "What enterprise agent architecture means"
  - "How to design fallback paths for LLM systems"
  - "A practical checklist for secure agent tool use"
  - "When to hire a fractional Head of AI"
- [ ] Add one client-safe case study or anonymized implementation story.
- [ ] Add a media/interviews page that consolidates podcasts, interviews, talks, and third-party references.
- [ ] Update LinkedIn, GitHub profile, and podcast bios with the same entity phrase used in schema and `llms.txt`.
- [ ] Add IndexNow support if an edge layer is introduced.

## Top Recommended Pages To Add

1. `/guides/production-ai-evals/`

   A practical guide that defines evals, distinguishes offline and online evals, gives a launch checklist, and explains failure modes.

2. `/guides/secure-agent-tool-use/`

   A high-fit page for the current positioning around secure agent execution and tool boundaries.

3. `/case-studies/`

   Even one anonymized, structured case study would materially improve E-E-A-T.

4. `/media/`

   Consolidates Homebrew, tea, open-source, and AI-related interviews into a source hub.

5. `/about/`

   A canonical biography page with source links, work history, current services, and schema. The homepage currently carries too much entity responsibility by itself.

## Final Assessment

mxcl.dev has the hardest part of GEO already: a real, externally corroborated entity with strong developer authority. The current repo also now has the core AI-discovery plumbing: `llms.txt`, schema, sitemap freshness, and answer-oriented service pages. The biggest issue is operational: the live site is stale. Deploy first.

After deployment, the next ceiling is proof. To move from "good" to "excellent," the site needs more current, dated, source-backed content showing why the Homebrew-era authority transfers to production AI systems, agent architecture, and AI implementation consulting.
