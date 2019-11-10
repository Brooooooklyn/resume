import styled from '@emotion/styled'

export const HeaderWrapper = styled.div({
  marginTop: '50px',
  minWidth: '380px',
})

export const Name = styled.h1({
  margin: '5px 0',
  fontSize: '32px',
})

export const HeaderInfoWrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '94%',
  left: '3%',
  position: 'relative',
})

export const HeaderInfo = styled.div({
  width: '40%',
  display: 'flex',
  padding: '2.5px 0',
  '.icon': {
    height: '20px',
    '&::before': {
      position: 'relative',
      top: '2px',
    },
  },
})

export const headerInfoContentStyles = {
  lineHeight: '20px',
  color: 'gray',
  fontSize: '14px',
  marginLeft: '10px',
}

export const HeaderInfoContent = styled.a(headerInfoContentStyles)

export const HeaderInfoContentSpan = styled.span(headerInfoContentStyles)
