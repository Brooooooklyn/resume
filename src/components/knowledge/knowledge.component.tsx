import React from 'react'
import { ReadOutlined as Read } from '@ant-design/icons'

import { KnowledgeWrapper, Content, KnowledgeWrap, Title } from './style'

export interface KnowledgeProps {
  title: string
  content: string
}

export class Knowledge extends React.PureComponent<KnowledgeProps> {
  render() {
    const inner = {
      __html: this.props.content,
    }
    return (
      <KnowledgeWrapper>
        <KnowledgeWrap>
          <Read />
          <Title>{this.props.title}</Title>
        </KnowledgeWrap>
        <hr />
        <Content dangerouslySetInnerHTML={inner} />
      </KnowledgeWrapper>
    )
  }
}
