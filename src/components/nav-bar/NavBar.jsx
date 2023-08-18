// eslint-disable-next-line no-unused-vars
import React from 'react'
import './navBar.scss'

import AssistantOutlinedIcon from '@mui/icons-material/AssistantOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <a href="#">Elazzouzi H.</a>
      </div>
      <div className="menu">
        <ul>
          <li><a href="#"><AssistantOutlinedIcon/>Blog</a></li>
          <li><a href="#"><TerminalOutlinedIcon/>Code</a></li>
          <li><a href="#"><WorkspacePremiumOutlinedIcon/>Resume</a></li>
          <li><a href="#"><PeopleAltOutlinedIcon/>Social</a></li>
        </ul>
      </div>
      <div className="actioon">
        <a href="#">let's Talk</a>
      </div>
    </div>
  )
}

export default NavBar