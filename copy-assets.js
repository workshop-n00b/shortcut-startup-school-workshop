const fs = require('fs')

const copyToDist = (filename) => {
  console.log(`Copying ${filename}...`)
  fs.copyFileSync(`src/public/${filename}`, `dist/public/${filename}`)
}

try {
  copyToDist('favicon.ico')
  console.log('Copied asserts.')
} catch (err) {
  console.error(`Failed copying assets: ${err.message}`)
}
