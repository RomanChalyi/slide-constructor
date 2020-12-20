import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Box } from '@material-ui/core'

type Props = {
  quantityLines: number,
  justify?: string,
  alignItems?: string,
  type: string,
}

const slideTemplate = ({ quantityLines, justify = '', alignItems = '', type }: Props) => {
  const lines = Array.from({ length: quantityLines })
  const style = { justifyContent: justify, alignItems }
  const link = `/main/create/${type.toLowerCase()}`

  return (
    <Link to={link}>
      <Container style={style}>
        {lines.map((l, i) => (
          <Line key={i} />
        ))}
      </Container>
    </Link>
  )
}

export default slideTemplate

const Container = styled(Box)`
  height: 200px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  background: black;
  border-radius: 5px;
  margin: 5px;
`

const Line = styled(Box)`
  width: 55%;
  height: 12px;
  margin-bottom: 10px;
  margin-left: 10px;
  border-radius: 5px;
  background-color: #aca6a6;
`
