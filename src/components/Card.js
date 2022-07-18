import React from "react";

import '../styles/Card.css'

import {BsFillTelephoneFill,BsFillCheckCircleFill,BsFillXCircleFill} from "react-icons/bs";

const Card = ({CompleteName, tel, id, agregarContacto,recargarDatos})=>{  
    
    return(
        <div className="card-container">

            <div className="data-container">
                <div className="name-container">
                    <h1>{CompleteName}</h1>
                </div>
                <div className="data-data-container1">

                    <p className="data3"><BsFillTelephoneFill/> {tel}</p>
                </div>
                
            </div>
            <div className="button-container">
                <button className="button1" onClick={()=> agregarContacto()}><BsFillCheckCircleFill/></button>
                <button className="button2" onClick={()=>  recargarDatos()}><BsFillXCircleFill/></button>
            </div>
            
        </div>
    )
}

export default Card;