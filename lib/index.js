#!/usr/bin/env node

const path = require("path")
const cac = require('cac')
const chalk = require('chalk')
const download = require('./download')
const { version } = require('../package.json')
const cli = cac('create-ep-app')
cli
    .command('<dir>', 'Generate in a custom directory or current directory')
    .action((dir) =>{
        console.log(dir)
        console.log(chalk`{cyan create-ep-app v${version}}`)
        console.log(chalk`✨  Generating Nuxt.js SSR template project in {cyan ${dir}} directory.`)
        download(dir).then((target) => {
            console.log(chalk`{cyan generate success!}`)
            console.log(chalk`{green \tcd ${target} }`)
            console.log(chalk`{green \tnpm install }`)
            console.log(chalk`{green \tnpm run dev }`)
        })
    })

cli.help()

cli.version(version)
cli.parse()
