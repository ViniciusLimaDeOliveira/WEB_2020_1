import React from 'react'

export default props=><div>{
    <div className="card border-dark text-white bg-info  mb-3" style={{ float: 'inline-end', width: "18rem"}}>
    <div className="card-header">
        <h1>Heroi</h1>
    </div>
        <p className="card-text" >
        <img className="card-img-top" src={props.img} alt="Hero"></img>
            <h2>{props.name}</h2> 
            <h2>{props.arena}</h2>
        </p>
    </div>
    }</div>