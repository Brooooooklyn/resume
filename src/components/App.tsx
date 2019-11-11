import React from 'react'
import { Header, headerProps } from './header'
import { Experience, experienceProps } from './experience'
import { Skill, skillProps } from './skills'
import { EducationComponent, educationProps } from './education'
import { Knowledge, knowledgeProps } from './knowledge'
import { Lang } from '../globalState'

interface AppProps {
  lang: Lang
}

export default class extends React.PureComponent<AppProps> {
  render() {
    return (
      <div>
        <Header {...headerProps[this.props.lang]} />
        <Experience {...experienceProps[this.props.lang]} />
        <Skill {...skillProps[this.props.lang]} />
        <Knowledge {...knowledgeProps[this.props.lang]} />
        <EducationComponent {...educationProps[this.props.lang]} />
      </div>
    )
  }
}
