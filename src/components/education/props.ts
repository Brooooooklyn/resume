import { EducationProps } from './education.component'

const contentZh = require('./education_zh.md')

const props: {
  zh: EducationProps
  en: Partial<EducationProps>
} = {
  zh: {
    title: '教育经历',
    content: contentZh
  },
  en: {
    title: 'Education'
  }
}

export default props
