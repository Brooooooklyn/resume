import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
// AppContainer is a necessary wrapper component for HMR
import App from './components/App'
import globalState, { Lang } from './globalState'
import 'tb-icons/lib/styles/tb-icons'
const styles = require('./style.module')

const $root = document.getElementById('root') as HTMLElement

$root.setAttribute('class', styles.root)

const render = (Component: any, lang: Lang) => {
  ReactDOM.render(
    <AppContainer>
      <Component lang={lang} />
    </AppContainer>,
    $root,
  )
}

render(App, globalState.lang as Lang)

if (process.env.NODE_ENV === 'development')
  if (module.hot) {
    // Hot Module Replacement API
    module.hot.accept('./components/App', () => {
      render(App, globalState.lang as Lang)
    })
  }
