import React, { useState } from 'react'
import {VStack,Heading,Text,Grid,GridItem,FormControl,FormLabel,Input,Textarea,Select,Button,Center,Box,state,setter} from "@chakra-ui/react"

import { navigate,useNavigate } from 'react-router-dom'
const initstate={
  Name:"",
  Email:"",
  Password:"",
  Mobile:"",
  Location:"",
  Skill:"",
  Experience:"",
  Industry:"",

}


export default function Register() {



  const [formdatas,setformdatas] =useState(initstate)
   const navigate=useNavigate()
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setformdatas({...formdatas,[name]:value})

  }
console.log(formdatas)

const handleClick=()=>{
  
  let registeredUser =JSON.parse(localStorage.getItem("registeredUser")) || [];

  registeredUser.push(formdatas);
  localStorage.setItem("registeredUser", JSON.stringify(registeredUser));

 navigate("/Login")
// console.log(initstate)

}

  // const{Name,Email,Password,Mobile,Experience,Industry,Skill,Location}=formdatas

  return (
    <div>
        
        <h1>Register</h1>
<Center>
        <Box w={"150px"}>
<GridItem rowSpan={1} colSpan={{base:2,md:1}} >


<FormControl isRequired>
<FormLabel>First Name</FormLabel>
<Input w={"300px"} type="text" 
 placeholder='First name'
  //  value={formdatas.Name}
   name="Name"
   onChange={handleChange}
   />
</FormControl>


</GridItem>


<GridItem rowSpan={1} colSpan={{base:2,md:1}} >


<FormControl isRequired>
<FormLabel>Email id</FormLabel>
<Input w={"300px"} type="text" 
 placeholder='Email id'
//  value={Email}
 name="Email"
 onChange={handleChange}
   />
</FormControl>


</GridItem>


<GridItem rowSpan={1} colSpan={{base:2,md:1}} >


<FormControl isRequired>
<FormLabel>Password</FormLabel>
<Input w={"300px"} type="text" 
 placeholder='Password'
//  value={Password}
 name="Password"
 onChange={handleChange}
   />
</FormControl>


</GridItem>




<GridItem rowSpan={1} colSpan={{base:2,md:1}} >


<FormControl isRequired>
<FormLabel>Mobile No</FormLabel>
<Input w={"300px"} type="text" 
 placeholder=' Enter Mobile No'
//  value={Mobile}
 name="Mobile"
 onChange={handleChange}
   />
</FormControl>


</GridItem>



 <GridItem rowSpan={1} colSpan={{base:2,md:1}} >


<FormControl isRequired>
<FormLabel>Current Location</FormLabel>
<Input w={"300px"} type="text" 
 placeholder='Enter Current Location'
//  value={Location}
 name="Location"
 onChange={handleChange}
  
   />
</FormControl>
</GridItem>


<GridItem rowSpan={1} colSpan={{base:2,md:1}} >
<FormControl isRequired>
<FormLabel>Skill</FormLabel>
<Input w={"300px"} type="text" 
 placeholder='Enter Your Skill'
  // value={Skill}
  namke="Skill"
  onChange={handleChange}
   />
</FormControl>
</GridItem>
 

<GridItem rowSpan={1} colSpan={{base:2,md:1}} >
<FormControl isRequired>
<FormLabel>Total Experience</FormLabel>
<Input w={"300px"} type="text" 
 placeholder='Enter Your Experience'
//  value={Experience}
 name="Experience"
 onChange={handleChange}
   />
</FormControl>
</GridItem>



<GridItem rowSpan={1} colSpan={{base:2,md:1}} >
<FormControl isRequired>
<FormLabel>Preferred Industry </FormLabel>
<Input w={"300px"} type="text" 
 placeholder='Enter Your Preferred Industry '
//  value={Industry}
 name="Industry"
 onChange={handleChange}
   />
</FormControl>
</GridItem>
 
<GridItem colSpan={2} >
  <FormControl isRequired>
  
  <Button w="300px" variant='solid' 
                    // mt={"30px"}
                    // bg="#57b228"
                    // color={"white"}
                    // fontSize={"20px"}
                    // padding="25px"
                    marginLeft={"350px"} onClick={handleClick}>Registred</Button>
</FormControl>
  </GridItem>


</Box>
</Center>
    </div>
  )
}
