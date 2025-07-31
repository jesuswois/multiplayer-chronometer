import React, { useEffect } from 'react'
import '../styles/actions.css'
import { DBFunctions } from '../utils/chronometerFunctions'

export default function ({ id, state, timer }) {
    const handleAction = (action) => {
        switch (action) {
            // Pause
            case 0:
                DBFunctions.setStatus(id, action)
            // Play
            case 1:
                // En caso de ser la primera vez que se inicia...
                if (!DBFunctions.getValue(`${id}/startTime`)) return DBFunctions.startTimer(id, Date.now())
                // En caso de ya haber sido iniciado anteriormente..
                DBFunctions.changeStatus(id,action,Date.now(),timer)
                break;

                break;
            // Stop
            case 2:
                DBFunctions.setStatus(id, action)
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
                        <button disabled={state == 1 || state == 2} onClick={() => DBFunctions.setStatus(id, 1)} className='action-btn'>Play</button>
                        <button disabled={state == 0 || state == 2} onClick={() => DBFunctions.setStatus(id, 0)} className='action-btn'>Pause</button>
                        <button disabled={state == 2} onClick={() => DBFunctions.setStatus(id, 2)} className='action-btn'>Stop</button>
                    </>
                )}
            </div>) : (
            <div>Loading actions...</div>
        ))
    )
}