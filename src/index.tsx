import { Global } from '@emotion/react'
import * as ReactDOM from 'react-dom'

import { App } from './components/App'
import globalState, { Lang } from './globalState'
import { globalStyles } from './style'

const $root = document.getElementById('root') as HTMLElement

export const render = (Component: any, lang: Lang) => {
  ReactDOM.hydrate(
    <>
      <Global styles={globalStyles} />
      <Component lang={lang} />
    </>,
    $root,
  )
}

render(App, globalState.lang as Lang)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    // Hot Module Replacement API
    module.hot.accept('./components/App', () => {
      render(App, globalState.lang as Lang)
    })
  }
}
