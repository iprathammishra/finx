# Finance, with an AI edge

Pratham's minimal, buildless career guide and personal tracker. CFA Level I August 2027 target → finance-facing AI / analytics role → Level II → MBA → business and investment decisions.

## Run

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. No install or build required. The white home page links to separate guides, short articles and a tracker. Pages use Apple system fonts and a wide responsive layout.

## Three versions on GitHub Pages

- Production (`master`): https://iprathammishra.github.io/fin-tracker/
- Codex Cloud / mobile (`cloud`): https://iprathammishra.github.io/fin-tracker/cloud/
- Mac (`remote`): https://iprathammishra.github.io/fin-tracker/remote/

The workflow assembles the current snapshots of all three branches into one Pages deployment. In repository Settings → Pages, the source must be **GitHub Actions**. Preview branches never automatically promote into master. Read AGENTS.md before editing; fetch all remote refs, update the intended branch, and use task worktrees for concurrent work.

## Tracker and audio

Milestones, study hours, mock scores, applications and notes save in localStorage. The three branch URLs share tracker data on the same browser/origin. Different browsers and devices do not sync. Export/import JSON transfers progress. Reset/import asks before replacing data. No personal records are sent to GitHub.

Listen uses browser speech synthesis and device voices, without an API key. Per-article and per-page playback support pause, stop, speed and voice selection. The player prefers enhanced / natural English voices when installed and adds sentence pauses. It cannot make a basic device voice sound like neural narration; use an enhanced voice on your device for better quality. Availability and background playback depend on browser/OS; keep the tab active. Listening covers the guide, not private tracker entries.

## Content and evidence

Links are in the articles beside their claims. Research date: 10 October 2026. The guide uses 2027 CFA topic weights. August 2027 dates/fees require checking the live official calendar. Job examples establish responsibilities and location, not permanent vacancies. Salary bands are explicitly judgment-based fixed-pay planning estimates, not employer disclosures. MBA / career timelines are recommendations, not admission or job guarantees.

Image: `assets/bull-bear.jpg`, EvaK, “Bulle und Bär Frankfurt”, Wikimedia Commons, CC BY-SA 2.5, unmodified. Source and license are also credited inline.

Additional photos: `cat-laptop.jpg`, Emna Mizouni, CC BY-SA 4.0 (unmodified); `trading-floor.jpg`, Thomas J. O’Halloran, Library of Congress / U.S. News & World Report collection, public domain. Full source and license links appear beside each photo. Inline SVG decision graphs use illustrative values, not market data.
