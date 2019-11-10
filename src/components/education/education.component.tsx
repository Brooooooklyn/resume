import React from 'react'

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
          <i className="icon icon-human" />
          <Title>{this.props.title}</Title>
        </TitleWrap>
        <hr />
        <Content dangerouslySetInnerHTML={inner} />
      </Education>
    )
  }
}
