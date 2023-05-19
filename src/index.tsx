import { Global } from '@emotion/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './components/App'
import globalState, { Lang } from './globalState'
import { globalStyles } from './style'

const $root = createRoot(document.getElementById('root') as HTMLElement)

export const render = (Component: any, lang: Lang) => {
  $root.render(
    <>
      <Global styles={globalStyles} />
      <StrictMode>
        <Component lang={lang} />
      </StrictMode>
    </>,
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
