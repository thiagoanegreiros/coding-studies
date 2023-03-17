
const fs = require('fs')
const path = require('path')

const map = new Map()

const readLines = (input, proccessEndLine) => {
    let remaining = ''
  
    input.on('data', (data) => {
      remaining += data
      let index = remaining.indexOf('\n')
      while (index > -1) {
        let line = remaining.substring(0, index)
        remaining = remaining.substring(index + 1)
        proccessEndLine(line)
        index = remaining.indexOf('\n')
      }
    });
  
    input.on('end', () => {
      if (remaining.length > 0) {
        proccessEndLine(remaining)
      }

      writeFileEnd()
    });
  }

const proccessEndLine = (data) => {
    const host = data.split(' ')[0]
    map.set(host, (map.get(host) ?? 0) + 1)
}

const writeFileEnd = () => {
    const hosts = [...map.keys()].sort()
    const data = hosts.reduce((fileContent, host) => {
        return `${fileContent}${host} ${map.get(host)}\n`
    }, "")
    fs.writeFileSync(path.resolve(__dirname, 'output.txt'), data)
}

const input = fs.createReadStream(path.resolve(__dirname, 'input.txt'))
readLines(input, proccessEndLine);