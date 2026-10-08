const fs = require('fs')
const path = require('path')

const heroPath = path.resolve('src/assets/imagemgerada1791407667490-15f6d.png')
const portraitPath = path.resolve('src/assets/4-6c579.jpeg')

const heroStat = fs.statSync(heroPath)
const portraitStat = fs.statSync(portraitPath)

let sharpOk = false
try {
  require('sharp')
  sharpOk = true
} catch (e) {}

const report = `Hero: ${heroStat.size} bytes | Portrait: ${portraitStat.size} bytes | Sharp: ${sharpOk}`
throw new Error(report)
