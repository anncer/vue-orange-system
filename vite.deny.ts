
import fs from 'fs'

const basePath = process.cwd()+ '/.git'

const fileNames = <any>[]

const getFileNameFromDir = (path) => {
  const files = fs.readdirSync(path)
  files.forEach(f => {
    const p = path + '/' + f
    const stat = fs.lstatSync(p)
    const isDir = stat.isDirectory()
    if (isDir){
      getFileNameFromDir(p)
    } else {
      if (!f.includes('.sample')) {
        fileNames.push(f)
      }
    }
  })
}

getFileNameFromDir(basePath)

const deny = [
  '.env',
  '.env.*',
  '*.{crt,pem}',
  '.eslintrc*',
  '.editorconfig',
  '.gitignore',
  '.npmrc',
  '.prettierrc',
  'Dockerfile',
  'nginx.*',
  'tsconfig*',
  '*.sample',
]

const newArr:any = Array.from(new Set(deny.concat(fileNames)));
export default newArr
