<h1 align='center'>Markdoc</h1>
<p align="center">
  <b>Language support for Markdoc</b><br/>
  <sub>Visit <a href="https://markdoc.dev">markdoc.dev</a> to learn more about markdoc</sub>
</p>
<p align='center'>
  <a href="https://github.com/markdoc-extra/vscode-markdoc/actions/workflows/release.yml">
    <img alt="Release" src="https://img.shields.io/github/actions/workflow/status/markdoc-extra/vscode-markdoc/release.yml?style=flat-square" />
  </a>
  <a href="https://github.com/markdoc-extra/vscode-markdoc/blob/main/LICENSE">
    <img alt="LICENSE" src="https://img.shields.io/github/license/markdoc-extra/vscode-markdoc?style=flat-square" />
  </a>
  <img alt="version" src="https://img.shields.io/visual-studio-marketplace/v/mohitsingh.markdoc?style=flat-square" />
  <img alt="installs" src="https://img.shields.io/visual-studio-marketplace/i/mohitsingh.markdoc?style=flat-square" />
  <img alt="downloads" src="https://img.shields.io/visual-studio-marketplace/d/mohitsingh.markdoc?style=flat-square" />
</p>
<br />

## Usage

This extension enables Language support for Markdoc files ( files with `.mdoc` or `.markdoc` extensions ).

> Experimental support for formatting, linting and other features is work in progress and can be enabled with `markdoc.experimental` setting. See [supported features](https://github.com/markdoc-extra/markdoc-ls/discussions/2)

## Screenshot

![screenshot](https://user-images.githubusercontent.com/4941333/170298388-213860ae-2a18-45ff-a830-f451e39eb266.png)

## Commands

- `Markdoc: Restart Language Server` - This commands restarts Markdoc Language Server.

## Settings

This extension provides following settings &mdash;

- `markdoc.experimental` : This enables experimental language server and related features. ( `boolean` , default : `false` )
- `markdoc.serverPath` : Custom path of markdoc language server binary (markdoc-ls).

## Contributing

Make a PR [to the repo](https://github.com/markdoc-extra/vscode-markdoc) if you want to improve this extension.

The language grammar is generated from [vscode-markdown-tm-grammar](https://github.com/microsoft/vscode-markdown-tm-grammar). Any grammar related modification should go to `./build/markdoc.json` and a subsequent `npm run update-grammar` will generate `./syntaxes/markdoc.tmLanguage.json`.
