import { atom } from 'recoil'
import store from 'storejs'

const getBackgroundTheme = () => {
  let backgroundTheme = store.get('background-theme')

  if (!backgroundTheme) {
    backgroundTheme = 'dark'
    store.set('background-theme', backgroundTheme)
  }

  return backgroundTheme
}

const initialState = getBackgroundTheme()

export const themeState = atom({
  key: '#themeState',
  default: initialState,
})
