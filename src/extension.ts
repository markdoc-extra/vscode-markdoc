import * as path from 'path'
import * as vscode from 'vscode'
import { LanguageClient } from 'vscode-languageclient/node'

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
      client.error('Failed to restart client', e, 'force')
    }
  })

  client = new LanguageClient(
    'markdoc-ls',
    'Markdoc Language Server',
    { module: serverModule },
    { documentSelector: [{ scheme: 'file', language: 'markdoc' }] }
  )

  await client.start()
}

export async function deactivate(): Promise<void> | undefined {
  if (client) {
    await client.stop()
  }
}
