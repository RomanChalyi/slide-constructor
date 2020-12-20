import React from 'react'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'

import Link from '@material-ui/core/Link'
import { List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'

import navbarLinks from '../../lib/navbarLinks'

type Props = {
  toggleDrawer: (isOpen: boolean) => () => void,
}

const HeaderList = ({ toggleDrawer }: Props) => (
  <Wrapper onClick={toggleDrawer(false)}>
    <List>
      {navbarLinks.map((item) => (
        <Link key={item.name} to={item.path} component={LinkR} color="inherit">
          <ListItem button>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        </Link>
      ))}
    </List>
    <Divider />
    <List>
      <Link
        href="http://lword.org/%d0%b2%d0%b5%d1%80%d0%be%d1%83%d1%87%d0%b5%d0%bd%d0%b8%d0%b5/"
        color="inherit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary={'Living Word'} />
        </ListItem>
      </Link>
    </List>
  </Wrapper>
)

export default HeaderList

const Wrapper = styled.div`
  padding: 0px 5px;
`
