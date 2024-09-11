import { useEffect, useState } from "react"
import axios from "axios"
import { Table, TableHead, TableBody, TableCell, TableRow, Button} from "@mui/material";
import Response from "./Response"

const AdminMessages=()=>{

const [allmessages, setAllmessages]=useState([])

const [ismodalopened, setIsmodalopened]=useState(false)

const getallmessages=async()=>{

try{

        const response=await axios.get("http://localhost:8070/messages/allmessages")
        setAllmessages(response.data)
    
}catch(e){

        console.log(e)

}



}
useEffect(()=>{

         getallmessages()

    },[])


return <div className="p-5">

   <Table>
       <TableHead>
           <TableRow>
               <TableCell>Name</TableCell>
               <TableCell>Email</TableCell>
               <TableCell>Svrha</TableCell>
               <TableCell>Poruka</TableCell>
               <TableCell>Actions</TableCell>
           </TableRow>
       </TableHead>
<TableBody>
    {allmessages.map(ms=> <TableRow key={ms._id}>
        <TableCell>{ms.name}</TableCell>
               <TableCell>{ms.email}</TableCell>
               <TableCell>{ms.purpose}</TableCell>
               <TableCell>{ms.yourmessage}</TableCell>
               <TableCell><Button onClick={()=>setIsmodalopened(true)}>Odgovori</Button></TableCell>
    </TableRow>)}
</TableBody>
   </Table>
   <Response open={ismodalopened} handleClose={setIsmodalopened}/>

</div>


}

export default AdminMessages