import { Modal, TableContainer, Table, TableHead, TableBody, TableCell, TableRow} from "@mui/material";
import axios from "axios"
import { useEffect, useState } from "react";
import { getappointment } from "../API/appointments";



const MyAppointments=({open, handleClose})=>{

    const [appointments, setAppointments]=useState([])

    const getAppointments=async()=>{

try{

    const {data}=await getappointment()

    console.log()

    setAppointments(data)

}catch(e){

    console.log(e?.message)

}

    }

    useEffect(()=>{

    getAppointments()

    }, [])


    return <Modal className="flex justify-center items-center " open={open}>

    <div className="bg-white w-1/2  h-1/2 flex  flex-col gap-3 p-2 rounded-3xl">

<h1 className="border-b-4 uppercase text-xl pb-5 pt-2 ">Moje rezervacije</h1>

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Surname</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {appointments.map(a=> <TableRow key={a.id}>
                    <TableCell>{a.name}</TableCell>
                    <TableCell>{a.surname}</TableCell>
                    <TableCell>{a.email}</TableCell>
                    <TableCell>{a.status}</TableCell>
                </TableRow>)}
            </TableBody>
        </Table>
    </div>
    
        </Modal>
    
}

export default MyAppointments