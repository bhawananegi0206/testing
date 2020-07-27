# TOODO-001: load more

create a section (load more) u can use atoms and elements which already exist or create your own elements.
You can hardcode this HTML or build this dynamic with nunjucks and data.js. like the component-feature in this project.

The (load more) section should have at least 22 items(cards), 3 items(cards) in a row on desktop and 1 item per row on mobile.
when the site is loaded u should only see 3 items(cards) and a button(load more).

Each item(card) has a header, bodytext, button and also an box shadow on hover.
AC:
	-header(h2)
	-bodytext(p)
	-button(link)
	-on hover shadow


the load more Function should be handled with javascript to show the next 6 items per click.
AC:
	-Button (load more)
	-on click load 6 more items(cards)

## TOODO--002: Aria-labels Concept

can u write an small basic concept for our components to add aria roles and labels.
So that user with disabilities can also use our components.
- [Aria](https://www.w3.org/TR/html-aria/)

## Important

to start the component libary and the developing Surrounding:

Start developing using the following command. You browser will open, wait for code-changes and live-reload instantly when you update your files. JS, SASS and Nunjucks will be compiled on-the-fly.


```sh
yarn start
```

After you see the startpage of malvid u can click the CTA live Demo to get to the developing Surrounding.
or u can use this url be aware the localhost port can be different - [Developing](http://localhost:3000/ui/index.html#/)

## Setup

for the setup pls read the readme
