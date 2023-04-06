# Change Log

All notable changes to the "repo" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

## 0.6.0

- esbuild-wasm is now bundled with extension to enable effecient config parsing.

## 0.5.0

- We now generate grammar from tmLanguage. This ensures that markdown grammar is always up-to-date. The markdoc part of grammar lives in `scripts/markdoc.json`.
- There is new language server bundled with extension. It can be enable by setting `markdoc.experimental` config to `true`.

## 0.4.1

- Limited to highlighting `.mdoc` and `.markdoc` files only. Highlighting all markdown extensions should be left to user.
- Fixed floats not being recognized.

## 0.4.0

- Hightlight tags and entity names same as html in order to support more themes

## 0.3.1

- Added autoclosing pair

## 0.3.0

- Enabled markdoc inside html
- Enabled markdoc for all markdown extensions

## 0.2.1

- Addressed broken multiline highlights

## 0.2.0

- Added object and array highlights
- Built on the top of markdown

## 0.1.0

- Basic implementation
