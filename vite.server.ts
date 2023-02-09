import deny from './vite.deny'

export default {
  port: 3000,
  cors: false,
  fs: {
    strict: true,
    deny
  },
  proxy: {

    '/api/rules/regulations': {
      target: "http://10.122.165.27:8080",
      changeOrigin: true,
      secure: false,
      // eslint-disable-next-line no-shadow
      rewrite: (path) => path.replace('/api/rules/regulations', '')
    },
    '/api/fs':{
      target: "http://10.28.89.10:8765",
      changeOrigin: true
    },
    //之前的综合管理的接口
    '/api/admin': {
        target: "http://10.28.89.10:8765",
        changeOrigin: true,
        secure: false,
        // eslint-disable-next-line no-shadow
        // rewrite: (path) => path.replace('/api', '')
    },
    '/api/application': {
      // target: "http://10.122.165.27:30717",
      target: "http://10.122.164.203:8020",
      changeOrigin: true,
      secure: false,
      // eslint-disable-next-line no-shadow
      rewrite: (path) => path.replace('/api/application', '')
    }
  }
}
