import React from 'react'
import { Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { container, line } from './slideTemplate.module.scss'

const slideTemplate = ({ quantityLines, justify = '', alignItems = '' }) => {
  const lines = Array.from({ length: quantityLines })
  const style = { justifyContent: justify, alignItems }

  return (
    <Link to="/main/create">
      <Box className={container} style={style}>
        {lines.map((l, i) => (
          <Box key={i} className={line} />
        ))}
      </Box>
    </Link>
  )
}

export default slideTemplate
