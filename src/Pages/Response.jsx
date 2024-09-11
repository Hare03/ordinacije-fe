import { Modal, TextField, Button} from "@mui/material";
import { useState } from "react";
import axios from "axios"


const Response=({open, handleClose})=>{

const [email, setEmail]=useState("")
const [odgovori, setOdgovori]=useState("")

const onsubmit=async(e)=>{
    
    e.preventDefault()

    try{

               await axios.post("http://localhost:8070/messages/response", {email, odgovori})

    }catch(e){

    }
}


    return <Modal open={open} className="flex justify-center items-center">

<div className="flex justify-center items-center bg-white w-1/2 h-1/2">

<TextField label="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
<TextField label="Odgovori" value={odgovori} onChange={(e)=>setOdgovori(e.target.value)}/>
<Button onClick={onsubmit}>Posalji</Button>


</div>


    </Modal>
}

export default Response