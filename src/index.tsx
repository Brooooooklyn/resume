import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Global } from '@emotion/core'
// AppContainer is a necessary wrapper component for HMR
import App from './components/App'
import globalState, { Lang } from './globalState'
import 'tb-icons/lib/styles/tb-icons'
import { globalStyles } from './style'

const $root = document.getElementById('root') as HTMLElement

const render = (Component: any, lang: Lang) => {
  ReactDOM.render(
    (
      <>
        <Global styles={globalStyles} />
        <Component lang={lang} />
      </>
    ),
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
