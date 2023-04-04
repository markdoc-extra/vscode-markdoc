import * as path from 'path'
import * as vscode from 'vscode'
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from 'vscode-languageclient/node'

let client: LanguageClient

export async function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration('markdoc')
  const shouldRunLsp = config.get('experimental') as boolean
  if (!shouldRunLsp) return

  const serverPath = config.get('serverPath') as string

  const serverModule = serverPath
    ? path.resolve(serverPath)
    : context.asAbsolutePath(
        path.join('node_modules', 'markdoc-ls', 'bin', 'markdoc-ls')
      )

  vscode.commands.registerCommand('markdoc.restart', async () => {
    try {
      await client.restart()
    } catch (e) {
      client.error('failed to restart client', e, 'force')
    }
  })

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: 'file', language: 'markdoc' }],
  }
  const serverOptions: ServerOptions = {
    module: serverModule,
    transport: TransportKind.ipc,
  }

  client = new LanguageClient(
    'markdoc-ls',
    'Markdoc Language Server',
    serverOptions,
    clientOptions
  )

  try {
    await client.start()
  } catch (e) {
    client.error('failed to start client', e, 'force')
  }
}

export function deactivate() {
  if (client) {
    return client.stop()
  }
}
