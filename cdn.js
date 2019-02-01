const { execSync } = require('child_process')
const COS = require('cos-nodejs-sdk-v5')
const readdir = require('readdir-enhanced')
const fs = require('fs')
const { join } = require('path')

const cos = new COS({
  SecretId: 'AKIDb6RdfVgg1Vdijavj171To12sbCe0cGE2',
  SecretKey: 'xjRGyYzIROBVnxFQFzoaO4k3hJ0wunfa',
})

const promisifyPut = (file) =>
  new Promise((resolve, reject) => {
    const absPath = join(process.cwd(), 'dist', file)
    cos.putObject(
      {
        Bucket: 'socialapp-1255337004',
        Region: 'ap-shanghai',
        Key: file,
        ContentLength: fs.statSync(absPath).size,
        Body: fs.createReadStream(absPath),
      },
      (err, data) => {
        if (err) {
          return reject(err)
        }
        if (data && data.statusCode === 200) {
          resolve(data)
        } else {
          reject(data)
        }
      },
    )
  })

execSync('scp -r ./dist/** yinan@35.220.180.201:/app/resume/')

readdir('./dist', { deep: true })
  .then((files) => {
    const fileLists = files.filter(
      (f) =>
        !fs.statSync(join(process.cwd(), 'dist', f)).isDirectory() &&
        f !== 'index.html',
    )
    return Promise.all(fileLists.map((file) => promisifyPut(file)))
  })
  .then((data) => {
    console.info(data)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
