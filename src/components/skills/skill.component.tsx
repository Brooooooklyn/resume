import { FC, memo } from 'react'
import { SkillWrapper, TitleWrapper, Title, Content } from './style'
import { StarOutlined as Star } from '@ant-design/icons'

export interface SkillProps {
  title: string
  content: string
}

export const Skill: FC<SkillProps> = memo((props) => {
  const inner = {
    __html: props.content,
  }
  return (
    <SkillWrapper>
      <TitleWrapper>
        <Star />
        <Title>{props.title}</Title>
      </TitleWrapper>
      <hr />
      <Content dangerouslySetInnerHTML={inner} />
    </SkillWrapper>
  )
})
