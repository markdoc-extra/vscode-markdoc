<h1 align='center'>Markdoc</h1>
<p align="center">
  <b>Syntax highlighting for Markdoc</b><br/>
  <sub>Visit <a href="https://markdoc.io">markdoc.io</a> to learn more about markdoc</sub>
</p>
<p align='center'>
  <a href="https://github.com/mohitsinghs/vscode-markdoc/actions/workflows/release.yml">
    <img alt="Release" src="https://img.shields.io/github/actions/workflow/status/mohitsinghs/vscode-markdoc/release.yml?style=flat-square" />
  </a>
  <a href="https://github.com/mohitsinghs/vscode-markdoc/blob/main/LICENSE">
    <img alt="LICENSE" src="https://img.shields.io/github/license/mohitsinghs/vscode-markdoc?style=flat-square" />
  </a>
  <img alt="version" src="https://img.shields.io/visual-studio-marketplace/v/mohitsingh.markdoc?style=flat-square" />
  <img alt="installs" src="https://img.shields.io/visual-studio-marketplace/i/mohitsingh.markdoc?style=flat-square" />
  <img alt="downloads" src="https://img.shields.io/visual-studio-marketplace/d/mohitsingh.markdoc?style=flat-square" />
</p>
<br />

## Usage

`.mdoc` and `.markdoc` files will be highlighted by default with this. For others, you'll need to choose `markdoc` from language picker.

To make this syntax default for your markdown files as well, add following to settings &mdash;

```json
"files.associations": {
  "*.md": "markdoc"
}
```

## Screenshot

![screenshot](https://user-images.githubusercontent.com/4941333/170298388-213860ae-2a18-45ff-a830-f451e39eb266.png)

## Contributing

Make a PR [to the repo](https://github.com/mohitsinghs/vscode-markdoc) if you want to improve this syntax until official extension is out.
