import { useState, useEffect} from "react"
import {Link, Navigate, useNavigate} from "react-router-dom"
import axios from "axios"
import { Table, TableHead, TableBody, TableCell, TableRow, Button} from "@mui/material";
import { getallappointment } from "../API/appointments";
import PrivateRoute from "../Component/PrivateRoute";
import { ROUTES } from "../constants";




const Admin=()=>{

const [appointmentssss, setAppointmentssss]=useState([])
const navigate=useNavigate()


const getallappointments=async()=>{

    try{
            const {data}= await getallappointment()

            setAppointmentssss(data)

    }catch(e){

            console.log(e)
    }
     
}

useEffect(()=>{

            getallappointments()

        }, [])
    
        
        const deleteUser = async (id) => {
try{
             await axios.delete("http://localhost:8070/appointment/delete/appointments/" +id)
      
}catch(e){
             console.log(e);

}
          };
        
    
    return <PrivateRoute>
        <Button onClick={()=>navigate(ROUTES.ADMIN_MESSAGES)} variant="contained">Messages</Button>
     <div className="p-5">

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Surname</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Actions</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {appointmentssss.map(as=> <TableRow key={as._id}>
                    <TableCell>{as.name}</TableCell>
                    <TableCell>{as.surname}</TableCell>
                    <TableCell>{as.email}</TableCell>
                    <TableCell>{as.status}</TableCell>
                    <TableCell><Link
                    to={`/update/` + as._id}
                    type="button"
                    class="btn btn-info"
                  >Update
                    <i class="fa-solid fa-pen-to-square"></i>
                  </Link>
                </TableCell>
                <TableCell><button
                    onClick={() => deleteUser(as._id)}
                    type="button"
                    class="btn btn-danger"
                  >Delete
                    <i class="fa-solid fa-trash"></i>
                  </button></TableCell>
                </TableRow>)}
            </TableBody>
        </Table>

    </div>

    </PrivateRoute>
}

export default Admin