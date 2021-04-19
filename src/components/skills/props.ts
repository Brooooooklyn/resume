import { SkillProps } from './skill.component'

import content from './skills_zh.md'

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
