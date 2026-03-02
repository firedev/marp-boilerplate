# Marp Boilerplate

Fork this repo and start building your next presentation in markdown.

Uses [Marp CLI](https://github.com/marp-team/marp-cli) v4.

## Docs

https://marp.app/

## Installation

```
yarn
```

## Demo

```
yarn index
```
* [index.html](index.html)
* [index.pdf](index.pdf)

## Tasks

Specify the filename to build using the `V=` variable.

- `V=index yarn build` - build HTML, PDF and push to Github Pages
- `V=index yarn build:html` - build HTML
- `V=index yarn build:pdf` - build PDF
- `V=index yarn watch:html` - continuously watch and build HTML
- `yarn serve` - launch a web server
