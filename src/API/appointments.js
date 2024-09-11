import axios from "axios"

export const getappointment=()=>{

    const userID=localStorage.getItem("userID")
    if(!userID) throw new Error("User doesnt exist")
    return axios.get("http://localhost:8070/appointment/" + userID)
    
    
    }

    export const getallappointment=()=>{
       return axios.get("http://localhost:8070/appointment//getall/appointments")
    }

