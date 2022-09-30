import React from 'react'
import {VStack,Heading, HStack,Button, Spacer, Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption, MenuDivider} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import Homefirst from './Homefirst'
import HomeSlider from './HomeSlider'
import Home2 from './Home2'


export default function Home() {
  return (
    <>
<Homefirst/>
<Home2/>
</>
  )
}
