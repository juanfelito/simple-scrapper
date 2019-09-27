const getPage = require('./functions/getPage')
const writeFile = require('./functions/writeFile')

async function execute() {
  const page = await getPage('link-falso')
  await writeFile(page, 'hola')
}

execute()