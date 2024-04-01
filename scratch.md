<!-- ## Rendering

-   Static

<v-click>

-   SSR with SWR Cache-Control

</v-click>

<v-click>

-   Always ship rendered HTML to the user

</v-click>

## Interactivity

-   Minimal
-   Search
-   Progressive enhancement

---

## Hydration

-   Partial
-   Progressive
-   Resumable

---

## Routing

-   HTML Swap
-   Hybrid

---

## Examples

-   Astro + Solid, Svelte, or Preact
-   Elder.js
-   îles
-   Qwik
-   Marko
-   Next.js 13 App Router -->

HTTP stale-while-revalidate caching directive 

The result: a static document at the edge

Instead of fetching all of the data and rendering the pages to static documents at build/deploy time, the cache is primed when you're getting traffic

Documents are served from the cache and revalidated in the background for the next visitor

Like SSG, no visitor pays the download + render cost when you're getting traffic

SWR is a great alternative to SSG and many CDNs support it

If you fetch your data on the client, you can't load images until it loads data, you can't load data until you load JavaScript, and you can't load JavaScript until the document loads
The user's network is a multiplier for every single step in that chain 😫
By always fetching on the server removes the user's network as a multiplier everywhere else

<!-- ## Treat search as a routing and data event -->

<!--
Before Remix, most client-side routers didn't treat routing as a data event. They simply handled navigation, but if we look at the web... That's not really how routing works.

HTTP routing — the backbone of the entire web — is not just a navigation event, but a data event. When we navigate to a new URL, we also fetch the data to render that page at our destination as a part of that navigation. In the olden days this was done entirely on the server with something like Rails. With the advent of client-side routing, most routers would just fetch the JavaScript required to start rendering the page and then that JavaScript would fetch the data it needed. But Remix (and React Router 6.4+) changed all that with the introduction of loaders and actions.

Loaders run on every route change and they run in parallel for every route segment. This allows data to be fetched while you render and allows all of the data needed for the page to be fetched at once, without waiting for one component to render before the data inside of that component can be fetched.

Actions perform a similar function, but for mutative navigations. The native control for mutating data in HTML is the classic <form> element. But in HTML, form submission is a routing and navigation event! And Remix respects this behavior in their client-side <Form> implementation, calling an action on the server when a form submission is received and then calling the page's loader again to revalidate any data that may have been changed by the action.

Search can be accomplished with a <form> as well, and the default form is actually a HTTP GET call, meaning it triggers navigation and data loading on submission. This is commonly used for search in concert with query params (also called SEARCH params) and works extrodinarily well with Remix's loaders. When a search <form> is submitted with a GET method, the loader is called again and the page revalidated with new data from the search.
-->
