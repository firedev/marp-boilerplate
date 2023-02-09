# Markdown Presentation Toolkit Boilerplate

Fork this repo and start building your next presentation in markdown.

## Docs

https://marp.app/

## Installation

```
yarn
```

## Build

```
V=<FILENAME> yarn build
```

## Demo

```
yarn index
```
* [index.html](index.html)
* [index.pdf](index.pdf)

## Tasks

You need to specify the filename to build using `V=` variable.

- `V=index yarn build` - build HTML, PDF and push to Github Pages
- `V=index yarn watch:html` - continuously watch and build HTML
- `yarn serve` - launches a webserver
- `V=index yarn build:pdf` - only build PDF
- `V=index yarn build:html` - only build HTML

