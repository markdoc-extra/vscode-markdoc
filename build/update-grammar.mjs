import * as vscodeGrammarUpdater from 'vscode-grammar-updater'
import * as fs from 'fs'

function injectMarkdoc(grammar) {
  grammar.name = 'Markdoc'
  grammar.scopeName = 'text.html.markdoc'
  const injections = JSON.parse(fs.readFileSync('./build/markdoc.json', 'utf8'))
  grammar.repository = {
    ...grammar.repository,
    ...injections,
  }
  grammar.repository.block.patterns.push({
    include: '#markdoc',
  })
  grammar.repository.inline.patterns.push({
    include: '#markdoc',
  })
}

vscodeGrammarUpdater.update(
  'microsoft/vscode-markdown-tm-grammar',
  'syntaxes/markdown.tmLanguage',
  './syntaxes/markdoc.tmLanguage.json',
  injectMarkdoc
)
