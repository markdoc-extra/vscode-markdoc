import * as path from 'path'
import * as vscode from 'vscode'

import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from 'vscode-languageclient/node'

let client: LanguageClient

export function activate(context: vscode.ExtensionContext) {
  const serverPath = vscode.workspace
    .getConfiguration('markdoc')
    .get('serverPath') as string

  const serverModule = serverPath
    ? path.resolve(serverPath)
    : context.asAbsolutePath(
        path.join('node_modules', 'markdoc-ls', 'bin', 'markdoc-ls')
      )
  const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] }

  const serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
      options: debugOptions,
    },
  }

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: 'file', language: 'markdoc' }],
  }

  vscode.commands.registerCommand('markdoc.restart', async () => {
    try {
      await client.restart()
    } catch (e) {
      client.error('Failed to restart client', e, 'force')
    }
  })

  client = new LanguageClient(
    'markdocLanguageServer',
    'Markdoc Language Server',
    serverOptions,
    clientOptions
  )

  client.start()
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined
  }
  return client.stop()
}
