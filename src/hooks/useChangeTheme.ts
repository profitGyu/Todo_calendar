import store from 'storejs'

import { useRecoilState } from 'recoil'
import { themeState } from 'states/theme'

const useChangeTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState)

  const themeChange = () => {
    const backgroundTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(backgroundTheme)
    document.documentElement.setAttribute('background-theme', backgroundTheme)
    store.set('background-theme', backgroundTheme)
  }

  return { themeChange }
}

export default useChangeTheme
