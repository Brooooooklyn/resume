import React from 'react'
import { HeaderWrapper, Name, HeaderInfoWrapper, HeaderInfo, HeaderInfoContent, HeaderInfoContentSpan } from './style'

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
            <i className="icon icon-envelope" />
            <HeaderInfoContent href="mailto:lynweklm@gmail.com">
              {this.props.email}
            </HeaderInfoContent>
          </HeaderInfo>
          <HeaderInfo>
            <i className="icon icon-rss" />
            <HeaderInfoContent
              href={this.props.site}
              target="_blank"
            >
              {this.props.site}
            </HeaderInfoContent>
          </HeaderInfo>
          <HeaderInfo>
            <i className="icon icon-phone" />
            <HeaderInfoContent href="tel:+86-018516508691">
              {this.props.phone}
            </HeaderInfoContent>
          </HeaderInfo>
          <HeaderInfo>
            <i className="icon icon-github" />
            <HeaderInfoContent
              href={this.props.github.url}
              target="_blank"
            >
              {this.props.github.name}
            </HeaderInfoContent>
          </HeaderInfo>
          <HeaderInfo>
            <i className="icon icon-zhihu" />
            <HeaderInfoContent
              href={this.props.zhihu.url}
              target="_blank"
            >
              {this.props.zhihu.name}
            </HeaderInfoContent>
          </HeaderInfo>
          <HeaderInfo>
            <i className="icon icon-wechat" />
            <HeaderInfoContentSpan>{this.props.wechat}</HeaderInfoContentSpan>
          </HeaderInfo>
        </HeaderInfoWrapper>
      </HeaderWrapper>
    )
  }
}
