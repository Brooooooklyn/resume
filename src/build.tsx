import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'
import globalState, { Lang } from './globalState'
import 'tb-icons/lib/styles/tb-icons'
const styles = require('./style.module')

const $root = document.getElementById('root') as HTMLElement

$root.setAttribute('class', styles.root)

const render = (Component: any, lang: Lang) => {
  ReactDOM.render(<Component lang={ lang }/>, $root)
}

render(App, globalState.lang as Lang)
