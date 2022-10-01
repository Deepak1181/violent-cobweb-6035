import React from 'react'
import {VStack,Heading, HStack,Button, Spacer,Box, Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption, MenuDivider} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

export default function Navbaar() {
  return (
    <div style={{display:"flex",flexWrap:"wrap",
   
    gap:"10px",
    marginLeft:"000px",
    marginTop:"20px"
    
    }}>

<Heading size='md' marginRight="200px">
    <Link to="/" >
    <img src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg" alt="" /></Link>
</Heading>
  <h5><Menu closeOnSelect={false}>
  <MenuButton as={Button}  colorScheme='blue' border="none" >
    JOB SEARCH
  </MenuButton>
  <MenuList minWidth='150px' zIndex={300}>
    <MenuOptionGroup defaultValue='asc' type='radio'>
      <MenuItemOption value='asc'>Job By Location</MenuItemOption>
      <MenuItemOption value='desc'>Job By Skill</MenuItemOption>
    {/* </MenuOptionGroup>
   
    <MenuOptionGroup title='Country' type='checkbox'> */}
      <MenuItemOption value='email'>Job By Title</MenuItemOption>
      <MenuItemOption value='phone'>Job By Function</MenuItemOption>
      <MenuItemOption value='country'>Job By Industry</MenuItemOption>
      <MenuItemOption value='edu'>Job By Education</MenuItemOption>
      <MenuItemOption value='fres'>Fresher Jobs</MenuItemOption>
      <MenuItemOption value='other'> Other Job </MenuItemOption>
      <MenuItemOption value='com'> Job by Company </MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu></h5>



<h5><Menu closeOnSelect={true}>
  <MenuButton as={Button}  colorScheme='blue'  border="none">
    WORK FROM HOME
  </MenuButton>
  <MenuList minWidth='150px' zIndex={300}>
    <MenuOptionGroup defaultValue='asc' type='radio'>
      <MenuItemOption value='asc'>Job By Location</MenuItemOption>
      <MenuItemOption value='desc'>Job By Skill</MenuItemOption>
    {/* </MenuOptionGroup>
   
    <MenuOptionGroup title='Country' type='checkbox'> */}
      <MenuItemOption value='email'>Job By Title</MenuItemOption>
      <MenuItemOption value='phone'>Job By Function</MenuItemOption>
      <MenuItemOption value='country'>Job By Industry</MenuItemOption>
      <MenuItemOption value='edu'>Job By Education</MenuItemOption>
      <MenuItemOption value='fres'>Fresher Jobs</MenuItemOption>
      <MenuItemOption value='country'> Other Job </MenuItemOption>
      <MenuItemOption value='com'> Job by Company </MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu></h5>




  <h5><Menu closeOnSelect={false}>
  <MenuButton as={Button} colorScheme='blue' border="none">
   CAREER TIPS
  </MenuButton>
  <MenuList minWidth='150px' zIndex={300}>
    <MenuOptionGroup defaultValue='asc' type='radio'>
      <MenuItemOption value='Bang'>Covid 19 CAREER ADVICE</MenuItemOption>
      <MenuItemOption value='Del'>Job Search Stratery</MenuItemOption>
      <MenuItemOption value='Hyd'>Resume And Cover Letter </MenuItemOption>
      <MenuItemOption value='Noi'>Interview Tips</MenuItemOption>
      <MenuItemOption value='pun'>Carrer Management </MenuItemOption>
      <MenuItemOption value='chen'>Salary Negotiations</MenuItemOption>
      <MenuItemOption value='gur'>Courses</MenuItemOption>
  
    </MenuOptionGroup>
  </MenuList>
</Menu></h5>





<h5><Menu closeOnSelect={false}>
  <MenuButton as={Button} colorScheme='blue' border="none" _hover={{bg:"yellow"}}>
  PREMIUM SERVICE
  </MenuButton>
  <MenuList minWidth='200px' zIndex={300}>
    <MenuOptionGroup defaultValue='asc' type='radio'>
      <MenuItemOption value='Bang'>Freture Profile</MenuItemOption>
      <MenuItemOption value='Del'>Profile Highliter</MenuItemOption>
      <MenuItemOption value='Hyd'>Carear Booster </MenuItemOption>
      <MenuItemOption value='Noi'>Resume writing</MenuItemOption>
      <MenuItemOption value='pun'>Linkedin Makeover </MenuItemOption>
      <MenuItemOption value='chen'>Mock Interview</MenuItemOption>
      <MenuItemOption value='gur'>Talk to us</MenuItemOption>
  
    </MenuOptionGroup>
  </MenuList>
</Menu></h5>
  
  

  <HStack style={{
     marginTop:"-15px",
  }}>
     
    {/* <Link to="/">Home</Link> */}
  <Box _hover={{bg:"yellow"}}>  <Link to="/Register" >JOB SEEKER</Link></Box>
  <Box  _hover={{bg:"yellow"}}>  <Link to="/Login">LOGIN</Link></Box>
  </HStack>

    </div>
  )
}



