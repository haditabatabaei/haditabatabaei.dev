const { exec } = require('node:child_process');

(async function start() {
    function execPromise(...args) {
        return new Promise((resolve, reject) => {
            exec(...args, (err, stdout, stderr) => {
                if(err) {
                    return reject({ err, stderr })
                }

                resolve(stdout)
            })
        })
    }

    const [
        _1,
        _2,
        message
    ] = process.argv

    const result = await execPromise('git status')

    if(result.includes('no changes added to commit')) {
        console.log('No new changes to release.')
        return
    }

    await execPromise('yarn generate')
    await execPromise('git add .')
    await execPromise(`git commit -m "deploy: ${message || 'New Version'}"`)
    await execPromise('git push origin master')
})()