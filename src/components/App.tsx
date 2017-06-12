import React from 'react'
import { Header, headerProps } from './header'
import { Experience, experienceProps } from './experience'
import { Lang } from '../globalState'

interface AppProps {
  lang: Lang
}

export default class extends React.PureComponent<AppProps, void> {
  render() {
    const _headerProps = headerProps[this.props.lang]
    const _experienceProps = experienceProps[this.props.lang]
    return (
      <div>
        <Header { ..._headerProps } />
        <Experience { ..._experienceProps } />
      </div>
    )
  }
}
