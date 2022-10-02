import { Box, Button, Flex, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react'
import React from 'react'



function Homefirst() {
    const basicBoxStyles = {
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   textAlign: 'center',
    marginLeft:"20px",
      boxSize: '550px',
      width:"100%",
      height:"300px",
      color: 'white',
      textShadow: '0 0 20px black',
      fontWeight: 'bold',
      fontSize: '20px',
      px: 4,
      background:
        'url(https://imgs.search.brave.com/9RVbgazAs85sjMkJHh4k5VCG5IuMpyuzrqPPyNmeDfw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/c1pmVUk4X3llaHph/Y1puS2xoWTBRSGFF/byZwaWQ9QXBp) center/cover no-repeat',
    }






    return (

        <div>

         
              <Flex flexWrap='wrap' gap='24px' justifyContent='space-evenly'>
        {/* adding filter property to the element */}
      
        <Box sx={basicBoxStyles} filter='grayscale(90%)' >
        <h1 style={{marginRight:"950px"}}>500,000+ Jobs.Find Better.Fast</h1>

        <div style={{display:'flex' ,marginTop:"5px", marginLeft:"0px"}}>
     <h5><Menu closeOnSelect={true}>
  <MenuButton as={Button}  colorScheme='blue' border="none" marginLeft="10px" >
    All Jobs
  </MenuButton>
  <MenuList minWidth='200px' color="black">
    <MenuOptionGroup defaultValue='asc' type='radio' >
      <MenuItemOption value='asc'>Job By Location</MenuItemOption>
      <MenuItemOption value='desc'>Job By Skill</MenuItemOption>

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
  <MenuButton as={Button}  colorScheme='blue' border="none" marginLeft="10px" >
    Work From Home
  </MenuButton>
  <MenuList minWidth='200px' color="black">
    <MenuOptionGroup defaultValue='asc' type='radio'>
      <MenuItemOption value='asc'>Job By Location</MenuItemOption>
      <MenuItemOption value='desc'>Job By Skill</MenuItemOption>

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
  <MenuButton as={Button}  colorScheme='blue' border="none" marginLeft="10px" >
    Contract Jobs
  </MenuButton>
  <MenuList minWidth='200px' color="black">
    <MenuOptionGroup defaultValue='asc' type='radio'>
      <MenuItemOption value='asc'>Job By Location</MenuItemOption>
      <MenuItemOption value='desc'>Job By Skill</MenuItemOption>

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
  <MenuButton as={Button}  colorScheme='blue' border="none" marginLeft="10px" >
    Fresher Jobs
  </MenuButton>
  <MenuList minWidth='200px' color="black">
    <MenuOptionGroup defaultValue='asc' type='radio'>
      <MenuItemOption value='asc'>Job By Location</MenuItemOption>
      <MenuItemOption value='desc'>Job By Skill</MenuItemOption>

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


     
</div>
<div style={{width:"40%"  ,marginBottom:"490px"}}>
<input style={{width:"85%", marginTop:"20px",marginLeft:"-11px" ,color:"black"}} type="text" placeholder='Search by Skill, Company , Job Title' />
<Button style={{backgroundColor:"black",}}>Search</Button>
<p>Trending Searches:     Jobs in Delhi, Jobs in Mumbai,  Jobs in Bangalore, Jobs in Chennai, Jobs in Pune, Jobs in Kolkata, </p>
</div>
        </Box>
        
      </Flex>

      
      </div>
    )
  }
  
  







// export default function Homefirst() {
//   return (
//     <div>
 


//     <h1 style={{marginLeft:"-650px"}}>500,000+ jobs. Find Better.Faster</h1>
//     <div>
    
   
    
            
//      <h5><Menu closeOnSelect={true}>
//       <MenuButton as={Button}  colorScheme='blue' >
//         JOB SEARCH
//       </MenuButton>
//       <MenuList minWidth='200px'>
//         <MenuOptionGroup defaultValue='asc' type='radio'>
//           <MenuItemOption value='asc'>Job By Location</MenuItemOption>
//           <MenuItemOption value='desc'>Job By Skill</MenuItemOption>
//         {/* </MenuOptionGroup>
       
//         <MenuOptionGroup title='Country' type='checkbox'> */}
//           <MenuItemOption value='email'>Job By Title</MenuItemOption>
//           <MenuItemOption value='phone'>Job By Function</MenuItemOption>
//           <MenuItemOption value='country'>Job By Industry</MenuItemOption>
//           <MenuItemOption value='edu'>Job By Education</MenuItemOption>
//           <MenuItemOption value='fres'>Fresher Jobs</MenuItemOption>
//           <MenuItemOption value='other'> Other Job </MenuItemOption>
//           <MenuItemOption value='com'> Job by Company </MenuItemOption>
//         </MenuOptionGroup>
//       </MenuList>
//     </Menu></h5>
    
    
    
//     <h5><Menu closeOnSelect={true}>
//       <MenuButton as={Button}  colorScheme='blue' >
//         WORK FROM HOME
//       </MenuButton>
//       <MenuList minWidth='200px'>
//         <MenuOptionGroup defaultValue='asc' type='radio'>
//           <MenuItemOption value='asc'>Job By Location</MenuItemOption>
//           <MenuItemOption value='desc'>Job By Skill</MenuItemOption>
//         {/* </MenuOptionGroup>
       
//         <MenuOptionGroup title='Country' type='checkbox'> */}
//           <MenuItemOption value='email'>Job By Title</MenuItemOption>
//           <MenuItemOption value='phone'>Job By Function</MenuItemOption>
//           <MenuItemOption value='country'>Job By Industry</MenuItemOption>
//           <MenuItemOption value='edu'>Job By Education</MenuItemOption>
//           <MenuItemOption value='fres'>Fresher Jobs</MenuItemOption>
//           <MenuItemOption value='country'> Other Job </MenuItemOption>
//           <MenuItemOption value='com'> Job by Company </MenuItemOption>
//         </MenuOptionGroup>
//       </MenuList>
//     </Menu></h5>
    
    
    
    
//       <h5><Menu closeOnSelect={false}>
//       <MenuButton as={Button} colorScheme='blue'>
//        CAREER TIPS
//       </MenuButton>
//       <MenuList minWidth='200px'>
//         <MenuOptionGroup defaultValue='asc' type='radio'>
//           <MenuItemOption value='Bang'>Covid 19 CAREER ADVICE</MenuItemOption>
//           <MenuItemOption value='Del'>Job Search Stratery</MenuItemOption>
//           <MenuItemOption value='Hyd'>Resume And Cover Letter </MenuItemOption>
//           <MenuItemOption value='Noi'>Interview Tips</MenuItemOption>
//           <MenuItemOption value='pun'>Carrer Management </MenuItemOption>
//           <MenuItemOption value='chen'>Salary Negotiations</MenuItemOption>
//           <MenuItemOption value='gur'>Courses</MenuItemOption>
      
//         </MenuOptionGroup>
//       </MenuList>
//     </Menu></h5>
            
//         </div>
    
//         </div>
//   )
// }


export default Homefirst