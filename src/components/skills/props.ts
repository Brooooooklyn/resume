import { SkillProps } from './skill.component'

const content = require('./skills_zh.md')

const props: {
  zh: SkillProps
  en: Partial<SkillProps>
} = {
  zh: {
    title: '技能',
    content
  },
  en: {
    title: 'Skill'
  }
}

export default props
