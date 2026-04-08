import { Command } from 'commander'

const program = new Command()

program
    .option('-p, --port <port>', 'Puerto del servidor', 3000)
    .option('-m, --mode <mode>', 'Modo de ejecución', 'dev')
    .option('-d, --debug', 'Modo debug', false)

program.parse()

export const config = program.opts()



