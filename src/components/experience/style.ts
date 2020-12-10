import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const CompanyName = styled.span({
  fontSize: '20px',
  fontWeight: 'bold',
  paddingRight: '5px',
})

export const CompanyWrapper = styled.div({
  padding: '5px 0',
})

export const ExperienceWrapper = styled.section({
  marginTop: '20px',
  minWidth: '380px',
})

export const Title = styled.div({
  display: 'flex',
  span: {
    marginLeft: '10px',
  },
})

export const TitleContent = styled.span({
  marginLeft: '10px',
})

export const Body = styled.div({
  marginTop: '10px',
})

export const ExperienceBody = styled.div({
  padding: '5px 20px',
})

export const WorkTitle = styled.span({
  marginLeft: '15px',
  fontSize: '14px',
  fontStyle: 'italic',
})

export const WorkTime = styled.span({
  float: 'right',
  fontSize: '14px',
  marginRight: '10px',
})

export const experienceGlobalStyle = css({
  '.experience-block': {
    marginTop: '10px',

    p: {
      display: 'flex',
      padding: '5px 0',
    },
  },

  '.experience-sub-title': {
    fontWeight: 700,
  },

  '.experience-sub-time': {
    fontStyle: 'italic',
    fontSize: '12px',
    marginLeft: '20px',
  },
})
