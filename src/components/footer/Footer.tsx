import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Typography, Box } from '@material-ui/core'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Title variant="h6">{t('Footer.version')}</Title>
    </Wrapper>
  )
}
export default Footer

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3f51b5;
  padding: 10px;
`

const Title = styled(Typography)`
  color: white;
`
