import { TextField, Button } from "@mui/material"
import logo19 from "../logo19.png"
import { useState } from "react"
import axios from "axios"

const Kontakt=()=>{

    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [purpose, setPurpose]=useState("")
    const [yourmessage, setYourmessage]=useState("")
    const userID=localStorage.getItem("userID")


    const onsubmit=async(e)=>{

        e.preventDefault()

        try{
                    await axios.post("http://localhost:8070/messages/message", {name, email, purpose, yourmessage, userID})

        }catch(e){

        }
    }


    return <div className="h-full flex ml-40 mt-40 mr-40 ">
        <div className="w-1/2">

            <h1 className="text-3xl">ŠIRBEGOVIĆ STOMATOLOGIJA</h1>
            <h2 className="pt-5">Telefon: 062176318</h2>
            <h2 className="pt-3">Email: hajdarpasicharun61@gmail.com</h2>
            <h2 className="pt-3">Adresa: Zmaja Od Bosne</h2>
            <h2 className="pt-3">Sarajevo, 71000</h2>
            <img className="pt-3" src={logo19}/>

        </div>

<div className="w-1/2 flex flex-col gap-3">

            <TextField value={name} onChange={(e)=>setName(e.target.value)} label="Ime i prezime"/>
            <TextField value={email} onChange={(e)=>setEmail(e.target.value)} label="Email"/>
            <TextField value={purpose} onChange={(e)=>setPurpose(e.target.value)} label="Svrha"/>
            <TextField value={yourmessage} onChange={(e)=>setYourmessage(e.target.value)} label="Vasa poruka"/>
            <Button onClick={onsubmit} variant="contained">Posalji</Button>

 </div>

    </div>
}

export default Kontakt