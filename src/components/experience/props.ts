import { ExperienceProps } from './experience.component'

const zhContents = require('./experience_zh.md').split('==split==')

const props: {
  zh: ExperienceProps,
  en: Partial<ExperienceProps>
} = {
  zh: {
    title: '工作经历',
    companies: [
      {
        name: 'Teambition',
        time: '2015.2 ~ 2016.6',
        title: '前端实习',
        content: zhContents[0]
      },
      {
        name: 'Teambition',
        time: '2016.7 ~ 2016.12',
        title: '前端工程师',
        content: zhContents[1]
      },
      {
        name: 'Teambition',
        time: '2017.1 ~ 2017.6',
        title: '高级前端工程师',
        content: zhContents[2]
      }
    ]
  },
  en: {
    title: 'Experience'
  }
}

export default props
