import React from 'react'
import HumanSvg from 'tb-icons/lib/svgs/human.svg'

import { Education, TitleWrap, Content, Title } from './style'

export interface EducationProps {
  title: string
  content: string
}

export class EducationComponent extends React.PureComponent<EducationProps> {
  render() {
    const inner = {
      __html: this.props.content,
    }
    return (
      <Education>
        <TitleWrap>
          <HumanSvg />
          <Title>{this.props.title}</Title>
        </TitleWrap>
        <hr />
        <Content dangerouslySetInnerHTML={inner} />
      </Education>
    )
  }
}
