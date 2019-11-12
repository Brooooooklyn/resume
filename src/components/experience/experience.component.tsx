import React from 'react'
import { Global } from '@emotion/core'
import TieSvg from 'tb-icons/lib/svgs/tie.svg'
import {
  Body,
  CompanyName,
  CompanyWrapper,
  ExperienceWrapper,
  Title,
  ExperienceBody,
  WorkTitle,
  WorkTime,
  TitleContent,
  experienceGlobalStyle,
} from './style'

export interface ExperienceProps {
  title: string
  companies: {
    name: string
    time: string
    title: string
    content: string
    url: string
  }[]
}

export class Experience extends React.PureComponent<ExperienceProps> {
  render() {
    return (
      <ExperienceWrapper>
        {this.renderTitle()}
        <hr />
        {this.renderBody()}
      </ExperienceWrapper>
    )
  }

  private renderTitle() {
    return (
      <Title>
        <TieSvg />
        <TitleContent>{this.props.title}</TitleContent>
      </Title>
    )
  }

  private renderBody() {
    const bodys = this.props.companies.reverse().map((data, i) => {
      const inner = {
        __html: data.content || '',
      }
      return (
        <div key={i}>
          <Global styles={experienceGlobalStyle} />
          <CompanyWrapper>
            <a href={data.url} target="_blank">
              <CompanyName>{data.name}</CompanyName>
            </a>
            <WorkTitle>{data.title}</WorkTitle>
            <WorkTime>{data.time}</WorkTime>
          </CompanyWrapper>
          <ExperienceBody>
            <div dangerouslySetInnerHTML={inner} />
          </ExperienceBody>
        </div>
      )
    })
    return <Body>{bodys}</Body>
  }
}
