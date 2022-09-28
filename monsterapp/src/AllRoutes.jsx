import React from 'react'
import { Link, Route, Routes} from "react-router-dom"
import Login from './Component/Login';
import Home from './Component/Home';
import Register from './Component/Register';
import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import { Container,HStack } from '@chakra-ui/react'
export default function AllRoutes() {
  return (
    <div>
       <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
   
  </Box>
  <Heading size='md'><img src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg" alt="" /></Heading>
  <Spacer/>
  
  <HStack>
  
    <Link to="/">Home</Link>
    <Link to="/Register">Register</Link>
    <Link to="/Login">Login</Link>
  </HStack>

</Flex>
       

        <Routes>
           <Route path='/' element={<Home/>}> </Route> 
           <Route path='/Register' element={<Register/>}> </Route> 
           <Route path='/Login' element={<Login/>}> </Route> 
        </Routes>
        
        
        {/* usenavigate */}


    </div>
  )
}
