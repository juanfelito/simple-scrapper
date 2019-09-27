const fs = require('fs')

module.exports = (data, id) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`outputFiles/${id}.html`, data, (err) => {
      if (err) reject(err)
      console.log('Artifact created successfully')
      resolve()
    })
  })
}
