import React from 'react'
import { Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { container, line } from './slideTemplate.module.scss'

const slideTemplate = ({ quantityLines, justify = '', alignItems = '', type }) => {
  const lines = Array.from({ length: quantityLines })
  const style = { justifyContent: justify, alignItems }
  const link = `/main/create/${type.toLowerCase()}`

  return (
    <Link to={link}>
      <Box className={container} style={style}>
        {lines.map((l, i) => (
          <Box key={i} className={line} />
        ))}
      </Box>
    </Link>
  )
}

export default slideTemplate
