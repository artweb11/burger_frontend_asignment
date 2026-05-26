# Burger Frontend 1.0

This is a proof of concept of a burger frontend.

## Requirements

nodejs stable 24.14.1 ( nvm use stable )

## Installation

`npm install`

## Running the repo

`npm run dev`

## Linting

`npm run lint`

## Backend example

A simple backend can be created for the burgers api:

```ts
import { Hono } from "hono";
import burgers from "./data/burgers.json";
import topBurgers from "./data/top-burgers.json";

const app = new Hono();

// GET /burgers
app.get("/burgers", (c) => {
  return c.json(burgers);
});

// GET /top-burgers
app.get("/top-burgers", (c) => {
  return c.json(topBurgers);
});

// GET /burgers/:id
app.get("/burgers/:id", (c) => {
  const id = c.req.param("id");
  const burger = (burgers as any[]).find((b) => b.id === id);

  if (!burger) {
    return c.json({ error: "Burger not found" }, 404);
  }

  return c.json(burger);
});

export default app;
```

## Architecture & libraries

![App architecture](screenshots/frontend_diagram.png)

This repo uses the following libraries:

```
react
tailwindcss
shadcn
lucide-react
react-router-dom
tanstack-query
axios
zod
three
react-three/fiber
react-three/drei
react-three/postprocessing
```

## AI tooling

I have used Google Stitch to create inspiration for a design for this frontend. The design can be seen here:
https://stitch.withgoogle.com/projects/6331707393307073262

I have used ChatGPT for burger prompts, Nano Banana for burger image generation, PatinaAI for 3d PBR textures, Blender for 3d modelling

##Considerations on choice of hosting
Vercel or Netlify or any cloud platforms are recommended as the react is a mostly static SPA. For backend, most of the cloud platorms also have pretty good free quotas and paid plans can guarantee better stability than an overcrowded cloud VPS where memory is mostly limited.
Alternatively this can also be hosted as a static bucket in AWS S3, which can be very cheap to run.

##Considerations on security and privacy
In case the data/information is membership only, a jwt token system can be implemented with the api backend, and token-refresh system can rotate the jwt every 30/60mins to protect unauthorized access to api
For security, the website should be served under HTTPS only (as it's mostly default these days) and care should be given to sanitization of inputs/image upload (especially on the add burger form)
For accesibility, proper aria labels and accesible tab navigation can be added. For lower end devices i would recommend disabling the 3d hero and show a standard image or a simple animated gif.
