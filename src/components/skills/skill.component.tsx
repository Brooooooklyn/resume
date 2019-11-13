import React from 'react'
import { SkillWrapper, TitleWrapper, Title, Content } from './style'
import { Star } from '@ant-design/icons'

export interface SkillProps {
  title: string
  content: string
}

export class Skill extends React.PureComponent<SkillProps> {
  render() {
    const inner = {
      __html: this.props.content,
    }
    return (
      <SkillWrapper>
        <TitleWrapper>
          <Star />
          <Title>{this.props.title}</Title>
        </TitleWrapper>
        <hr />
        <Content dangerouslySetInnerHTML={inner} />
      </SkillWrapper>
    )
  }
}
