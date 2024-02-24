import React, { memo } from 'react'

const NavBar = ({title,num}) => {
    console.log('I am Rendered')
  return (
    <div>NavBar {title}  and {num}</div>
  )
}

export default memo(NavBar)