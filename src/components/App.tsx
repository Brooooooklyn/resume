import { FC, memo } from 'react'
import { Header, headerProps } from './header'
import { Experience, experienceProps } from './experience'
import { Skill, skillProps } from './skills'
import { EducationComponent, educationProps } from './education'
import { Knowledge, knowledgeProps } from './knowledge'
import { Lang } from '../globalState'

interface AppProps {
  lang: Lang
}

export const App: FC<AppProps> = memo((props) => {
  return (
    <div>
      <Header {...headerProps[props.lang]} />
      <Experience {...experienceProps[props.lang]} />
      <Skill {...skillProps[props.lang]} />
      <Knowledge {...knowledgeProps[props.lang]} />
      <EducationComponent {...educationProps[props.lang]} />
    </div>
  )
})
