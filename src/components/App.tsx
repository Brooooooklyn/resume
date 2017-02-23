import React from 'react'
import Header from './header'
import { Lang } from '../globalState'
import HeaderProps from './header/props'

interface AppProps {
  lang: Lang
}

export default class extends React.PureComponent<AppProps, void> {
  render() {
    const headerProps = HeaderProps[this.props.lang]
    return (
      <div>
        <Header { ...headerProps }></Header>
      </div>
    )
  }
}
