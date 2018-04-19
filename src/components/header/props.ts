import { HeaderProps } from './index'

const props: {
  zh: HeaderProps
  en: HeaderProps
} = {
  zh: {
    name: '龙逸楠',
    email: 'lynweklm@gmail.com',
    site: 'http://lynvv.xyz',
    phone: '(+86) 17621988985',
    github: {
      name: 'Brooooooklyn',
      url: 'https://github.com/Brooooooklyn',
    },
    zhihu: {
      name: '太狼',
      url: 'https://www.zhihu.com/people/Broooooklyn',
    },
    wechat: 'lynweklm',
  },
  get en() {
    return {
      ...this.zh,
      name: 'Yinan Long',
    }
  },
}

export default props
