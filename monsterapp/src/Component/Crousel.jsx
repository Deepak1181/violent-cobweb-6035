import { Button } from "@chakra-ui/react";
import "./Crousel.css";


function Crousel(){

    return(
        <>
            <div id="mon1">
                <img src="https://media.monsterindia.com/trex/public/default/images/cs-banner-budge-2.png" alt="" />
                <div>
                    <h1> Get your profile to rank on top of recruiter searches</h1>
                    <p> To get 5x more recruiter views on your profile </p>
                </div>
                <div >
                    <Button id= "monbtn" >Get now</Button>
                </div>
            </div>
        </>
    )
}
export default Crousel