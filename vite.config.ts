import path from 'path'
import { ConfigEnv, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import DefineOptions from "unplugin-vue-define-options/vite";
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import VueJsx from "@vitejs/plugin-vue-jsx";
import server from "./vite.server"

const CWD = process.cwd()

export default ({ mode }: ConfigEnv): UserConfig => {
  // const { VITE_BASE_URL } = loadEnv(mode, CWD)

  return {
    // base: VITE_BASE_URL, // 设开发或生产环境服务的 公共基础路径
    assetsInclude: ['**/*.gltf'],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element/index.scss" as *;`
        }
      }
    },
    plugins: [
      vue(),
      VueJsx(),
      DefineOptions(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      })
    ],
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      outDir: path.resolve(__dirname, "dist"),
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          inlineDynamicImports: false,
          manualChunks: {
            "modules-vue": ["vue", "vue-router", "vuex"]
          }
        }
      }
    },
    server,
    optimizeDeps: {
      include: ['element-plus/lib/locale/lang/zh-cn', 'element-plus/lib/locale/lang/en']
    }
  }
}
