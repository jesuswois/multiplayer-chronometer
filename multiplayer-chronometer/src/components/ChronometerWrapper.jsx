import React, { useEffect, useState } from 'react'
import Timer from './Timer'
import Actions from './Actions'
import * as db from 'firebase/database'
import { database } from "../config/firebaseConfig";
import { useParams } from 'react-router-dom';

export default function ChronometerWrapper() {
    // Params
    const {id} = useParams()

    //States
    const [timer,setTimer] = useState(0)
    const [state, setState] = useState(-2)

    // Initial Mount
    useEffect(() => {
        let time
        // Firebase Chronometer Listener
        const query = db.query(db.ref(database,`${id}`))
        const unsuscribe = db.onValue(query, (ss) => {
            const value = ss.val()
            console.log("entered")
            // Si el cronometro tiene un startTime establecido (ya ha sido iniciado)
            if(value?.startTime){
                const lastStatus = value.lastStatus
                // Esta en progreso
                setTimer(Date.now()-lastStatus.timestamp+lastStatus.progress)
                if(lastStatus.status==1){
                    time=setInterval(()=>{
                        setTimer(Date.now()-lastStatus.timestamp+lastStatus.progress)
                    },10)
                }
                setState(value.lastStatus.status)
            } else{setState(-1)}
        })

        // Runners listener...
        /*
        ...ref(database,`lastRunners`)
        */
        return () => unsuscribe();clearInterval(time);
    }, [id])

    return (
        <>
            <div className="timer-wrapper">
                <Timer time={timer}/>
            </div>
            <Actions time={timer} id={id} state={state} setState={setState} />
        </>
    )
}
