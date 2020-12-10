import { FC, memo } from 'react'
import { ReadOutlined as Read } from '@ant-design/icons'

import { KnowledgeWrapper, Content, KnowledgeWrap, Title } from './style'

export interface KnowledgeProps {
  title: string
  content: string
}

export const Knowledge: FC<KnowledgeProps> = memo((props) => {
  const inner = {
    __html: props.content,
  }
  return (
    <KnowledgeWrapper>
      <KnowledgeWrap>
        <Read />
        <Title>{props.title}</Title>
      </KnowledgeWrap>
      <hr />
      <Content dangerouslySetInnerHTML={inner} />
    </KnowledgeWrapper>
  )
})
