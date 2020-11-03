import { SkillProps } from './skill.component'

const content = require('./skills_zh.md')

const props: {
  zh: SkillProps
  en: SkillProps
} = {
  zh: {
    title: '技能',
    content,
  },
  get en() {
    return {
      ...this.zh,
      title: 'Skill',
    }
  },
}

export default props
