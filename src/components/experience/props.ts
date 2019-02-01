import { ExperienceProps } from './experience.component'

const zhContents = require('./experience_zh.md').split('==split==')

const props: {
  zh: ExperienceProps
  en: ExperienceProps
} = {
  zh: {
    title: '工作经历',
    companies: [
      {
        name: 'Teambition',
        time: '2015.2 ~ 2017.6',
        title: '高级前端工程师',
        content: zhContents[0],
        url: 'https://www.teambition.com',
      },
      {
        name: 'Musical.ly',
        time: '2017.6 ~ 2017.9',
        title: '前端架构师',
        content: zhContents[1],
        url: 'https://musical.ly',
      },
      {
        name: 'ARKIE',
        time: '2017.9 ~ 2018.6',
        title: 'Node 架构师',
        content: zhContents[2],
        url: 'https://www.arkie.cn',
      },
      {
        name: 'LeetCode 中国',
        time: '2018.6 ~ now',
        title: '前端架构师、基础服务负责人',
        content: zhContents[3],
        url: 'https://leetcode-cn.com',
      },
    ],
  },
  get en() {
    return {
      ...this.zh,
      title: 'Experience',
    }
  },
}

export default props
