Arch Front-End Developer Test

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 🎯 Objective
Build a "SpaceX Mission Explorer" using the **Next.js App Router**. This test evaluates your ability to handle Server Components, complex data fetching, and high-performance UI patterns.

---

## 🛠️ The Challenge
Your task is to build a dashboard that allows users to explore SpaceX launches. You will use the public [SpaceX API (v4)](https://github.com/r-spacex/SpaceX-API) to fetch real-time data.

### 1. Core Requirements
* **Launch Feed (Server Components):** Fetch and display a list of recent launches using React Server Components. Use `loading.tsx` to show a skeleton state while the data streams in.
* **Launch Details (Dynamic Routes):** Implement a dynamic route that shows detailed information about a specific mission, including the rocket used and a link to the YouTube webcast.
* **Filtering & Pagination (Client Interactivity):** * Add a filter for "Success" vs "Failed" missions.
    * Implement a search bar to filter by mission name.
    * **Bonus:** Use URL Search Params (e.g., `?status=success`) so the view is shareable.

### 2. API Reference
You will use the following endpoints:
* **List Launches:** `https://api.spacexdata.com/v4/launches`
* **Single Launch:** `https://api.spacexdata.com/v4/launches/{id}`

### 3. Components
ShadCN has been initialised but the components have not been setup. Please set up and use two components from their library `https://ui.shadcn.com/docs/components`

### 4. Design
You can use any styles you like just make it responsive across desktop, tablet & mobile. 
**Bonus:** Implement some kind of animation with your preffered animation library. 

## Environment Variables

Create a `.env` file in the root of the project and add:

### SPACE_X_API_BASE_URL=https://api.spacexdata.com/v4