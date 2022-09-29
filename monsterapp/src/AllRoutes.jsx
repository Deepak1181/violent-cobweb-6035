import React from 'react'
import { Link, Route, Routes} from "react-router-dom"
import Login from './Component/Login';
import Home from './Component/Home';
import Register from './Component/Register';
import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import { Container,HStack } from '@chakra-ui/react'
import Navbaar from './Component/Navbaar';
export default function AllRoutes() {
  return (
    <div>
    
       <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
   
  </Box>
 
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
