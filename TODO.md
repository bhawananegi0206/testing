# TODOs
- TODO 1: Load more section
- TODO 2: Aria-labels Concept

## TODO 1: Load more section
Create a section (load more) using existing atoms and components, or create your own.
You can either hard-code the HTML, or create a dynamic component with Nunjucks and data.js, like the other components in this project.
The (load more) section should have at least 22 [cards](http://localhost:3000/assets/components/link/link.html), each with its own text and button, with 3 cards per row on desktop and 1 card per row on mobile.
The initial view of the section should only show 3 cards and a "load more" button.
Each card should have a headline, text, button and also a box shadow on hover. The design of the component is up to you. Included is an example design you may use.

AC (Card):

- Headline (h2)
- Bodytext (p)
- Button (link)
- Shadow on hover over card

The "load more" function should be handled with javascript and should show the next 6 items every time the button is clicked.
The "load more" button should disappear once all cards are loaded.

AC ("Load more" button):

- "Load more" button
- Load 6 more cards on click

## TODO 2: Aria-labels Concept
Write a basic concept for adding [aria roles and labels](https://www.w3.org/TR/html-aria/) to our components, so that users with disabilities can also use them. The method is entirely up to you.

## Important
After installing the project with yarn (for more details, read the Readme), start developing using the following command. You browser will open, wait for code-changes and live-reload instantly when you update your files. JS, SASS and Nunjucks will be compiled on-the-fly.
```sh
yarn start
```
In the browser you should see the component library

### Paths
- Components: /src/assets/components
- Stylesheets: /src/assets/styles
- Scripts: /src/assets/scripts