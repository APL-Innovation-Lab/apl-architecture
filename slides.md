---
theme: ./theme
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
title: APL Website Architecture
layout: intro
---

# APL Website Architecture

<!--
These are several different techniques we could employ to make the APL website run faster. 
-->

---

## Holotypes

<div class="flex flex-col gap-4">
    <Holotype 
        emojiIcon="📰" 
        title="Content Websites"     
        holotype="CNN"
        examples="FT, BBC, BuzzFeed, Engadget, Salon, Smashing Magazine, The Onion"
        characteristics="discoverability, rich media, embedded content"
        constraints="shallow session depth (~1), resource contention from ads & multivariate testing, SEO"
        idealImplementation="Server-rendered site with SPA routing."
        idealDelivery="PWA in default display mode."
    />
    <Holotype 
        emojiIcon="📨" 
        title="PIM Applications"     
        holotype="Gmail"
        examples="Google Calendar, Outlook.com, Fastmail"
        characteristics="thick-client, infinite lists, embedded content, rich text editing, sanitization, storage, offline & sync, notifications"
        constraints="extended session length, sensitive & largely uncacheable data, high security risk, often offline"
        idealImplementation="Single Page App with app shell caching."
        idealDelivery="PWA in standalone display mode."
    />
</div>

<!--
There’s this great blog post by Jason Miller titled “Application Holotypes: A Guide to Architecture Decisions” that breaks down the major website categories you’ll see across the modern web landscape and talks about the ideal strategies for implementing them.

The Austin Public Library website falls somewhere in between these two holotypes. For the main website, it's more on the side of a content or marketing website, but for certain embedded applications like the room reservation UI, it's closer to a personal information management application.

The techniques I'll describe here try to strike a balance of performance for both types of websites.
-->

---

## What Are We Optimizing For?

<v-clicks class="text-2xl mt-4">

* Simplicity
* Discoverability (SEO)
* Initial page load

</v-clicks>

---

## How Do We Achieve These Goals?

<v-clicks class="text-2xl mt-4">

1. Do as much work on the server as possible
2. Send as little data over the network as possible
3. Ship HTML to your users
4. Make pages work before JavaScript loads
5. Embrace web standards and browser defaults

</v-clicks>

---

## Do as much work on the server as possible

<div class="flex flex-col p-3 items-center">
    <img src="/wpt-hkg-search-3G.gif" width="500">
</div>

* If you fetch your data on the client, you can't load images until it loads data, you can't load data until you load JavaScript, and you can't load JavaScript until the document loads

<v-clicks>

* The user's network is a multiplier for every single step in that chain 😫
* Always fetching on the server removes the user's network as a multiplier everywhere else

</v-clicks>

<!--
When you do your work on the server, you can start fetching immediately when a request is received

You don't have to wait for the browser to download the document and then the JavaScript

It doesn't matter how slow the user's network is, your server's network is always consistent
-->

---

## Send as little data over the network as possible

* Mobile network

<div class="flex justify-center">
    <img src="/us_smartphone_dependence_pew.webp" class="h-[26rem] border border-gray-200 dark:border-none">
</div>

<!--
As smartphone ownership and use grow, the frontends we deliver remain mediated by the properties of those devices. The inequality between the high-end and low-end is only growing, even in wealthy countries. What we choose to do in response defines what it means to practice UX engineering ethically.
-->

---
transition: none
---

## Send as little data over the network as possible

* Nested routing

<div class="flex justify-center">
    <video autoplay="true" loop="true" class="h-[26rem]">
        <source src="/nested-routing.mov" type="video/mp4" />
    </video>
</div>

<!-- 
Instead of fetching and rendering all of the data for the entire page every time the URL changes, if you nest routes, you only have to send the data for the portion of the page that has changed.
-->

---
transition: none
---

## Send as little data over the network as possible

* Partial hydration / Islands

<div class="flex justify-center">
    <img src="/islands-architecture.png" class="h-[26rem]">
</div>

<!-- 
The general idea of an “Islands” architecture is deceptively simple: render HTML pages on the server, and inject placeholders or slots around highly dynamic regions. These placeholders/slots contain the server-rendered HTML output from their corresponding widget. They denote regions that can then be "hydrated" on the client into small self-contained widgets, reusing their server-rendered initial HTML.

Islands architecture results in better frontend performance by helping you avoid monolithic JavaScript patterns and stripping all non-essential JavaScript from the page automatically.

As opposed to many modern server-rendered JavaScript frameworks, with islands you only need to send JavaScript for the parts of the page that are actually interactive.
-->

---

## Ship HTML to your users

* Websites should work as soon as you can see them: progressive enhancement!

<v-clicks>
<div>

* Websites that are rendered entirely via JavaScript require waiting for the script(s) to download and execute before anything is displayed to users

<div class="my-4 ml-5 w-1/2">

```
HTML        |---|
JavaScript      |---------|
Data                      |---------------|
                            page rendered 👆
```

</div>
</div>
<div>

* HTML will download and display quicker than JavaScript and allows more parallel execution

<div class="mt-4 ml-5 w-1/2">

```
               👇 first byte
HTML        |---|-----------|
JavaScript      |---------|
Data        |---------------|
              page rendered 👆
```

</div>
</div>
</v-clicks>

---

## Make pages work before JavaScript loads

<v-clicks class="text-xl mt-4">

* Why? [Everyone has JavaScript, right?](https://www.kryogenix.org/code/browser/everyonehasjs.html)
* The data layer of your site should function with or without JavaScript on the page
* It will make your website *feel* faster
* This is part of progressive enhancement 

</v-clicks>

---

## Embrace web standards and browser defaults

<div class="text-xl">

* `<form>`
* `<link rel="prefetch">`
* URLs for assets
* `Cache-Control`

</div>

<!-- 
Using `<form>` for mutations simplifies data flow through your application and leverages the server more than the client.

Enable prefetching of all assets for a page using `<link rel="prefetch">` to enable an instant navigation to that page.

By making your assets all URLs, they can be effectively cached and preloaded.

The HTTP stale-while-revalidate caching directive results in a static document at the edge.

Instead of fetching all of the data and rendering the pages to static documents at build/deploy time, the cache is primed when you're getting traffic. Documents are served from the cache and revalidated in the background for the next visitor. Like static site generation (SSG), no visitor pays the download + render cost when you're getting traffic. SWR is a great alternative to SSG and many CDNs support it.
-->

---

## Architecture Recommendations

<v-clicks class="text-xl mt-4">

<div>

### Server Rendering

* With the flexibility to server render & not use React: **Astro with Preact Islands**
* If we can server render, but want to use React: **Remix**

<br />
</div>
<div>

### Client Rendering

* For a greenfield rewrite focused solely on client-rendering: **Remix**
* For an incremental rewrite, working within Drupal: **Sprinkles of Preact or Lit web components**

</div>

</v-clicks>

<!--
If we're able to stand up a server in order to server-render pages, we have two options:

The more exotic option is to use Astro with Preact Islands. Astro is an islands-first, server-first framework that has a syntax very similar to React's JSX. It would allow us to skip sending JavaScript to the client for everything that doesn't require in-browser interactions and still allow us to have smooth routing interactions using their new View Transitions router. For interactive portions of the page (islands), we can use Preact, which has an API identical to React, but has a much smaller bundle size for both the vendor packages and components.

If we want to stick with React, we should use Remix, hands down. Remix embraces all of the aforementioned performance techniques and, while it has a larger bundle size because it's using React, which is quite heafty does full-page hydration (for now), it's by far and away the most performant React meta-framework.

While it's not advisable, if we're not able to use a dedicated server for rendering the website, we have two other options for an entirely client-rendered website:

Remix also supports fully client-rendered websites. This allows us to continue to leverage the Remix performance features, DX features, and ecosystem without having to create our own bundler set-up. This would be ideal for a greenfield rewrite of the website, route by route.

If we want to go truly incremental, replacing small portions of a page at a time with more modern code, while keeping the rest of the page server rendered by Drupal, we can utilize Preact and its small bundle size, or go with the more native (and possibly easier to embed?) web components using Lit. However, this will be the least performant option and the most challenging to architect.
-->

---
layout: new-section
---

<!--
This page intentionally left blank

That's what I've got for you today. Does anyone have any questions?
-->
