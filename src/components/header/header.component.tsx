import { FC, memo } from 'react'
import {
  WechatFilled as Wechat,
  MailOutlined as Mail,
  GithubOutlined as Github,
  PhoneOutlined as Phone,
  LinkOutlined as Link,
  ZhihuOutlined as Zhihu,
} from '@ant-design/icons'
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

export const Header: FC<HeaderProps> = memo((props) => (
  <HeaderWrapper>
    <Name>{props.name}</Name>
    <hr />
    <HeaderInfoWrapper>
      <HeaderInfo>
        <Mail />
        <HeaderInfoContent href="mailto:lynweklm@gmail.com">
          {props.email}
        </HeaderInfoContent>
      </HeaderInfo>
      <HeaderInfo>
        <Link />
        <HeaderInfoContent href={props.site} target="_blank">
          {props.site}
        </HeaderInfoContent>
      </HeaderInfo>
      <HeaderInfo>
        <Phone />
        <HeaderInfoContent href="tel:+86-018516508691">
          {props.phone}
        </HeaderInfoContent>
      </HeaderInfo>
      <HeaderInfo>
        <Github />
        <HeaderInfoContent href={props.github.url} target="_blank">
          {props.github.name}
        </HeaderInfoContent>
      </HeaderInfo>
      <HeaderInfo>
        <Zhihu />
        <HeaderInfoContent href={props.zhihu.url} target="_blank">
          {props.zhihu.name}
        </HeaderInfoContent>
      </HeaderInfo>
      <HeaderInfo>
        <Wechat />
        <HeaderInfoContentSpan>{props.wechat}</HeaderInfoContentSpan>
      </HeaderInfo>
    </HeaderInfoWrapper>
  </HeaderWrapper>
))
