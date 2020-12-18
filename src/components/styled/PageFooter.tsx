import React from 'react'
import { useTranslation } from 'react-i18next'
import { Typography, Box } from '@material-ui/core'
import styled from 'styled-components'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Text variant="h6">{t('Footer.version')}</Text>
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

const Text = styled(Typography)`
  color: white;
`
