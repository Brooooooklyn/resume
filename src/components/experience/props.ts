import { ExperienceProps } from './experience.component'

import CNContents from './experience_zh.md'

const cnContents = CNContents.split('==split==')

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
        content: cnContents[0],
        url: 'https://www.teambition.com',
      },
      {
        name: 'Musical.ly',
        time: '2017.6 ~ 2017.9',
        title: '前端架构师',
        content: cnContents[1],
        url: 'https://musical.ly',
      },
      {
        name: 'ARKIE',
        time: '2017.9 ~ 2018.6',
        title: 'Node 架构师',
        content: cnContents[2],
        url: 'https://www.arkie.cn',
      },
      {
        name: 'LeetCode 中国',
        time: '2018.6 ~ 2020.2',
        title: '合伙人、App 负责人、基础服务负责人',
        content: cnContents[3],
        url: 'https://leetcode-cn.com',
      },
      {
        name: 'ByteDance Web infra',
        time: '2020.2 ~ 2022.1',
        title: '高级工程师',
        content: cnContents[4],
        url: 'https://perfsee.com',
      },
      {
        name: 'Vercel',
        time: '2022.1 ~ 2023.3',
        title: 'Software Engineer',
        content: cnContents[5],
        url: 'https://vercel.com',
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
