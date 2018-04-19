import React from 'react'
import { Header, headerProps } from './header'
import { Experience, experienceProps } from './experience'
import { Skill, skillProps } from './skills'
import { EducationComponent, educationProps } from './education'
import { Lang } from '../globalState'

import './App.css'

interface AppProps {
  lang: Lang
}

export default class extends React.PureComponent<AppProps> {
  render() {
    const _headerProps = headerProps[this.props.lang]
    const _experienceProps = experienceProps[this.props.lang]
    const _skillProps = skillProps[this.props.lang]
    const _educationProps = educationProps[this.props.lang]
    return (
      <div>
        <Header {..._headerProps} />
        <Experience {..._experienceProps} />
        <Skill {..._skillProps} />
        <EducationComponent {..._educationProps} />
      </div>
    )
  }
}
