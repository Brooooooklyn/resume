import { FC, memo } from 'react'
import HumanSvg from 'tb-icons/lib/svgs/human.svg'

import { Education, TitleWrap, Content, Title } from './style'

export interface EducationProps {
  title: string
  content: string
}

export const EducationComponent: FC<EducationProps> = memo((props) => {
  const inner = {
    __html: props.content,
  }
  return (
    <Education>
      <TitleWrap>
        <HumanSvg />
        <Title>{props.title}</Title>
      </TitleWrap>
      <hr />
      <Content dangerouslySetInnerHTML={inner} />
    </Education>
  )
})
