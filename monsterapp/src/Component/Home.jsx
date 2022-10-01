import React from 'react'
import {VStack,Heading, HStack,Button, Spacer, Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption, MenuDivider} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import Homefirst from './Homefirst'
import HomeSlider from './HomeSlider'
import Home2 from './Home2'
import Footer from './Footer'
import Crousel from './Crousel'
import Left from './Left'


export default function Home() {
  return (
    <div>
<Homefirst/>
      <div style={{display:"flex"}}>
<div>

<Crousel/>
<Home2/>
</div>

<div>
  <Left/>
</div>

</div>


</div>
  )
}
