import { ref, watchEffect } from "vue"
import cookie from 'auth-cookie'
import { themeCache } from '@/constants'

const DEFAULT_THEME_NAME = "light"
type DefaultThemeNameType = typeof DEFAULT_THEME_NAME

/** 注册的主题名称 */
export type ThemeName = DefaultThemeNameType | "dark"

interface IThemeList {
  title: string
  name: ThemeName
}

/** 主题列表 */
const themeList: IThemeList[] = [
  {
    title: "默认",
    name: DEFAULT_THEME_NAME
  },
  {
    title: "黑暗",
    name: "dark"
  },
]

/** 正在应用的主题名称 */
const activeThemeName = ref<ThemeName>(cookie.get(themeCache) || DEFAULT_THEME_NAME)

const setTheme = (value: ThemeName) => {
  activeThemeName.value = value
}

/** 在 html 根元素上挂载 class */
const setHtmlClassName = (value: ThemeName) => {
  document.documentElement.className = value
}

const initTheme = () => {
  watchEffect(() => {
    const value = activeThemeName.value
    setHtmlClassName(value)
    cookie.set(themeCache ,value)
  })
}

/** 主题 hook */
export function useTheme() {
  return { themeList, activeThemeName, initTheme, setTheme }
}
