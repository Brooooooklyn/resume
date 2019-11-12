import React from 'react'
import { Mail, Link, Phone, Github, Zhihu, Wechat } from '@ant-design/icons'
import {
  HeaderWrapper,
  Name,
  HeaderInfoWrapper,
  HeaderInfo,
  HeaderInfoContent,
  HeaderInfoContentSpan,
} from './style'

export interface HeaderProps {
  name: string
  email: string
  site: string
  phone: string
  github: {
    name: string
    url: string
  }
  zhihu: {
    name: string
    url: string
  }
  wechat: string
}

export class Header extends React.PureComponent<HeaderProps> {
  render() {
    return (
      <HeaderWrapper>
        <Name>{this.props.name}</Name>
        <hr />
        <HeaderInfoWrapper>
          <HeaderInfo>
            <Mail />
            <HeaderInfoContent href="mailto:lynweklm@gmail.com">
              {this.props.email}
            </HeaderInfoContent>
          </HeaderInfo>
          <HeaderInfo>
            <Link />
            <HeaderInfoContent href={this.props.site} target="_blank">
              {this.props.site}
            </HeaderInfoContent>
          </HeaderInfo>
          <HeaderInfo>
            <Phone />
            <HeaderInfoContent href="tel:+86-018516508691">
              {this.props.phone}
            </HeaderInfoContent>
          </HeaderInfo>
          <HeaderInfo>
            <Github />
            <HeaderInfoContent href={this.props.github.url} target="_blank">
              {this.props.github.name}
            </HeaderInfoContent>
          </HeaderInfo>
          <HeaderInfo>
            <Zhihu />
            <HeaderInfoContent href={this.props.zhihu.url} target="_blank">
              {this.props.zhihu.name}
            </HeaderInfoContent>
          </HeaderInfo>
          <HeaderInfo>
            <Wechat />
            <HeaderInfoContentSpan>{this.props.wechat}</HeaderInfoContentSpan>
          </HeaderInfo>
        </HeaderInfoWrapper>
      </HeaderWrapper>
    )
  }
}
