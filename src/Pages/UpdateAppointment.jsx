import { TextField, Button } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import PrivateRoute from "../Component/PrivateRoute"

const UpdateAppointment=()=>{

    const [status, setStatus]=useState("")
    const {id}=useParams()

    const submitForm = async (e) => {

        e.preventDefault();
try{

        await axios.put(`http://localhost:8070/appointment/update/appointments/` +id, {status})

}catch(e){

}
    }


return <PrivateRoute>
<div className="flex items-center justify-center h-full">
<div className=" flex flex-col items-center justify-center rounded-3xl">
 <h1>Update Appointment</h1>

 <TextField value={status} onChange={(e)=>setStatus(e.target.value)} label="status"/>

 <Button onClick={submitForm} variant="contained">Update</Button>
 </div>

</div>
</PrivateRoute>
}

export default UpdateAppointment