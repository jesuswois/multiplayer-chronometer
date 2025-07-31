import React, { useEffect } from 'react'
import '../styles/actions.css'
import { DBFunctions } from '../utils/chronometerFunctions'

export default function ({ id, state, time }) {
    const handleAction = (action) => {
        switch (action) {
            // Pause
            case 0:
                DBFunctions.changeStatus(id, action,Date.now(),time)
            // Play
            case 1:
                try{

                DBFunctions.getValue(`${id}/startTime`).then((response)=>{
                    // En caso de ser la primera vez que se inicia...
                    console.log(response.val())
                    if(!response.val()){
                        return DBFunctions.startTimer(id, Date.now())
                    }
                    // En caso de ya haber sido iniciado anteriormente...
                    DBFunctions.changeStatus(id,action,Date.now(),time)
                })}catch(err){console.log(err)}
                break;
            // Stop
            case 2:
                DBFunctions.changeStatus(id, action,Date.now(),time)
                break;
        }
    }
    return (
        (state != -2 ? (
            <div className='btns-wrapper'>
                {state == 2 ? (
                    <>
                        <h1>FINISHED!</h1>
                    </>
                ) : (
                    <>
                        <button disabled={state == 1 || state == 2} onClick={() => handleAction(1)} className='action-btn'>Play</button>
                        <button disabled={state == 0 || state == 2} onClick={() => handleAction(0)} className='action-btn'>Pause</button>
                        <button disabled={state == 2} onClick={() => handleAction(2)} className='action-btn'>Stop</button>
                    </>
                )}
            </div>) : (
            <div>Loading actions...</div>
        ))
    )
}