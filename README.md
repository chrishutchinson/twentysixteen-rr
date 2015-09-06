# Twenty Sixteen, REST + React
## Chris Hutchinson, 2015

A web app that mirrors the look, feel, and functionality of the [Twenty Sixteen WordPress theme](http://github.com/WordPress/TwentySixteen).

## Current Functionality

- Index
- Archive
- Search
- Header
- Menu
- Sidebar (Search)
- Footer
- Single post
- Single page

## Rationale

This app has been built to:

1. Learn some React
2. Create an example WordPress "theme" using the REST API
3. Encourage discussion around the future of WordPress the REST API

## Requirements

- v1.x of the [WP REST API](https://wordpress.org/plugins/json-rest-api/)
- [The WP-API Menus plugin](https://wordpress.org/plugins/wp-api-menus/)

## Running & Building

- Clone this repo
- Run `npm install` from the root of the directory
- Run `grunt serve` to run the server
- Run `grunt build` to build to the `/dist` directory

This app was scaffolded out using [generator-react-webpack](https://github.com/newtriks/generator-react-webpack). You can use that to add new React components, actions or stores.

## Things to know

This isn't built as an installable WordPress, _yet_. It should be run separate to your WordPress installation at present.

## To do

- [ ] Get this code rendering on a server, ensuring the first load comes through without a flash of blank content
- [ ] Build out the remaining sidebar widgets
- [ ] Build out taxonomy pages
- [ ] Add commenting to posts
- [ ] Add authentication for users via oAuth
- [ ] Create a config file for the API endpoint
- [ ] Add support for v2 of the WordPress REST API
- [ ] Figure out how to deal with custom menu items
- [ ] Add transitions between routes
- [ ] Build this into a packaged WordPress theme
- [ ] Fix issues when switching between the same route (e.g. searching for 'new', then searching again for 'hello' – the Archive component does not update)
