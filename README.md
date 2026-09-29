# PocketSmart AI

A presentation-ready demo based on the uploaded PocketSmart AI project specification.

## Features
- Home Interior Budget Planner
- Party Budget Planner
- Jewelry Budget Planner
- Budget-aware simulated recommendations
- Responsive mobile-friendly UI
- Optional outfit image input in Jewelry Planner

## Run locally
Open `index.html` in a browser.

For a local server:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Production upgrade
The project specification describes FastAPI + Gemini integration and routes such as:
- `/generate-home`
- `/generate-party`
- `/generate-jewelry`
- `/register`, `/login`, `/logout`
- `/token`
- `/session-info`
- `/session-data`
- `/history`

The current demo intentionally runs without an API key so it can be shown safely as a front-end prototype. Add the Gemini API and live platform integrations for a production deployment.
