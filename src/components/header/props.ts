import { HeaderProps } from './index'

const props: {
  zh: HeaderProps
  en: HeaderProps
} = {
  zh: {
    name: '龙逸楠',
    email: 'lynweklm@gmail.com',
    site: 'https://lynvv.xyz',
    phone: process.env.IS_PUBLIC ? 'xxxxxxxxxxx' : '17621988985',
    github: {
      name: 'Brooooooklyn',
      url: 'https://github.com/Brooooooklyn',
    },
    zhihu: {
      name: '太狼',
      url: 'https://www.zhihu.com/people/Broooooklyn',
    },
    wechat: process.env.IS_PUBLIC ? 'xxxxxxxx' : 'lynweklm',
  },
  get en() {
    return {
      ...this.zh,
      name: 'Yinan Long',
    }
  },
}

export default props
