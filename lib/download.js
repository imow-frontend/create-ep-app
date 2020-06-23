const download = require('download-git-repo');
const chalk = require('chalk')

const {template} = require('../package.json');

module.exports = function (target = 'template') {
    return new Promise((resolve, reject) => {
        download(template, target, (err) => {
            if(err) {
                reject(err)
            } else {
                resolve(target)
            }
        });
    })
};
