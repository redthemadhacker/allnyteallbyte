# All Nyte All Byte // Digital Engineering & Cybersecurity Studio

> **Live Production:** [https://www.allnyteallbyte.co](https://www.allnyteallbyte.co)  
> `root@allnyteallbyte:~# code // coffee // repeat // EST. 2026`

---

## Overview

**All Nyte All Byte** is an independent digital engineering and cybersecurity studio platform built for rapid deployment, hardened architectures, and direct engineer-to-client execution. 

The site serves as the studio's primary digital flagship, featuring interactive venture portals, rate transparency via a live scope estimator, and client intake workflows engineered with a dark-mode terminal and crimson aesthetic.

---

## Technical Stack

- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Custom Crimson Glow & Cyber-Grid UI)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Hosting & Infrastructure:** [Heroku](https://www.heroku.com/)
- **DNS & SSL:** Exact Hosting (CNAME pointing to Heroku DNS target with Automated Certificate Management / Let's Encrypt)
- **Production Server:** `serve` (Static single-page application delivery)

---

## Key Modules & Architecture

The application implements client-side hash routing (`#/`, `#/ventures`, `#/services`, `#/estimator`, `#/intake`, `#/channels`) managed via `App.tsx` to ensure static host compatibility and zero-refresh routing.

* **`Hero.tsx` & `HomePage.tsx`:** Primary studio landing containing the dominant value proposition, operating metrics (24–72h turnaround sprints, 100% direct engineer access, 3 AM late-night dedicated builds), and navigation portals.
* **`VenturesPage.tsx`:** Showcases active in-house software ventures, including *Phonixia* (the open-world educational phonics engine) and development roadmaps.
* **`ServicesPage.tsx`:** Rate card and studio capabilities across Full-Stack Web Builds ($200–$250), Cybersecurity Audits ($100), Network Infrastructure Setup ($100), and ATS Technical Resume Optimization ($45).
* **`EstimatorPage.tsx`:** Interactive project scope calculator enabling prospective clients to toggle add-ons, view live turnaround projections, and forward calculated estimates directly to the intake portal.
* **`IntakePage.tsx`:** Streamlined intake terminal that pre-populates project briefs and scopes generated from the services or estimator modules.
* **`ChannelsPage.tsx`:** Direct developer hubs, live-stream links, and communication lines.

---

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://git.heroku.com/allnyteallbyte.git](https://git.heroku.com/allnyteallbyte.git)
   cd allnyteallbyte