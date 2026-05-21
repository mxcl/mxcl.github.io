# GEO Audit Report: mxcl.dev

**Audit date:** 2026-05-21  
**Audited URL:** https://mxcl.dev/  
**Repository:** `/Users/mxcl/src/mxcl.dev`  
**Business type:** Personal expert brand / AI consulting services  
**Core pages analyzed:** 7

## Executive Summary

**Current GEO score after fixes: 81/100 (Good, approaching excellent)**

The first deployment gap has been fixed: `https://mxcl.dev/llms.txt` returns `200`, the live sitemap includes `<lastmod>`, and live homepage, projects, and enterprise architecture pages now expose JSON-LD.

This follow-up pass applied the remaining near-term improvements that work within GitHub Pages constraints:

- Added visible `Updated May 21, 2026` freshness signals to the homepage, Homebrew page, and service pages.
- Updated sitemap `lastmod` values to `2026-05-21`.
- Expanded `llms.txt` with stronger identity links, freshness, and GitHub Pages host compatibility.
- Changed the homepage H1 to the clearer entity-led phrase: "Max Howell builds production AI systems."
- Expanded FAQ answers into more quote-ready passages.
- Added service-page evidence sections that connect the Homebrew proof point to current AI systems work.
- Added `dateModified`, `audience`, and `brand` schema properties to service pages.
- Added stronger `subjectOf` references for Wikipedia, Wikidata, Changelog, Stack Overflow, Harper Systems, and Sourcegraph/Muck Rack.
- Added `/media/` as a canonical source hub for external references and entity corroboration.

The remaining ceiling is not technical crawlability. It is current-topic authority: AI systems can easily verify "Max Howell created Homebrew"; they still need more third-party and first-party evidence for "Max Howell is a production AI systems consultant."

## Score Breakdown

| Category | Score | Weight | Notes |
|---|---:|---:|---|
| AI citability and visibility | 79 | 25% | `llms.txt`, answer blocks, FAQ schema, media hub, and clearer service copy are now in place. |
| Brand authority signals | 80 | 20% | Strong Homebrew corroboration is now consolidated in a dedicated references page. |
| Content quality and E-E-A-T | 74 | 20% | Better proof sections and freshness; still short of guide/case-study depth. |
| Technical foundations | 76 | 15% | Static HTML is fast and crawlable; GitHub Pages limits header and redirect control. |
| Structured data | 90 | 10% | Strong coverage across homepage, services, projects, breadcrumbs, and FAQs. |
| Platform optimization | 74 | 10% | Better ChatGPT/Perplexity readiness through `llms.txt`, schema, and answer-first copy. |
| **Composite GEO score** | **81** | **100%** | Strong foundation; next gains require guides, case studies, and external proof for current AI consulting. |

## GitHub Pages Constraint

The site should stay compatible with GitHub Pages and `https://mxcl.github.io`, because many existing links point there. Under that constraint:

- Keep canonical URLs pointed at `https://mxcl.dev/`.
- Keep GitHub Pages host compatibility noted in `llms.txt`.
- Do not require Cloudflare or an edge migration for this project.
- Treat missing custom security headers and imperfect HTTP redirect behavior as residual GitHub Pages limitations, not blockers.

## Structured Data Status

| Page | JSON-LD types |
|---|---|
| `/` | `Person`, `WebSite` |
| `/hire-me/` | `Person`, `OfferCatalog`, `FAQPage`, `BreadcrumbList` |
| `/ai-implementation-consultant/` | `Service`, `FAQPage`, `BreadcrumbList` |
| `/fractional-head-of-ai/` | `Service`, `FAQPage`, `BreadcrumbList` |
| `/enterprise-agent-architecture/` | `Service`, `FAQPage`, `BreadcrumbList` |
| `/projects/` | `CollectionPage`, `ItemList`, `BreadcrumbList` |
| `/homebrew/` | `Person`, `BreadcrumbList` |

Additional schema improvements now applied:

- `dateModified` on the service pages and projects collection.
- `audience` hints on service pages.
- `brand` and `provider` references back to `https://mxcl.dev/#max-howell`.
- `mainEntityOfPage` on `Person` where useful.
- Expanded `subjectOf` references on entity pages.

## Remaining High-Value Work

1. **Publish technical guide pages**

   Add 3-5 durable guides that directly answer AI-searchable production AI questions:

   - `/guides/production-ai-evals/`
   - `/guides/secure-agent-tool-use/`
   - `/guides/agent-fallback-paths/`
   - `/guides/enterprise-agent-architecture/`
   - `/guides/fractional-head-of-ai/`

2. **Add one case-study page**

   Even an anonymized case study would materially improve current-topic E-E-A-T. Suggested structure: problem, constraints, intervention, system changes, measurable result, what the team could operate afterward.

3. **Deepen the projects page**

   Each project should include consistent fields: what it is, who it is for, current status, canonical URL, and how it relates to Max Howell's current AI systems work.

4. **Mirror the entity phrase externally**

   Reuse this phrase on GitHub profile, LinkedIn, podcast bios, and future interviews:

   ```text
   Max Howell, also known as mxcl, created Homebrew and now helps teams build production AI systems with clearer boundaries, evals, fallback paths, release discipline, and secure agent execution.
   ```

## Brand Authority Signals

Strong third-party corroboration:

- [Homebrew Wikipedia page](https://en.wikipedia.org/wiki/Homebrew_%28package_manager%29)
- [Max Howell on Wikidata](https://www.wikidata.org/wiki/Q64850138)
- [GitHub profile](https://github.com/mxcl)
- [GitHub Gist profile](https://gist.github.com/mxcl)
- [Patreon profile](https://www.patreon.com/mxcl/about)
- [Harper Systems interview](https://www.harpersystems.dev/post/s3-e08-whats-the-creator-of-homebrew-up-to-now-w-max-howell)
- [Sourcegraph podcast listing via Muck Rack](https://muckrack.com/podcast/the-sourcegraph-podcast/episodes/max-howell-creator-of-homebrew-and-founder-of-tea/)
- [Changelog profile](https://changelog.com/person/mxcl)
- [Stack Overflow interview page](https://stackoverflow.blog/max-howell/)

## Final Assessment

mxcl.dev now has a strong GEO foundation: crawlable static HTML, `llms.txt`, sitemap freshness, canonical schema, answer-first service content, FAQ schema, a media/reference hub, and a source-backed entity graph. The next step is content expansion rather than plumbing. The most valuable move is to publish a small library of technical guides and one evidence-backed case study that connect Max Howell's established Homebrew authority to production AI systems, agent architecture, and implementation consulting.
