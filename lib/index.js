#!/usr/bin/env node

const path = require("path")
const cac = require('cac')
const chalk = require('chalk')
const download = require('download-git-repo')
const { version } = require('../package.json')

const cli = cac('create-ep-app')

cli
    .command('[out-dir]', 'Generate in a custom directory or current directory')
    .action((outDir = '.') =>{
        console.log()
        console.log(chalk`{cyan create-ep-app v${version}}`)
        console.log(chalk`✨  Generating Nuxt.js SSR template project in {cyan ${outDir}}`)
    })

cli.help()

cli.version(version)
cli.parse()
